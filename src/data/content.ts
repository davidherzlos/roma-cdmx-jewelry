/**
 * All visible page copy and its lists.
 * Editing here never requires touching components.
 * Values in [brackets] are still pending confirmation from the client.
 */
import { site } from '@/config/site';

export type IconName = 'shield' | 'user' | 'gem' | 'pin' | 'whatsapp' | 'sun' | 'moon' | 'menu' | 'close';

export const nav = [
  { id: 'categorias', label: 'Catálogo' },
  { id: 'historia', label: 'Historia' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'servicios', label: 'Por qué elegirnos' },
  { id: 'visitanos', label: 'Visítanos' },
  { id: 'contacto', label: 'Contacto' },
] as const;

export const ui = {
  skipLink: 'Saltar al contenido',
  opensWhatsApp: '(abre WhatsApp)',
  opensMaps: '(abre Google Maps)',
  logoLabel: `${site.name}, ir al inicio`,
  navLabel: 'Principal',
  mobileNavLabel: 'Menú móvil',
  menuButton: 'Menú',
  themeSwitch: 'Modo noche',
  themeSwitchTitle: 'Cambiar entre modo día y noche',
  whatsappShort: 'WhatsApp',
  fabLabel: 'Escríbenos por WhatsApp',
  directions: 'Cómo llegar',
};

export const topBar = {
  text: `${site.address.neighborhood}, CDMX · ${site.address.landmark} · Envíos a toda la República`,
  whatsappLabel: `WhatsApp: ${site.whatsapp.display}`,
};

export const messages = {
  general: 'Hola Roma, quiero información sobre sus joyas',
  wholesaleQuote: 'Hola Roma, quiero cotizar precios de mayoreo',
};

export const hero = {
  eyebrow: 'Mayoreo y menudeo · Centro Histórico',
  titleBefore: 'Proveedor de joyería con ',
  titleAccent: 'tienda real',
  titleAfter: ' en el corazón de la CDMX',
  intro:
    'Más de 30 años surtiendo a revendedores, comercios y clientes finales. Cotiza, pregunta por existencias o aparta tu pedido por WhatsApp, con atención directa y personalizada.',
  primaryCta: 'Contáctanos por WhatsApp',
  secondaryCta: 'Ver catálogo',
  photoAlt: 'Vitrina con una pieza destacada de Roma Joyería',
  photoPlaceholder: '[Foto · vitrina o pieza destacada]',
  badgeEyebrow: 'Desde 1999',
  badgeText: 'Centro Histórico, CDMX',
};

export const trust = {
  label: 'Por qué confiar en Roma',
  items: [
    { title: 'Más de 30 años', body: 'Negocio familiar con tienda física' },
    { title: 'Atención directa', body: 'Trato personalizado, sin intermediarios' },
    { title: 'Mayoreo y menudeo', body: 'Precios especiales por volumen' },
    { title: 'Envíos a todo México', body: 'A toda la República Mexicana' },
  ],
};

export type BuyMode = 'mayoreo' | 'menudeo';

export const catalog = {
  eyebrow: 'Catálogo',
  title: 'Compra por categoría',
  toggleLabel: '¿Cómo compras?',
  modes: {
    mayoreo: {
      button: 'Mayoreo · para revender',
      note: 'Precios preferentes según tu volumen de compra. Elige una categoría y te enviamos existencias y lista de precios de mayoreo por WhatsApp.',
      pricePrefix: 'Mayoreo desde',
      message: (lower: string) => `Hola Roma, quiero precios de mayoreo de ${lower}.`,
    },
    menudeo: {
      button: 'Menudeo · para mí',
      note: 'Compra pieza por pieza, para ti o para regalar. Elige una categoría y te mandamos fotos y precios por WhatsApp.',
      pricePrefix: 'Desde',
      message: (lower: string) => `Hola Roma, me interesan sus ${lower}. ¿Me pueden mandar fotos y precios?`,
    },
  },
  askPrefix: 'Preguntar por',
  askWhatsApp: 'Preguntar por WhatsApp',
  /** `photo` empty = placeholder. Prices pending. */
  categories: [
    { name: 'Anillos', body: 'Modelos para dama y caballero, de uso diario y para ocasión.', priceMayoreo: '[precio]', priceMenudeo: '[precio]', photo: '' },
    { name: 'Cadenas y collares', body: 'Diferentes largos, grosores y tejidos.', priceMayoreo: '[precio]', priceMenudeo: '[precio]', photo: '' },
    { name: 'Aretes', body: 'Broqueles, arracadas y aretes largos.', priceMayoreo: '[precio]', priceMenudeo: '[precio]', photo: '' },
    { name: 'Pulseras', body: 'Esclavas, tejidas y con dije.', priceMayoreo: '[precio]', priceMenudeo: '[precio]', photo: '' },
    { name: 'Dijes', body: 'Religiosos, iniciales y figuras.', priceMayoreo: '[precio]', priceMenudeo: '[precio]', photo: '' },
    { name: 'Juegos y sets', body: 'Combinaciones listas para regalo o exhibición.', priceMayoreo: '[precio]', priceMenudeo: '[precio]', photo: '' },
  ],
};

