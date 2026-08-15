import { readFile, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

if (!process.argv.includes('--confirm')) {
    console.error('Operacion cancelada. Ejecuta nuevamente agregando --confirm.');
    process.exit(1);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imageDir = path.resolve(root, 'img');
const manifest = JSON.parse(await readFile(path.join(root, 'data', 'image-migration-manifest.json'), 'utf8'));
const keep = new Set(manifest.keepLocal.map(name => name.toLowerCase()));
const targets = manifest.localFiles.filter(name => !keep.has(name.toLowerCase()));

for (const name of targets) {
    const target = path.resolve(imageDir, name);
    if (path.dirname(target) !== imageDir) throw new Error(`Ruta insegura rechazada: ${name}`);
    await unlink(target);
    console.log(`Eliminada: img/${name}`);
}

console.log(`Limpieza completada: ${targets.length} imagenes del catalogo eliminadas; ${keep.size} imagenes estructurales conservadas.`);
