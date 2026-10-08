// cat: business | events | promotional | documents | photos
// key must exist in images.ts. ar = aspect ratio of the crop.
export const workItems = [
  { key: 'receipt-book', cat: 'business', ar: '4 / 5' },
  { key: 'wedding', cat: 'events', ar: '3 / 2' },
  { key: 'business-card', cat: 'business', ar: '1 / 1' },
  { key: 'poster', cat: 'promotional', ar: '4 / 5' },
  { key: 'invitation', cat: 'events', ar: '1 / 1' },
  { key: 'sticker', cat: 'business', ar: '3 / 2' },
  { key: 'calendar', cat: 'promotional', ar: '3 / 4' },
  { key: 'document', cat: 'documents', ar: '4 / 3' },
  { key: 'binding', cat: 'documents', ar: '1 / 1' },
  { key: 'lamination', cat: 'documents', ar: '4 / 5' },
  { key: 'passport-photo', cat: 'photos', ar: '3 / 4' },
  { key: 'photo-print', cat: 'photos', ar: '3 / 2' },
  { key: 'event-main', cat: 'events', ar: '16 / 10' },
] as const;