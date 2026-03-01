/* ============================================================
   O GATO DO MAR — Script
   Language switching · FAQ accordion · Navbar · Scroll reveal
   ============================================================ */

'use strict';

/* ════════════════════════════════════════════════════════════════════════════
   ▸ CONFIGURAZIONE IMMAGINI
   ─────────────────────────────────────────────────────────────────────────
   Modifica solo i nomi dei file qui sotto per cambiare le foto del sito.
   Tutte le immagini si trovano nella cartella:  assets/photos/

   SEZIONE GALLERY:
   • Ogni riga è una foto. Cambia solo il nome tra le virgolette.
   • wide: true → la foto occupa 2 colonne (usa al massimo 1-2 volte).
   • Per aggiungere una foto: copia una riga e cambia il nome file.
   • Per rimuovere una foto: elimina tutta la riga { src: ... }.
   ════════════════════════════════════════════════════════════════════════════ */
const IMG = {

  // ── Hero (sfondo grande in prima pagina) ─────────────────────────────────
  hero:         'assets/photos/hero.jpg',

  // ── About (foto esterna della casa) ──────────────────────────────────────
  about:        'assets/photos/house-exterior.jpg',

  // ── O Gato do Campo ──────────────────────────────────────────────────────
  campo_main:   'assets/photos/unnamed6.jpg',     // Camera da letto
  campo_2:      'assets/photos/unnamed7.jpg',     // Soggiorno
  campo_3:      'assets/photos/unnamed8.jpg',     // Cucina

  // ── O Gato do Mar ─────────────────────────────────────────────────────────
  mar_main:     'assets/photos/unnamed4.jpg',     // Camera da letto
  mar_2:        'assets/photos/unnamed1.jpg',     // Soggiorno
  mar_3:        'assets/photos/unnamed3.jpg',     // Cucina

  // ── Sezione Host (Brigita) ────────────────────────────────────────────────
  host_main:    'assets/photos/host-brigita.jpg', // Ritratto principale
  host_2:       'assets/photos/unnamed11.jpg',    // Costruzione — trapano
  host_3:       'assets/photos/unnamed10.jpg',    // Costruzione — pittura
  host_4:       'assets/photos/host-cat.jpg',     // Gatto (solo desktop)

  // ── Gallery ───────────────────────────────────────────────────────────────
  gallery: [
    { src: 'assets/photos/unnamed.jpg',    alt: 'Esterno della casa',          wide: true },
    { src: 'assets/photos/campo-main.jpg', alt: 'Giardino — il gatto'                     },
    { src: 'assets/photos/unnamed4.jpg',   alt: 'O Gato do Mar — Camera'                  },
    { src: 'assets/photos/unnamed6.jpg',   alt: 'O Gato do Campo — Camera'                },
    { src: 'assets/photos/unnamed7.jpg',   alt: 'O Gato do Campo — Soggiorno'             },
    { src: 'assets/photos/unnamed1.jpg',   alt: 'O Gato do Mar — Soggiorno'               },
    { src: 'assets/photos/unnamed8.jpg',   alt: 'O Gato do Campo — Cucina'                },
    { src: 'assets/photos/unnamed3.jpg',   alt: 'O Gato do Mar — Cucina'                  },
    { src: 'assets/photos/host-cat.jpg',   alt: 'Il gatto di casa'                        },
    { src: 'assets/photos/campo-2.jpg',    alt: 'Giardino e pergola'                      },
    { src: 'assets/photos/unnamed11.jpg',  alt: 'Brigita costruisce la casa'              },
  ]

};

