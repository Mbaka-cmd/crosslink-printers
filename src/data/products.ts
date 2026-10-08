// ============================================================
// PRODUCT DATA. This is the only file you edit to change the catalogue.
// Pages and components only READ from here.
// ============================================================

export type PriceType = 'quote' | 'fixed' | 'from';
export type ProductOption = {
  key: string;
  label: string;
  type: 'choice' | 'text' | 'number';
  choices?: string[];   // for type 'choice'
  hint?: string;
};
export type Spec = { label: string; value: string };
export type Faq = { q: string; a: string };
export type Category = { slug: string; name: string };
export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  priceType: PriceType;
  startingPrice: number | null;
  featured: boolean;
  tags: string[];
  options: ProductOption[];
  specs: Spec[];
  faqs: Faq[];
  related: string[];
  order: number;
};

export const categories: Category[] = [
  { slug: 'business-corporate', name: 'Business & Corporate' },
  { slug: 'flyers-posters', name: 'Flyers, Brochures & Posters' },
  { slug: 'banners-large-format', name: 'Banners & Large Format' },
  { slug: 'events-occasions', name: 'Events & Occasions' },
  { slug: 'apparel', name: 'Apparel & Wearable Branding' },
  { slug: 'stickers-labels', name: 'Stickers, Labels & Decals' },
  { slug: 'signage', name: 'Signage' },
  { slug: 'promotional', name: 'Promotional Products' },
  { slug: 'mugs-drinkware', name: 'Mugs & Drinkware' },
  { slug: 'packaging', name: 'Packaging' },
  { slug: 'photos-framing', name: 'Photos & Framing' },
  { slug: 'books-binding', name: 'Books, Booklets & Binding' },
  { slug: 'stationery', name: 'Stationery' },
  { slug: 'digital-documents', name: 'Digital & Document Services' },
  { slug: 'graphic-design', name: 'Graphic Design' },
];

// Add the slug of any product Crosslink does NOT offer. It disappears everywhere (grid, counts, pages).
const HIDE = new Set<string>([
  // 'scanning',
]);

// ---- REAL VALUES GO IN THESE MAPS. Nothing is shown until you add it. ----

// Confirmed prices only. Example: 'receipt-books': { type: 'from', amount: 1500 }
export const PRICES: Record<string, { type: 'fixed' | 'from'; amount: number }> = {};

// Confirmed choices only. Each entry becomes a field on that product page.
// Example:
// 'business-cards': [
//   { key: 'size', label: 'Size', type: 'choice', choices: ['Standard'] },
//   { key: 'finish', label: 'Finish', type: 'choice', choices: ['Matte', 'Gloss'] },
// ],
export const OPTIONS: Record<string, ProductOption[]> = {};

// Confirmed facts shown as a small table. Example: 'lamination': [{ label: 'Sizes', value: 'A4, A3' }]
export const SPECS: Record<string, Spec[]> = {};

// Questions customers really ask. Example: 'wedding-cards': [{ q: '...', a: '...' }]
export const FAQS: Record<string, Faq[]> = {};

// Custom related products by slug. Default is "same category".
export const RELATED: Record<string, string[]> = {};

// Descriptions taken from earlier approved Crosslink copy. Others use the generic line below.
const DESC: Record<string, string> = {
  'receipt-books': 'Custom printed receipt books for businesses and organisations.',
  'business-cards': 'Professional business cards for individuals and businesses.',
  'stickers': 'Custom stickers for products, packaging and branding.',
  'posters': 'Promotional materials for businesses, events and announcements.',
  'calendars': 'Printed calendars for personal, business and promotional use.',
  'wedding-cards': 'Printed invitations for weddings, celebrations and special occasions.',
  'photocopying': 'Everyday document reproduction.',
  'typesetting': 'Document preparation and formatting.',
  'binding': 'Professional document finishing.',
  'lamination': 'Protect and finish important documents.',
  'photo-printing': 'Photo printing for personal and event use.',
  'passport-photos': 'Passport-photo service.',
};

