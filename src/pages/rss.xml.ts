import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { SITE, categoryName } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Alm',
    description: SITE.description,
    site: context.site!,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.published,
      link: `/stories/${p.id}/`,
      categories: [categoryName(p.data.category)],
      author: `${SITE.email} (Alm editors)`,
    })),
    customData: '<language>en-gb</language>',
  });
}
