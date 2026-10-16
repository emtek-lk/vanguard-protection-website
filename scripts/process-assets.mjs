// Turns raw files in assets-source/ into web-ready assets in src/assets/ and public/.
// Usage: npm run assets
// Add new files to assets-source/<folder>/ and add a line to the manifest below.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'assets-source';
const OUT = 'src/assets';

// ---------- manifest: source file -> clean output name ----------
const logos = {
  'Vanguard-Protection-Main-Logo.jpeg': 'vanguard-protection',
  'Vanguard-Security-Logo.jpg': 'vanguard-security',
  'Vanguard-Clean-&-Care-Logo.jpg': 'vanguard-clean-and-care',
  'Vanguard-FSM-Logo.jpg': 'vanguard-fsm',
  'Vanguard-Total-Safety-Logo.jpg': 'vanguard-total-safety',
};

const clients = {
  'Advance Barcode Technologies.jpg': 'advance-barcode-technologies',
  'Blue Ocean.jpg': 'blue-ocean-group',
  'Bread Talk.png': 'breadtalk',
  'ChemLanka.jpg': 'chemlanka',
  'Even Beach Resort.jpeg': 'even-beach-resort',
  'Green Cabin.png': 'green-cabin',
  'Haris & Menuk.jpg': 'harris-and-menuk',
  'Ikman.jpg': 'ikman',
  'Ilma International Girls School.jpeg': 'ilma-international-girls-school',
  'Moon Plain luxury apartment-NuwaraEliya.jpg': 'moon-plains-luxury-apartments', // photo, not a logo
  'Mount Clifford Residencies.jpg': 'mount-clifford-residencies', // photo with text, not a clean logo
  'Neo Graphics.png': 'neo-graphics',
  'NOLIMIT.jpg': 'nolimit',
  'P & A Insurance Broker.png': 'p-and-a-insurance-brokers',
  'P11.jpg': 'p11',
  'Royal hospital logo.jpg': 'royal-hospital',
  'Saffron Beach Hotel-Wadduwa.jpeg': 'saffron-beach-hotel-wadduwa', // photo of printed logo
  'Sala logo.png': 'sala',
  'Sarasavi Bookshops.jpg': 'sarasavi-bookshop', // photo of embossed logo
  'Span Towers.png': 'span-towers',
  'Spring & Summer.jpg': 'spring-and-summer', // source is clipped on left/bottom
  'target BTL.jpeg': 'target-btl',
};

// output folder -> { source file in assets-source/images: output name }
const photos = {
  services: {
    'clean-1.jpg': 'cleaning-lobby-floor-care',
    'clean-2.jpg': 'cleaning-van-estate-grounds',
    'clean-3.jpg': 'cleaning-atrium-trolley',
    'fsm-1.jpg': 'fsm-lobby-inspection-team',
    'fsm-2.jpg': 'fsm-plant-room-chillers',
    'fsm-3.jpg': 'fsm-technician-tablet-inspection',
    'safety-1.jpg': 'safety-fire-drill-demo',
    'safety-2.jpg': 'safety-extinguisher-first-aid',
    'safety-3.jpg': 'safety-audit-manual-hard-hat',
    'security-1.jpg': 'security-guards-vip-arrival',
    'security-2.jpg': 'security-patrol-vehicle-gatehouse',
    'security-3.jpg': 'security-patrol-vehicle-portrait',
  },
  team: {
    'anura-suraweeraarachchi.jpg': 'anura-suraweeraarachchi',
  },
};

// ---------- helpers ----------
const ensure = (d) => fs.mkdirSync(d, { recursive: true });
const clean = (d) => fs.existsSync(d) && fs.rmSync(d, { recursive: true, force: true });

