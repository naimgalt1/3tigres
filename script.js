/* ═══════════════════════════════════════════════════
   3TIGRES BARBERSHOP — script.js (v2)
   Menú fullscreen · i18n (ES/CA/EN) · reveal on-scroll · lightbox
   ═══════════════════════════════════════════════════ */

'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── 1. DICCIONARIO i18n ─────────────────────────── */

const I18N = {
  es: {
    'nav.about': 'NOSOTROS',
    'nav.services': 'SERVICIOS',
    'nav.gallery': 'GALERÍA',
    'nav.team': 'EQUIPO',
    'nav.location': 'UBICACIÓN',
    'nav.book': 'RESERVAR EN BOOKSY',

    'hero.eyebrow': "BARCELONA · L'EIXAMPLE",
    'hero.sub': 'Tres tigres, una navaja, y el mejor corte del barrio.',
    'hero.cta1': 'RESERVAR CITA',
    'hero.cta2': 'VER SERVICIOS',

    'stats.followers': 'SEGUIDORES',
    'stats.booksy': 'EN BOOKSY',
    'stats.years': 'AÑO ABIERTOS',

    'about.eyebrow': 'NUESTRA HISTORIA',
    'about.tagline': 'CULTURA · ESTILO · PRECISIÓN',
    'about.p1': 'Tres tigres, una navaja, y el mejor corte del barrio. Cultura urbana y precisión artesanal en pleno corazón de Barcelona.',
    'about.p2': 'Más de un año construyendo comunidad — artistas, deportistas y vecinos del barrio que confían en nosotros para su imagen.',
    'about.before': 'ANTES DE 3TIGRES',
    'about.after': 'DESPUÉS DE 3TIGRES',

    'services.eyebrow': 'LO QUE HACEMOS',
    'services.title': 'NUESTROS SERVICIOS',
    'services.s1.name': 'CORTE DE PELO',
    'services.s1.desc': 'Fade, clásico, texturizado. Cada corte a medida con acabado perfecto.',
    'services.s2.name': 'CORTE EXPRÉS',
    'services.s2.desc': 'Rapados a nivel 1.',
    'services.s3.name': 'BARBA RITUAL',
    'services.s3.desc': 'Perfilado, degradado y afeitado clásico con cuchilla.',
    'services.s4.name': 'CORTE + BARBA',
    'services.s4.desc': 'El pack completo en una sola sesión.',
    'services.s5.name': 'EXPERIENCIA 3TIGRES',
    'services.s5.desc': 'Corte, barba, cejas. El servicio definitivo.',
    'services.s6.name': 'CORTE INFANTIL',
    'services.s6.desc': 'Para los pequeños tigres. Con paciencia.',
    'services.all': 'VER TODOS EN BOOKSY ↗',

    'gallery.eyebrow': 'NUESTRO TRABAJO',
    'gallery.title': 'GALERÍA',

    'team.eyebrow': 'EL EQUIPO',
    'team.title': 'LOS TIGRES',
    'team.role1': 'HEAD BARBER',
    'team.role2': 'BARBER',
    'team.role3': 'BARBER',
    'team.bookwith': 'RESERVAR CON',

    'reviews.eyebrow': 'LO QUE DICEN',
    'reviews.title': 'CLIENTES',
    'reviews.r1': '"El mejor barbershop de Barcelona sin duda. Moises es un crack, siempre quedo perfecto."',
    'reviews.r1a': 'CLIENTE 3TIGRES',
    'reviews.r2': '"Trato genial. Recomendable 100%. Javier lo hace increíble."',
    'reviews.r3': '"Llevaba meses buscando un buen barbero en Barcelona. Lo encontré. 3TIGRES es diferente."',

    'booking.eyebrow': '¿LISTO PARA EL CORTE?',
    'booking.title': 'RESERVA TU CITA HOY',
    'booking.sub': 'Elige tu barber, servicio y horario en Booksy. Online, en segundos, sin llamadas.',
    'booking.cta': 'RESERVAR EN BOOKSY',
    'booking.micro': 'También por WhatsApp:',

    'loc.eyebrow': 'DÓNDE ESTAMOS',
    'loc.title': 'UBICACIÓN',
    'loc.walk': '8 min a pie de Passeig de Gràcia',
    'loc.hours': 'HORARIOS',
    'loc.mon': 'LUN', 'loc.tue': 'MAR', 'loc.wed': 'MIÉ', 'loc.thu': 'JUE',
    'loc.fri': 'VIE', 'loc.sat': 'SÁB', 'loc.sun': 'DOM',
    'loc.closed': 'Cerrado',
    'loc.maps': 'ABRIR EN MAPS ↗'
  },

  ca: {
    'nav.about': 'NOSALTRES',
    'nav.services': 'SERVEIS',
    'nav.gallery': 'GALERIA',
    'nav.team': 'EQUIP',
    'nav.location': 'UBICACIÓ',
    'nav.book': 'RESERVAR A BOOKSY',

    'hero.eyebrow': "BARCELONA · L'EIXAMPLE",
    'hero.sub': 'Tres tigres, una navalla, i el millor tall del barri.',
    'hero.cta1': 'RESERVAR CITA',
    'hero.cta2': 'VEURE SERVEIS',

    'stats.followers': 'SEGUIDORS',
    'stats.booksy': 'A BOOKSY',
    'stats.years': 'ANY OBERTS',

    'about.eyebrow': 'LA NOSTRA HISTÒRIA',
    'about.tagline': 'CULTURA · ESTIL · PRECISIÓ',
    'about.p1': 'Tres tigres, una navalla, i el millor tall del barri. Cultura urbana i precisió artesanal al cor de Barcelona.',
    'about.p2': "Més d'un any construint comunitat — artistes, esportistes i veïns del barri que confien en nosaltres per a la seva imatge.",
    'about.before': 'ABANS DE 3TIGRES',
    'about.after': 'DESPRÉS DE 3TIGRES',

    'services.eyebrow': 'EL QUE FEM',
    'services.title': 'ELS NOSTRES SERVEIS',
    'services.s1.name': 'TALL DE CABELL',
    'services.s1.desc': 'Fade, clàssic, texturitzat. Cada tall a mida amb acabat perfecte.',
    'services.s2.name': 'TALL EXPRÉS',
    'services.s2.desc': 'Rapats a nivell 1.',
    'services.s3.name': 'BARBA RITUAL',
    'services.s3.desc': 'Perfilat, degradat i afaitat clàssic amb fulla.',
    'services.s4.name': 'TALL + BARBA',
    'services.s4.desc': 'El pack complet en una sola sessió.',
    'services.s5.name': 'EXPERIÈNCIA 3TIGRES',
    'services.s5.desc': 'Tall, barba, celles. El servei definitiu.',
    'services.s6.name': 'TALL INFANTIL',
    'services.s6.desc': 'Per als petits tigres. Amb paciència.',
    'services.all': 'VEURE-HO TOT A BOOKSY ↗',

    'gallery.eyebrow': 'LA NOSTRA FEINA',
    'gallery.title': 'GALERIA',

    'team.eyebrow': "L'EQUIP",
    'team.title': 'ELS TIGRES',
    'team.role1': 'HEAD BARBER',
    'team.role2': 'BARBER',
    'team.role3': 'BARBER',
    'team.bookwith': 'RESERVAR AMB',

    'reviews.eyebrow': 'EL QUE DIUEN',
    'reviews.title': 'CLIENTS',
    'reviews.r1': '"El millor barbershop de Barcelona sens dubte. El Moises és un crack, sempre quedo perfecte."',
    'reviews.r1a': 'CLIENT 3TIGRES',
    'reviews.r2': '"Tracte genial. Recomanable 100%. El Javier ho fa increïble."',
    'reviews.r3': '"Feia mesos que buscava un bon barber a Barcelona. El vaig trobar. 3TIGRES és diferent."',

    'booking.eyebrow': 'A PUNT PEL TALL?',
    'booking.title': 'RESERVA LA TEVA CITA AVUI',
    'booking.sub': 'Tria el teu barber, servei i horari a Booksy. Online, en segons, sense trucades.',
    'booking.cta': 'RESERVAR A BOOKSY',
    'booking.micro': 'També per WhatsApp:',

    'loc.eyebrow': 'ON SOM',
    'loc.title': 'UBICACIÓ',
    'loc.walk': '8 min a peu de Passeig de Gràcia',
    'loc.hours': 'HORARIS',
    'loc.mon': 'DL', 'loc.tue': 'DT', 'loc.wed': 'DC', 'loc.thu': 'DJ',
    'loc.fri': 'DV', 'loc.sat': 'DS', 'loc.sun': 'DG',
    'loc.closed': 'Tancat',
    'loc.maps': 'OBRIR A MAPS ↗'
  },

  en: {
    'nav.about': 'ABOUT',
    'nav.services': 'SERVICES',
    'nav.gallery': 'GALLERY',
    'nav.team': 'TEAM',
    'nav.location': 'LOCATION',
    'nav.book': 'BOOK ON BOOKSY',

    'hero.eyebrow': "BARCELONA · L'EIXAMPLE",
    'hero.sub': 'Three tigers, one razor, and the best cut in the neighborhood.',
    'hero.cta1': 'BOOK NOW',
    'hero.cta2': 'SEE SERVICES',

    'stats.followers': 'FOLLOWERS',
    'stats.booksy': 'ON BOOKSY',
    'stats.years': 'YEAR OPEN',

    'about.eyebrow': 'OUR STORY',
    'about.tagline': 'CULTURE · STYLE · PRECISION',
    'about.p1': 'Three tigers, one razor, and the best cut in the neighborhood. Urban culture and hand-crafted precision in the heart of Barcelona.',
    'about.p2': 'Over a year building a community — artists, athletes and neighbors who trust us with their look.',
    'about.before': 'BEFORE 3TIGRES',
    'about.after': 'AFTER 3TIGRES',

    'services.eyebrow': 'WHAT WE DO',
    'services.title': 'OUR SERVICES',
    'services.s1.name': 'HAIRCUT',
    'services.s1.desc': 'Fade, classic, textured. Every cut made to measure with a perfect finish.',
    'services.s2.name': 'EXPRESS CUT',
    'services.s2.desc': 'Level 1 buzz cuts.',
    'services.s3.name': 'BEARD RITUAL',
    'services.s3.desc': 'Line-up, fade and classic straight-razor shave.',
    'services.s4.name': 'CUT + BEARD',
    'services.s4.desc': 'The full pack in a single session.',
    'services.s5.name': '3TIGRES EXPERIENCE',
    'services.s5.desc': 'Cut, beard, brows. The ultimate service.',
    'services.s6.name': 'KIDS CUT',
    'services.s6.desc': 'For the little tigers. With patience.',
    'services.all': 'SEE ALL ON BOOKSY ↗',

    'gallery.eyebrow': 'OUR WORK',
    'gallery.title': 'GALLERY',

    'team.eyebrow': 'THE TEAM',
    'team.title': 'THE TIGERS',
    'team.role1': 'HEAD BARBER',
    'team.role2': 'BARBER',
    'team.role3': 'BARBER',
    'team.bookwith': 'BOOK WITH',

    'reviews.eyebrow': 'WHAT THEY SAY',
    'reviews.title': 'CLIENTS',
    'reviews.r1': '"Best barbershop in Barcelona, no doubt. Moises is a genius, I always leave looking sharp."',
    'reviews.r1a': '3TIGRES CLIENT',
    'reviews.r2': '"Great treatment. 100% recommended. Javier is incredible."',
    'reviews.r3': '"I spent months looking for a good barber in Barcelona. Found one. 3TIGRES is different."',

    'booking.eyebrow': 'READY FOR THE CUT?',
    'booking.title': 'BOOK YOUR APPOINTMENT TODAY',
    'booking.sub': 'Pick your barber, service and time slot on Booksy. Online, in seconds, no phone calls.',
    'booking.cta': 'BOOK ON BOOKSY',
    'booking.micro': 'Also via WhatsApp:',

    'loc.eyebrow': 'WHERE WE ARE',
    'loc.title': 'LOCATION',
    'loc.walk': '8 min walk from Passeig de Gràcia',
    'loc.hours': 'OPENING HOURS',
    'loc.mon': 'MON', 'loc.tue': 'TUE', 'loc.wed': 'WED', 'loc.thu': 'THU',
    'loc.fri': 'FRI', 'loc.sat': 'SAT', 'loc.sun': 'SUN',
    'loc.closed': 'Closed',
    'loc.maps': 'OPEN IN MAPS ↗'
  }
};

