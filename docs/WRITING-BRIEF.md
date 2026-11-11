# Alm writing brief

Alm (alm.tourground.com) is a travel blog about Austria, published by Tourground. An *Alm* is a high summer pasture in the Alps. Readers are people planning a trip to Austria, many of them first-timers.

## Voice

- Story-led and practical. Open each post with a scene that puts the reader somewhere specific (a tram stop, a lakeside at seven in the morning, a hut terrace), then get useful quickly.
- Warm and first-hand in tone, written as "we" (the Alm editors). British English spelling.
- **Never fabricate experience.** No invented anecdotes with named people, no "we stayed at X and the owner told us…", no invented dialogue. Scene-setting must be generically true of the place (what you see, hear, eat; how things work), not a claimed one-off event.
- No invented reviews, ratings, testimonials or quotes. Do not quote anyone unless you are quoting an official source word for word and linking it.
- No invented prices or statistics. Avoid prices altogether; say "check current fares on [official site]" instead. Numbers such as opening years, altitudes, journey times or distances are allowed **only** when an official source you cite states them; otherwise write around them ("a little over two hours").
- Practical facts (opening seasons, booking rules, how passes work, train routes, hut etiquette, avalanche advice) must come from an official or authoritative source that you list in `sources`, and the inline text should link that source where the fact appears.
- Preferred sources: austria.info (Austrian National Tourist Office), wien.info, salzburg.info, ooe/salzkammergut.at, tirol.at, innsbruck.info, donau.com / wachau.at, kaernten.at, oebb.at / sbb.ch / westbahn.at, alpenverein.at (Austrian Alpine Club), alpenvereinaktiv.com, lawinen.report (avalanche bulletins), UNESCO (whc.unesco.org, ich.unesco.org), museum and venue official sites (wiener-staatsoper.at, musikverein.at, salzburgerfestspiele.at, mozarteum.at, stiftmelk.at, hallstatt.net), gov.uk / travel.state.gov / bmeia.gv.at for entry and safety advice, ec.europa.eu for Schengen/EES/ETIAS. Avoid blogs, Wikipedia, TripAdvisor as sources.
- Every source URL you cite must load (check it with `curl -sSL -o /dev/null -w "%{http_code}" URL` and get 200, or confirm with WebFetch). Only state what the page actually supports. If a fact cannot be sourced, cut it.
- No mention of maps, no "click the map". No emoji. No exclamation marks unless truly earned (prefer none).
- Do not oversell Danube & Alps or the Tourground directory in the body; the "Plan this trip" box at the end does that job. One natural mention in the closing paragraph is fine.

## Format

- One Markdown file per post at `src/content/posts/<slug>.md`.
- Body length **1,300–1,900 words** (count body only, not frontmatter). Check with `sed '1,/^---$/d' file | sed '1,/^---$/d' | wc -w` or similar.
- No H1 in the body (the title is rendered by the layout). Use `##` for sections and `###` sparingly. 5–8 `##` sections.
- Short paragraphs (2–4 sentences). Bullet lists where they genuinely help (packing, etiquette, steps).
- Links to other Alm posts use `/stories/<slug>/`. Existing slugs:
  - `first-timers-guide-to-austria`
  - `vienna-in-three-days`
  - `salzburg-beyond-the-sound-of-music`
  - `hallstatt-and-the-salzkammergut-lakes`
  - `hut-to-hut-hiking-austrian-alps`
  - `wachau-valley-by-bike-and-boat`
  - `austria-christmas-markets`
  - `austria-10-day-itinerary-by-train`
  - `skiing-in-tyrol-for-first-timers`
  - `vienna-coffee-houses-guide`
- Include a short "Before you go" or "Practical notes" section near the end with bullet points.
- End the body with a short closing paragraph (no heading needed).

## Frontmatter (exact schema)

```yaml
---
title: "Vienna in three days"            # sentence case
description: "One or two sentences, under 160 characters, for search results and cards."
category: destinations                    # one of: destinations, hiking-huts, winter-skiing, music-culture, itineraries, travel-tips
destinations: [vienna]                    # zero or more of: vienna, salzburg, salzkammergut, tyrol-innsbruck, wachau, carinthia
author: alm-editors
published: 2026-11-11
updated: 2026-11-11
hero: vienna                               # given to you; do not change
featured: false
startHere: false
plan:
  heading: "Plan Vienna with a local operator"
  text: "One or two sentences on what a local operator can help with for THIS trip (e.g. booking opera seats through official box offices, building a rail route). Only claim what the operator's page says it does."
  operator: "Danube & Alps"
  url: "https://danubeandalps.tourground.com/vienna"
  linkText: "See Danube & Alps' Vienna planning"
sources:
  - title: "Vienna Tourist Board: Vienna City Card"
    url: "https://www.wien.info/en/..."
---
```

`sources` lists every external source used, in order of first use, with a descriptive title in the form "Publisher: Page title".
