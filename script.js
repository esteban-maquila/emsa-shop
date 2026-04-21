/* ==========================================================
   EMSA — Landing Page Script

   ╔══════════════════════════════════════════════════════════╗
   ║  CONFIGURACIÓN FÁCIL DE EDITAR                          ║
   ║  Modifica los valores de abajo para ajustar precios,    ║
   ║  colores, tallas, WhatsApp y textos.                    ║
   ╚══════════════════════════════════════════════════════════╝
   ========================================================== */

// ─── NÚMERO DE WHATSAPP ────────────────────────────────────
const WHATSAPP_NUMBER = '573234933812';

// ─── WEB3FORMS API KEY ─────────────────────────────────────
// Los datos del formulario se almacenan en https://web3forms.com
const WEB3FORMS_KEY = 'ad6aaa69-682e-490d-823d-3bc00b62a3c5';

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
        price: 89900,
        oldPrice: 119800,
        savings: 29900,
        discount: 25,
        badge: 'MÁS VENDIDO',
        recommended: false
    },
    3: {
        label: '3 Unidades',
        units: 3,
        price: 109900,
        oldPrice: 170700,
        savings: 60900,
        discount: 36,
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
// NOTA: Excluidos por falta de cobertura logística:
// Amazonas, Chocó, Guainía, San Andrés y Providencia, Vaupés, Vichada.
const DEPARTMENTS = {
    "Antioquia": ["Medellín", "Bello", "Itagüí", "Envigado", "Sabaneta", "La Estrella", "Copacabana", "Caldas", "Barbosa", "Girardota", "Rionegro", "La Ceja", "Marinilla", "El Retiro", "El Carmen de Viboral", "Guarne", "San Vicente", "Santo Domingo", "Apartadó", "Turbo", "Chigorodó", "Carepa", "Necoclí", "Arboletes", "Caucasia", "El Bagre", "Zaragoza", "Tarazá", "Yarumal", "Santa Rosa de Osos", "Don Matías", "Entrerríos", "Santa Fe de Antioquia", "Sopetrán", "San Jerónimo", "Jericó", "Andes", "Jardín", "Támesis", "Ciudad Bolívar", "Amagá", "Fredonia", "Venecia", "Sonsón", "Abejorral", "La Unión", "Urrao", "Salgar", "Concordia", "Segovia", "Remedios", "Puerto Berrío", "Puerto Triunfo", "Puerto Nare", "Yondó"],
    "Arauca": ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame"],
    "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Sabanalarga", "Baranoa", "Galapa", "Puerto Colombia", "Sabanagrande", "Santo Tomás", "Palmar de Varela", "Polonuevo", "Usiacurí", "Tubará", "Juan de Acosta", "Piojó", "Luruaco", "Repelón", "Manatí", "Candelaria", "Campo de la Cruz", "Santa Lucía", "Suan", "Ponedera"],
    "Bolívar": ["Cartagena", "Magangué", "Turbaco", "Arjona", "El Carmen de Bolívar", "San Juan Nepomuceno", "San Jacinto", "María La Baja", "Mompós", "Santa Rosa", "Santa Catalina", "Villanueva", "Clemencia", "Turbaná", "Mahates", "Soplaviento", "San Estanislao", "Calamar", "San Pablo", "Simití", "Morales", "Santa Rosa del Sur", "Achí", "Magangué"],
    "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Paipa", "Villa de Leyva", "Moniquirá", "Puerto Boyacá", "Garagoa", "Samacá", "Nobsa", "Tibasosa", "Soatá", "Ramiriquí", "Cómbita", "Miraflores", "Ventaquemada", "Santa Rosa de Viterbo", "Toca", "Saboyá", "Pauna", "Muzo", "Chivor", "Sáchica", "Tibaná", "Tenza", "Guateque", "Otanche", "Aquitania", "Mongua", "Monguí"],
    "Caldas": ["Manizales", "Villamaría", "Chinchiná", "La Dorada", "Anserma", "Riosucio", "Supía", "Salamina", "Aguadas", "Aranzazu", "Neira", "Pácora", "Marquetalia", "Manzanares", "Pensilvania", "Samaná", "Marmato", "Belalcázar", "Viterbo", "Risaralda", "San José", "Filadelfia", "La Merced", "Palestina", "Victoria", "Norcasia"],
    "Caquetá": ["Florencia", "San Vicente del Caguán", "Puerto Rico", "La Montañita", "El Doncello", "El Paujil", "Belén de los Andaquíes", "Morelia", "Curillo", "Albania", "Valparaíso", "Milán", "Solita", "San José del Fragua", "Cartagena del Chairá"],
    "Casanare": ["Yopal", "Aguazul", "Villanueva", "Tauramena", "Monterrey", "Paz de Ariporo", "Trinidad", "Orocué", "Pore", "Maní", "Hato Corozal", "Nunchía", "San Luis de Palenque", "Támara", "Sabanalarga", "Recetor", "Chámeza"],
    "Cauca": ["Popayán", "Santander de Quilichao", "Puerto Tejada", "Piendamó", "Patía", "Silvia", "Cajibío", "El Tambo", "Corinto", "Miranda", "Timbío", "Morales", "Caloto", "Suárez", "Villa Rica", "Padilla", "Caldono", "Balboa", "Argelia", "Bolívar", "Mercaderes", "La Vega", "Toribío", "Jambaló", "Totoró", "Rosas", "Sotará", "Buenos Aires", "Inzá", "Páez"],
    "Cesar": ["Valledupar", "Aguachica", "Agustín Codazzi", "Bosconia", "La Jagua de Ibirico", "Chiriguaná", "Curumaní", "Pailitas", "Pelaya", "Tamalameque", "Astrea", "El Copey", "El Paso", "La Paz", "Manaure Balcón del Cesar", "Pueblo Bello", "San Alberto", "San Diego", "San Martín", "Becerril", "Chimichagua", "González", "Gamarra", "Río de Oro"],
    "Córdoba": ["Montería", "Cereté", "Lorica", "Sahagún", "Planeta Rica", "Montelíbano", "Tierralta", "Ciénaga de Oro", "Chinú", "Pueblo Nuevo", "Valencia", "San Bernardo del Viento", "San Antero", "Los Córdobas", "Puerto Libertador", "Buenavista", "La Apartada", "Moñitos", "Ayapel", "San Andrés de Sotavento", "San Carlos", "Tuchín", "Purísima", "Momil", "Chimá", "Cotorra", "San José de Uré", "San Pelayo", "Canalete", "Puerto Escondido"],
    "Cundinamarca": ["Bogotá D.C.", "Soacha", "Fusagasugá", "Facatativá", "Chía", "Zipaquirá", "Girardot", "Mosquera", "Madrid", "Funza", "Cajicá", "Sibaté", "La Calera", "Cota", "Tocancipá", "Gachancipá", "Sopó", "Tabio", "Tenjo", "Subachoque", "El Rosal", "Bojacá", "Ubaté", "Villeta", "Pacho", "Cáqueza", "Chocontá", "Guaduas", "La Mesa", "Anapoima", "Tocaima", "Ricaurte", "Nilo", "Agua de Dios", "Guasca", "Sesquilé", "Suesca", "Fómeque", "Choachí", "Ubaque", "Une", "Tibacuy", "Silvania", "Arbeláez", "Pandi", "San Bernardo", "Cabrera", "Venecia", "Viotá", "Apulo", "Quipile", "Cachipay", "Anolaima", "Albán", "San Antonio del Tequendama", "El Colegio", "Tena", "San Francisco", "Supatá", "La Vega", "Sasaima", "Nocaima", "Vergara", "Nimaima", "Quebradanegra", "Útica", "Puerto Salgar", "Caparrapí", "Yacopí", "La Palma", "Topaipí", "El Peñón", "Paime"],
    "Guaviare": ["San José del Guaviare", "Calamar", "El Retorno", "Miraflores"],
    "Huila": ["Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre", "Gigante", "Aipe", "Palermo", "Rivera", "Tello", "Yaguará", "Villavieja", "Hobo", "Teruel", "Iquira", "Nátaga", "Agrado", "Altamira", "Baraya", "Colombia", "Elías", "Guadalupe", "Isnos", "Oporapa", "Paicol", "Palestina", "Pital", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tesalia", "Timaná", "Acevedo", "Algeciras"],
    "La Guajira": ["Riohacha", "Maicao", "Uribia", "Manaure", "San Juan del Cesar", "Dibulla", "Albania", "Barrancas", "Distracción", "El Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "Urumita", "Villanueva"],
    "Magdalena": ["Santa Marta", "Ciénaga", "Fundación", "Plato", "El Banco", "Aracataca", "Zona Bananera", "Pivijay", "Sitionuevo", "Remolino", "Salamina", "El Retén", "Algarrobo", "Ariguaní", "Chivolo", "Concordia", "El Piñón", "Guamal", "Nueva Granada", "Pedraza", "Pijiño del Carmen", "Puebloviejo", "Sabanas de San Ángel", "San Sebastián de Buenavista", "San Zenón", "Santa Bárbara de Pinto", "Santa Ana", "Tenerife", "Zapayán", "Cerro San Antonio"],
    "Meta": ["Villavicencio", "Acacías", "Granada", "Puerto López", "San Martín", "Cumaral", "Puerto Gaitán", "Restrepo", "Guamal", "Castilla la Nueva", "San Carlos de Guaroa", "Cubarral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Lejanías", "Mesetas", "Puerto Lleras", "Puerto Rico", "San Juan de Arama", "San Juanito", "Vistahermosa", "Barranca de Upía", "Cabuyaro"],
    "Nariño": ["Pasto", "Tumaco", "Ipiales", "La Unión", "Túquerres", "Samaniego", "Sandoná", "Consacá", "Barbacoas", "Ricaurte", "La Cruz", "Buesaco", "Chachagüí", "El Charco", "Francisco Pizarro", "La Llanada", "La Tola", "Linares", "Mosquera", "Olaya Herrera", "Policarpa", "Roberto Payán", "San Bernardo", "San Lorenzo", "San Pedro de Cartago", "Santa Bárbara", "El Tablón de Gómez", "Taminango", "Yacuanquer", "Cumbal", "Aldana", "Ancuya", "Arboleda", "Belén", "Colón", "Contadero", "Córdoba", "Cuaspud", "El Peñol", "El Rosario", "Funes", "Guaitarilla", "Gualmatán", "Iles", "Imués", "La Florida", "Leiva", "Los Andes", "Mallama", "Nariño", "Ospina", "Potosí", "Providencia", "Puerres", "Pupiales", "San Pablo", "San Pedro", "Santacruz", "Sapuyes"],
    "Norte de Santander": ["Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Los Patios", "El Zulia", "Tibú", "Chinácota", "Sardinata", "Abrego", "Salazar", "Toledo", "Mutiscua", "Pamplonita", "Puerto Santander", "Ragonvalia", "San Calixto", "San Cayetano", "Santiago", "Teorama", "Villa Caro", "Bochalema", "Cácota", "Chitagá", "Convención", "Cucutilla", "Durania", "El Carmen", "El Tarra", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa", "Labateca", "Lourdes", "Silos", "Bucarasica", "Arboledas", "Cachirá"],
    "Putumayo": ["Mocoa", "Puerto Asís", "Orito", "Valle del Guamuez", "Puerto Caicedo", "Puerto Guzmán", "Puerto Leguízamo", "San Francisco", "San Miguel", "Santiago", "Sibundoy", "Villagarzón", "Colón"],
    "Quindío": ["Armenia", "Calarcá", "Montenegro", "La Tebaida", "Circasia", "Filandia", "Quimbaya", "Salento", "Buenavista", "Córdoba", "Génova", "Pijao"],
    "Risaralda": ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia", "Marsella", "Belén de Umbría", "Quinchía", "Guática", "Apía", "Balboa", "La Celia", "Mistrató", "Pueblo Rico", "Santuario"],
    "Santander": ["Bucaramanga", "Floridablanca", "Barrancabermeja", "Girón", "Piedecuesta", "San Gil", "Málaga", "Socorro", "Barbosa", "Cimitarra", "Lebrija", "Zapatoca", "Suaita", "Puente Nacional", "Vélez", "Mogotes", "Rionegro", "Oiba", "Charalá", "Curití", "Pinchote", "Los Santos", "El Playón", "Matanza", "Sabana de Torres", "Puerto Wilches", "San Vicente de Chucurí", "Concepción", "Capitanejo", "Bolívar", "Guaca", "Onzaga", "Aratoca", "Barichara", "Villanueva", "Cabrera", "Confines", "Contratación", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "Encino", "Enciso", "Florián", "Galán", "Gámbita", "Guadalupe", "Guapotá", "Güepsa", "Hato", "Jesús María", "Jordán", "La Belleza", "La Paz", "Landázuri", "Macaravita", "Molagavita", "Ocamonte", "Palmar", "Palmas del Socorro", "Páramo", "Puerto Parra", "Santa Bárbara", "Santa Helena del Opón", "Simacota", "Suratá", "Tona", "Valle de San José", "Vetas"],
    "Sucre": ["Sincelejo", "Corozal", "San Marcos", "Tolú", "Sampués", "San Onofre", "Majagual", "Sucre", "Coveñas", "Colosó", "Chalán", "El Roble", "Galeras", "Guaranda", "La Unión", "Los Palmitos", "Morroa", "Ovejas", "Palmito", "San Antonio de Palmito", "San Benito Abad", "San Juan de Betulia", "Sincé", "San Pedro", "Buenavista", "Caimito", "La Toluviejo", "San Luis de Sincé"],
    "Tolima": ["Ibagué", "Espinal", "Melgar", "Honda", "Mariquita", "Chaparral", "Líbano", "Flandes", "Purificación", "Guamo", "Saldaña", "Planadas", "Fresno", "Ataco", "Coyaima", "Natagaima", "Cajamarca", "Prado", "Rovira", "Falan", "Armero Guayabal", "Venadillo", "Lérida", "Ambalema", "Alpujarra", "Anzoátegui", "Carmen de Apicalá", "Coello", "Cunday", "Dolores", "Herveo", "Icononzo", "Murillo", "Ortega", "Palocabildo", "Piedras", "Roncesvalles", "San Antonio", "San Luis", "Santa Isabel", "Suárez", "Valle de San Juan", "Villahermosa", "Villarrica", "Casabianca"],
    "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tuluá", "Yumbo", "Cartago", "Jamundí", "Buga", "Candelaria", "Pradera", "Florida", "Zarzal", "La Unión", "Sevilla", "Caicedonia", "Ginebra", "Restrepo", "Roldanillo", "El Cerrito", "Dagua", "La Cumbre", "Yotoco", "San Pedro", "Guacarí", "Andalucía", "Bugalagrande", "Riofrío", "Trujillo", "Calima", "El Águila", "Ansermanuevo", "Alcalá", "Ulloa", "La Victoria", "Obando", "El Dovio", "Toro", "Bolívar", "Versalles", "Argelia", "Vijes"]
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
    initProductCarousel();
    initTestimonials();
    initDepartments();
    initModal();
    initStickyNav();
    initStickyCta();
    initWhatsApp();
    initRevealAnimations();
    initStockAlert();
    initSocialProofToast();
    initCountdown();
    initSizeGuide();
    initLightbox();
    initCheckoutProgress();
    updatePricingUI();
});

