// ============================================================
// PRODUCT DETAIL FOR THE PRODUCT PAGE.
// Everything is empty on purpose. A section appears only when you add REAL, confirmed values.
// Keys are product slugs, for example 'roll-up-banners' or 'business-cards'.
//
// While you run `npm run dev`, products with no real data show DEMO data so you can see the
// full layout. Demo data never appears in a production build or on the live site.
// ============================================================

export type Tier = { label: string; price: number | null; qty?: number; note?: string };
export type Turnaround = { key: string; label: string; badge?: string; note?: string; extra: number | null };
export type Template = { label: string; href: string };
export type InfoBlock = { title: string; body: string };
export type DeliveryZone = { zone: string; price: string };
export type Intro = { title: string; body: string };

// "Select print run". price = total for that run in KES. qty lets the page show a per-unit price.
// Example (REAL values only):
// 'roll-up-banners': [
//   { label: '1 pc', qty: 1, price: 0 },
//   { label: '2 pcs', qty: 2, price: 0 },
// ],
export const TIERS: Record<string, Tier[]> = {};

// "Select turnaround time". extra = added KES cost (null if none or unknown). badge = small label.
// Example: 'roll-up-banners': [{ key: 'std', label: '3 days', badge: 'Standard', note: 'Confirmed on order', extra: null }],
export const TURNAROUND: Record<string, Turnaround[]> = {};

// Download templates. href = link, or a file in the public folder.
export const TEMPLATES: Record<string, Template[]> = {};

// Collapsible information sections (specifications, materials, artwork guidelines...).
export const INFO: Record<string, InfoBlock[]> = {};

// Heading and paragraph shown under the product, e.g. "Custom Roll-Up Banners in Kenya".
export const INTRO: Record<string, Intro> = {};

// Small trust badges under the photo. Example: ['High quality prints']
export const BADGES: Record<string, string[]> = {};

// Delivery zones and prices. Example: [{ zone: 'Nkubu', price: 'Free' }]
export const DELIVERY: Record<string, DeliveryZone[]> = {};

// VAT line in the pricing summary. Example: 'VAT (16%) included'
export const VAT_NOTE: Record<string, string> = {};

// Used for every product that has no entry of its own above.
export const GLOBAL: { badges: string[]; delivery: DeliveryZone[]; vatNote: string } = {
  badges: [],
  delivery: [],
  vatNote: '',
};

export type Extras = {
  tiers: Tier[];
  turnaround: Turnaround[];
  templates: Template[];
  info: InfoBlock[];
  intro: Intro | null;
  badges: string[];
  delivery: DeliveryZone[];
  vatNote: string;
  demo: boolean;
};

function demoExtras(name: string): Extras {
  const unit = 1000;
  return {
    tiers: [1, 2, 3, 4].map((q) => ({ label: `${q} pc${q > 1 ? 's' : ''} (demo)`, qty: q, price: Math.round(unit * q * (1 - 0.03 * (q - 1))) })),
    turnaround: [
      { key: 'rush', label: '24 hrs', badge: 'Rush', note: 'Demo note', extra: 1500 },
      { key: 'express', label: '2 days', badge: 'Express', note: 'Demo note', extra: 500 },
      { key: 'standard', label: '3 days', badge: 'Standard', note: 'Demo note', extra: null },
    ],
    templates: [
      { label: 'PSD', href: '#' },
      { label: 'AI', href: '#' },
      { label: 'INDD', href: '#' },
    ],
    info: [
      { title: 'Specifications and materials (demo)', body: 'Demo text. Replace with the real specifications for this product.' },
      { title: 'Artwork guidelines (demo)', body: 'Demo text. Replace with the real artwork guidelines for this product.' },
    ],
    intro: { title: `Custom ${name} in Kenya (demo)`, body: 'Demo paragraph. Replace with a real description written for this product.' },
    badges: ['Demo badge one', 'Demo badge two'],
    delivery: [
      { zone: 'Demo zone A', price: 'KES 0' },
      { zone: 'Demo zone B', price: 'KES 0' },
    ],
    vatNote: 'Demo VAT line',
    demo: true,
  };
}

export function getExtras(slug: string, name = ''): Extras {
  const real: Extras = {
    tiers: TIERS[slug] ?? [],
    turnaround: TURNAROUND[slug] ?? [],
    templates: TEMPLATES[slug] ?? [],
    info: INFO[slug] ?? [],
    intro: INTRO[slug] ?? null,
    badges: BADGES[slug] ?? GLOBAL.badges,
    delivery: DELIVERY[slug] ?? GLOBAL.delivery,
    vatNote: VAT_NOTE[slug] ?? GLOBAL.vatNote,
    demo: false,
  };
  const hasReal = real.tiers.length > 0 || real.turnaround.length > 0 || real.templates.length > 0 || real.info.length > 0 || real.intro !== null;
  if (!hasReal && (import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_DEMO === 'true')) return demoExtras(name);
  return real;
}