// Make the background (connected to the image border) transparent.
// Only pixels reachable from the edges are removed, so white inside a logo stays.
async function removeEdgeBackground(input, tol = 28) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const at = (x, y) => (y * w + x) * 4;
  const bg = [0, 0, 0];
  const corners = [[0, 0], [w - 1, 0], [0, h - 1], [w - 1, h - 1]];
  for (const [x, y] of corners) for (let c = 0; c < 3; c++) bg[c] += data[at(x, y) + c] / 4;
  const dist = (i) => Math.max(Math.abs(data[i] - bg[0]), Math.abs(data[i + 1] - bg[1]), Math.abs(data[i + 2] - bg[2]));
  const seen = new Uint8Array(w * h);
  const stack = [];
  const push = (x, y) => {
    const k = y * w + x;
    if (!seen[k] && dist(at(x, y)) <= tol) { seen[k] = 1; stack.push(k); }
  };
  for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
  while (stack.length) {
    const k = stack.pop(), x = k % w, y = (k / w) | 0;
    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }
  // soft edge: pixels next to removed background fade by their distance from the bg colour
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const k = y * w + x, i = k * 4;
      if (seen[k]) { data[i + 3] = 0; continue; }
      const near = (x > 0 && seen[k - 1]) || (x < w - 1 && seen[k + 1]) || (y > 0 && seen[k - w]) || (y < h - 1 && seen[k + w]);
      if (near) data[i + 3] = Math.min(255, Math.round(((dist(i) - tol) / 90) * 255 + 90));
    }
  }
  return sharp(data, { raw: { width: w, height: h, channels: 4 } });
}

async function isLightBg(input) {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const px = (x, y) => { const i = (y * w + x) * 3; return (data[i] + data[i + 1] + data[i + 2]) / 3; };
  return [px(1, 1), px(w - 2, 1), px(1, h - 2), px(w - 2, h - 2)].every((v) => v > 225);
}

