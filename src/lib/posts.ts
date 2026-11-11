import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf() || a.data.title.localeCompare(b.data.title));
}

export function wordCount(body: string) {
  return body.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[#*>_`-]/g, ' ').split(/\s+/).filter(Boolean).length;
}
export const readingTime = (body: string) => Math.max(1, Math.round(wordCount(body) / 220));

export function related(post: CollectionEntry<'posts'>, all: CollectionEntry<'posts'>[], n = 3) {
  const score = (p: CollectionEntry<'posts'>) =>
    (p.data.category === post.data.category ? 2 : 0) + p.data.destinations.filter((d) => post.data.destinations.includes(d)).length;
  return all.filter((p) => p.id !== post.id).map((p) => ({ p, s: score(p) })).sort((a, b) => b.s - a.s).slice(0, n).map((x) => x.p);
}
