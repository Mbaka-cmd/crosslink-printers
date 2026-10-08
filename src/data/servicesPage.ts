import { site } from './site';

// Optional: a hand-written paragraph for a category, by category slug.
// Example: 'banners-large-format': 'Real description written by Crosslink.'
export const BLURBS: Record<string, string> = {};

export function guideBlurb(slug: string, names: string[]): string {
  if (BLURBS[slug]) return BLURBS[slug];
  const shown = names.slice(0, 4).map((n) => n.toLowerCase());
  const more = names.length > shown.length ? ' and more' : '';
  return `${shown.join(', ')}${more}. Tell us what you need and Crosslink will confirm the details and the price.`;
}

// Add questions with REAL answers here, for example about turnaround, payment methods or delivery.
// Example: { q: 'How fast is your turnaround?', a: 'Real answer.' }
export const EXTRA_FAQ: { q: string; a: string }[] = [];

const phones = site.phones.map((p) => p.display).join(' or ');

export const servicesFaq: { q: string; a: string }[] = [
  { q: 'How do I get a price?', a: 'Open the product, fill in what you need and send it on WhatsApp. Crosslink replies to confirm the details and the price.' },
  { q: 'How do I send my design?', a: 'Send the file in the WhatsApp chat after it opens. If you do not have a design yet, tell us what you want on it.' },
  { q: 'Where is Crosslink Printers?', a: 'Along Mt Kenya University Street, opposite Rezama Chemist, Nkubu, Kenya.' },
  { q: 'How can I contact Crosslink?', a: `Call ${phones}, message us on WhatsApp at ${site.whatsapp.display}, or email ${site.email}.` },
  ...EXTRA_FAQ,
];