import { readFile } from "node:fs/promises";

const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

if (!supabaseUrl || !serviceRoleKey) {
    console.error("Define SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY antes de ejecutar la migracion.");
    process.exit(1);
}
if (serviceRoleKey.startsWith("sb_publishable_")) {
    throw new Error("La clave configurada es publishable. Usa service_role (eyJ...) o una Secret key (sb_secret_...).");
}

const serviceHeaders = serviceRoleKey.startsWith("sb_secret_")
    ? { apikey:serviceRoleKey }
    : { apikey:serviceRoleKey, Authorization:`Bearer ${serviceRoleKey}` };

const backup = await readFile(new URL("../data/products.backup.json", import.meta.url), "utf8");
const products = JSON.parse(backup);

if (!Array.isArray(products) || products.length === 0) {
    throw new Error("El catalogo local esta vacio o no es valido.");
}

const batchSize = 100;
for (let offset = 0; offset < products.length; offset += batchSize) {
    const batch = products.slice(offset, offset + batchSize).map(product => ({
        ...product,
        active: true
    }));

    const response = await fetch(`${supabaseUrl}/rest/v1/products?on_conflict=id`, {
        method: "POST",
        headers: {
            ...serviceHeaders,
            "Content-Type": "application/json",
            Prefer: "resolution=merge-duplicates,return=minimal"
        },
        body: JSON.stringify(batch)
    });

    if (!response.ok) {
        throw new Error(`Fallo el lote ${offset + 1}: ${response.status} ${await response.text()}`);
    }

    console.log(`Migrados ${Math.min(offset + batchSize, products.length)} de ${products.length}`);
}

console.log(`Migracion completada: ${products.length} productos.`);