// ─── Countdown Timer (urgencia de oferta) ──────────────────
// Persiste en localStorage por 12 horas. Al llegar a cero,
// se reinicia automáticamente para no romper la oferta.
const COUNTDOWN_DURATION_MS = 12 * 60 * 60 * 1000; // 12h
const COUNTDOWN_KEY = 'emsa_offer_end_v1';

function initCountdown() {
    const h = document.getElementById('cd-h');
    const m = document.getElementById('cd-m');
    const s = document.getElementById('cd-s');
    if (!h || !m || !s) return;

    let endAt = parseInt(localStorage.getItem(COUNTDOWN_KEY) || '0', 10);
    const now = Date.now();
    if (!endAt || endAt < now) {
        endAt = now + COUNTDOWN_DURATION_MS;
        localStorage.setItem(COUNTDOWN_KEY, String(endAt));
    }

    const pad = (n) => String(n).padStart(2, '0');

    const tick = () => {
        const diff = endAt - Date.now();
        if (diff <= 0) {
            // reinicia para mantener urgencia
            endAt = Date.now() + COUNTDOWN_DURATION_MS;
            localStorage.setItem(COUNTDOWN_KEY, String(endAt));
        }
        const total = Math.max(0, endAt - Date.now());
        const hh = Math.floor(total / (1000 * 60 * 60));
        const mm = Math.floor((total / (1000 * 60)) % 60);
        const ss = Math.floor((total / 1000) % 60);
        h.textContent = pad(hh);
        m.textContent = pad(mm);
        s.textContent = pad(ss);
    };

    tick();
    setInterval(tick, 1000);
}

