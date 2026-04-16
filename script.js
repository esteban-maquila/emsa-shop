/* ==========================================================
   EMSA — Landing Page Script

   ╔══════════════════════════════════════════════════════════╗
   ║  CONFIGURACIÓN FÁCIL DE EDITAR                          ║
   ║  Modifica los valores de abajo para ajustar precios,    ║
   ║  colores, tallas, WhatsApp y textos.                    ║
   ╚══════════════════════════════════════════════════════════╝
   ========================================================== */

// ─── NÚMERO DE WHATSAPP ────────────────────────────────────
const WHATSAPP_NUMBER = '573059246318';

// ─── NOMBRE DEL PRODUCTO ───────────────────────────────────
const PRODUCT_NAME = 'Jogger Premium EMSA';

// ─── PRECIOS Y COMBOS ──────────────────────────────────────
// Modifica aquí los precios de cada combo.
// price     = precio que paga el cliente
// oldPrice  = precio "antes" (tachado)
// savings   = cuánto ahorra el cliente
// discount  = porcentaje de descuento
const COMBOS = {
    1: {
        label: '1 Unidad',
        units: 1,
        price: 59900,
        oldPrice: 89900,
        savings: 30000,
        discount: 33,
        badge: null,
        recommended: false
    },
    2: {
        label: '2 Unidades',
        units: 2,
        price: 99900,
        oldPrice: 179800,
        savings: 79900,
        discount: 44,
        badge: 'MÁS VENDIDO',
        recommended: false
    },
    3: {
        label: '3 Unidades',
        units: 3,
        price: 129900,
        oldPrice: 269700,
        savings: 139800,
        discount: 52,
        badge: 'RECOMENDADO',
        recommended: true
    }
};

// ─── TALLAS DISPONIBLES ────────────────────────────────────
const AVAILABLE_SIZES = ['S', 'M', 'L', 'XL'];

// ─── COLORES DISPONIBLES ───────────────────────────────────
// name   = nombre que se muestra al usuario
// hex    = color del swatch circular
// image  = ruta a la imagen del producto en ese color
const COLORS = [
    { name: 'Negro',        hex: '#1a1a1a', image: 'multimedia/imagen/colores productos/Negro.jpg' },
    { name: 'Blanco',       hex: '#f5f5f0', image: 'multimedia/imagen/colores productos/Blanco.jpg' },
    { name: 'Gris',         hex: '#8e8e8e', image: 'multimedia/imagen/colores productos/Gris.jpg' },
    { name: 'Crema',        hex: '#f5e6d3', image: 'multimedia/imagen/colores productos/Crema.jpg' },
    { name: 'Rosa',         hex: '#e8b4b8', image: 'multimedia/imagen/colores productos/Rosa.jpg' },
    { name: 'Lila',         hex: '#c8a2c8', image: 'multimedia/imagen/colores productos/Lila.jpg' },
    { name: 'Azul Cielo',   hex: '#87ceeb', image: 'multimedia/imagen/colores productos/Azul Cielo.jpg' },
    { name: 'Verde Menta',  hex: '#98d4a2', image: 'multimedia/imagen/colores productos/Verde Menta.jpg' },
    { name: 'Verde Militar', hex: '#5a6e4b', image: 'multimedia/imagen/colores productos/Verde Militar.jpg' },
    { name: 'Camel',        hex: '#c5a67d', image: 'multimedia/imagen/colores productos/Camel.jpg' }
];

// ─── TESTIMONIOS ───────────────────────────────────────────
const TESTIMONIALS = [
    {
        photo: 'multimedia/imagen/material visual producto/testimonio 1.jpg',
        text: 'Me encantó la tela, es super suave y la horma es perfecta. Ya pedí en otro color.',
        author: 'Carolina M.',
        city: 'Bogotá'
    },
    {
        photo: 'multimedia/imagen/material visual producto/testimonio 2.jpg',
        text: 'Lo uso para todo: gym, salir, estar en casa. Es demasiado cómodo y se ve muy bien.',
        author: 'Valentina R.',
        city: 'Medellín'
    },
    {
        photo: 'multimedia/imagen/material visual producto/testimonio 3.jpg',
        text: 'Llegó super rápido y la calidad es increíble. Cero arrepentimientos, 100% recomendado.',
        author: 'Daniela P.',
        city: 'Cali'
    }
];