export const history = {
  eyebrow: 'Nuestra historia',
  title: 'Un negocio real con décadas de historia',
  paragraphs: [
    'Roma es un negocio familiar en el corazón de la CDMX. Llevamos más de 30 años atendiendo a vendedores, comerciantes y clientes finales desde nuestra tienda en el Centro Histórico.',
    '[Un par de frases más: quién fundó la tienda, cómo empezó y qué la hace distinta hoy.]',
  ],
  quote: '“No somos una tienda en línea: somos un proveedor establecido con presencia real.”',
  photoAlt: 'Fachada de Tienda Roma en el Centro Histórico',
  photoPlaceholder: '[Foto · fachada de Tienda Roma]',
  badgeEyebrow: 'Tienda Roma',
  badgeText: 'Cerca del Palacio Nacional',
  stats: [
    { value: '1999', label: 'Desde' },
    { value: '30+', label: 'Años de trayectoria' },
    { value: '32', label: 'Estados con envío' },
  ],
};

export const clients = {
  eyebrow: 'Nuestros clientes',
  title: '¿A quién atendemos?',
  intro: 'Trabajamos con todo tipo de clientes, desde revendedores hasta compradores finales.',
  types: [
    { title: 'Vendedores de joyería', body: 'Revendedores y distribuidores independientes.' },
    { title: 'Pequeños negocios', body: 'Mercados, tianguis y locales comerciales.' },
    { title: 'Tiendas locales', body: 'Joyerías y comercios establecidos.' },
    { title: 'Clientes finales', body: 'Compras personales y regalos especiales.' },
  ],
  band: {
    title: 'Precios especiales por volumen',
    body: 'Te atendemos directamente y ofrecemos precios preferentes según tu volumen de compra. Ideal para revendedores y comercios.',
    cta: 'Cotizar mayoreo',
  },
  /** Real reviews pending (with the client's permission). */
  reviews: [
    { quote: '“[Reseña de un cliente — idealmente tomada de Google, con su permiso.]”', name: '[Nombre]', kind: 'Revendedora' },
    { quote: '“[Reseña de un cliente — idealmente tomada de Google, con su permiso.]”', name: '[Nombre]', kind: 'Local comercial' },
    { quote: '“[Reseña de un cliente — idealmente tomada de Google, con su permiso.]”', name: '[Nombre]', kind: 'Cliente final' },
  ],
};