// ── Applica le immagini al DOM ────────────────────────────────────────────────
function applyImages() {
  // Inietta le regole CSS per i background-image (sovrascrivono style.css)
  const style = document.createElement('style');
  style.textContent = `
    .hero                 { background-image: url('${IMG.hero}'); }
    .about-img .photo-box { background-image: url('${IMG.about}'); }
    .campo-photo          { background-image: url('${IMG.campo_main}'); background-size:cover; background-position:center; }
    .campo-photo-2        { background-image: url('${IMG.campo_2}');    background-size:cover; background-position:center; }
    .campo-photo-3        { background-image: url('${IMG.campo_3}');    background-size:cover; background-position:center; }
    .mar-photo            { background-image: url('${IMG.mar_main}');   background-size:cover; background-position:center; }
    .mar-photo-2          { background-image: url('${IMG.mar_2}');      background-size:cover; background-position:center; }
    .mar-photo-3          { background-image: url('${IMG.mar_3}');      background-size:cover; background-position:center; }
    .tall-photo           { background-image: url('${IMG.host_main}'); }
    .host-photo-2         { background-image: url('${IMG.host_2}');     background-size:cover; background-position:center top; }
    .host-photo-3         { background-image: url('${IMG.host_3}');     background-size:cover; background-position:center top; }
    .host-photo-4         { background-image: url('${IMG.host_4}');     background-size:cover; background-position:center; }
  `;
  document.head.appendChild(style);

  // Costruisce la gallery dinamicamente dall'array IMG.gallery
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = IMG.gallery.map(item => `
    <a class="g-item${item.wide ? ' g-wide' : ''}" href="${item.src}" target="_blank">
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
    </a>
  `).join('');
}

applyImages();


