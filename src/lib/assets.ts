import type { ImageMetadata } from 'astro';

const files = import.meta.glob<ImageMetadata>('/src/assets/**/*.{png,webp,jpg}', {
  eager: true,
  import: 'default',
});

/** img('logos/vanguard-fsm.png') -> ImageMetadata for <Image />. */
export function img(path: string): ImageMetadata {
  const found = files[`/src/assets/${path}`];
  if (!found) throw new Error(`Image not found: src/assets/${path}`);
  return found;
}

import { getImage } from 'astro:assets';

/** Optimised URL for use in CSS backgrounds: style={`--hero-img:url(${await bgUrl('images/...')})`} */
export async function bgUrl(path: string, width = 1920): Promise<string> {
  const out = await getImage({ src: img(path), width, format: 'webp', quality: 75 });
  return out.src;
}
