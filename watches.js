const sampleWatches = [
    {id:1,name:'Aureus Chrono Gold',category:'hombre',style:'cronografo',price:349,badge:'Premium',popularity:95,color:'#c9784a',image:'aureus-chrono.jpg',description:'Cronógrafo dorado con presencia y acabado sofisticado.',details:'Caja metálica, esfera negra de alto contraste y brazalete dorado. Una pieza protagonista para reuniones, celebraciones y looks formales.',active:true},
    {id:2,name:'Nocturne Steel Skeleton',category:'hombre',style:'automatico',price:429,badge:'Automático',popularity:93,color:'#262b2c',image:'nocturne-steel.jpg',description:'Mecánica visible y carácter oscuro para quien aprecia cada detalle.',details:'Diseño skeleton en tono gunmetal, movimiento automático y construcción de estética industrial contemporánea.',active:true},
    {id:3,name:'Azure Diver 200',category:'unisex',style:'diver',price:389,badge:'Deportivo',popularity:91,color:'#1469a5',image:'azure-diver.jpg',description:'Azul profundo, bisel deportivo y una lectura limpia en movimiento.',details:'Inspirado en relojes de buceo, con marcadores luminosos y brazalete metálico. Versátil para el día a día y escapadas.',active:true},
    {id:4,name:'Rose Atelier',category:'mujer',style:'elegante',price:279,badge:'Elegante',popularity:89,color:'#d8a48d',image:'rose-atelier.jpg',description:'Delicado tono rose gold con una silueta femenina y moderna.',details:'Esfera luminosa, caja estilizada y brazalete pulido. Diseñado para elevar un outfit sin perder sutileza.',active:true},
    {id:5,name:'Terra Automatic',category:'hombre',style:'automatico',price:369,badge:'Clásico',popularity:87,color:'#486452',image:'terra-automatic.jpg',description:'Esfera verde y correa de cuero: equilibrio entre tradición y tendencia.',details:'Estética clásica de inspiración viajera, movimiento automático y combinación cálida para vestir casual o formal.',active:true},
    {id:6,name:'Pulse X1 Active',category:'unisex',style:'smartwatch',price:249,badge:'Smart',popularity:90,color:'#ef6c32',image:'pulse-x1.jpg',description:'Tecnología deportiva con energía, métricas y estilo urbano.',details:'Pantalla de alta visibilidad, modos deportivos y correa cómoda para acompañarte desde el entrenamiento hasta la ciudad.',active:true}
];
let watches = [...sampleWatches];
let activeFilter = 'all';
const grid = document.querySelector('#watches-grid');
const statusElement = document.querySelector('#watch-status');

function watchImage(image) {
    if (!image) return 'img/leairlogos.png';
    return /^(?:https?:)?\/\//i.test(image) || image.startsWith('img/') ? image : `img/watches/${image}`;
}
function escapeText(value) {
    const div = document.createElement('div'); div.textContent = value ?? ''; return div.innerHTML;
}
function renderWatches() {
    const term = document.querySelector('#watch-search').value.trim().toLowerCase();
    const visible = watches.filter(watch => (activeFilter === 'all' || watch.category === activeFilter) && `${watch.name} ${watch.style} ${watch.description}`.toLowerCase().includes(term));
    document.querySelector('#watch-result-count').textContent = visible.length;
    grid.innerHTML = visible.length ? visible.map((watch,index) => `
        <article class="watch-card" style="--accent:${watch.color || '#c9784a'};--delay:${index * 60}ms">
            <div class="watch-card-image"><span>${escapeText(watch.badge)}</span><img src="${watchImage(watch.image)}" alt="${escapeText(watch.name)}" loading="lazy"></div>
            <div class="watch-card-body"><small>${escapeText(watch.style)} · ${escapeText(watch.category)}</small><h3>${escapeText(watch.name)}</h3><p>${escapeText(watch.description)}</p><div><strong>S/ ${Number(watch.price).toFixed(2)}</strong><button data-watch="${watch.id}">Ver detalles <i class="fas fa-arrow-right"></i></button></div></div>
        </article>`).join('') : '<p class="watch-empty">No encontramos relojes con esa búsqueda. Podemos cotizarlo por WhatsApp.</p>';
}
async function loadWatches() {
    try {
        const cfg = window.SUPABASE_CONFIG;
        if (!cfg?.url || !cfg?.anonKey) throw new Error('Configuración no disponible');
        const supabaseClient = window.supabase.createClient(cfg.url, cfg.anonKey);
        const { data, error } = await supabaseClient.from('watches').select('*').eq('active', true).order('popularity', { ascending:false });
        if (error) throw error;
        if (data?.length) watches = data;
        statusElement.textContent = data?.length ? 'Catálogo actualizado desde Supabase' : 'Modelos de muestra';
    } catch (_) { statusElement.textContent = 'Modelos de muestra'; }
    renderWatches();
}
function openWatch(id) {
    const watch = watches.find(item => item.id === Number(id));
    if (!watch) return;
    document.querySelector('#modal-watch-image').src = watchImage(watch.image);
    document.querySelector('#modal-watch-name').textContent = watch.name;
    document.querySelector('#modal-watch-style').textContent = `${watch.style} · ${watch.category}`;
    document.querySelector('#modal-watch-description').textContent = watch.description;
    document.querySelector('#modal-watch-details').textContent = watch.details;
    document.querySelector('#modal-watch-price').textContent = `S/ ${Number(watch.price).toFixed(2)}`;
    document.querySelector('#modal-watch-whatsapp').href = `https://wa.me/51931637965?text=${encodeURIComponent(`Hola Leiar, me interesa el reloj ${watch.name}`)}`;
    document.querySelector('#watch-modal').hidden = false;
    document.body.style.overflow = 'hidden';
}
document.querySelectorAll('.watch-filters button').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.watch-filters button').forEach(item => item.classList.toggle('active', item === button));
    renderWatches();
}));
document.querySelector('#watch-search').addEventListener('input', renderWatches);
grid.addEventListener('click', event => { const button = event.target.closest('[data-watch]'); if (button) openWatch(button.dataset.watch); });
document.querySelector('.watch-modal-close').addEventListener('click', () => { document.querySelector('#watch-modal').hidden = true; document.body.style.overflow = ''; });
document.querySelector('#watch-modal').addEventListener('click', event => { if (event.target.id === 'watch-modal') document.querySelector('.watch-modal-close').click(); });
document.querySelector('.mobile-menu').addEventListener('click', () => document.querySelector('nav ul').classList.toggle('active'));
loadWatches();
