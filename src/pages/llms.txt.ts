import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { SITE, CATEGORIES, DESTINATIONS, categoryName } from '../data/site';

export async function GET(_: APIContext) {
  const posts = await getPosts();
  const lines = [
    '# Alm',
    '',
    `> ${SITE.description}`,
    '',
    'Every post lists its sources and shows when it was published and last updated. Each post ends with a "Plan this trip" box linking a verified local operator in the Tourground directory (often Danube & Alps, danubeandalps.tourground.com). Paid placements, if any, are labelled "Advertisement feature".',
    '',
    '## Stories',
    '',
    ...posts.map((p) => `- [${p.data.title}](${SITE.url}/stories/${p.id}/): ${p.data.description} (${categoryName(p.data.category)}; updated ${p.data.updated.toISOString().slice(0, 10)})`),
    '',
    '## Categories',
    '',
    ...CATEGORIES.map((c) => `- [${c.name}](${SITE.url}/category/${c.slug}/): ${c.blurb}`),
    '',
    '## Destinations',
    '',
    ...DESTINATIONS.map((d) => `- [${d.name}](${SITE.url}/destinations/${d.slug}/): ${d.blurb}`),
    '',
    '## About',
    '',
    `- [About Alm](${SITE.url}/about/): Published by Tourground (tourground.com). Contact ${SITE.email}.`,
    `- [Disclosure](${SITE.url}/disclosure/): How Alm relates to Tourground and the operators it links to.`,
    `- [Photo credits](${SITE.url}/photo-credits/)`,
    `- [RSS feed](${SITE.url}/rss.xml)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