/* ─── 2. CAMBIO DE IDIOMA (con persistencia) ──────── */

const LANG_KEY = '3tigres-lang';

function safeGetLang() {
  try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
}
function safeSetLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* sin storage, seguimos */ }
}

function setLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  safeSetLang(lang);
}

document.querySelectorAll('.lang__btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    setLanguage(btn.dataset.lang);
  });
});

// Idioma inicial: guardado > navegador > ES
(function initLang() {
  const saved = safeGetLang();
  if (saved && I18N[saved]) { setLanguage(saved); return; }
  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  setLanguage(I18N[nav] ? nav : 'es');
})();

/* ─── 3. MENÚ FULLSCREEN ──────────────────────────── */
/* Se abre expandiéndose verticalmente desde el centro (scaleY) */

const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuPanel = menuOverlay.querySelector('.menu__panel');
let menuBusy = false;

function openMenu() {
  if (menuBusy) return;
  menuBusy = true;

  menuOverlay.hidden = false;
  menuOverlay.classList.remove('is-closing');
  menuOverlay.classList.add('is-opening');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';

  if (prefersReducedMotion) {
    menuBusy = false;
    menuClose.focus();
    return;
  }

  menuPanel.addEventListener('animationend', function done() {
    menuBusy = false;
    menuClose.focus();
  }, { once: true });
}