// ─── DEPARTAMENTOS Y CIUDADES DE COLOMBIA ──────────────────
const DEPARTMENTS = {
    "Amazonas": ["Leticia", "Puerto Nariño"],
    "Antioquia": ["Medellín", "Bello", "Itagüí", "Envigado", "Apartadó", "Rionegro", "Turbo", "Caucasia", "Sabaneta", "La Estrella", "Copacabana", "Caldas", "Barbosa", "Girardota"],
    "Arauca": ["Arauca", "Saravena", "Tame", "Fortul"],
    "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Sabanalarga", "Baranoa", "Galapa", "Puerto Colombia"],
    "Bolívar": ["Cartagena", "Magangué", "Turbaco", "El Carmen de Bolívar", "Arjona", "San Juan Nepomuceno"],
    "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Paipa", "Villa de Leyva"],
    "Caldas": ["Manizales", "Villamaría", "Chinchiná", "La Dorada", "Anserma"],
    "Caquetá": ["Florencia", "San Vicente del Caguán", "Puerto Rico"],
    "Casanare": ["Yopal", "Aguazul", "Villanueva", "Tauramena"],
    "Cauca": ["Popayán", "Santander de Quilichao", "Puerto Tejada", "Piendamó"],
    "Cesar": ["Valledupar", "Aguachica", "Codazzi", "Bosconia", "La Jagua de Ibirico"],
    "Chocó": ["Quibdó", "Istmina", "Condoto", "Tadó"],
    "Córdoba": ["Montería", "Cereté", "Lorica", "Sahagún", "Planeta Rica", "Montelíbano"],
    "Cundinamarca": ["Bogotá D.C.", "Soacha", "Fusagasugá", "Facatativá", "Chía", "Zipaquirá", "Girardot", "Mosquera", "Madrid", "Funza", "Cajicá", "Sibaté", "La Calera", "Cota"],
    "Guainía": ["Inírida"],
    "Guaviare": ["San José del Guaviare"],
    "Huila": ["Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre"],
    "La Guajira": ["Riohacha", "Maicao", "Uribia", "Manaure", "San Juan del Cesar"],
    "Magdalena": ["Santa Marta", "Ciénaga", "Fundación", "Plato", "El Banco"],
    "Meta": ["Villavicencio", "Acacías", "Granada", "Puerto López", "San Martín"],
    "Nariño": ["Pasto", "Tumaco", "Ipiales", "La Unión", "Túquerres"],
    "Norte de Santander": ["Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Los Patios"],
    "Putumayo": ["Mocoa", "Puerto Asís", "Orito", "Valle del Guamuez"],
    "Quindío": ["Armenia", "Calarcá", "Montenegro", "La Tebaida", "Circasia"],
    "Risaralda": ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia"],
    "San Andrés y Providencia": ["San Andrés", "Providencia"],
    "Santander": ["Bucaramanga", "Floridablanca", "Barrancabermeja", "Girón", "Piedecuesta", "San Gil"],
    "Sucre": ["Sincelejo", "Corozal", "San Marcos", "Tolú", "Sampués"],
    "Tolima": ["Ibagué", "Espinal", "Melgar", "Honda", "Mariquita", "Chaparral"],
    "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tuluá", "Yumbo", "Cartago", "Jamundí", "Buga", "Candelaria"],
    "Vaupés": ["Mitú"],
    "Vichada": ["Puerto Carreño"]
};


/* ==========================================================
   NO EDITAR DEBAJO DE ESTA LÍNEA
   (a menos que sepas lo que haces)
   ========================================================== */

// ─── Helpers ───────────────────────────────────────────────
const formatCOP = (n) => `$${n.toLocaleString('es-CO')}`;
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── State ─────────────────────────────────────────────────
let selectedCombo = 1;
let selectedColor = COLORS[0].name;

// ─── DOM Ready ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initColorSwatches();
    initBundles();
    initModalBundles();
    initThumbnails();
    initTestimonials();
    initDepartments();
    initModal();
    initStickyNav();
    initStickyCta();
    initWhatsApp();
    initRevealAnimations();
    updatePricingUI();
});

// ─── Color Swatches ────────────────────────────────────────
function initColorSwatches() {
    const container = $('#color-swatches');
    if (!container) return;

    COLORS.forEach((color, i) => {
        const btn = document.createElement('button');
        btn.className = `color-swatch${i === 0 ? ' active' : ''}`;
        btn.style.backgroundColor = color.hex;
        btn.title = color.name;
        btn.setAttribute('aria-label', color.name);
        if (color.hex === '#f5f5f0' || color.hex === '#f5e6d3') {
            btn.style.border = '2px solid #ddd';
        }
        btn.addEventListener('click', () => {
            $$('.color-swatch').forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            selectedColor = color.name;
            $('#selected-color-name').textContent = color.name;
            // Update main image to color image
            const mainImg = $('#main-product-img');
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = color.image;
                mainImg.style.opacity = '1';
            }, 200);
        });
        container.appendChild(btn);
    });
}