// ─── Size Guide Modal ──────────────────────────────────────
function initSizeGuide() {
    const modal = document.getElementById('size-guide-modal');
    const openers = [
        document.getElementById('size-guide-link'),
        document.getElementById('faq-size-guide-link')
    ].filter(Boolean);
    const closeBtn = document.getElementById('size-guide-close');
    if (!modal || !openers.length) return;

    const open = (e) => {
        if (e) e.preventDefault();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };

    openers.forEach(o => o.addEventListener('click', open));
    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
}

// ─── Lightbox (zoom de galería) ────────────────────────────
function initLightbox() {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');
    const lbCurrent = document.getElementById('lightbox-current');
    const lbTotal = document.getElementById('lightbox-total');
    if (!lb || !lbImg) return;

    // Construye lista dinámica: imagen del color actual + slides del carrusel
    const carouselImgs = Array.from(document.querySelectorAll('#product-carousel-track img'))
        .map(img => ({ src: img.getAttribute('src'), alt: img.getAttribute('alt') || '' }));

    let images = [];
    let index = 0;

    const buildImages = () => {
        const main = document.getElementById('main-product-img');
        const mainSrc = main ? main.getAttribute('src') : null;
        images = mainSrc
            ? [{ src: mainSrc, alt: main.getAttribute('alt') || '' }, ...carouselImgs]
            : carouselImgs.slice();
        if (lbTotal) lbTotal.textContent = String(images.length);
    };

    const render = () => {
        if (!images.length) return;
        index = (index + images.length) % images.length;
        lbImg.src = images[index].src;
        lbImg.alt = images[index].alt;
        if (lbCurrent) lbCurrent.textContent = String(index + 1);
    };

    const open = (startIdx = 0) => {
        buildImages();
        if (!images.length) return;
        index = startIdx;
        render();
        lb.classList.add('open');
        lb.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        lb.classList.remove('open');
        lb.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // Click en imagen principal abre lightbox
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) mainImg.addEventListener('click', () => open(0));

    // Click en slides del carrusel también abre
    document.querySelectorAll('#product-carousel-track img').forEach((img, i) => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => open(i + 1));
    });

    if (lbClose) lbClose.addEventListener('click', close);
    if (lbPrev) lbPrev.addEventListener('click', () => { index--; render(); });
    if (lbNext) lbNext.addEventListener('click', () => { index++; render(); });

    lb.addEventListener('click', (e) => {
        if (e.target === lb) close();
    });

    document.addEventListener('keydown', (e) => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') { index--; render(); }
        if (e.key === 'ArrowRight') { index++; render(); }
    });

    // Swipe en mobile
    let touchStartX = 0;
    lb.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 50) {
            if (diff < 0) { index++; } else { index--; }
            render();
        }
    });
}

