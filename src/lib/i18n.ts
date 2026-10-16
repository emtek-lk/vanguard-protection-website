export const locales = ['en', 'si', 'ta'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

export const langNames: Record<Lang, string> = { en: 'English', si: 'සිංහල', ta: 'தமிழ்' };
export const htmlLang: Record<Lang, string> = { en: 'en', si: 'si', ta: 'ta' };

/** A string available in all three languages. */
export type L = Record<Lang, string>;
export const l = (en: string, si: string, ta: string): L => ({ en, si, ta });
export const tx = (v: L, lang: Lang): string => v[lang] ?? v.en;

/** Localised internal link, e.g. href('si', 'about') -> /si/about/ */
export const href = (lang: Lang, path = ''): string => {
  const p = path.replace(/^\/+|\/+$/g, '');
  return p ? `/${lang}/${p}/` : `/${lang}/`;
};

/** Same page in another language. */
export const switchLang = (pathname: string, lang: Lang): string =>
  pathname.replace(/^\/(en|si|ta)(?=\/|$)/, `/${lang}`);
