/**
 * Business data. Everything the client can change (number, address,
 * hours, maps, socials, container width) lives here.
 * Values in [brackets] are still pending confirmation from the client.
 */
export const site = {
  /** Business name. Pending: "Roma Joyería" vs "Joyería Roma". */
  name: 'Roma Joyería',
  /** Logo (text). The diamond replaces the "O" of the wordmark. */
  logo: { word: 'ROMA', tagline: 'Joyería' },
  sinceYear: 1999,
  description:
    'Proveedor de joyería al mayoreo y menudeo con tienda física en el Centro Histórico de la CDMX, cerca del Palacio Nacional. Cotiza por WhatsApp.',
  locale: 'es-MX',

  /** Max content width in px (the client may try 1080 or 960). */
  containerWidth: 1200,

  whatsapp: {
    /** International format, digits only (e.g. 5215512345678). Pending. */
    number: '',
    /** How the number is displayed on screen. Pending. */
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

  /** Free-text hours. Pending. */
  hours: '[Horario]',
  parking: '[Estacionamiento]',

  maps: {
    /** "Get directions" link. */
    directionsUrl: 'https://maps.google.com/?q=Centro+Hist%C3%B3rico+CDMX',
    /** Google Maps iframe (embed) URL. Empty = the placeholder is shown. */
    embedUrl: '',
  },

  socials: {
    instagram: '',
    facebook: '',
  },

  /** Hero background image opacity, per mode. */
  hero: {
    backgroundDay: '/images/hero-background-day.jpg',
    backgroundNight: '/images/hero-background-night.jpg',
    opacityDay: 0.6,
    opacityNight: 0.75,
  },

  /** Real photo paths. Empty = placeholder. */
  photos: {
    hero: '',
    facade: '',
  },
} as const;

export type Site = typeof site;
