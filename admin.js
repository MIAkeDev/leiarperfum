const config = window.SUPABASE_CONFIG;
const client = window.supabase.createClient(config.url, config.anonKey);
const loginView = document.querySelector('#login-view');
const dashboardView = document.querySelector('#dashboard-view');
const dialog = document.querySelector('#product-dialog');
let products = [];

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
    await loadProducts();
}

async function loadProducts() {
    message('#dashboard-message', 'Cargando...');
    const { data, error } = await client.from('products').select('*').order('id');
    if (error) return message('#dashboard-message', error.message);
    products = data;
    message('#dashboard-message');
    renderProducts();
}

function imageUrl(image) {
    if (!image) return '';
    return /^(?:https?:)?\/\//i.test(image) ? image : `img/${image}`;
}

function renderProducts() {
    const term = document.querySelector('#admin-search').value.trim().toLowerCase();
    const status = document.querySelector('#status-filter').value;
    const visible = products.filter(product => {
        const matchesText = product.name.toLowerCase().includes(term);
        const matchesStatus = status === 'all' || (status === 'active' ? product.active : !product.active);
        return matchesText && matchesStatus;
    });
    document.querySelector('#product-count').textContent = `${visible.length} productos`;
    document.querySelector('#products-list').innerHTML = visible.length ? visible.map(product => `
        <article class="admin-product">
            ${product.image ? `<img src="${imageUrl(product.image)}" alt="">` : '<div class="image-placeholder"></div>'}
            <div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.category)} · ID ${product.id}</p></div>
            <div><span class="price">S/ ${Number(product.price).toFixed(2)}</span> <span class="status ${product.active ? '' : 'archived'}">${product.active ? 'Activo' : 'Archivado'}</span></div>
            <div class="row-actions"><button data-edit="${product.id}">Editar</button><button class="secondary" data-toggle="${product.id}">${product.active ? 'Archivar' : 'Restaurar'}</button></div>
        </article>`).join('') : '<div class="empty">No hay productos que coincidan.</div>';
}

function escapeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value ?? '';
    return div.innerHTML;
}

function openProduct(product = null) {
    document.querySelector('#product-form').reset();
    document.querySelector('#product-id').value = product?.id ?? '';
    document.querySelector('#current-image').value = product?.image ?? '';
    document.querySelector('#form-title').textContent = product ? 'Editar perfume' : 'Nuevo perfume';
    document.querySelector('#product-name').value = product?.name ?? '';
    document.querySelector('#product-category').value = product?.category ?? 'unisex';
    document.querySelector('#product-price').value = product?.price ?? '';
    document.querySelector('#product-badge').value = product?.badge ?? '';
    document.querySelector('#product-popularity').value = product?.popularity ?? 0;
    document.querySelector('#product-color').value = product?.color ?? '#ffffff';
    document.querySelector('#product-active').value = String(product?.active ?? true);
    document.querySelector('#product-description').value = product?.description ?? '';
    document.querySelector('#product-details').value = product?.details ?? '';
    document.querySelector('#image-preview').innerHTML = product?.image ? `<img src="${imageUrl(product.image)}" alt="Imagen actual">` : '';
    message('#form-message');
    dialog.showModal();
}

async function uploadImage(file) {
    if (!file) return document.querySelector('#current-image').value;
    if (file.size > 5 * 1024 * 1024) throw new Error('La imagen supera el máximo de 5 MB.');
    const extension = file.name.split('.').pop().toLowerCase();
    const cleanName = file.name.replace(/\.[^.]+$/, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const path = `${Date.now()}-${cleanName || 'perfume'}-${crypto.randomUUID()}.${extension}`;
    const { error } = await client.storage.from('product-images').upload(path, file, { contentType:file.type });
    if (error) throw error;
    return client.storage.from('product-images').getPublicUrl(path).data.publicUrl;
}

document.querySelector('#login-form').addEventListener('submit', async event => {
    event.preventDefault();
    message('#login-message', 'Ingresando...');
    const { error } = await client.auth.signInWithPassword({
        email: document.querySelector('#login-email').value.trim(),
        password: document.querySelector('#login-password').value
    });
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
        const id = document.querySelector('#product-id').value;
        const query = id ? client.from('products').update(record).eq('id', id) : client.from('products').insert(record);
        const { error } = await query;
        if (error) throw error;
        dialog.close();
        await loadProducts();
        message('#dashboard-message', id ? 'Perfume actualizado.' : 'Perfume creado.', true);
    } catch (error) { message('#form-message', error.message); }
    finally { button.disabled = false; }
});

document.querySelector('#products-list').addEventListener('click', async event => {
    const editId = event.target.dataset.edit;
    const toggleId = event.target.dataset.toggle;
    if (editId) openProduct(products.find(product => product.id === Number(editId)));
    if (toggleId) {
        const product = products.find(item => item.id === Number(toggleId));
        const { error } = await client.from('products').update({ active:!product.active }).eq('id', product.id);
        if (error) message('#dashboard-message', error.message); else await loadProducts();
    }
});

document.querySelector('#new-product').addEventListener('click', () => openProduct());
document.querySelector('#logout').addEventListener('click', () => client.auth.signOut());
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#cancel-product').addEventListener('click', () => dialog.close());
document.querySelector('#admin-search').addEventListener('input', renderProducts);
document.querySelector('#status-filter').addEventListener('change', renderProducts);
document.querySelector('#product-image').addEventListener('change', event => {
    const file = event.target.files[0];
    if (file) document.querySelector('#image-preview').innerHTML = `<img src="${URL.createObjectURL(file)}" alt="Vista previa">`;
});

client.auth.onAuthStateChange((_event, session) => setTimeout(() => showSession(session), 0));
client.auth.getSession().then(({ data }) => showSession(data.session));