// ─── Checkout Progress (paso visual del modal) ─────────────
function initCheckoutProgress() {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    const steps = document.querySelectorAll('.cp-step');
    const fill1 = document.getElementById('cp-bar-fill');
    const fill2 = document.getElementById('cp-bar-fill-2');
    if (!steps.length) return;

    const setStep = (n) => {
        steps.forEach(s => {
            const step = parseInt(s.dataset.step);
            s.classList.remove('active', 'completed');
            if (step < n) s.classList.add('completed');
            if (step === n) s.classList.add('active');
        });
        if (fill1) fill1.style.width = n >= 2 ? '100%' : '0%';
        if (fill2) fill2.style.width = n >= 3 ? '100%' : '0%';
    };

    // Paso 1 al abrir modal (producto seleccionado)
    // Cuando el usuario empieza a llenar el form → paso 2
    const firstInput = form.querySelector('input, select');
    let promotedToStep2 = false;
    form.addEventListener('focusin', () => {
        if (!promotedToStep2) {
            setStep(2);
            promotedToStep2 = true;
        }
    });

    // Cuando todos los campos requeridos están completos → paso 3
    const checkCompleteness = () => {
        const required = form.querySelectorAll('[required]');
        const allFilled = Array.from(required).every(el => el.value && el.value.trim() !== '');
        if (allFilled) setStep(3);
        else if (promotedToStep2) setStep(2);
    };

    form.addEventListener('input', checkCompleteness);
    form.addEventListener('change', checkCompleteness);

    // Reset al abrir modal nuevo
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        const observer = new MutationObserver(() => {
            if (!modal.classList.contains('open')) {
                promotedToStep2 = false;
                setStep(1);
            }
        });
        observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
    }
}

