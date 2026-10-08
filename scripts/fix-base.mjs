// Used only for the GitHub Pages build. Astro prefixes its own assets (CSS, JS, images)
// with the base folder, but hand-written links such as href="/services" need the same prefix.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.argv[2] || '').replace(/\/$/, '');
if (!base) { console.log('No base given, nothing to do.'); process.exit(0); }
const bare = base.replace(/^\//, '');
const re = new RegExp('(\\s(?:href|src|action|poster)=["\'])\\/(?!\\/|' + bare + '\\/)', 'g');

let files = 0, edits = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!p.endsWith('.html')) continue;
    const before = readFileSync(p, 'utf8');
    const after = before.replace(re, (_, a) => { edits++; return a + base + '/'; });
    if (after !== before) { writeFileSync(p, after); files++; }
  }
}
walk('dist');
console.log('Prefixed ' + edits + ' links in ' + files + ' pages.');
