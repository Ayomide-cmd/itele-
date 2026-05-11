import { writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";

const width = 900;
const height = 1200;

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i += 1) {
    c ^= buf[i];
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type);
  const len = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crc]);
}

function png(w, h, draw) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y += 1) {
    raw[y * (w * 4 + 1)] = 0;
    for (let x = 0; x < w; x += 1) {
      const [r, g, b, a = 255] = draw(x, y, w, h);
      const idx = y * (w * 4 + 1) + 1 + x * 4;
      raw[idx] = r;
      raw[idx + 1] = g;
      raw[idx + 2] = b;
      raw[idx + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function blend(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function mix(c1, c2, t) {
  return [blend(c1[0], c2[0], t), blend(c1[1], c2[1], t), blend(c1[2], c2[2], t)];
}

function ringDistance(x, y, cx, cy, r) {
  return Math.abs(Math.hypot(x - cx, y - cy) - r);
}

function asset(name, options) {
  writeFileSync(
    new URL(`../public/assets/${name}.png`, import.meta.url),
    png(width, height, (x, y, w, h) => render(x, y, w, h, options)),
  );
}

function render(x, y, w, h, options) {
  const t = y / h;
  const base = mix(options.top, options.bottom, t);
  const vignette = Math.min(1, Math.hypot(x - w / 2, y - h / 2) / 710);
  let c = mix(base, [34, 7, 8], vignette * options.vignette);

  if (options.drape && x < w * 0.23) {
    const fold = Math.sin((x / w) * 80) * 14;
    const shade = Math.max(0, 1 - (x + fold) / (w * 0.26));
    c = mix(c, [82, 0, 9], shade * 0.72);
  }

  if (options.plinth) {
    const floor = y > h * 0.72;
    if (floor) c = mix(c, [222, 219, 216], 0.35);
  }

  const shapes = options.shapes ?? [];
  for (const s of shapes) {
    if (s.type === "ring") {
      const d = ringDistance(x, y, w * s.cx, h * s.cy, w * s.r);
      if (d < s.thick) c = mix(c, s.color, 0.94);
      if (d < s.thick + 3 && d >= s.thick) c = mix(c, [255, 255, 255], 0.26);
    }
    if (s.type === "gem") {
      const dx = Math.abs(x - w * s.cx);
      const dy = Math.abs(y - h * s.cy);
      const diamond = dx / (w * s.rx) + dy / (h * s.ry);
      if (diamond < 1) c = mix(c, s.color, 0.9);
      if (diamond < 0.38) c = mix(c, [255, 255, 255], 0.35);
    }
    if (s.type === "chain") {
      const wave = Math.sin((x / w) * Math.PI * 2) * h * s.amp;
      const d = Math.abs(y - (h * s.cy + wave));
      if (d < s.thick && x > w * s.start && x < w * s.end) c = mix(c, s.color, 0.9);
    }
    if (s.type === "pearl") {
      const d = Math.hypot(x - w * s.cx, y - h * s.cy);
      if (d < w * s.r) {
        const glow = 1 - d / (w * s.r);
        c = mix([214, 209, 198], [255, 252, 242], glow);
      }
    }
    if (s.type === "bar") {
      if (x > w * s.x && x < w * (s.x + s.w) && y > h * s.y && y < h * (s.y + s.h)) {
        c = mix(c, s.color, s.alpha);
      }
    }
  }

  const grain = ((x * 17 + y * 31 + options.seed) % 23) - 11;
  return c.map((v) => Math.max(0, Math.min(255, v + grain)));
}

asset("hero-jewelry", {
  seed: 7,
  top: [70, 0, 8],
  bottom: [142, 133, 126],
  vignette: 0.55,
  drape: true,
  plinth: true,
  shapes: [
    { type: "bar", x: 0.42, y: 0.18, w: 0.2, h: 0.58, color: [46, 46, 46], alpha: 0.45 },
    { type: "chain", cy: 0.34, amp: 0.05, thick: 7, start: 0.36, end: 0.82, color: [222, 194, 124] },
    { type: "gem", cx: 0.64, cy: 0.34, rx: 0.08, ry: 0.06, color: [128, 10, 24] },
    { type: "ring", cx: 0.34, cy: 0.54, r: 0.1, thick: 8, color: [218, 183, 104] },
    { type: "pearl", cx: 0.74, cy: 0.45, r: 0.055 },
  ],
});

asset("adera-ear-cuffs", {
  seed: 12,
  top: [242, 242, 242],
  bottom: [216, 216, 216],
  vignette: 0.18,
  shapes: [
    { type: "ring", cx: 0.5, cy: 0.48, r: 0.16, thick: 9, color: [216, 179, 101] },
    { type: "ring", cx: 0.5, cy: 0.48, r: 0.1, thick: 6, color: [245, 239, 224] },
    { type: "gem", cx: 0.5, cy: 0.48, rx: 0.075, ry: 0.06, color: [94, 0, 10] },
  ],
});

asset("maris-pearl-choker", {
  seed: 22,
  top: [243, 243, 243],
  bottom: [214, 214, 214],
  vignette: 0.17,
  shapes: [
    { type: "chain", cy: 0.45, amp: 0.05, thick: 7, start: 0.2, end: 0.8, color: [205, 171, 94] },
    { type: "pearl", cx: 0.3, cy: 0.43, r: 0.038 },
    { type: "pearl", cx: 0.42, cy: 0.39, r: 0.038 },
    { type: "pearl", cx: 0.56, cy: 0.39, r: 0.038 },
    { type: "pearl", cx: 0.69, cy: 0.43, r: 0.038 },
    { type: "gem", cx: 0.5, cy: 0.5, rx: 0.055, ry: 0.075, color: [101, 0, 13] },
  ],
});

asset("selah-ruby-signet", {
  seed: 33,
  top: [243, 243, 243],
  bottom: [213, 213, 213],
  vignette: 0.2,
  shapes: [
    { type: "ring", cx: 0.5, cy: 0.52, r: 0.18, thick: 13, color: [213, 170, 88] },
    { type: "gem", cx: 0.5, cy: 0.36, rx: 0.12, ry: 0.08, color: [111, 0, 13] },
    { type: "gem", cx: 0.5, cy: 0.36, rx: 0.055, ry: 0.035, color: [174, 26, 39] },
  ],
});

asset("gallery-necklace", {
  seed: 44,
  top: [83, 0, 9],
  bottom: [40, 39, 39],
  vignette: 0.48,
  drape: true,
  shapes: [{ type: "chain", cy: 0.42, amp: 0.08, thick: 6, start: 0.18, end: 0.86, color: [227, 187, 102] }],
});

asset("gallery-ring", {
  seed: 45,
  top: [230, 230, 230],
  bottom: [95, 91, 89],
  vignette: 0.35,
  shapes: [
    { type: "ring", cx: 0.46, cy: 0.44, r: 0.15, thick: 10, color: [221, 181, 99] },
    { type: "gem", cx: 0.58, cy: 0.39, rx: 0.08, ry: 0.05, color: [84, 0, 8] },
  ],
});

asset("gallery-earrings", {
  seed: 46,
  top: [88, 0, 11],
  bottom: [177, 176, 173],
  vignette: 0.45,
  drape: true,
  shapes: [
    { type: "pearl", cx: 0.4, cy: 0.34, r: 0.052 },
    { type: "pearl", cx: 0.62, cy: 0.34, r: 0.052 },
    { type: "chain", cy: 0.5, amp: 0.03, thick: 5, start: 0.33, end: 0.68, color: [209, 170, 92] },
  ],
});

asset("gallery-bracelet", {
  seed: 47,
  top: [60, 59, 59],
  bottom: [100, 0, 12],
  vignette: 0.38,
  shapes: [
    { type: "ring", cx: 0.5, cy: 0.5, r: 0.22, thick: 7, color: [220, 181, 99] },
    { type: "ring", cx: 0.5, cy: 0.5, r: 0.28, thick: 5, color: [230, 211, 158] },
  ],
});
