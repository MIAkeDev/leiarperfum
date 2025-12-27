// Datos de productos (perfumes)
const perfumes = [
    {
        id: 1,
        name: "Midnight Noir",
        category: "hombre",
        price: 89.99,
        description: "Una fragancia intensa y misteriosa con notas de sándalo y pachulí.",
        color: "#1a1a2e",
        badge: "Nuevo",
        popularity: 95,
        details: "Una fragancia nocturna que evoca misterio y elegancia. Con notas de salida de cardamomo y bergamota, corazón de sándalo y pachulí, y fondo de ámbar y cuero.",
        image:"khamrah.png"
    },
    {
        id: 2,
        name: "Rose Éternelle",
        category: "mujer",
        price: 109.99,
        description: "Elegante combinación de rosas búlgaras y jazmín con un toque de vainilla.",
        color: "#c44569",
        badge: "Más vendido",
        popularity: 98,
        details: "La esencia de la feminidad eterna. Notas de salida de rosa búlgara y fresa, corazón de jazmín de Arabia y peonía, fondo de vainilla de Madagascar y almizcle blanco."
    },
    {
        id: 3,
        name: "Ocean Breeze",
        category: "unisex",
        price: 75.50,
        description: "Frescura marina con notas cítricas y un toque de almizcle blanco.",
        color: "#0c7b93",
        badge: "",
        popularity: 87,
        details: "Una brisa marina en un frasco. Notas de salida de mandarina y limón siciliano, corazón de algas marinas y salvia, fondo de almizcle blanco y ámbar gris."
    },
    {
        id: 4,
        name: "Golden Oud",
        category: "premium",
        price: 249.99,
        description: "Exclusivo oud árabe mezclado con azafrán y cuero envejecido.",
        color: "#b68973",
        badge: "Edición limitada",
        popularity: 92,
        details: "El lujo en estado puro. Oud árabe de 30 años mezclado con azafrán iraní, rosas de Taif, cuero envejecido y sándalo de Mysore. Solo 500 unidades disponibles."
    },
    {
        id: 5,
        name: "Urban Classic",
        category: "hombre",
        price: 69.99,
        description: "Fragancia moderna con notas de bergamota, geranio y vetiver.",
        color: "#2d4059",
        badge: "",
        popularity: 85,
        details: "Para el hombre moderno y sofisticado. Notas de salida de bergamota y pimienta rosa, corazón de geranio y lavanda, fondo de vetiver de Haití y pachulí."
    },
    {
        id: 6,
        name: "Vanilla Dream",
        category: "mujer",
        price: 94.99,
        description: "Dulce y acogedora combinación de vainilla de Madagascar y ámbar.",
        color: "#e6b87d",
        badge: "",
        popularity: 90,
        details: "Un sueño hecho fragancia. Notas de salida de flor de azahar y pera, corazón de vainilla de Madagascar y orquídea, fondo de ámbar y sándalo cremoso."
    },
    {
        id: 7,
        name: "Zen Harmony",
        category: "unisex",
        price: 82.50,
        description: "Equilibrio perfecto entre té verde, bambú y notas florales suaves.",
        color: "#7aa874",
        badge: "Orgánico",
        popularity: 88,
        details: "Inspirado en los jardines de té japoneses. Ingredientes 100% orgánicos. Notas de té verde matcha, bambú, flor de cerezo y almizcle vegetal."
    },
    {
        id: 8,
        name: "Royal Essence",
        category: "premium",
        price: 299.99,
        description: "Una mezcla real de iris, ámbar gris y rosas de mayo de Grasse.",
        color: "#6a2c70",
        badge: "Colección privada",
        popularity: 96,
        details: "Reservado para la realeza. Iris de Florencia, rosas de mayo de Grasse, ámbar gris natural y oud de Camboya. Presentado en frasco de cristal tallado a mano."
    }
];

// Variables globales
let cart = [];
let currentFilter = "all";
let currentSort = "popular";

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    renderPerfumes();
    setupEventListeners();
    updateCartCount();
});