// ── Translations ─────────────────────────────────────────────────────────────
const T = {

  en: {
    nav: {
      home: "Home", rooms: "Rooms", gallery: "Gallery", host: "About",
      faq: "FAQ", contacts: "Contacts", book: "Book Now"
    },
    hero: {
      pretitle: "Guest House · Viana do Castelo · Portugal",
      subtitle: "A peaceful wooden retreat nestled in nature, just a short walk from the white sandy beach.",
      airbnb: "Book on Airbnb",
      booking: "Book on Booking.com"
    },
    about: {
      label: "The Place",
      title: "An Eco Retreat in the Heart of Nature",
      desc1: "Welcome to our Eco House in Viana do Castelo — a peaceful wooden retreat nestled in nature, just a short walk from the white sandy beach. Fall asleep to the calming ocean sound and wake up surrounded by trees and birdsong.",
      desc2: "Whether you're stopping by during your Camino de Santiago journey or planning a cozy and romantic weekend, this is the perfect spot to unwind. The house is fully equipped with everything you need.",
      feat1: "2 km from beach", feat2: "Eco wooden house",
      feat3: "Bikes available", feat4: "Zen atmosphere"
    },
    rooms: {
      label: "Accommodations", title: "Our Rooms", book: "Check Availability",
      campo: {
        tag: "Quiet & Magical",
        desc: "A serene retreat surrounded by nature, where peace and tranquility invite you to slow down and simply be."
      },
      mar: {
        tag: "Spiritual & Relaxing",
        desc: "A soulful space that connects you to the rhythm of the ocean, perfect for rest, reflection, and renewal."
      }
    },
    testimonials: {
      label: "Guest Feedback", title: "What Our Guests Say"
    },
    gallery: {
      label: "Photos", title: "Gallery"
    },
    host: {
      label: "Your Host", name: "Brigita Januskeviciute",
      quote1: '"As a passionate traveler, I\'ve drawn inspiration from my journeys to create a peaceful and idyllic space for deep physical and mental well-being."',
      desc1: "This place is born from a dream — a Zen-inspired retreat where calm, nature, and simplicity bring you back to yourself.",
      desc2: "My goal was to craft a serene, spiritual haven where every guest can reconnect with what truly matters.",
      moto: {
        title: "Motorcycle Lover",
        desc: "Riding is my freedom, my therapy, my adventure. All bikers are warmly welcomed — park your motorbike safely in our private courtyard."
      }
    },
    faq: {
      label: "Questions", title: "Frequently Asked Questions",
      items: [
        { q: "How far is Amorosa beach from the house?", a: "The beach is about 2 km on foot and 3.5 km by car." },
        { q: "Where are the nearest restaurants and bars?", a: "There are 6 restaurants, bars, and bakeries in Praia da Amorosa (2 km away). In the center of Chafé, you'll find the main bar \"São Sebastião\"." },
        { q: "Is there nightlife nearby?", a: "No. Pubs and bars open late are located in the center of Viana do Castelo, about 9 km from the house." },
        { q: "Can I order dinner at home?", a: "Yes, you can order lunch or dinner via Glovo or Uber Eats from various local restaurants." },
        { q: "Is the garden accessible to guests?", a: "Yes, the garden is available for sunbathing or having a picnic." },
        { q: "What activities are available nearby?", a: "Surf, kitesurf, and canoe schools at Cabedelo beach. Cycling routes with 2 bicycles available on-property, and hiking trails in Serra d'Arga (20 min by car)." },
        { q: "Are there supermarkets nearby?", a: "\"Bela\" supermarket is 800 m away in Chafé, and \"Supermercado Central\" is 1.8 km away in Vila Nova de Anha." },
        { q: "Is there parking available?", a: "Yes. Cars can park for free in the square in front of the property. Motorbikes are welcome and can park inside the courtyard." },
        { q: "Are pets allowed?", a: "No, pets are not allowed." },
        { q: "Are children allowed?", a: "No, the property is not suitable for children." }
      ]
    },
    contacts: {
      label: "Get in Touch", title: "Find Us", hours: "Open daily 9:30 – 22:30"
    },
    footer: {
      tagline: "A Zen retreat in the heart of nature — Viana do Castelo, Portugal."
    }
  },

  // ── PORTUGUÊS ──────────────────────────────────────────────────────────────
  pt: {
    nav: {
      home: "Início", rooms: "Quartos", gallery: "Galeria", host: "Sobre",
      faq: "FAQ", contacts: "Contactos", book: "Reserve Já"
    },
    hero: {
      pretitle: "Casa de Hóspedes · Viana do Castelo · Portugal",
      subtitle: "Um retiro tranquilo em madeira no meio da natureza, a poucos passos da praia de areia branca.",
      airbnb: "Reservar no Airbnb",
      booking: "Reservar no Booking.com"
    },
    about: {
      label: "O Lugar",
      title: "Um Refúgio Eco no Coração da Natureza",
      desc1: "Bem-vindo à nossa Casa Eco em Viana do Castelo — um retiro tranquilo em madeira no meio da natureza, a poucos passos da praia de areia branca. Adormeça com o suave som do oceano e acorde rodeado de árvores e pássaros.",
      desc2: "Seja para uma paragem no Caminho de Santiago ou um fim de semana aconchegante e romântico, este é o lugar perfeito para relaxar. A casa está completamente equipada com tudo o que precisa.",
      feat1: "2 km da praia", feat2: "Casa eco em madeira",
      feat3: "Bicicletas disponíveis", feat4: "Ambiente zen"
    },
    rooms: {
      label: "Alojamentos", title: "Os Nossos Quartos", book: "Verificar Disponibilidade",
      campo: {
        tag: "Tranquilo & Mágico",
        desc: "Um retiro sereno rodeado de natureza, onde a paz e a tranquilidade convidam a abrandar e simplesmente ser."
      },
      mar: {
        tag: "Espiritual & Relaxante",
        desc: "Um espaço com alma que o conecta ao ritmo do oceano, perfeito para descansar, refletir e renovar."
      }
    },
    testimonials: {
      label: "Opinião dos Hóspedes", title: "O Que Dizem os Nossos Hóspedes"
    },
    gallery: {
      label: "Fotos", title: "Galeria"
    },
    host: {
      label: "A Sua Anfitriã", name: "Brigita Januskeviciute",
      quote1: '"Como viajante apaixonada, inspirei-me nas minhas viagens para criar um espaço tranquilo e idílico para o bem-estar físico e mental profundo."',
      desc1: "Este lugar nasce de um sonho — um retiro de inspiração Zen onde a calma, a natureza e a simplicidade o trazem de volta a si mesmo.",
      desc2: "O meu objetivo foi criar um refúgio sereno e espiritual onde cada hóspede possa reconectar-se com o que realmente importa.",
      moto: {
        title: "Amante das Motas",
        desc: "Andar de mota é a minha liberdade, a minha terapia, a minha aventura. Todos os motociclistas são bem-vindos — estacione a sua mota em segurança no nosso pátio privado."
      }
    },
    faq: {
      label: "Perguntas", title: "Perguntas Frequentes",
      items: [
        { q: "A que distância fica a praia da Amorosa?", a: "A praia fica a cerca de 2 km a pé e 3,5 km de carro." },
        { q: "Onde ficam os restaurantes e bares mais próximos?", a: "Existem 6 restaurantes, bares e padarias na Praia da Amorosa (2 km). No centro de Chafé encontra o bar principal \"São Sebastião\"." },
        { q: "Existe vida noturna por perto?", a: "Não. Pubs e bares com horário tardio ficam no centro de Viana do Castelo, a cerca de 9 km." },
        { q: "Posso encomendar jantar em casa?", a: "Sim, pode encomendar almoço ou jantar via Glovo ou Uber Eats de vários restaurantes locais." },
        { q: "O jardim está disponível para os hóspedes?", a: "Sim, o jardim está disponível para tomar sol ou fazer um piquenique." },
        { q: "Que atividades existem por perto?", a: "Escolas de surf, kitesurf e canoagem em Cabedelo. Percursos de ciclismo, duas bicicletas na propriedade e trilhos na Serra d'Arga (20 min de carro)." },
        { q: "Existem supermercados por perto?", a: "O supermercado \"Bela\" fica a 800 m em Chafé e o \"Supermercado Central\" a 1,8 km em Vila Nova de Anha." },
        { q: "Existe estacionamento?", a: "Sim. Os carros podem estacionar gratuitamente na praça em frente à propriedade. As motas são bem-vindas no pátio interior." },
        { q: "São permitidos animais de estimação?", a: "Não, animais de estimação não são permitidos." },
        { q: "São permitidas crianças?", a: "Não, a propriedade não é adequada para crianças." }
      ]
    },
    contacts: {
      label: "Entre em Contacto", title: "Encontre-nos", hours: "Aberto todos os dias das 9:30 às 22:30"
    },
    footer: {
      tagline: "Um retiro Zen no coração da natureza — Viana do Castelo, Portugal."
    }
  },

  // ── ESPAÑOL ────────────────────────────────────────────────────────────────
  es: {
    nav: {
      home: "Inicio", rooms: "Habitaciones", gallery: "Galería", host: "Sobre nosotros",
      faq: "FAQ", contacts: "Contacto", book: "Reservar"
    },
    hero: {
      pretitle: "Casa de Huéspedes · Viana do Castelo · Portugal",
      subtitle: "Un tranquilo retiro de madera en plena naturaleza, a pocos pasos de la playa de arena blanca.",
      airbnb: "Reservar en Airbnb",
      booking: "Reservar en Booking.com"
    },
    about: {
      label: "El Lugar",
      title: "Un Retiro Eco en el Corazón de la Naturaleza",
      desc1: "Bienvenido a nuestra Casa Eco en Viana do Castelo — un tranquilo retiro de madera en plena naturaleza, a pocos pasos de la playa de arena blanca. Duerma al son del océano y despierte rodeado de árboles y aves.",
      desc2: "Ya sea para una parada en el Camino de Santiago o un romántico fin de semana, este es el lugar perfecto para descansar. La casa está completamente equipada con todo lo que necesita.",
      feat1: "2 km de la playa", feat2: "Casa eco de madera",
      feat3: "Bicicletas disponibles", feat4: "Ambiente zen"
    },
    rooms: {
      label: "Alojamiento", title: "Nuestras Habitaciones", book: "Comprobar Disponibilidad",
      campo: {
        tag: "Tranquilo y Mágico",
        desc: "Un retiro sereno rodeado de naturaleza, donde la paz y la tranquilidad te invitan a reducir el ritmo y simplemente ser."
      },
      mar: {
        tag: "Espiritual y Relajante",
        desc: "Un espacio con alma que te conecta al ritmo del océano, perfecto para el descanso, la reflexión y la renovación."
      }
    },
    testimonials: {
      label: "Opiniones de Huéspedes", title: "Lo Que Dicen Nuestros Huéspedes"
    },
    gallery: {
      label: "Fotos", title: "Galería"
    },
    host: {
      label: "Tu Anfitriona", name: "Brigita Januskeviciute",
      quote1: '"Como viajera apasionada, me he inspirado en mis viajes para crear un espacio tranquilo e idílico para el bienestar físico y mental profundo."',
      desc1: "Este lugar nace de un sueño — un retiro de inspiración Zen donde la calma, la naturaleza y la simplicidad te devuelven a ti mismo.",
      desc2: "Mi objetivo fue crear un refugio sereno y espiritual donde cada huésped pueda reconectar con lo que verdaderamente importa.",
      moto: {
        title: "Amante de las Motos",
        desc: "Conducir es mi libertad, mi terapia, mi aventura. Todos los motoristas son bienvenidos — aparque su moto de forma segura en nuestro patio privado."
      }
    },
    faq: {
      label: "Preguntas", title: "Preguntas Frecuentes",
      items: [
        { q: "¿A qué distancia está la playa de Amorosa?", a: "La playa está a unos 2 km a pie y 3,5 km en coche." },
        { q: "¿Dónde están los restaurantes y bares más cercanos?", a: "Hay 6 restaurantes, bares y panaderías en Praia da Amorosa (2 km). En el centro de Chafé encontrará el bar \"São Sebastião\"." },
        { q: "¿Hay vida nocturna cerca?", a: "No. Los pubs y bares con horario tardío están en el centro de Viana do Castelo, a unos 9 km." },
        { q: "¿Puedo pedir cena a domicilio?", a: "Sí, puede pedir comida a través de Glovo o Uber Eats de varios restaurantes locales." },
        { q: "¿El jardín está disponible para los huéspedes?", a: "Sí, el jardín está disponible para tomar el sol o hacer un picnic." },
        { q: "¿Qué actividades hay cerca?", a: "Escuelas de surf, kitesurf y piragüismo en Cabedelo. Rutas en bicicleta, dos bicicletas en la propiedad y senderismo en Serra d'Arga (20 min en coche)." },
        { q: "¿Hay supermercados cerca?", a: "El supermercado \"Bela\" está a 800 m en Chafé y el \"Supermercado Central\" a 1,8 km en Vila Nova de Anha." },
        { q: "¿Hay aparcamiento disponible?", a: "Sí. Los coches pueden aparcar gratis en la plaza frente a la propiedad. Las motos son bienvenidas en el patio interior." },
        { q: "¿Se admiten mascotas?", a: "No, no se admiten mascotas." },
        { q: "¿Se admiten niños?", a: "No, la propiedad no es adecuada para niños." }
      ]
    },
    contacts: {
      label: "Ponte en Contacto", title: "Encuéntranos", hours: "Abierto todos los días de 9:30 a 22:30"
    },
    footer: {
      tagline: "Un retiro Zen en el corazón de la naturaleza — Viana do Castelo, Portugal."
    }
  },

  // ── ITALIANO ───────────────────────────────────────────────────────────────
  it: {
    nav: {
      home: "Home", rooms: "Camere", gallery: "Galleria", host: "Chi Siamo",
      faq: "FAQ", contacts: "Contatti", book: "Prenota"
    },
    hero: {
      pretitle: "Guest House · Viana do Castelo · Portogallo",
      subtitle: "Un tranquillo rifugio in legno immerso nella natura, a pochi passi dalla spiaggia di sabbia bianca.",
      airbnb: "Prenota su Airbnb",
      booking: "Prenota su Booking.com"
    },
    about: {
      label: "Il Luogo",
      title: "Un Rifugio Eco nel Cuore della Natura",
      desc1: "Benvenuto nella nostra Eco House a Viana do Castelo — un tranquillo rifugio in legno immerso nella natura, a pochi passi dalla spiaggia di sabbia bianca. Addormentati con il suono rilassante dell'oceano e svegliati circondato da alberi e canto degli uccelli.",
      desc2: "Che tu sia in pellegrinaggio sul Cammino di Santiago o in cerca di un weekend romantico, questo è il posto perfetto per rilassarsi. La casa è completamente attrezzata con tutto il necessario.",
      feat1: "2 km dalla spiaggia", feat2: "Casa eco in legno",
      feat3: "Biciclette disponibili", feat4: "Atmosfera zen"
    },
    rooms: {
      label: "Sistemazioni", title: "Le Nostre Camere", book: "Verifica Disponibilità",
      campo: {
        tag: "Tranquillo e Magico",
        desc: "Un rifugio sereno immerso nella natura, dove la pace e la tranquillità ti invitano a rallentare e semplicemente essere."
      },
      mar: {
        tag: "Spirituale e Rilassante",
        desc: "Uno spazio con anima che ti connette al ritmo dell'oceano, perfetto per riposare, riflettere e rinnovarsi."
      }
    },
    testimonials: {
      label: "Recensioni Ospiti", title: "Cosa Dicono i Nostri Ospiti"
    },
    gallery: {
      label: "Foto", title: "Galleria"
    },
    host: {
      label: "La Tua Host", name: "Brigita Januskeviciute",
      quote1: '"Come viaggiatrice appassionata, mi sono ispirata ai miei viaggi per creare uno spazio tranquillo e idilliaco per il benessere fisico e mentale profondo."',
      desc1: "Questo luogo nasce da un sogno — un rifugio di ispirazione Zen dove la calma, la natura e la semplicità ti riportano a te stesso.",
      desc2: "Il mio obiettivo era creare un rifugio sereno e spirituale dove ogni ospite possa riconnettersi con ciò che conta davvero.",
      moto: {
        title: "Amante delle Moto",
        desc: "Guidare è la mia libertà, la mia terapia, la mia avventura. Tutti i motociclisti sono benvenuti — parcheggia la tua moto in sicurezza nel nostro cortile privato."
      }
    },
    faq: {
      label: "Domande", title: "Domande Frequenti",
      items: [
        { q: "Quanto dista la spiaggia di Amorosa dalla casa?", a: "La spiaggia dista circa 2 km a piedi e 3,5 km in auto." },
        { q: "Dove si trovano i ristoranti e bar più vicini?", a: "Ci sono 6 ristoranti, bar e panetterie a Praia da Amorosa (2 km). Nel centro di Chafé troverai il bar principale \"São Sebastião\"." },
        { q: "C'è vita notturna nelle vicinanze?", a: "No. Pub e bar con orario tardo si trovano nel centro di Viana do Castelo, a circa 9 km." },
        { q: "Posso ordinare cena a casa?", a: "Sì, puoi ordinare pranzo o cena tramite Glovo o Uber Eats da vari ristoranti locali." },
        { q: "Il giardino è accessibile agli ospiti?", a: "Sì, il giardino è disponibile per prendere il sole o fare un picnic." },
        { q: "Quali attività sono disponibili nelle vicinanze?", a: "Scuole di surf, kitesurf e canoa a Cabedelo. Percorsi ciclabili, due biciclette disponibili in loco e sentieri nella Serra d'Arga (20 min in auto)." },
        { q: "Ci sono supermercati nelle vicinanze?", a: "Il supermercato \"Bela\" si trova a 800 m a Chafé, e il \"Supermercado Central\" a 1,8 km a Vila Nova de Anha." },
        { q: "È disponibile un parcheggio?", a: "Sì. Le auto possono parcheggiare gratuitamente nella piazza davanti alla proprietà. Le moto sono benvenute nel cortile interno." },
        { q: "Sono ammessi animali domestici?", a: "No, gli animali domestici non sono ammessi." },
        { q: "Sono ammessi bambini?", a: "No, la struttura non è adatta ai bambini." }
      ]
    },
    contacts: {
      label: "Contattaci", title: "Trovaci", hours: "Aperto tutti i giorni dalle 9:30 alle 22:30"
    },
    footer: {
      tagline: "Un rifugio Zen nel cuore della natura — Viana do Castelo, Portogallo."
    }
  }
};


