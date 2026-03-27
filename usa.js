// ========== PRODUCTOS ==========

const crocs = [
    {
        id: 1,
        name: "Crocs Classic Clog",
        category: "Crocs",
        price: 49.99,
        description: "Cómodos y ligeros, ideales para cualquier ocasión.",
        image: "img/croc.png",
        badge: "Top ventas"
    },
    {
        id: 2,
        name: "Crocs Literide Pacer",
        category: "Crocs",
        price: 69.99,
        description: "Diseño deportivo con máxima comodidad.",
        image: "img/crocsli.png",
        badge: "Nuevo"
    },
    {
        id: 3,
        name: "Crocs Unisex Baya",
        category: "Crocs",
        price: 39.99,
        description: "Versión ligera y moderna.",
        image: "img/crocs-baya.jpg",
        badge: ""
    }
];

const iphones = [
    {
        id: 4,
        name: "iPhone 15 Pro",
        category: "iPhones",
        price: 999.99,
        description: "Cámara de 48 MP, chip A17 Pro, titanio.",
        image: "img/iphone15pro.jpg",
        badge: "Último modelo"
    },
    {
        id: 5,
        name: "iPhone 14",
        category: "iPhones",
        price: 699.99,
        description: "Rendimiento excelente, batería todo el día.",
        image: "img/iphone14.jpg",
        badge: ""
    },
    {
        id: 6,
        name: "iPhone 13",
        category: "iPhones",
        price: 549.99,
        description: "Calidad precio imbatible.",
        image: "img/iphone13.jpg",
        badge: "Oferta"
    }
];

const relojes = [
    {
        id: 7,
        name: "Casio G-Shock",
        category: "Relojes",
        price: 129.99,
        description: "Resistente, ideal para aventuras.",
        image: "img/gshock.jpg",
        badge: "Resistente"
    },
    {
        id: 8,
        name: "Fossil Gen 6",
        category: "Relojes",
        price: 299.99,
        description: "Smartwatch con GPS y Wear OS.",
        image: "img/fossil-gen6.jpg",
        badge: "Smart"
    },
    {
        id: 9,
        name: "Invicta Pro Diver",
        category: "Relojes",
        price: 89.99,
        description: "Estilo clásico automático.",
        image: "img/invicta.png",
        badge: ""
    }
];

const carteras = [
    {
        id: 10,
        name: "Billetera de Cuero",
        category: "Carteras",
        price: 45.99,
        description: "Cuero genuino, 12 espacios para tarjetas.",
        image: "img/cuero-clasica.jpg",
        badge: "Premium"
    },
    {
        id: 11,
        name: "Cartera Minimalista",
        category: "Carteras",
        price: 29.99,
        description: "Delgada y moderna, ideal para llevar lo esencial.",
        image: "img/minimalista.jpg",
        badge: ""
    },
    {
        id: 12,
        name: "Cartera con Monedero",
        category: "Carteras",
        price: 39.99,
        description: "Incluye cierre metálico y compartimiento para monedas.",
        image: "img/monedero.jpg",
        badge: "Más vendido"
    }
];

// ========== FUNCIONES PARA RENDERIZAR ==========

function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = products.map(product => `
        <div class="perfume-card">
            <div class="perfume-image">
                <img src="${product.image}" alt="${product.name}" class="perfume-real-image" style="object-fit: contain; width: 70%; height: 70%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                ${product.badge ? `<span class="perfume-badge">${product.badge}</span>` : ''}
            </div>
            <div class="perfume-info">
                <p class="perfume-category">${product.category}</p>
                <h3 class="perfume-name">${product.name}</h3>
                <p class="perfume-description">${product.description}</p>
                <div class="perfume-price">S/.${product.price.toFixed(2)}</div>
                <div class="perfume-actions">
                    <button class="whatsapp-btn" data-name="${product.name}" data-price="${product.price}">Consultar por WhatsApp</button>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;

    // Agregar eventos WhatsApp
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            const message = `Hola, estoy interesado en: *${name}* (S/.${price}). ¿Podrían darme más información?`;
            const url = `https://wa.me/920632668?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
}

// ========== CARGAR TODO AL INICIO ==========
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(crocs, 'crocs-grid');
    renderProducts(iphones, 'iphones-grid');
    renderProducts(relojes, 'relojes-grid');
    renderProducts(carteras, 'carteras-grid');
});