// ─── Stock Alert (escasez por color) ───────────────────────
// Mapa determinista color->unidades restantes (3-9) para que el número
// se mantenga consistente mientras el usuario navega.
const STOCK_BY_COLOR = {};
function getStockForColor(name) {
    if (STOCK_BY_COLOR[name] == null) {
        // hash simple basado en el nombre para obtener 3-9
        let h = 0;
        for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
        STOCK_BY_COLOR[name] = 3 + (h % 7);
    }
    return STOCK_BY_COLOR[name];
}

function updateStockAlert() {
    const countEl = document.getElementById('stock-count');
    const nameEl = document.getElementById('stock-color-name');
    const fill = document.getElementById('stock-bar-fill');
    if (!countEl || !nameEl || !fill) return;
    const stock = getStockForColor(selectedColor);
    countEl.textContent = stock;
    nameEl.textContent = selectedColor;
    // stock va de 3 a 9 → fill de 18% a 55% (siempre se ve "bajo")
    const pct = 15 + (stock - 3) * 6;
    fill.style.width = `${pct}%`;
}

function initStockAlert() {
    updateStockAlert();
    // Re-evaluar cuando cambie el color seleccionado
    document.addEventListener('click', (e) => {
        if (e.target.closest('.color-swatch')) {
            // esperar a que selectedColor se actualice en el handler del swatch
            setTimeout(updateStockAlert, 0);
        }
    });
}

