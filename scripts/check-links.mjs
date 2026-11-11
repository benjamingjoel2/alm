// Checks every external link in the built site (dist/) and prints non-200 results.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk('dist');
const urls = new Set();
for (const f of files) for (const m of readFileSync(f, 'utf8').matchAll(/href="(https?:\/\/[^"#]+)/g)) urls.add(m[1].replace(/&amp;/g, '&'));
const skip = (u) => u.startsWith('https://alm.tourground.com') || u.startsWith('mailto:');
const list = [...urls].filter((u) => !skip(u)).sort();
console.log(`${list.length} external URLs`);
let bad = 0;
await Promise.all(Array.from({ length: 6 }, async (_, w) => {
  for (let i = w; i < list.length; i += 6) {
    const u = list[i];
    let status = 0;
    try { status = (await fetch(u, { redirect: 'follow', headers: { 'User-Agent': 'AlmLinkCheck/1.0' }, signal: AbortSignal.timeout(20000) })).status; } catch (e) { status = 'ERR ' + e.cause?.code; }
    if (status !== 200) { bad++; console.log(status, u); }
  }
}));
console.log(bad ? `${bad} problem URLs` : 'all 200');
