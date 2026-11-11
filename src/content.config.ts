import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    category: z.enum(['destinations', 'hiking-huts', 'winter-skiing', 'music-culture', 'itineraries', 'travel-tips']),
    destinations: z.array(z.enum(['vienna', 'salzburg', 'salzkammergut', 'tyrol-innsbruck', 'wachau', 'carinthia'])).default([]),
    author: z.string().default('alm-editors'),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    hero: z.string(),
    featured: z.boolean().default(false),
    startHere: z.boolean().default(false),
    advertisement: z.boolean().default(false),
    plan: z.object({
      heading: z.string(),
      text: z.string(),
      operator: z.string(),
      url: z.string().url(),
      linkText: z.string(),
    }),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).min(1),
  }),
});

export const collections = { posts };
