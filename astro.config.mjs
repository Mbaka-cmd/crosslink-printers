import { defineConfig } from 'astro/config';

// `site` is intentionally unset until the real domain is confirmed.
// Once known: site: 'https://example.co.ke'  (enables canonical URLs + sitemap)
export default defineConfig({
  compressHTML: true,
});