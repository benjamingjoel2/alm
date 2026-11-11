export const SITE = {
  name: 'Alm',
  url: 'https://alm.tourground.com',
  tagline: 'Stories and practical guides for planning a trip to Austria',
  description:
    'Alm is a travel blog for people planning a trip to Austria: the Alps, the lakes, Vienna, music, hut-to-hut hiking and winter, with sources and a verified local operator for every trip. Published by Tourground.',
  email: 'alm@tourground.com',
  publisher: 'Tourground',
  publisherUrl: 'https://tourground.com',
  directoryUrl: 'https://tourground.com/#/explore',
  locale: 'en_GB',
  lastReviewed: '2026-11-11',
};

export type CategorySlug = 'destinations' | 'hiking-huts' | 'winter-skiing' | 'music-culture' | 'itineraries' | 'travel-tips';
export type DestinationSlug = 'vienna' | 'salzburg' | 'salzkammergut' | 'tyrol-innsbruck' | 'wachau' | 'carinthia';

export const CATEGORIES: { slug: CategorySlug; name: string; blurb: string; photo: string }[] = [
  { slug: 'destinations', name: 'Destinations', blurb: 'Vienna, Salzburg, the Salzkammergut, Tyrol and Innsbruck, the Wachau and Carinthia: where to go and how each place works.', photo: 'hallstatt' },
  { slug: 'hiking-huts', name: 'Hiking & Huts', blurb: 'Alpine Club huts, trail grades, what to pack and how to walk from one hut to the next.', photo: 'alpine-hut' },
  { slug: 'winter-skiing', name: 'Winter & Skiing', blurb: 'First ski weeks, ski schools, slope rules and the winter mountains.', photo: 'tyrol-ski' },
  { slug: 'music-culture', name: 'Music & Culture', blurb: 'Opera, coffee houses, Advent markets and the traditions that shape an Austrian year.', photo: 'coffee-house' },
  { slug: 'itineraries', name: 'Itineraries', blurb: 'Day-by-day routes through Austria, most of them by train.', photo: 'railjet' },
  { slug: 'travel-tips', name: 'Travel Tips', blurb: 'Entry rules, money, seasons, trains and the customs worth knowing before you go.', photo: 'alpine-meadow' },
];

export const DESTINATIONS: { slug: DestinationSlug; name: string; blurb: string; photo: string; operatorUrl: string }[] = [
  { slug: 'vienna', name: 'Vienna', blurb: 'The capital on the Danube: palaces, opera, museums and the coffee houses.', photo: 'vienna', operatorUrl: 'https://danubeandalps.tourground.com/vienna' },
  { slug: 'salzburg', name: 'Salzburg', blurb: 'A baroque old town under the fortress, Mozart, and the Festival every summer.', photo: 'salzburg', operatorUrl: 'https://danubeandalps.tourground.com/salzburg' },
  { slug: 'salzkammergut', name: 'The Salzkammergut', blurb: 'Hallstatt, the Dachstein and a chain of lakes east of Salzburg.', photo: 'gosausee', operatorUrl: 'https://danubeandalps.tourground.com/salzkammergut-hallstatt' },
  { slug: 'tyrol-innsbruck', name: 'Tyrol & Innsbruck', blurb: 'Mountains at the end of the street: huts in summer, skiing in winter.', photo: 'innsbruck', operatorUrl: 'https://danubeandalps.tourground.com/innsbruck-tyrol' },
  { slug: 'wachau', name: 'The Wachau', blurb: 'The Danube between Melk and Krems: abbeys, vineyards and apricot orchards.', photo: 'melk', operatorUrl: 'https://danubeandalps.tourground.com/wachau' },
  { slug: 'carinthia', name: 'Carinthia', blurb: 'Austria’s southern lakes, south of the main Alpine ridge.', photo: 'carinthia', operatorUrl: 'https://danubeandalps.tourground.com/carinthia-lakes' },
];

export const AUTHORS: Record<string, { name: string; role: string; bio: string }> = {
  'alm-editors': {
    name: 'Alm editors',
    role: 'Editorial desk, Tourground',
    bio: 'The Alm editors write and update every story on this site. We work from official sources, list them at the end of each post and show when each post was last updated.',
  },
};

export const categoryName = (s: string) => CATEGORIES.find((c) => c.slug === s)?.name ?? s;
export const destinationName = (s: string) => DESTINATIONS.find((d) => d.slug === s)?.name ?? s;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
