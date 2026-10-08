// Single source of truth for all business facts.
// Only confirmed information lives here. Do not add invented data.

export const site = {
  name: 'Crosslink Printers',
  shortName: 'CROSSLINK',
  tagline: 'Printers — Nkubu',
  positioning: 'Professional Printing & Digital Services in Nkubu',
  // Set when the real domain is confirmed (no trailing slash). Empty = no canonical.
  url: '',
  phones: [
    { display: '0725 265 237', tel: '+254725265237' },
    { display: '0738 279 640', tel: '+254738279640' },
  ],
  whatsapp: { display: '0725 265 237', intl: '254725265237' },
  email: 'crosslinkprinters@gmail.com',
  address: {
    lines: ['Mt Kenya University Street', 'Opposite Rezama Chemist', 'Nkubu'],
    full: 'Along Mt Kenya University Street, opposite Rezama Chemist, Nkubu, Kenya',
    locality: 'Nkubu',
    country: 'KE',
  },
  // Set when the real Google Maps listing/pin is confirmed. Never invent coordinates.
  mapsUrl: '',
  credit: { name: 'Adalyn Technologies' },
} as const;

export const messages = {
  general: 'Hello Crosslink Printers, I found your website and would like to enquire about your printing services.',
  receiptBooks: 'Hello Crosslink Printers, I would like to enquire about receipt book printing.',
  cards: 'Hello Crosslink Printers, I would like to enquire about wedding/invitation cards.',
  posters: 'Hello Crosslink Printers, I would like to enquire about poster printing.',
  stickers: 'Hello Crosslink Printers, I would like to enquire about sticker printing.',
  quote: 'Hello Crosslink Printers, I would like to request a printing quote.',
  event: 'Hello Crosslink Printers, I would like to enquire about event/wedding printing.',
} as const;

export function waLink(message: string = messages.general): string {
  return `https://wa.me/${site.whatsapp.intl}?text=${encodeURIComponent(message)}`;
}

export function mapsLink(): string {
  // Until the exact pin is confirmed, fall back to a text search (no fabricated coordinates).
  return site.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Crosslink Printers ' + site.address.full)}`;
}