// ─── Social Proof Toast ────────────────────────────────────
const TOAST_NAMES = [
    'María', 'Valentina', 'Camila', 'Laura', 'Sofía', 'Daniela', 'Paula',
    'Andrea', 'Natalia', 'Carolina', 'Juliana', 'Isabella', 'Mariana',
    'Luisa', 'Diana', 'Alejandra', 'Catalina', 'Manuela', 'Ximena', 'Sara'
];

function randomPurchase() {
    const name = TOAST_NAMES[Math.floor(Math.random() * TOAST_NAMES.length)];
    const initial = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const deptKeys = Object.keys(DEPARTMENTS);
    const dept = deptKeys[Math.floor(Math.random() * deptKeys.length)];
    const cities = DEPARTMENTS[dept];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const comboKeys = Object.keys(COMBOS);
    const comboKey = comboKeys[Math.floor(Math.random() * comboKeys.length)];
    const units = COMBOS[comboKey].units;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const minutesAgo = 1 + Math.floor(Math.random() * 18);
    return {
        name: `${name} ${initial}.`,
        city,
        qty: `${units} Jogger${units > 1 ? 's' : ''} (${color.name})`,
        img: color.image,
        time: minutesAgo === 1 ? 'hace 1 minuto' : `hace ${minutesAgo} minutos`
    };
}