// Renderizar los perfumes en la página
function renderPerfumes() {
    const container = document.querySelector('.perfumes-grid');
    if (!container) return;
    
    // Filtrar y ordenar los perfumes
    let filteredPerfumes = filterPerfumes(perfumes, currentFilter);
    filteredPerfumes = sortPerfumes(filteredPerfumes, currentSort);
    
    // Generar HTML para cada perfume
    const perfumesHTML = filteredPerfumes.map(perfume => `
        <div class="perfume-card" data-category="${perfume.category}">
            <div class="perfume-image">
                ${perfume.image ?
                    `<img src="img/${perfume.image}" alt="${perfume.name}" class="perfume-real-image">` :
                    `<div class="bottle" style="--perfume-color: ${perfume.color}"></div>`
                }
                ${perfume.badge ? `<span class="perfume-badge">${perfume.badge}</span>` : ''}
            </div>
            <div class="perfume-info">
                <p class="perfume-category">${getCategoryName(perfume.category)}</p>
                <h3 class="perfume-name">${perfume.name}</h3>
                <p class="perfume-description">${perfume.description}</p>
                <div class="perfume-price">S/${perfume.price.toFixed(2)}</div>
                <div class="perfume-actions">
                    <button class="whatsapp-btn" data-id="${perfume.id}">Consultar por WhatsApp</button>
                    <button class="view-details" data-id="${perfume.id}">Ver detalles</button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = perfumesHTML;
    
    // Añadir event listeners a los botones recién creados
    addProductEventListeners();
}

// Filtrar perfumes por categoría
function filterPerfumes(perfumesList, filter) {
    if (filter === "all") return perfumesList;
    return perfumesList.filter(perfume => perfume.category === filter);
}

// Ordenar perfumes
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

// Obtener nombre de categoría para mostrar
function getCategoryName(category) {
    const categories = {
        "hombre": "Para Hombre",
        "mujer": "Para Mujer",
        "unisex": "Unisex",
        "premium": "Premium"
    };
    return categories[category] || category;
}
// Función para enviar mensaje a WhatsApp
function sendWhatsAppMessage(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    // Mensaje personalizado
    const message = `Hola, estoy interesado en el perfume:\n\n` +
                   `*${product.name}*\n` +
                   `Categoría: ${getCategoryName(product.category)}\n` +
                   `Precio: S/.${product.price.toFixed(2)}\n\n` +
                   `Me podrían dar más información, por favor.`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Tu número de WhatsApp (cámbialo por el tuyo)
    const phoneNumber = '920632668'; // Reemplaza con tu número
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
// Configurar event listeners
function setupEventListeners() {
    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            // Actualizar filtro actual
            currentFilter = this.dataset.filter;
            // Renderizar perfumes con nuevo filtro
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
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('active');
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Aquí normalmente enviaríamos el email a un servidor
            alert(`¡Gracias por suscribirte con el email: ${email}! Te enviaremos nuestras novedades pronto.`);
            this.reset();
        });
    }
    
    // Cerrar modal
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
    
    // Cerrar modal al hacer clic fuera
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
    
    
    
}

// Añadir event listeners a los botones de producto
function addProductEventListeners() {
    // Botones "Añadir al carrito"
// Botones "Añadir al carrito" → "Consultar por WhatsApp"
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            sendWhatsAppMessage(productId);
    });
});
    
    // Botones "Ver detalles"
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            showProductDetails(productId);
        });
    });
}



// Mostrar detalles del producto en modal
function showProductDetails(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    const modalContent = document.querySelector('.modal-content');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image" style="background-color: ${product.color};">
                ${product.image ? 
                    `<img src="img/${product.image}" alt="${product.name}" class="modal-real-image">` : 
                    `<div class="modal-bottle" style="background-color: ${product.color};"></div>`
                }
                ${product.badge ? `<span class="modal-badge">${product.badge}</span>` : ''}
            </div>
            <div class="modal-product-info">
                <p class="modal-category">${getCategoryName(product.category)}</p>
                <h2 class="modal-name">${product.name}</h2>
                <p class="modal-description">${product.details}</p>
                <div class="modal-price">S/${product.price.toFixed(2)}</div>
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
    
    // Mostrar modal
    modalOverlay.classList.add('active');
    
    // Añadir event listener al botón del modal
    
    
    // Añadir event listener al botón cerrar del modal
    const modalCloseBtn = modalContent.querySelector('.modal-close-btn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
}

// ... (aquí van todas tus otras funciones como renderPerfumes, filterPerfumes, etc.)

// Función para consultar por WhatsApp
function consultWhatsApp(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    // Mostrar feedback al usuario (opcional)
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
    
    // Crear mensaje personalizado
    const message = `¡Hola! 👋\n\n` +
                   `Estoy interesado en el perfume:\n` +
                   `*${product.name}*\n\n` +
                   `📋 *Detalles:*\n` +
                   `• Categoría: ${getCategoryName(product.category)}\n` +
                   `• Precio: S/.${product.price.toFixed(2)}\n` +
                   `• Descripción: ${product.description}\n\n` +
                   `¿Podrían darme más información sobre disponibilidad, formas de pago y envío?\n\n` +
                   `¡Gracias!`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // TU NÚMERO DE WHATSAPP - REEMPLAZA ESTO
    const phoneNumber = '920632668'; // Ejemplo: 51987654321
    
    // Abrir WhatsApp en nueva pestaña
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Mostrar notificación
    showNotification(`Redirigiendo a WhatsApp para consultar sobre ${product.name}`);
}

// ... (después pueden venir funciones como showNotification, etc.)


// Mostrar notificación
function showNotification(message) {
    // Crear elemento de notificación
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
    
    // Añadir estilos de animación
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
    
    // Eliminar notificación después de 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Smooth scroll para enlaces internos
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