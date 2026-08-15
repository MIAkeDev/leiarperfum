// Datos de productos (perfumes)
let perfumes = [];

function getProductImageUrl(image) {
    if (!image) return '';
    return /^(?:https?:)?\/\//i.test(image) ? image : `img/${image}`;
}

// ========== VARIABLES GLOBALES ==========
let cart = [];
let currentFilter = "all";
let currentSort = "popular";
let currentSearch = "";

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', async function() {
    await loadProductsFromSupabase();
    renderPerfumes();
    setupEventListeners();
    initCarousel(); // Carrusel inicializado correctamente
});

// ========== RENDERIZAR PERFUMES ==========
function renderPerfumes() {
    const container = document.querySelector('.perfumes-grid');
    if (!container) return;
    
    // Filtrar, ordenar y buscar
    let filteredPerfumes = searchPerfumes(perfumes, currentSearch);
    filteredPerfumes = filterPerfumes(filteredPerfumes, currentFilter);
    filteredPerfumes = sortPerfumes(filteredPerfumes, currentSort);
    
    // Actualizar contador
    updateSearchResultsCount(filteredPerfumes.length);
    
    // Mensaje si no hay resultados
    if (filteredPerfumes.length === 0 && currentSearch) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search fa-3x"></i>
                <h3>No encontramos resultados para "${currentSearch}"</h3>
                <p>Prueba con otras palabras o revisa la ortografía</p>
                <button class="btn" onclick="clearSearchAndRender()">Limpiar búsqueda</button>
            </div>
        `;
        return;
    }
    
    // Generar HTML
    const perfumesHTML = filteredPerfumes.map(perfume => `
        <div class="perfume-card" data-category="${perfume.category}">
            <div class="perfume-image">
                ${perfume.image ?
                    `<img src="${getProductImageUrl(perfume.image)}" alt="${perfume.name}" class="perfume-real-image">` :
                    `<div class="bottle" style="--perfume-color: ${perfume.color}"></div>`
                }
                ${perfume.badge ? `<span class="perfume-badge">${perfume.badge}</span>` : ''}
            </div>
            <div class="perfume-info">
                <p class="perfume-category">${getCategoryName(perfume.category)}</p>
                <h3 class="perfume-name">${highlightText(perfume.name, currentSearch)}</h3>
                <p class="perfume-description">${highlightText(perfume.description, currentSearch)}</p>
                <div class="perfume-price">S/.${perfume.price.toFixed(2)}</div>
                <div class="perfume-actions">
                    <button class="whatsapp-btn" data-id="${perfume.id}">Consultar por WhatsApp</button>
                    <button class="view-details" data-id="${perfume.id}">Ver detalles</button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = perfumesHTML;
    addProductEventListeners();
}

// ========== FUNCIONES DE BÚSQUEDA ==========
function searchPerfumes(perfumesList, searchTerm) {
    if (!searchTerm.trim()) return perfumesList;
    
    const term = searchTerm.toLowerCase().trim();
    
    return perfumesList.filter(perfume => {
        return perfume.name.toLowerCase().includes(term) ||
               perfume.description.toLowerCase().includes(term) ||
               getCategoryName(perfume.category).toLowerCase().includes(term) ||
               (perfume.badge && perfume.badge.toLowerCase().includes(term));
    });
}

function highlightText(text, searchTerm) {
    if (!searchTerm || !text) return text;
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function clearSearchAndRender() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
        currentSearch = '';
        const clearBtn = document.getElementById('clear-search');
        if (clearBtn) clearBtn.style.display = 'none';
        renderPerfumes();
        searchInput.focus();
    }
}

// ========== FUNCIONES DE FILTRO ==========
function filterPerfumes(perfumesList, filter) {
    if (filter === "all") return perfumesList;
    return perfumesList.filter(perfume => perfume.category === filter);
}

// ========== FUNCIONES DE ORDENAMIENTO ==========
function sortPerfumes(perfumesList, sortType) {
    const sorted = [...perfumesList];
    
    switch(sortType) {
        case "price-asc":
            return sorted.sort((a, b) => a.price - b.price);
        case "price-desc":
            return sorted.sort((a, b) => b.price - a.price);
        case "name":
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case "popular":
        default:
            return sorted.sort((a, b) => b.popularity - a.popularity);
    }
}

// ========== FUNCIONES AUXILIARES ==========
function getCategoryName(category) {
    const categories = {
        "hombre": "Para Hombre",
        "mujer": "Para Mujer",
        "unisex": "Unisex",
        "premium": "Premium"
    };
    return categories[category] || category;
}

function updateSearchResultsCount(count) {
    const resultsCountDiv = document.getElementById('search-results-count');
    if (resultsCountDiv) {
        if (currentSearch) {
            resultsCountDiv.innerHTML = `🔍 Se encontraron <strong>${count}</strong> resultado${count !== 1 ? 's' : ''} para "<strong>${currentSearch}</strong>"`;
        } else {
            resultsCountDiv.innerHTML = `📦 Mostrando <strong>${count}</strong> perfume${count !== 1 ? 's' : ''}`;
        }
    }
}

