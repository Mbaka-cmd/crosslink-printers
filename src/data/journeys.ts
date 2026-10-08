import { waLink, messages } from './site';

const ask = (t: string) => waLink(`Hello Crosslink Printers, I would like to enquire about ${t}.`);

export const journeys = [
  {
    num: '01', title: 'For your business', image: 'journey-business', ratio: '5 / 4',
    items: ['Receipt books', 'Business cards', 'Stickers', 'Posters', 'Flyers', 'Calendars'],
    cta: 'Print for business', href: waLink(messages.quote), external: true, flip: false, yellow: false,
  },
  {
    num: '02', title: 'For your event', image: 'journey-event', ratio: '3 / 4',
    items: ['Wedding cards', 'Invitation cards', 'Event materials', 'Photo printing'],
    cta: 'Print for an event', href: waLink(messages.event), external: true, flip: true, yellow: false,
  },
  {
    num: '03', title: 'For your documents', image: 'journey-documents', ratio: '16 / 10',
    items: ['Photocopying', 'Typesetting', 'Document printing', 'Binding', 'Lamination'],
    cta: 'Get documents done', href: ask('document services'), external: true, flip: false, yellow: false,
  },
  {
    num: '04', title: 'For yourself', image: 'journey-self', ratio: '1 / 1',
    items: ['Photos', 'Passport photos', 'Computer services', 'Cyber services'],
    cta: 'Visit Crosslink', href: '/contact', external: false, flip: false, yellow: true,
  },
] as const;