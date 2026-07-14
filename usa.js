// usa.js

const products = {
    crocs: [
        {
            id: 1,
            name: "Crocs Classic Clog",
            price: 49.99,
            image: "https://via.placeholder.com/300x200/1e3c72/fff?text=Crocs+Classic",
            description: "Los clásicos Crocs para hombre y mujer. Cómodos, ligeros y versátiles."
        },
        {
            id: 2,
            name: "Crocs Baya Clog",
            price: 44.99,
            image: "https://via.placeholder.com/300x200/2a5298/fff?text=Crocs+Baya",
            description: "Diseño moderno con ventilación adicional. Perfectos para todo el día."
        }
    ],
    iphones: [
        {
            id: 101,
            name: "iPhone 17 Pro Max",
            price: 1299,
            image: "https://via.placeholder.com/300x200/1e3c72/fff?text=iPhone+17+Pro+Max",
            description: "Última generación. Cámara de 48MP, chip A19, pantalla OLED 6.9″."
        },
        {
            id: 102,
            name: "iPhone 16 Pro Max",
            price: 1199,
            image: "https://via.placeholder.com/300x200/2a5298/fff?text=iPhone+16+Pro+Max",
            description: "Cámara de 48MP, chip A18, batería de larga duración, 6.9″."
        },
        {
            id: 103,
            name: "iPhone 15 Pro Max",
            price: 1099,
            image: "https://via.placeholder.com/300x200/1e3c72/fff?text=iPhone+15+Pro+Max",
            description: "Titanio, chip A17, cámara de 48MP, USB-C. Excelente rendimiento."
        }
    ],
    relojes: [
        {
            id: 201,
            name: "Apple Watch Series 9",
            price: 399,
            image: "https://via.placeholder.com/300x200/2a5298/fff?text=Apple+Watch+S9",
            description: "Pantalla siempre activa, chip S9, medición de temperatura."
        },
        {
            id: 202,
            name: "Samsung Galaxy Watch 6",
            price: 329,
            image: "https://via.placeholder.com/300x200/1e3c72/fff?text=Galaxy+Watch+6",
            description: "Reloj inteligente con análisis de sueño, ECG y deportes."
        }
    ],
    carteras: [
        {
            id: 301,
            name: "Cartera de Cuero Premium",
            price: 89.99,
            image: "https://via.placeholder.com/300x200/2a5298/fff?text=Cartera+Cuero",
            description: "Cartera de cuero genuino con múltiples ranuras para tarjetas."
        },
        {
            id: 302,
            name: "Billetera Minimalista",
            price: 49.99,
            image: "https://via.placeholder.com/300x200/1e3c72/fff?text=Billetera+RFID",
            description: "Billetera delgada con bloqueo RFID, ideal para viajes."
        }
    ]
};

function renderProducts(categoryId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = products[categoryId] || [];

    if (items.length === 0) {
        container.innerHTML = `<div class="no-products">Próximamente más productos...</div>`;
        return;
    }

    let html = '';
    items.forEach(p => {
        // URL de WhatsApp con el producto
        const whatsappMsg = `Hola%20Estoy%20interesado%20en%20${encodeURIComponent(p.name)}%20(precio%20$${p.price})`;
        const whatsappLink = `https://wa.me/920632668?text=${whatsappMsg}`;

        html += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}" loading="lazy" />
                <h3>${p.name}</h3>
                <div class="price">$${p.price.toFixed(2)}</div>
                <p class="desc">${p.description}</p>
                <a href="${whatsappLink}" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Consultar
                </a>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Renderizar todas las secciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('crocs', 'crocs-grid');
    renderProducts('iphones', 'iphones-grid');
    renderProducts('relojes', 'relojes-grid');
    renderProducts('carteras', 'carteras-grid');
});