function closeMenu() {
  if (menuBusy || menuOverlay.hidden) return;

  if (prefersReducedMotion) {
    finishClose();
    return;
  }

  menuBusy = true;
  menuOverlay.classList.remove('is-opening');
  menuOverlay.classList.add('is-closing');

  menuPanel.addEventListener('animationend', function () {
    finishClose();
    menuBusy = false;
  }, { once: true });
}

function finishClose() {
  menuOverlay.hidden = true;
  menuOverlay.classList.remove('is-opening', 'is-closing');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  menuToggle.focus();
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

// Cerrar al pulsar fuera del panel
menuOverlay.addEventListener('click', function (e) {
  if (e.target === menuOverlay) closeMenu();
});

// Cerrar al elegir un destino (y dejar que el ancla haga scroll)
menuOverlay.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', closeMenu);
});

/* ─── 4. REVEAL ON-SCROLL ─────────────────────────── */

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('is-visible');
  });
} else {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
}

/* ─── 5. LIGHTBOX DE GALERÍA ──────────────────────── */

const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxClose = document.getElementById('lightboxClose');
let lastFocused = null;

function openLightbox(item) {
  lastFocused = item;

  const img = item.querySelector('img');
  lightboxContent.innerHTML = '';
  if (img) {
    const big = document.createElement('img');
    big.src = img.dataset.full || img.src;
    big.alt = img.alt || '';
    lightboxContent.appendChild(big);
  } else {
    lightboxContent.style.backgroundColor = getComputedStyle(item).backgroundColor;
  }

  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.gallery__item').forEach(function (item) {
  item.addEventListener('click', function () { openLightbox(item); });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  if (!lightbox.hidden) { closeLightbox(); return; }
  if (!menuOverlay.hidden) closeMenu();
});