// ── State ─────────────────────────────────────────────────────────────────────
let currentLang = 'en';


// ── Translation helpers ───────────────────────────────────────────────────────
function t(keyPath) {
  const keys = keyPath.split('.');
  let val = T[currentLang];
  for (const k of keys) {
    if (val == null) return keyPath;
    val = val[k];
  }
  return val ?? keyPath;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });
  document.documentElement.lang = currentLang;
  buildFaq();
}

function setLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyTranslations();
}


// ── FAQ ───────────────────────────────────────────────────────────────────────
function buildFaq() {
  const list = document.getElementById('faqList');
  if (!list) return;
  const items = t('faq.items');
  if (!Array.isArray(items)) return;

  list.innerHTML = items.map((item, i) => `
    <div class="faq-item reveal" style="transition-delay: ${i * 0.04}s">
      <div class="faq-question" role="button" tabindex="0" aria-expanded="false">
        <span>${item.q}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </div>
      <div class="faq-answer" role="region">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-question').forEach(q => {
    const activate = () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
      }
    };
    q.addEventListener('click', activate);
    q.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
  });

  // Observe newly created FAQ items
  list.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ── Navbar scroll ─────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


// ── Mobile Menu ───────────────────────────────────────────────────────────────
const navToggle  = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});


// ── Lang buttons ──────────────────────────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});


// ── Init ──────────────────────────────────────────────────────────────────────
// Hero text fades in on load
setTimeout(() => {
  document.querySelector('.hero-content')?.classList.add('visible');
}, 80);

applyTranslations();