function initSocialProofToast() {
    const toast = document.getElementById('social-proof-toast');
    if (!toast) return;
    const imgEl = document.getElementById('toast-img');
    const nameEl = document.getElementById('toast-name');
    const cityEl = document.getElementById('toast-city');
    const qtyEl = document.getElementById('toast-qty');
    const timeEl = document.getElementById('toast-time');
    const closeBtn = document.getElementById('toast-close');

    let dismissed = false;
    let hideTimer = null;
    let nextTimer = null;

    const show = () => {
        if (dismissed) return;
        const p = randomPurchase();
        imgEl.src = p.img;
        imgEl.alt = p.qty;
        nameEl.textContent = p.name;
        cityEl.textContent = p.city;
        qtyEl.textContent = p.qty;
        timeEl.textContent = p.time;
        toast.classList.add('visible');
        hideTimer = setTimeout(hide, 5500);
    };

    const hide = () => {
        toast.classList.remove('visible');
        if (!dismissed) {
            // siguiente en 12-22s
            nextTimer = setTimeout(show, 12000 + Math.random() * 10000);
        }
    };

    closeBtn.addEventListener('click', () => {
        dismissed = true;
        clearTimeout(hideTimer);
        clearTimeout(nextTimer);
        toast.classList.remove('visible');
    });

    // primer toast a los 8s para no molestar al entrar
    setTimeout(show, 8000);
}

// ─── Color Swatches ────────────────────────────────────────
const imageCache = new Map();

function preloadImage(src) {
    if (imageCache.has(src)) return imageCache.get(src);
    const img = new Image();
    img.src = src;
    imageCache.set(src, img);
    return img;
}

function swapMainImage(src) {
    const mainImg = $('#main-product-img');
    if (!mainImg) return;
    const current = mainImg.getAttribute('src');
    if (current && current.endsWith(src)) return;

    const preload = preloadImage(src);
    const doSwap = () => {
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
        }, 200);
    };
    if (preload.complete && preload.naturalWidth > 0) {
        doSwap();
    } else {
        preload.addEventListener('load', doSwap, { once: true });
        preload.addEventListener('error', doSwap, { once: true });
    }
}