export const services = {
  eyebrow: 'Nuestra diferencia',
  title: 'Por qué elegirnos',
  intro:
    'Roma no es la tienda más grande ni la más moderna, pero ofrecemos algo difícil de encontrar: confianza y trato directo.',
  cta: 'Preguntar por WhatsApp',
  items: [
    { title: 'Experiencia y continuidad', body: 'Más de tres décadas sirviendo al Centro Histórico. Un negocio familiar consolidado, con presencia física y reputación construida año tras año.', message: 'Hola Roma, quiero conocer más sobre la tienda.' },
    { title: 'Precios competitivos', body: 'Trabajamos directo con fabricantes y talleres, sin intermediarios.', message: 'Hola Roma, quiero una cotización.' },
    { title: 'Atención por WhatsApp', body: 'Respuesta rápida y comunicación personal: cotiza, pregunta por existencias y aparta tu pedido.', message: 'Hola Roma, tengo una pregunta.' },
    { title: 'Apoyo a pequeños vendedores', body: 'Entendemos las necesidades de los revendedores y te asesoramos para empezar o crecer.', message: 'Hola Roma, quiero empezar a revender joyería.' },
    { title: 'Reparaciones y seguimiento', body: 'Servicio postventa y mantenimiento de piezas.', message: 'Hola Roma, necesito reparar una pieza.' },
  ],
};

export const visit = {
  eyebrow: 'Ubicación y envíos',
  title: 'Visítanos en el Centro Histórico',
  intro: 'Tienda física en el corazón de la CDMX y envíos a toda la República Mexicana.',
  mapLabel: 'Mapa: ubicación de Tienda Roma, cerca del Palacio Nacional',
  mapPlaceholder: '[Mapa de Google · Tienda Roma]',
  cards: [
    { title: 'Centro Histórico, CDMX', body: `${site.address.landmark} · ${site.address.street}` },
    { title: 'Envíos a todo México', body: 'Atendemos toda la República Mexicana' },
    { title: 'Tienda abierta', body: `Ven a conocernos en persona · ${site.hours}` },
    { title: 'Atención por WhatsApp', body: 'Escríbenos antes de visitarnos' },
  ],
};

export const contact = {
  eyebrow: 'Contacto',
  titleBefore: 'Inicia una ',
  titleAccent: 'conversación',
  titleAfter: '',
  body: 'Si buscas un proveedor serio y con trayectoria, en Roma te atendemos directamente. Escríbenos por WhatsApp y cuéntanos qué necesitas.',
  cta: 'Contáctanos por WhatsApp',
  note: 'Atendemos clientes en todo México vía WhatsApp.',
  outline: 'ROMA · ROMA · ROMA',
};

export const newsletter = {
  title: 'Novedades por WhatsApp',
  intro: 'Recibe mercancía nueva, ofertas de mayoreo y avisos de la tienda. Puedes darte de baja cuando quieras.',
  nameLabel: 'Nombre',
  phoneLabel: 'Número de WhatsApp',
  phonePlaceholder: '+52 55 1234 5678',
  interestLegend: 'Me interesa',
  interestOptions: [
    { value: 'mayoreo', label: 'Mayoreo' },
    { value: 'menudeo', label: 'Menudeo' },
  ],
  consentLabel: 'Acepto recibir mensajes de Joyería Roma por WhatsApp.',
  submit: 'Suscribirme',
  errors: {
    name: 'Escribe tu nombre.',
    phone: 'Escribe un número de WhatsApp de al menos 10 dígitos.',
    consent: 'Para suscribirte, acepta recibir mensajes por WhatsApp.',
    noEndpoint:
      'Por ahora no podemos registrar suscripciones desde aquí. Escríbenos por WhatsApp y te agregamos a la lista.',
    network: 'No pudimos enviar tus datos. Inténtalo de nuevo o escríbenos por WhatsApp.',
  },
  sending: 'Enviando…',
  /** `{nombre}` is replaced with the name entered. */
  success: '¡Listo, {nombre}! Te avisaremos de las novedades por WhatsApp.',
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} ${site.name} · Joyería al mayoreo y menudeo · Centro Histórico, CDMX`,
  links: {
    privacy: 'Aviso de privacidad',
    instagram: 'Instagram',
    facebook: 'Facebook',
    whatsapp: 'WhatsApp',
  },
};

export const privacy = {
  title: 'Aviso de privacidad',
  back: 'Volver al inicio',
  /** Text pending review by a lawyer. */
  paragraphs: [
    '[Texto del aviso de privacidad pendiente — debe revisarlo un abogado antes de publicarse.]',
    '[Responsable del tratamiento de datos, finalidades, datos que se recaban (nombre y número de WhatsApp), medios para ejercer derechos ARCO y forma de darse de baja.]',
  ],
};
