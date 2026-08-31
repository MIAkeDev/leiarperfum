const config = window.SUPABASE_CONFIG;
const client = window.supabase.createClient(config.url, config.anonKey);
const loginView = document.querySelector('#login-view');
const dashboardView = document.querySelector('#dashboard-view');
const dialog = document.querySelector('#product-dialog');
const catalogs = {
    products:{ singular:'perfume', plural:'perfumes', bucket:'product-images', imageBase:'img/', categories:['hombre','mujer','unisex','premium'] },
    watches:{ singular:'reloj', plural:'relojes', bucket:'watch-images', imageBase:'img/watches/', categories:['hombre','mujer','unisex'] }
};
let currentCatalog = 'products';
let items = [];
const currentConfig = () => catalogs[currentCatalog];
const message = (id, text = '', success = false) => {
    const element = document.querySelector(id);
    element.textContent = text;
    element.classList.toggle('success', success);
};

async function isAdmin(user) {
    if (!user) return false;
    const { data, error } = await client.from('admin_users').select('user_id').eq('user_id', user.id).maybeSingle();
    return !error && Boolean(data);
}
async function showSession(session) {
    if (!session || !(await isAdmin(session.user))) {
        if (session) await client.auth.signOut();
        loginView.hidden = false;
        dashboardView.hidden = true;
        return;
    }
    loginView.hidden = true;
    dashboardView.hidden = false;
    document.querySelector('#session-email').textContent = session.user.email;
    await loadItems();
}
async function loadItems() {
    message('#dashboard-message', 'Cargando...');
    const { data, error } = await client.from(currentCatalog).select('*').order('id');
    if (error) return message('#dashboard-message', error.message);
    items = data;
    message('#dashboard-message');
    renderItems();
}
function imageUrl(image) {
    if (!image) return '';
    return /^(?:https?:)?\/\//i.test(image) || image.startsWith('img/') ? image : `${currentConfig().imageBase}${image}`;
}
function escapeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value ?? '';
    return div.innerHTML;
}
function renderItems() {
    const term = document.querySelector('#admin-search').value.trim().toLowerCase();
    const status = document.querySelector('#status-filter').value;
    const visible = items.filter(item => item.name.toLowerCase().includes(term) && (status === 'all' || (status === 'active' ? item.active : !item.active)));
    document.querySelector('#product-count').textContent = `${visible.length} ${currentConfig().plural}`;
    document.querySelector('#products-list').innerHTML = visible.length ? visible.map(item => `
        <article class="admin-product">
            ${item.image ? `<img src="${imageUrl(item.image)}" alt="">` : '<div class="image-placeholder"></div>'}
            <div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.category)}${item.style ? ` · ${escapeHtml(item.style)}` : ''} · ID ${item.id}</p></div>
            <div><span class="price">S/ ${Number(item.price).toFixed(2)}</span> <span class="status ${item.active ? '' : 'archived'}">${item.active ? 'Activo' : 'Archivado'}</span></div>
            <div class="row-actions"><button data-edit="${item.id}">Editar</button><button class="secondary" data-toggle="${item.id}">${item.active ? 'Archivar' : 'Restaurar'}</button></div>
        </article>`).join('') : `<div class="empty">No hay ${currentConfig().plural} que coincidan.</div>`;
}
function refreshCatalogUI() {
    const cfg = currentConfig();
    document.querySelector('#catalog-title').textContent = `Catálogo de ${cfg.plural}`;
    document.querySelector('#new-product').textContent = `Nuevo ${cfg.singular}`;
    document.querySelector('#save-product').textContent = `Guardar ${cfg.singular}`;
    document.querySelector('#style-field').hidden = currentCatalog !== 'watches';
    document.querySelector('#product-category').innerHTML = cfg.categories.map(category => `<option value="${category}">${category[0].toUpperCase() + category.slice(1)}</option>`).join('');
    document.querySelectorAll('.catalog-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.catalog === currentCatalog));
}
function openItem(item = null) {
    const cfg = currentConfig();
    document.querySelector('#product-form').reset();
    document.querySelector('#product-id').value = item?.id ?? '';
    document.querySelector('#current-image').value = item?.image ?? '';
    document.querySelector('#form-title').textContent = item ? `Editar ${cfg.singular}` : `Nuevo ${cfg.singular}`;
    document.querySelector('#product-name').value = item?.name ?? '';
    document.querySelector('#product-category').value = item?.category ?? 'unisex';
    document.querySelector('#product-style').value = item?.style ?? 'elegante';
    document.querySelector('#product-price').value = item?.price ?? '';
    document.querySelector('#product-badge').value = item?.badge ?? '';
    document.querySelector('#product-popularity').value = item?.popularity ?? 0;
    document.querySelector('#product-color').value = item?.color ?? '#ffffff';
    document.querySelector('#product-active').value = String(item?.active ?? true);
    document.querySelector('#product-description').value = item?.description ?? '';
    document.querySelector('#product-details').value = item?.details ?? '';
    document.querySelector('#image-preview').innerHTML = item?.image ? `<img src="${imageUrl(item.image)}" alt="Imagen actual">` : '';
    message('#form-message');
    dialog.showModal();
}
async function uploadImage(file) {
    if (!file) return document.querySelector('#current-image').value;
    if (file.size > 5 * 1024 * 1024) throw new Error('La imagen supera el máximo de 5 MB.');
    const extension = file.name.split('.').pop().toLowerCase();
    const cleanName = file.name.replace(/\.[^.]+$/, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const path = `${Date.now()}-${cleanName || currentConfig().singular}-${crypto.randomUUID()}.${extension}`;
    const { error } = await client.storage.from(currentConfig().bucket).upload(path, file, { contentType:file.type });
    if (error) throw error;
    return client.storage.from(currentConfig().bucket).getPublicUrl(path).data.publicUrl;
}

document.querySelector('#login-form').addEventListener('submit', async event => {
    event.preventDefault();
    message('#login-message', 'Ingresando...');
    const { error } = await client.auth.signInWithPassword({ email:document.querySelector('#login-email').value.trim(), password:document.querySelector('#login-password').value });
    if (error) message('#login-message', 'Correo, contraseña o permisos incorrectos.');
});
document.querySelector('#product-form').addEventListener('submit', async event => {
    event.preventDefault();
    const button = document.querySelector('#save-product');
    button.disabled = true;
    message('#form-message', 'Guardando...');
    try {
        const image = await uploadImage(document.querySelector('#product-image').files[0]);
        const record = {
            name:document.querySelector('#product-name').value.trim(), category:document.querySelector('#product-category').value,
            price:Number(document.querySelector('#product-price').value), badge:document.querySelector('#product-badge').value.trim(),
            popularity:Number(document.querySelector('#product-popularity').value), color:document.querySelector('#product-color').value,
            active:document.querySelector('#product-active').value === 'true', description:document.querySelector('#product-description').value.trim(),
            details:document.querySelector('#product-details').value.trim(), image
        };
        if (currentCatalog === 'watches') record.style = document.querySelector('#product-style').value;
        const id = document.querySelector('#product-id').value;
        const query = id ? client.from(currentCatalog).update(record).eq('id', id) : client.from(currentCatalog).insert(record);
        const { error } = await query;
        if (error) throw error;
        dialog.close();
        await loadItems();
        message('#dashboard-message', id ? `${currentConfig().singular} actualizado.` : `${currentConfig().singular} creado.`, true);
    } catch (error) { message('#form-message', error.message); }
    finally { button.disabled = false; }
});
document.querySelector('#products-list').addEventListener('click', async event => {
    const editId = event.target.dataset.edit;
    const toggleId = event.target.dataset.toggle;
    if (editId) openItem(items.find(item => item.id === Number(editId)));
    if (toggleId) {
        const item = items.find(entry => entry.id === Number(toggleId));
        const { error } = await client.from(currentCatalog).update({ active:!item.active }).eq('id', item.id);
        if (error) message('#dashboard-message', error.message); else await loadItems();
    }
});
document.querySelectorAll('.catalog-tab').forEach(tab => tab.addEventListener('click', async () => {
    currentCatalog = tab.dataset.catalog;
    refreshCatalogUI();
    await loadItems();
}));
document.querySelector('#new-product').addEventListener('click', () => openItem());
document.querySelector('#logout').addEventListener('click', () => client.auth.signOut());
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#cancel-product').addEventListener('click', () => dialog.close());
document.querySelector('#admin-search').addEventListener('input', renderItems);
document.querySelector('#status-filter').addEventListener('change', renderItems);
document.querySelector('#product-image').addEventListener('change', event => {
    const file = event.target.files[0];
    if (file) document.querySelector('#image-preview').innerHTML = `<img src="${URL.createObjectURL(file)}" alt="Vista previa">`;
});

refreshCatalogUI();
client.auth.onAuthStateChange((_event, session) => setTimeout(() => showSession(session), 0));
client.auth.getSession().then(({ data }) => showSession(data.session));
