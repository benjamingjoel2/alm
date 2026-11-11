# Alm

Alm (alm.tourground.com) is a travel blog about Austria, published by Tourground. An *Alm* is a high summer pasture in the Alps.

Static Astro site, deployed on Vercel (project `alm`).

## Develop

```bash
npm install
npm run dev
```

## Build and check

```bash
npm run build
npm run check:links   # every external link in dist/ should return 200
```

## Content

- Posts: `src/content/posts/*.md`, schema in `src/content.config.ts`. Writing rules: `docs/WRITING-BRIEF.md`.
- Each post needs `sources` (every practical fact links its official source), `updated` (shown on the page) and a `plan` box pointing to a verified operator in the Tourground directory.
- Paid placements: set `advertisement: true`. The post is then labelled "Advertisement feature" on cards and on the page.
- Photos: `src/assets/photos/<key>.jpg`, credits in `src/data/photo-meta.json`, alt text and captions in `src/data/photos.ts`. All are from Wikimedia Commons under the licences listed on /photo-credits/.
- Categories, destinations and authors: `src/data/site.ts`.