function initColorSwatches() {
    const container = $('#color-swatches');
    if (!container) return;

    // Precarga todas las imágenes de color para evitar parpadeo al cambiar swatch
    COLORS.forEach(color => preloadImage(color.image));

    COLORS.forEach((color, i) => {
        const btn = document.createElement('button');
        btn.className = `color-swatch${i === 0 ? ' active' : ''}`;
        btn.style.backgroundColor = color.hex;
        btn.title = color.name;
        btn.dataset.name = color.name;
        btn.setAttribute('aria-label', color.name);
        if (color.hex === '#f5f5f0' || color.hex === '#f5e6d3') {
            btn.style.border = '2px solid #ddd';
        }
        btn.addEventListener('click', () => {
            if (selectedColor === color.name) return;
            $$('.color-swatch').forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            selectedColor = color.name;
            $('#selected-color-name').textContent = color.name;
            swapMainImage(color.image);
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
            // Auto-abrir el checkout al seleccionar una promoción
            setTimeout(() => {
                const btnBuy = document.getElementById('btn-buy');
                if (btnBuy) btnBuy.click();
            }, 280);
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

// ─── Product Carousel (auto-scroll) ────────────────────────
function initProductCarousel() {
    const track = document.getElementById('product-carousel-track');
    const dotsContainer = document.getElementById('product-carousel-dots');
    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll('.product-carousel-slide');
    if (!slides.length) return;

    let current = 0;
    let autoTimer = null;

    // crear dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `product-carousel-dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
        dot.addEventListener('click', () => goTo(i, true));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.product-carousel-dot');

    const goTo = (index, manual = false) => {
        current = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        if (manual) restartAuto();
    };

    const next = () => goTo(current + 1);

    const startAuto = () => { autoTimer = setInterval(next, 3500); };
    const stopAuto = () => { if (autoTimer) clearInterval(autoTimer); };
    const restartAuto = () => { stopAuto(); startAuto(); };

    // pausar al pasar el mouse
    const carousel = document.getElementById('product-carousel');
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    startAuto();
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
        if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout', {
                content_name: PRODUCT_NAME,
                content_type: 'product',
                currency: 'COP',
                value: COMBOS[selectedCombo].price,
                num_items: COMBOS[selectedCombo].units
            });
        }
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

    // Form submit → Web3Forms + WhatsApp
    if (form) {
        form.addEventListener('submit', async (e) => {
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

            // Gather form data
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
            let sizesPlain = '';
            for (let i = 1; i <= combo.units; i++) {
                const size = $(`#size-${i}`)?.value || 'No seleccionada';
                const color = $(`#color-${i}`)?.value || 'No seleccionado';
                sizesInfo += `\n  Unidad ${i}: Talla ${size}, Color ${color}`;
                sizesPlain += `Unidad ${i}: Talla ${size}, Color ${color}. `;
            }

            // Disable button while sending
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Enviando...';

            // ─── Send to Web3Forms ─────────────────────────
            const formData = {
                access_key: WEB3FORMS_KEY,
                subject: `Nuevo pedido EMSA — ${combo.label} — ${fname} ${lname}`,
                from_name: 'EMSA Tienda Online',
                Producto: PRODUCT_NAME,
                Promocion: `${combo.label} — ${formatCOP(combo.price)}`,
                Precio_anterior: formatCOP(combo.oldPrice),
                Ahorro: formatCOP(combo.savings),
                Tallas_y_colores: sizesPlain.trim(),
                Nombre: `${fname} ${lname}`,
                Celular: phoneVal,
                Email: email || 'No proporcionado',
                Departamento: dept,
                Ciudad: city,
                Direccion: address,
                Barrio: neighborhood,
                Detalles_adicionales: apto || 'N/A'
            };

            try {
                await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            } catch (_) {
                // Si falla Web3Forms, igual redirigimos a WhatsApp
            }

            // ─── Meta Pixel: Lead ──────────────────────────
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead', {
                    content_name: PRODUCT_NAME,
                    content_type: 'product',
                    currency: 'COP',
                    value: combo.price,
                    num_items: combo.units
                });
            }

            // ─── Construir URL de WhatsApp (no se abre aquí) ──
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

            // ─── Guardar URL de WhatsApp para gracias.html ──
            // Usamos sessionStorage en vez de query params porque el mensaje
            // de WhatsApp puede ser largo y los URL tienen límites.
            const orderId = 'emsa-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
            try {
                sessionStorage.setItem('emsa_wa_url_' + orderId, waURL);
                sessionStorage.setItem('emsa_customer_name_' + orderId, fname);
            } catch (_) { /* Safari modo privado */ }

            // ─── Redirigir a página de gracias ──────────────
            const params = new URLSearchParams({
                value: combo.price,
                units: combo.units,
                combo: combo.label,
                oid: orderId
            });
            window.location.href = `gracias.html?${params.toString()}`;
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

    waBtn.addEventListener('click', () => {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact', {
                content_name: PRODUCT_NAME,
                content_category: 'WhatsApp Float Button'
            });
        }
    });
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
