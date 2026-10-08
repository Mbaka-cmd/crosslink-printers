import { mkdirSync, writeFileSync } from 'node:fs';
import { products } from '../src/data/products.ts';

const lines = [];
for (const p of products) {
  mkdirSync(`src/assets/services/${p.slug}`, { recursive: true });
  lines.push(`${p.name}  ->  src/assets/services/${p.slug}/${p.slug}.jpg`);
}
writeFileSync('src/assets/services/_CHECKLIST.txt',
  'Main photo: <slug>.jpg. Extra photos for the product page: <slug>-2.jpg, <slug>-3.jpg.\n\n' + lines.join('\n') + '\n');
console.log(`Created ${products.length} product folders.`);