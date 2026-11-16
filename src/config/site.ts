/**
 * Datos del negocio. Todo lo que el cliente puede cambiar (número, dirección,
 * horario, mapas, redes, ancho del contenedor) vive aquí.
 * Los valores entre [corchetes] están pendientes de confirmar con el cliente.
 */
export const site = {
  /** Nombre comercial. Pendiente: "Roma Joyería" vs "Joyería Roma". */
  name: 'Roma Joyería',
  /** Logotipo (texto). */
  logo: { word: 'ROMA', tagline: 'Joyería desde 1999' },
  sinceYear: 1999,
  description:
    'Proveedor de joyería al mayoreo y menudeo con tienda física en el Centro Histórico de la CDMX, cerca del Palacio Nacional. Cotiza por WhatsApp.',
  locale: 'es-MX',

  /** Ancho máximo del contenido en px (el cliente puede probar 1080 o 960). */
  containerWidth: 1200,

  whatsapp: {
    /** Formato internacional, solo dígitos (p. ej. 5215512345678). Pendiente. */
    number: '',
    /** Cómo se muestra el número en pantalla. Pendiente. */
    display: '[Número]',
  },

  address: {
    street: '[Calle y número]',
    neighborhood: 'Centro Histórico',
    city: 'Ciudad de México',
    region: 'CDMX',
    postalCode: '[C.P.]',
    country: 'MX',
    landmark: 'Cerca del Palacio Nacional',
  },

  /** Horario en texto libre. Pendiente. */
  hours: '[Horario]',
  parking: '[Estacionamiento]',

  maps: {
    /** Enlace "Cómo llegar". */
    directionsUrl: 'https://maps.google.com/?q=Centro+Hist%C3%B3rico+CDMX',
    /** URL del iframe de Google Maps (embed). Vacío = se muestra el marcador de posición. */
    embedUrl: '',
  },

  socials: {
    instagram: '',
    facebook: '',
  },

  /** Opacidad de la imagen de fondo del hero, por modo. */
  hero: {
    backgroundDay: '/images/hero-fondo-dia.jpg',
    backgroundNight: '/images/hero-fondo-noche.jpg',
    opacityDay: 0.6,
    opacityNight: 0.75,
  },

  /** Rutas de fotos reales. Vacío = marcador de posición. */
  photos: {
    hero: '',
    facade: '',
  },
} as const;

export type Site = typeof site;
