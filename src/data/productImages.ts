import type { ImageMetadata } from 'astro';

// Photos live in src/assets/services/<slug>/<slug>.jpg  (main photo)
// and src/assets/services/<slug>/<slug>-2.jpg, -3.jpg ... (extra photos for the product page).
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/services/*/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

const byProduct: Record<string, { name: string; img: ImageMetadata }[]> = {};
for (const [path, mod] of Object.entries(files)) {
  const m = path.match(/services\/([^/]+)\/([^/]+)\.[a-z0-9]+$/i);
  if (!m) continue;
  (byProduct[m[1].toLowerCase()] ??= []).push({ name: m[2].toLowerCase(), img: mod.default });
}

export function getProductImages(slug: string): ImageMetadata[] {
  const list = byProduct[slug] ?? [];
  return [...list]
    .sort((a, b) => (a.name === slug ? 0 : 1) - (b.name === slug ? 0 : 1) || a.name.localeCompare(b.name))
    .map((x) => x.img);
}