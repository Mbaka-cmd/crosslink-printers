import { waLink } from './site';

type Item = { slug: string; name: string; desc?: string };

const raw: { id: string; num: string; title: string; image: string; items: Item[] }[] = [
  { id: 'business', num: '01', title: 'Business printing', image: 'journey-business', items: [
    { slug: 'receipt-books', name: 'Receipt books', desc: 'Custom printed receipt books for businesses and organisations.' },
    { slug: 'business-cards', name: 'Business cards', desc: 'Professional business cards for individuals and businesses.' },
    { slug: 'stickers-labels', name: 'Stickers & labels', desc: 'Custom stickers for products, packaging and branding.' },
    { slug: 'posters', name: 'Posters', desc: 'Promotional materials for businesses, events and announcements.' },
    { slug: 'flyers', name: 'Flyers' },
    { slug: 'calendars', name: 'Calendars', desc: 'Printed calendars for personal, business and promotional use.' },
    { slug: 'promotional-materials', name: 'Promotional materials' },
  ]},
  { id: 'events', num: '02', title: 'Events & occasions', image: 'journey-event', items: [
    { slug: 'wedding-cards', name: 'Wedding cards', desc: 'Printed invitations for weddings, celebrations and special occasions.' },
    { slug: 'invitation-cards', name: 'Invitation cards' },
    { slug: 'event-materials', name: 'Event materials' },
    { slug: 'event-photo-printing', name: 'Photo printing' },
  ]},
  { id: 'documents', num: '03', title: 'Document services', image: 'journey-documents', items: [
    { slug: 'photocopying', name: 'Photocopying', desc: 'Everyday document reproduction.' },
    { slug: 'typesetting', name: 'Typesetting', desc: 'Document preparation and formatting.' },
    { slug: 'document-printing', name: 'Document printing' },
    { slug: 'binding', name: 'Binding', desc: 'Professional document finishing.' },
    { slug: 'lamination', name: 'Lamination', desc: 'Protect and finish important documents.' },
  ]},
  { id: 'photos', num: '04', title: 'Photos', image: 'passport-photo', items: [
    { slug: 'photo-printing', name: 'Photo printing' },
    { slug: 'passport-photos', name: 'Passport photos' },
  ]},
  { id: 'digital', num: '05', title: 'Computer & digital', image: 'computer', items: [
    { slug: 'computer-services', name: 'Computer services' },
    { slug: 'cyber-services', name: 'Cyber services' },
  ]},
];

export const catalogue = raw.map((g) => ({
  ...g,
  items: g.items.map((i) => ({
    ...i,
    href: waLink(`Hello Crosslink Printers, I would like to enquire about ${i.name.toLowerCase()}.`),
  })),
}));