// ========== WHATSAPP ==========
function sendWhatsAppMessage(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    const message = `Hola, estoy interesado en el perfume:\n\n` +
                   `*${product.name}*\n` +
                   `Categoría: ${getCategoryName(product.category)}\n` +
                   `Precio: S/.${product.price.toFixed(2)}\n\n` +
                   `Me podrían dar más información, por favor.`;
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '931637965';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

function consultWhatsApp(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    const button = document.querySelector(`.whatsapp-btn[data-id="${productId}"]`);
    if (button) {
        const originalText = button.textContent;
        button.textContent = "✓ Redirigiendo...";
        button.style.backgroundColor = "#1da851";
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = "#25D366";
        }, 1500);
    }
    
    const message = `¡Hola! 👋\n\n` +
                   `Estoy interesado en el perfume:\n` +
                   `*${product.name}*\n\n` +
                   `📋 *Detalles:*\n` +
                   `• Categoría: ${getCategoryName(product.category)}\n` +
                   `• Precio: S/.${product.price.toFixed(2)}\n` +
                   `• Descripción: ${product.description}\n\n` +
                   `¿Podrían darme más información sobre disponibilidad, formas de pago y envío?\n\n` +
                   `¡Gracias!`;
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '931637965';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    showNotification(`Redirigiendo a WhatsApp para consultar sobre ${product.name}`);
}

// ========== MODAL ==========
function showProductDetails(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    const modalContent = document.querySelector('.modal-content');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image" style="background-color: ${product.color};">
                ${product.image ? 
                    `<img src="${getProductImageUrl(product.image)}" alt="${product.name}" class="modal-real-image">` :
                    `<div class="modal-bottle" style="background-color: ${product.color};"></div>`
                }
                ${product.badge ? `<span class="modal-badge">${product.badge}</span>` : ''}
            </div>
            <div class="modal-product-info">
                <p class="modal-category">${getCategoryName(product.category)}</p>
                <h2 class="modal-name">${product.name}</h2>
                <p class="modal-description">${product.details}</p>
                <div class="modal-price">S/.${product.price.toFixed(2)}</div>
                <div class="modal-stats">
                    <div class="modal-stat">
                        <span class="stat-label">Popularidad:</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${product.popularity}%"></div>
                        </div>
                        <span class="stat-value">${product.popularity}%</span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="modal-whatsapp-btn" data-id="${product.id}">Consultar por WhatsApp</button>
                    <button class="modal-close-btn">Seguir explorando</button>
                </div>
            </div>
        </div>
    `;
    
    const modalWhatsappBtn = modalContent.querySelector('.modal-whatsapp-btn');
    if (modalWhatsappBtn) {
        modalWhatsappBtn.addEventListener('click', function() {
            sendWhatsAppMessage(productId);
            modalOverlay.classList.remove('active');
        });
    }
    
    const modalCloseBtn = modalContent.querySelector('.modal-close-btn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
    
    modalOverlay.classList.add('active');
}

// ========== CARRUSEL ==========
function initCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (slides.length > 0) {
        // Asegurar que solo la primera slide esté activa
        slides.forEach((slide, index) => {
            if (index === 0) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Rotar cada 2.3 segundos
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 2300);
    }
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderPerfumes();
        });
    });
    
    // Ordenar
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            renderPerfumes();
        });
    }
    
    // Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }
    
    // Cerrar menú móvil
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('active');
            }
        });
    });
    
    // Cerrar modal
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
    
    // Buscador
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value;
            if (clearSearchBtn) {
                clearSearchBtn.style.display = currentSearch ? 'flex' : 'none';
            }
            renderPerfumes();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
                clearSearchBtn.style.display = 'none';
                renderPerfumes();
                searchInput.focus();
            }
        });
    }
}

function addProductEventListeners() {
    // Botones WhatsApp
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            sendWhatsAppMessage(productId);
        });
    });
    
    // Botones Ver detalles
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            showProductDetails(productId);
        });
    });
}

// ========== NOTIFICACIONES ==========
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--black);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 3000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        animation-fill-mode: forwards;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Carga el catalogo publico desde Supabase. El JSON local solo se descarga
// como respaldo si falta configuracion o falla la API.
async function loadProductsFromSupabase() {
    const config = window.SUPABASE_CONFIG;
    if (!config?.url || !config?.anonKey) {
        console.info('Supabase no esta configurado; se usa el respaldo local.');
        await loadProductsBackup();
        return;
    }

    try {
        const url = `${config.url.replace(/\/$/, '')}/rest/v1/products` +
            '?select=id,name,category,price,description,color,badge,popularity,details,image' +
            '&active=eq.true&order=id.asc';
        const response = await fetch(url, {
            headers: {
                apikey: config.anonKey
            }
        });

        if (!response.ok) {
            throw new Error(`Supabase respondio ${response.status}`);
        }

        const remoteProducts = await response.json();
        if (!Array.isArray(remoteProducts) || remoteProducts.length === 0) {
            throw new Error('Supabase no devolvio productos activos');
        }

        perfumes = remoteProducts.map(product => ({
            ...product,
            price: Number(product.price),
            popularity: Number(product.popularity)
        }));
        console.info(`Catalogo cargado desde Supabase: ${perfumes.length} productos.`);
    } catch (error) {
        console.warn('No se pudo cargar Supabase; se usa el respaldo local.', error);
        await loadProductsBackup();
    }
}

async function loadProductsBackup() {
    try {
        const response = await fetch('data/products.backup.json');
        if (!response.ok) throw new Error(`El respaldo respondio ${response.status}`);
        perfumes = await response.json();
        console.info(`Catalogo cargado desde el respaldo: ${perfumes.length} productos.`);
    } catch (error) {
        console.error('No se pudo cargar el catalogo.', error);
    }
}