// ─── Bundle Selector (Landing) ─────────────────────────────
function initBundles() {
    const container = $('#bundle-options');
    if (!container) return;

    Object.entries(COMBOS).forEach(([key, combo]) => {
        const card = document.createElement('div');
        card.className = `bundle-card${key === '1' ? ' active' : ''}${combo.recommended ? ' recommended' : ''}`;
        card.dataset.bundle = key;

        let badgeHTML = '';
        if (combo.badge) {
            badgeHTML = `<span class="bundle-badge">${combo.badge}</span>`;
        }

        card.innerHTML = `
            ${badgeHTML}
            <div class="bundle-left">
                <span class="bundle-name">${combo.label}</span>
                <span class="bundle-meta">Ahorras ${formatCOP(combo.savings)} &middot; ${combo.discount}% OFF</span>
            </div>
            <div class="bundle-right">
                <span class="bundle-price">${formatCOP(combo.price)}</span>
                <span class="bundle-old-price">${formatCOP(combo.oldPrice)}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            $$('.bundle-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedCombo = parseInt(key);
            updatePricingUI();
            syncModalBundle();
            renderModalSizes();
        });

        container.appendChild(card);
    });
}

// ─── Bundle Selector (Modal) ───────────────────────────────
function initModalBundles() {
    const container = $('#modal-bundle-grid');
    if (!container) return;

    Object.entries(COMBOS).forEach(([key, combo]) => {
        const btn = document.createElement('button');
        btn.className = `modal-bundle-btn${key === '1' ? ' active' : ''}`;
        btn.dataset.bundle = key;
        btn.innerHTML = `${combo.label}<small>${formatCOP(combo.price)}</small>`;

        btn.addEventListener('click', () => {
            $$('.modal-bundle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCombo = parseInt(key);
            updatePricingUI();
            syncLandingBundle();
            renderModalSizes();
        });

        container.appendChild(btn);
    });
}

function syncModalBundle() {
    $$('.modal-bundle-btn').forEach(b => {
        b.classList.toggle('active', parseInt(b.dataset.bundle) === selectedCombo);
    });
}

function syncLandingBundle() {
    $$('.bundle-card').forEach(c => {
        c.classList.toggle('active', parseInt(c.dataset.bundle) === selectedCombo);
    });
}

// ─── Update Pricing Display ────────────────────────────────
function updatePricingUI() {
    const combo = COMBOS[selectedCombo];

    const elPrice = $('#display-price');
    const elOld = $('#display-old-price');
    const elDiscount = $('#display-discount');
    const elSummaryPrice = $('#summary-price');
    const elSummaryCombo = $('#summary-combo-name');
    const elSummaryColor = $('#summary-color');

    if (elPrice) elPrice.textContent = formatCOP(combo.price);
    if (elOld) elOld.textContent = formatCOP(combo.oldPrice);
    if (elDiscount) elDiscount.textContent = `${combo.discount}% OFF`;
    if (elSummaryPrice) elSummaryPrice.textContent = formatCOP(combo.price);
    if (elSummaryCombo) elSummaryCombo.textContent = combo.label;
    if (elSummaryColor) elSummaryColor.textContent = `Color: ${selectedColor}`;
}

// ─── Modal Sizes ───────────────────────────────────────────
function renderModalSizes() {
    const container = $('#modal-sizes-container');
    if (!container) return;

    const combo = COMBOS[selectedCombo];
    container.innerHTML = `<h4>Talla${combo.units > 1 ? 's' : ''} y color${combo.units > 1 ? 'es' : ''}</h4>`;

    for (let i = 1; i <= combo.units; i++) {
        const row = document.createElement('div');
        row.className = 'size-row';

        // Size select
        const sizeGroup = document.createElement('div');
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = `Talla unidad ${i} *`;
        sizeLabel.setAttribute('for', `size-${i}`);
        const sizeSelect = document.createElement('select');
        sizeSelect.id = `size-${i}`;
        sizeSelect.name = `size${i}`;
        sizeSelect.required = true;
        sizeSelect.innerHTML = `<option value="">Selecciona</option>` +
            AVAILABLE_SIZES.map(s => `<option value="${s}">${s}</option>`).join('');
        sizeGroup.appendChild(sizeLabel);
        sizeGroup.appendChild(sizeSelect);

        // Color select
        const colorGroup = document.createElement('div');
        const colorLabel = document.createElement('label');
        colorLabel.textContent = `Color unidad ${i} *`;
        colorLabel.setAttribute('for', `color-${i}`);
        const colorSelect = document.createElement('select');
        colorSelect.id = `color-${i}`;
        colorSelect.name = `color${i}`;
        colorSelect.required = true;
        colorSelect.innerHTML = `<option value="">Selecciona</option>` +
            COLORS.map(c => `<option value="${c.name}"${c.name === selectedColor ? ' selected' : ''}>${c.name}</option>`).join('');
        colorGroup.appendChild(colorLabel);
        colorGroup.appendChild(colorSelect);

        row.appendChild(sizeGroup);
        row.appendChild(colorGroup);
        container.appendChild(row);
    }
}

// ─── Thumbnails ────────────────────────────────────────────
function initThumbnails() {
    const thumbs = $$('.thumb');
    const mainImg = $('#main-product-img');
    if (!thumbs.length || !mainImg) return;

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = thumb.dataset.src;
                mainImg.style.opacity = '1';
            }, 200);
        });
    });
}

// ─── Testimonials ──────────────────────────────────────────
function initTestimonials() {
    const container = $('#testimonials-carousel');
    if (!container) return;

    TESTIMONIALS.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <img src="${t.photo}" alt="Testimonio de ${t.author}" class="testimonial-photo" loading="lazy">
            <div class="testimonial-body">
                <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p class="testimonial-text">"${t.text}"</p>
                <p class="testimonial-author">${t.author} — ${t.city}</p>
                <p class="testimonial-verified">Compra verificada &#10003;</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// ─── Departments & Cities ──────────────────────────────────
function initDepartments() {
    const deptSelect = $('#department');
    const citySelect = $('#city');
    if (!deptSelect || !citySelect) return;

    Object.keys(DEPARTMENTS).sort().forEach(dept => {
        const opt = document.createElement('option');
        opt.value = dept;
        opt.textContent = dept;
        deptSelect.appendChild(opt);
    });

    deptSelect.addEventListener('change', () => {
        const dept = deptSelect.value;
        citySelect.innerHTML = '<option value="">Selecciona ciudad</option>';

        if (dept && DEPARTMENTS[dept]) {
            DEPARTMENTS[dept].forEach(city => {
                const opt = document.createElement('option');
                opt.value = city;
                opt.textContent = city;
                citySelect.appendChild(opt);
            });
            citySelect.disabled = false;
        } else {
            citySelect.disabled = true;
        }
    });
}

// ─── Modal ─────────────────────────────────────────────────
function initModal() {
    const modal = $('#checkout-modal');
    const btnBuy = $('#btn-buy');
    const btnSticky = $('#btn-sticky');
    const btnClose = $('#modal-close');
    const form = $('#checkout-form');

    if (!modal) return;

    const openModal = () => {
        renderModalSizes();
        updatePricingUI();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (btnBuy) btnBuy.addEventListener('click', openModal);
    if (btnSticky) btnSticky.addEventListener('click', openModal);

    if (btnClose) btnClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Form submit → WhatsApp
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation
            const phone = $('#phone');
            const phoneError = $('#phone-error');
            if (phone && phone.value.length !== 10) {
                phoneError.style.display = 'block';
                phone.focus();
                return;
            }
            if (phoneError) phoneError.style.display = 'none';

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Build WhatsApp message
            const combo = COMBOS[selectedCombo];
            const fname = $('#fname').value;
            const lname = $('#lname').value;
            const phoneVal = phone.value;
            const email = $('#email').value;
            const dept = $('#department').value;
            const city = $('#city').value;
            const address = $('#address').value;
            const neighborhood = $('#neighborhood').value;
            const apto = $('#apto').value;

            let sizesInfo = '';
            for (let i = 1; i <= combo.units; i++) {
                const size = $(`#size-${i}`)?.value || 'No seleccionada';
                const color = $(`#color-${i}`)?.value || 'No seleccionado';
                sizesInfo += `\n  Unidad ${i}: Talla ${size}, Color ${color}`;
            }

            const msg = `¡Hola EMSA! Quiero confirmar mi pedido:

*${PRODUCT_NAME}*
Promoción: ${combo.label} — ${formatCOP(combo.price)}${sizesInfo}

*Datos de envío:*
Nombre: ${fname} ${lname}
Celular: ${phoneVal}${email ? '\nEmail: ' + email : ''}
${dept}, ${city}
Dirección: ${address}
Barrio: ${neighborhood}${apto ? '\nDetalles: ' + apto : ''}

Pago contra entrega. ¡Gracias!`;

            const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
            window.open(waURL, '_blank');
        });
    }
}

// ─── Sticky Navbar ─────────────────────────────────────────
function initStickyNav() {
    const navbar = $('#navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ─── Sticky CTA (Mobile) ──────────────────────────────────
function initStickyCta() {
    const cta = $('#sticky-cta');
    const hero = $('.hero');
    if (!cta || !hero) return;

    const observer = new IntersectionObserver(([entry]) => {
        cta.classList.toggle('visible', !entry.isIntersecting);
    }, { threshold: 0 });

    observer.observe(hero);
}

// ─── WhatsApp Float Link ───────────────────────────────────
function initWhatsApp() {
    const waBtn = $('#whatsapp-float');
    if (!waBtn) return;

    const msg = `Hola EMSA, tengo una duda sobre el ${PRODUCT_NAME}`;
    waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── Reveal on Scroll ──────────────────────────────────────
function initRevealAnimations() {
    const elements = $$('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}