// '*' after a name marks it as featured (shown first when sorted by Featured).
const catalog: Record<string, string[]> = {
  'business-corporate': ['Business Cards*', 'Letterheads', 'Envelopes', 'Receipt Books*', 'Presentation Folders', 'Certificates', 'Corporate Stationery', 'Gift Vouchers', 'Bookmarks', 'Postcards'],
  'flyers-posters': ['Flyers*', 'Posters*', 'Brochures', 'Menus', 'Programmes'],
  'banners-large-format': ['X-Banners', 'Roll-Up Banners', 'L-Banners', 'Backdrops', 'Media Walls', 'Vinyl Banners', 'Large Format Printing', 'Wheel Cover Printing', 'Other Large Format Materials'],
  'events-occasions': ['Wedding Cards*', 'Invitation Cards*', 'Funeral Programmes', 'Event Programmes', 'New Baby Cards', 'Name Tags', 'Tent Cards', 'Table Materials', 'Event Display Materials'],
  'apparel': ['Branded T-Shirts', 'Polo Shirts', 'Hoodies', 'Jerseys', 'Caps', 'Aprons', 'Reflector Jackets', 'Other Wearable Branding'],
  'stickers-labels': ['Stickers*', 'Product Labels', 'Vinyl Stickers', 'Reflective Stickers', 'Floor Stickers', 'Car Stickers', 'Bike Stickers', 'Custom Labels'],
  'signage': ['Door Signs', 'Door Plates', 'Rigid Signs', '3D Signs', 'Printed Signs', 'Business Signage', 'Custom Signage'],
  'promotional': ['Branded Pens', 'Keyholders', 'Mousepads', 'Tote Bags', 'Drawstring Bags', 'Umbrellas', 'Promotional Merchandise'],
  'mugs-drinkware': ['Branded Mugs', 'Enamel Mugs', 'Thermal Mugs', 'Flasks', 'Water Bottles', 'Other Branded Drinkware'],
  'packaging': ['Kraft Bags', 'Jute Bags', 'Branded Bags', 'Packaging Boxes', 'Product Packaging'],
  'photos-framing': ['Photo Printing*', 'Passport Photos*', 'Mounted Photos', 'Photo Framing', 'Canvas Printing'],
  'books-binding': ['Book Printing', 'Booklets', 'Magazines', 'Catalogues', 'Spiral Binding', 'Binding & Finishing'],
  'stationery': ['Calendars*', 'Diaries', 'Notebooks', 'Planners', 'Custom Stationery'],
  'digital-documents': ['Document Printing*', 'Photocopying*', 'Typesetting*', 'Scanning', 'Binding*', 'Lamination*', 'Computer Services*', 'Cyber Services*'],
  'graphic-design': ['Logo Design', 'Business Material Design', 'Poster Design', 'Flyer Design', 'Invitation Design', 'Social Media Graphics', 'Other Graphic Design Services'],
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const seen = new Set<string>();
const built: Product[] = [];
for (const cat of categories) {
  for (const raw of catalog[cat.slug] ?? []) {
    const featured = raw.endsWith('*');
    const name = raw.replace(/\*$/, '');
    const slug = slugify(name);
    if (seen.has(slug)) throw new Error(`Duplicate product slug: ${slug}`);
    seen.add(slug);
    if (HIDE.has(slug)) continue;
    const price = PRICES[slug];
    built.push({
      slug,
      name,
      category: cat.name,
      categorySlug: cat.slug,
      description: DESC[slug] ?? `${name} from Crosslink Printers. Tell us what you need and we will confirm the details and the price with you.`,
      priceType: price ? price.type : 'quote',
      startingPrice: price ? price.amount : null,
      featured,
      tags: Array.from(new Set([...name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean), ...cat.name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)])),
      options: OPTIONS[slug] ?? [],
      specs: SPECS[slug] ?? [],
      faqs: FAQS[slug] ?? [],
      related: RELATED[slug] ?? [],
      order: built.length,
    });
  }
}
export const products: Product[] = built;

export const hasPrices = products.some((p) => p.startingPrice !== null);

const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export function priceLabel(p: Product): string {
  if (p.startingPrice === null) return 'Request a quote';
  return p.priceType === 'from' ? `From KES ${fmt(p.startingPrice)}` : `KES ${fmt(p.startingPrice)}`;
}

export const categoriesWithCounts = categories
  .map((c) => ({ ...c, count: products.filter((p) => p.categorySlug === c.slug).length }))
  .filter((c) => c.count > 0);

export function relatedProducts(p: Product, limit = 4): Product[] {
  const explicit = p.related.map((s) => products.find((x) => x.slug === s)).filter((x): x is Product => !!x);
  const same = products.filter((x) => x.categorySlug === p.categorySlug && x.slug !== p.slug && !p.related.includes(x.slug));
  return [...explicit, ...same].slice(0, limit);
}