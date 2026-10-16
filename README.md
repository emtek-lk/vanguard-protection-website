# Vanguard Protection Website

Astro static site, hosted on Cloudflare Pages.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the build locally |
| `npm run cf:preview` | Build and serve via Cloudflare's local Pages runtime |
| `npm run cf:deploy` | Build and deploy via Wrangler (needs `wrangler login`) |

## Cloudflare Pages (Git integration)

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22` (or higher)

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
