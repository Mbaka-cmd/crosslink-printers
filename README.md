# Crosslink Printers

Website for Crosslink Printers, Nkubu. Built with Astro and TypeScript. It is a static site with no backend.

## Run locally

    npm install
    npm run dev

## Build

    npm run build

The finished site is created in `dist/`.

## Edit the content

- Contact details: `src/data/site.ts`
- Products, prices, options: `src/data/products.ts`
- Product photos: `src/assets/services/<product-slug>/<product-slug>.jpg`
  (extra photos: `<slug>-2.jpg`, `<slug>-3.jpg`)
- Home and Our Work photos: `src/assets/work/` (see the README in that folder)

Resize photos to about 1800px on the long side before adding them.
