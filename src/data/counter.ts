// slug must match an id in catalogue.ts (rows link to /services#slug)
export const counter = [
  { slug: 'photocopying', name: 'Photocopying', image: 'document' },
  { slug: 'typesetting', name: 'Typesetting', image: 'document' },
  { slug: 'document-printing', name: 'Document printing', image: 'document' },
  { slug: 'binding', name: 'Binding', image: 'binding' },
  { slug: 'lamination', name: 'Lamination', image: 'lamination' },
  { slug: 'passport-photos', name: 'Passport photos', image: 'passport-photo' },
  { slug: 'computer-services', name: 'Computer services', image: 'computer' },
  { slug: 'cyber-services', name: 'Cyber services', image: 'computer' },
] as const;