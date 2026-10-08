Drop client photos here. The file name decides where it appears.
Formats: jpg, jpeg, png, webp, avif. Astro makes AVIF/WebP and responsive sizes at build time.
Landscape or portrait both work; crops are handled in CSS. Aim for 1800px on the long side.

Core subjects (about 15 files fill the whole site):
hero, receipt-book, business-card, invitation, wedding, sticker, poster, calendar,
passport-photo, document, binding, lamination, photo-print, computer, storefront

Optional overrides (each reuses a core photo until you add its own file):
hero-detail, event-main, event-detail, journey-business, journey-event, journey-documents,
journey-self, feature-receipt, feature-card, feature-sticker, work-1 ... work-7

After adding a photo, edit its alt text in src/data/images.ts so it describes the real image.