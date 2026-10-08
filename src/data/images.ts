import type { ImageMetadata } from 'astro';

// Drop files into src/assets/work/ named after a key below (jpg, jpeg, png, webp, avif).
// Example: src/assets/work/receipt-book.jpg
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/work/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

const found: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  const m = path.match(/([^/]+)\.[a-z0-9]+$/i);
  if (m) found[m[1].toLowerCase()] = mod.default;
}

export type ImageDef = {
  label: string;     // shown on the placeholder only
  alt: string;       // edit to describe the real photo once supplied
  position?: string; // object-position for the crop, e.g. '50% 30%'
  fallback?: string; // if no file for this key, reuse the file of another key
};

export const images = {
  hero: { label: 'Crosslink print work', alt: 'Printed work from Crosslink Printers in Nkubu' },
  'hero-detail': { label: 'Receipt book', alt: 'Custom receipt book printed by Crosslink Printers', fallback: 'receipt-book' },

  'receipt-book': { label: 'Receipt book', alt: 'Custom receipt books printed by Crosslink Printers' },
  'business-card': { label: 'Business card', alt: 'Business cards printed by Crosslink Printers' },
  invitation: { label: 'Invitation card', alt: 'Invitation cards printed by Crosslink Printers' },
  wedding: { label: 'Wedding card', alt: 'Wedding cards printed by Crosslink Printers' },
  sticker: { label: 'Sticker', alt: 'Custom stickers printed by Crosslink Printers' },
  poster: { label: 'Poster', alt: 'Posters printed by Crosslink Printers' },
  calendar: { label: 'Calendar', alt: 'Calendars printed by Crosslink Printers' },
  'passport-photo': { label: 'Passport photo', alt: 'Passport photos printed by Crosslink Printers' },
  document: { label: 'Document', alt: 'Documents printed and prepared by Crosslink Printers' },
  binding: { label: 'Binding', alt: 'Bound documents finished by Crosslink Printers' },
  lamination: { label: 'Lamination', alt: 'Laminated documents finished by Crosslink Printers' },
  'photo-print': { label: 'Photo print', alt: 'Photo prints made by Crosslink Printers' },
  computer: { label: 'Computer services', alt: 'Computer and cyber services at Crosslink Printers' },
  storefront: { label: 'Crosslink storefront', alt: 'Crosslink Printers shop on Mt Kenya University Street, Nkubu' },

  'event-main': { label: 'Wedding and event cards', alt: 'Wedding and event cards printed by Crosslink Printers', fallback: 'wedding' },
  'event-detail': { label: 'Invitation card', alt: 'Invitation card printed by Crosslink Printers', fallback: 'invitation' },

  'journey-business': { label: 'Business printing', alt: 'Business printing by Crosslink Printers', fallback: 'receipt-book' },
  'journey-event': { label: 'Event printing', alt: 'Event printing by Crosslink Printers', fallback: 'wedding' },
  'journey-documents': { label: 'Document services', alt: 'Document services at Crosslink Printers', fallback: 'document' },
  'journey-self': { label: 'Photos and passport photos', alt: 'Photo and passport-photo services at Crosslink Printers', fallback: 'passport-photo' },

  'feature-receipt': { label: 'Receipt books', alt: 'Receipt books printed by Crosslink Printers', fallback: 'receipt-book' },
  'feature-card': { label: 'Business cards', alt: 'Business cards printed by Crosslink Printers', fallback: 'business-card' },
  'feature-sticker': { label: 'Stickers', alt: 'Stickers printed by Crosslink Printers', fallback: 'sticker' },

  'work-1': { label: 'Business card', alt: 'Business cards printed by Crosslink Printers', fallback: 'business-card' },
  'work-2': { label: 'Wedding card', alt: 'Wedding cards printed by Crosslink Printers', fallback: 'wedding' },
  'work-3': { label: 'Receipt book', alt: 'Receipt books printed by Crosslink Printers', fallback: 'receipt-book' },
  'work-4': { label: 'Poster', alt: 'Posters printed by Crosslink Printers', fallback: 'poster' },
  'work-5': { label: 'Calendar', alt: 'Calendars printed by Crosslink Printers', fallback: 'calendar' },
  'work-6': { label: 'Document', alt: 'Documents printed by Crosslink Printers', fallback: 'document' },
  'work-7': { label: 'Passport photo', alt: 'Passport photos printed by Crosslink Printers', fallback: 'passport-photo' },
} as const satisfies Record<string, ImageDef>;

export type ImageKey = keyof typeof images;

export function getImage(key: ImageKey): ImageMetadata | undefined {
  const hit = found[key];
  if (hit) return hit;
  const fb = (images[key] as ImageDef).fallback;
  return fb ? getImage(fb as ImageKey) : undefined;
}