import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imageDir = path.join(root, 'img');
const backupPath = path.join(root, 'data', 'products.backup.json');
const manifestPath = path.join(root, 'data', 'image-migration-manifest.json');
const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, '');
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
const bucket = 'product-images';
const keepLocal = new Set(['leairlogos.png', 'khamrah.png', 'scandal.png', 'yara.png', 'thank.png', 'mandarin.png']);
const aliases = new Map([
    ['romepourfemme.png', 'Romepour.png'],
    ['givemgourmandvanillafreak.png', 'GivMGourmandVanillaFreak.png']
]);

if (!supabaseUrl || !serviceKey) {
    console.error('Define SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en esta terminal.');
    process.exit(1);
}
if (serviceKey.startsWith('sb_publishable_')) {
    throw new Error('La clave configurada es publishable. Usa service_role (eyJ...) o una Secret key (sb_secret_...).');
}

// Las claves legacy service_role son JWT y admiten Authorization Bearer.
// Las nuevas sb_secret_* se autentican exclusivamente mediante apikey.
const serviceHeaders = serviceKey.startsWith('sb_secret_')
    ? { apikey:serviceKey }
    : { apikey:serviceKey, Authorization:`Bearer ${serviceKey}` };

const products = JSON.parse(await readFile(backupPath, 'utf8'));
const files = await readdir(imageDir);
const actualNames = new Map(files.map(name => [name.toLowerCase(), name]));
const sourceFor = image => {
    const alias = aliases.get(image.toLowerCase());
    return alias ?? actualNames.get(image.toLowerCase());
};
const localImages = [...new Set(products.map(product => product.image).filter(image => image && !/^https?:\/\//i.test(image)))];
const missing = localImages.filter(image => !sourceFor(image));
if (missing.length) throw new Error(`Faltan imagenes locales: ${missing.join(', ')}`);

const mimeTypes = new Map([['.jpg','image/jpeg'],['.jpeg','image/jpeg'],['.png','image/png'],['.webp','image/webp'],['.gif','image/gif']]);
const remoteByOriginal = new Map();
const uploadedBySource = new Map();

async function runLimited(items, worker, limit = 8) {
    let cursor = 0;
    const runners = Array.from({ length:Math.min(limit, items.length) }, async () => {
        while (cursor < items.length) await worker(items[cursor++]);
    });
    await Promise.all(runners);
}

await runLimited(localImages, async original => {
    const source = sourceFor(original);
    if (uploadedBySource.has(source.toLowerCase())) {
        remoteByOriginal.set(original, uploadedBySource.get(source.toLowerCase()));
        return;
    }
    const extension = path.extname(source).toLowerCase();
    const safeBase = path.basename(source, extension).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
    const objectPath = `catalog/${safeBase}${extension}`;
    const encodedPath = objectPath.split('/').map(encodeURIComponent).join('/');
    const response = await fetch(`${supabaseUrl}/storage/v1/object/${bucket}/${encodedPath}`, {
        method:'POST',
        headers:{ ...serviceHeaders, 'Content-Type':mimeTypes.get(extension) ?? 'application/octet-stream', 'x-upsert':'true' },
        body:await readFile(path.join(imageDir, source))
    });
    if (!response.ok) throw new Error(`No se pudo subir ${source}: ${response.status} ${await response.text()}`);
    const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${encodedPath}`;
    uploadedBySource.set(source.toLowerCase(), publicUrl);
    remoteByOriginal.set(original, publicUrl);
    console.log(`Subida: ${source}`);
});

const migrated = products.map(product => ({
    ...product,
    image:/^https?:\/\//i.test(product.image) ? product.image : remoteByOriginal.get(product.image)
}));

await runLimited(migrated, async product => {
    const response = await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${product.id}`, {
        method:'PATCH',
        headers:{ ...serviceHeaders, 'Content-Type':'application/json', Prefer:'return=minimal' },
        body:JSON.stringify({ image:product.image })
    });
    if (!response.ok) throw new Error(`No se pudo actualizar el producto ${product.id}: ${response.status} ${await response.text()}`);
});

const verification = await fetch(`${supabaseUrl}/rest/v1/products?select=id,image&order=id.asc`, {
    headers:serviceHeaders
});
if (!verification.ok) throw new Error(`No se pudo verificar la base: ${await verification.text()}`);
const remoteProducts = await verification.json();
const invalid = remoteProducts.filter(product => !/^https:\/\//i.test(product.image));
if (remoteProducts.length !== products.length || invalid.length) {
    throw new Error(`Verificacion fallida: ${remoteProducts.length} filas, ${invalid.length} imagenes no remotas.`);
}

await writeFile(backupPath, `${JSON.stringify(migrated, null, 2)}\n`, 'utf8');
await writeFile(manifestPath, `${JSON.stringify({
    migratedAt:new Date().toISOString(),
    productCount:migrated.length,
    localFiles:[...new Set(localImages.map(sourceFor))],
    keepLocal:[...keepLocal]
}, null, 2)}\n`, 'utf8');

console.log(`Migracion verificada: ${migrated.length} productos y ${uploadedBySource.size} imagenes en Storage.`);
console.log('Ya puedes ejecutar cleanup-catalog-images.mjs --confirm.');