async function transparentLogo(src, dest, { maxSize, pad = 0.04, tol }) {
  const keyed = await removeEdgeBackground(src, tol);
  const buf = await keyed.png().toBuffer();
  const trimmed = await sharp(buf).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
  const p = Math.round(Math.max(trimmed.info.width, trimmed.info.height) * pad);
  await sharp(trimmed.data)
    .extend({ top: p, bottom: p, left: p, right: p, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(dest);
}

// ---------- logos ----------
async function doLogos() {
  const dir = path.join(OUT, 'logos');
  clean(dir); ensure(dir);
  for (const [file, name] of Object.entries(logos)) {
    await transparentLogo(path.join(SRC, 'logos', file), path.join(dir, `${name}.png`), { maxSize: 1200, tol: 30 });
  }
  const mf = path.join(SRC, 'metro-fix', 'Metro-Fix-Logo.png');
  if (fs.existsSync(mf)) {
    const d = path.join(OUT, 'metro-fix');
    clean(d); ensure(d);
    await transparentLogo(mf, path.join(d, 'metro-fix-logo.png'), { maxSize: 1200, tol: 20 });
  }
  await doFavicons();
}

// Emblem-only icon (shield above the wordmark) -> favicons
async function doFavicons() {
  const main = path.join(OUT, 'logos', 'vanguard-protection.png');
  const { data, info } = await sharp(main).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const rowHas = (y) => { for (let x = 0; x < w; x++) if (data[(y * w + x) * 4 + 3] > 40) return true; return false; };
  let top = 0;
  while (top < h && !rowHas(top)) top++;
  let cut = -1;
  for (let r = Math.round(h * 0.4); r < h; r++) if (!rowHas(r)) { cut = r; break; }
  if (cut < 0) cut = Math.round(h * 0.62);
  const cropped = await sharp(main).extract({ left: 0, top, width: w, height: cut - top }).toBuffer();
  const icon = await sharp(cropped).trim({ threshold: 1 }).toBuffer();
  await sharp(icon).resize({ width: 1024, height: 1024, fit: 'inside' }).png().toFile(path.join(OUT, 'logos', 'vanguard-protection-icon.png'));

  const square = async (size, bg, pad) => {
    const inner = Math.round(size * (1 - pad * 2));
    const b = await sharp(icon).resize({ width: inner, height: inner, fit: 'inside' }).toBuffer();
    return sharp({ create: { width: size, height: size, channels: 4, background: bg } })
      .composite([{ input: b, gravity: 'centre' }]).png().toBuffer();
  };
  const clear = { r: 0, g: 0, b: 0, alpha: 0 };
  const white = { r: 255, g: 255, b: 255, alpha: 1 };
  const pub = 'public';
  ensure(pub);
  const p16 = await square(16, clear, 0.02), p32 = await square(32, clear, 0.02), p48 = await square(48, clear, 0.02);
  fs.writeFileSync(path.join(pub, 'favicon-32x32.png'), p32);
  fs.writeFileSync(path.join(pub, 'favicon-16x16.png'), p16);
  fs.writeFileSync(path.join(pub, 'apple-touch-icon.png'), await square(180, white, 0.1));
  fs.writeFileSync(path.join(pub, 'icon-192.png'), await square(192, white, 0.1));
  fs.writeFileSync(path.join(pub, 'icon-512.png'), await square(512, white, 0.1));
  // PNG-in-ICO (16, 32, 48)
  const imgs = [[16, p16], [32, p32], [48, p48]];
  const head = Buffer.alloc(6 + 16 * imgs.length);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(imgs.length, 4);
  let off = head.length;
  imgs.forEach(([s, b], i) => {
    const o = 6 + i * 16;
    head[o] = s; head[o + 1] = s;
    head.writeUInt16LE(1, o + 4);
    head.writeUInt16LE(32, o + 6);
    head.writeUInt32LE(b.length, o + 8);
    head.writeUInt32LE(off, o + 12);
    off += b.length;
  });
  fs.writeFileSync(path.join(pub, 'favicon.ico'), Buffer.concat([head, ...imgs.map(([, b]) => b)]));
  fs.rmSync(path.join(pub, 'favicon.svg'), { force: true });
}

// ---------- clients ----------
async function doClients() {
  const dir = path.join(OUT, 'clients');
  clean(dir); ensure(dir);
  for (const [file, name] of Object.entries(clients)) {
    const src = path.join(SRC, 'clients', file);
    const dest = path.join(dir, `${name}.png`);
    if (await isLightBg(src)) {
      await transparentLogo(src, dest, { maxSize: 800, pad: 0.06, tol: 14 });
    } else {
      // coloured / dark / photo backgrounds are kept as-is
      await sharp(src).resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(dest);
    }
  }
}

// ---------- photos ----------
// removes a flat blank band (padding) at the bottom of an image
async function trimFlatBottom(buf) {
  const { data, info } = await sharp(buf).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const flat = (y) => {
    let s = 0, s2 = 0;
    for (let x = 0; x < w; x += 4) { const v = data[(y * w + x) * 3]; s += v; s2 += v * v; }
    const n = w / 4, m = s / n;
    return Math.sqrt(Math.max(0, s2 / n - m * m)) < 4;
  };
  let y = h - 1;
  while (y > h * 0.5 && flat(y)) y--;
  return y < h - 21 ? sharp(buf).extract({ left: 0, top: 0, width: w, height: y + 1 }).toBuffer() : buf;
}

async function doPhotos() {
  clean(path.join(OUT, 'images'));
  for (const [folder, map] of Object.entries(photos)) {
    const dir = path.join(OUT, 'images', folder);
    ensure(dir);
    for (const [file, name] of Object.entries(map)) {
      let buf = await sharp(path.join(SRC, 'images', file)).rotate().toBuffer();
      buf = await trimFlatBottom(buf);
      await sharp(buf).resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(dir, `${name}.webp`));
    }
  }
}

await doLogos();
await doClients();
await doPhotos();
console.log('Assets processed.');
