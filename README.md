# Vanguard Protection Website

Astro static site, hosted on Cloudflare Pages. Trilingual (English / Sinhala / Tamil) at `/en/`, `/si/`, `/ta/`.

## Where things live

| Path | What |
| --- | --- |
| `src/data/ui.ts` | Site-wide and page text (EN/SI/TA) |
| `src/data/divisions.ts` | The four divisions: content, services, accent colours |
| `src/data/metrofix.ts` | Metro Fix page content |
| `src/lib/site.ts` | Company name, phone, email, address |
| `src/content/blog/*.md` | Blog posts (frontmatter: title, description, pubDate, category, image) |
| `worker/` | Cloudflare Worker: serves `dist/` and handles `POST /api/contact` (sends via Resend) |
| `wrangler.jsonc` | Cloudflare deploy config (project name must match the Cloudflare project) |

Sinhala and Tamil text is a draft and needs review by a native speaker.

## Contact form setup (Cloudflare Pages)

1. Create a Resend account, verify `vanguardprotection.lk`, create an API key.
2. In Cloudflare > Workers & Pages > your project > Settings > Variables and Secrets add secret `RESEND_API_KEY`; optionally `MAIL_TO` and `MAIL_FROM`.
3. Locally, copy `.dev.vars.example` to `.dev.vars` and run `npm run cf:preview`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the build locally |
| `npm run cf:preview` | Build and serve via Cloudflare's local Worker runtime |
| `npm run cf:deploy` | Build and deploy via Wrangler (needs `wrangler login`) |


## Assets

Put raw files in `assets-source/` (never edited, kept as originals), then run `npm run assets`.
The script (`scripts/process-assets.mjs`) trims, removes backgrounds from logos (transparent PNG),
crops blank padding, resizes, renames, and writes the web-ready files below. Output is regenerated
each run, so don't edit it by hand. New files need an entry in the manifest at the top of the script.

| Source | Output | Notes |
| --- | --- | --- |
| `assets-source/logos/` | `src/assets/logos/` | Vanguard logos, transparent PNG, plus `vanguard-protection-icon.png` (shield only) |
| `assets-source/clients/` | `src/assets/clients/` | Client logos, transparent where the original had a white background |
| `assets-source/metro-fix/` | `src/assets/metro-fix/` | Internal Metro Fix logo (company-built tool, not sold) |
| `assets-source/images/` | `src/assets/images/services/`, `team/` | WebP, max 1920px |
| (generated) | `public/` | `favicon.ico`, 16/32px PNGs, `apple-touch-icon.png`, `icon-192/512.png` |

Use them in components:

```astro
---
import { Image } from 'astro:assets';
import logo from '../assets/logos/vanguard-protection.png';
---
<Image src={logo} alt="Vanguard Protection" />
```
