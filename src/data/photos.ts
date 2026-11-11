import type { ImageMetadata } from 'astro';
import meta from './photo-meta.json';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

const ALT: Record<string, { alt: string; caption: string }> = {
  'alpine-meadow': { alt: 'A green alpine meadow sloping towards forest and a snow-streaked peak under a cloudy sky', caption: 'Alpine pasture below the Karhorn, Lech, Vorarlberg' },
  vienna: { alt: 'The curved white facade and green copper dome of the Hofburg on Michaelerplatz, with visitors in the square', caption: 'The Hofburg from Michaelerplatz, Vienna' },
  salzburg: { alt: 'A tour boat on the green Salzach river below Salzburg old town, with church domes and the fortress on the hill above', caption: 'The Salzach and Hohensalzburg Fortress, Salzburg' },
  hallstatt: { alt: 'Hallstatt village and its two church spires along the shore of Lake Hallstatt beneath steep wooded mountains', caption: 'Hallstatt from the lake, Upper Austria' },
  'alpine-hut': { alt: 'A timber mountain hut with a sun terrace and parasols, set among pines below grey limestone peaks', caption: 'The Erfurter Hütte in the Rofan mountains, Tyrol' },
  wachau: { alt: 'A riverside road curving along the Danube towards Dürnstein abbey and its blue-and-white tower, with wooded hills behind', caption: 'The Danube at Dürnstein, Wachau' },
  'christmas-market': { alt: 'Vienna City Hall lit up at night above the stalls and Christmas tree of the Rathausplatz market', caption: 'The Christmas market at Rathausplatz, Vienna' },
  railjet: { alt: 'A red ÖBB Railjet train curving along a mountain railway through forest below a limestone crag', caption: 'A Railjet on the Semmering railway at the Kalte Rinne' },
  'tyrol-ski': { alt: 'Skiers on a wide, groomed slope leading up to a ridge and lift station under a blue sky streaked with cloud', caption: 'The slopes on the Rastkogel, Zillertal, Tyrol' },
  'coffee-house': { alt: 'The vaulted, painted ceiling and globe lamps of Café Central in Vienna', caption: 'The vaulted hall of Café Central, Vienna' },
  carinthia: { alt: 'Aerial view of the long, turquoise Weissensee lake between forested mountain ridges, with snow-capped peaks on the horizon', caption: 'The Weissensee from the air, Carinthia' },
  innsbruck: { alt: 'Colourful houses along the River Inn in Innsbruck with the Nordkette mountain range rising behind', caption: 'The Inn and the Nordkette from Marktplatz, Innsbruck' },
  gosausee: { alt: 'The still Vorderer Gosausee reflecting forested slopes, with the Dachstein glacier at the head of the valley', caption: 'The Vorderer Gosausee and the Dachstein, Salzkammergut' },
  melk: { alt: 'Melk Abbey with its twin towers and dome above the town and the Danube', caption: 'Melk Abbey above the Danube, Wachau' },
  'musauer-alm': { alt: 'A gravel track winding through a green alpine valley past wooden farm buildings, under sunlit cliffs', caption: 'The Musauer Alm, Tyrol' },
};

export type Photo = {
  key: string; src: ImageMetadata; alt: string; caption: string;
  author: string; license: string; licenseUrl: string; page: string; file: string;
};

export function photo(key: string): Photo {
  const f = files[`../assets/photos/${key}.jpg`];
  const m = (meta as Record<string, any>)[key];
  if (!f || !m || !ALT[key]) throw new Error(`Missing photo: ${key}`);
  return { key, src: f.default, ...ALT[key], author: m.author, license: m.license, licenseUrl: m.licenseUrl, page: m.page, file: m.file };
}

export const allPhotoKeys = Object.keys(ALT);
