import { mkdir, readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const outputDir = new URL("../public/brand/", import.meta.url);
const fontPath = new URL(
  "../.next/static/media/01e4147cff8141ee-s.p.3huc2loe0ie8a.woff2",
  import.meta.url,
);

const GOLD = "#b58a39";
const INK = "#11110f";
const PAPER = "#f5f2ea";

const require = createRequire(import.meta.url);
const createFont =
  require("next/dist/compiled/@next/font/dist/fontkit").default;
const font = createFont(await readFile(fontPath));

function glyphPaths(text, { x, baseline, fontSize, fill, tracking, strokeWidth }) {
  const scale = fontSize / font.unitsPerEm;
  const run = font.layout(text);
  let cursor = 0;

  return run.glyphs
    .map((glyph, index) => {
      const position = run.positions[index];
      const transform = `translate(${x + (cursor + position.xOffset) * scale} ${baseline - position.yOffset * scale}) scale(${scale} ${-scale})`;
      cursor += position.xAdvance + tracking;

      return `<path d="${glyph.path.toSVG()}" transform="${transform}" fill="${fill}" stroke="${fill}" stroke-width="${strokeWidth}" stroke-linejoin="round"/>`;
    })
    .join("");
}

const lockup = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1800" height="560" viewBox="0 0 1800 560">
    <circle cx="230" cy="280" r="180" fill="none" stroke="${GOLD}" stroke-width="10"/>
    ${glyphPaths("V", { x: 166.8, baseline: 344, fontSize: 200, fill: GOLD, tracking: 0, strokeWidth: 6 })}
    ${glyphPaths("Vitis Vera", { x: 500, baseline: 356, fontSize: 240, fill: INK, tracking: -35, strokeWidth: 12 })}
  </svg>
`);

const mark = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
    <circle cx="512" cy="512" r="420" fill="none" stroke="${GOLD}" stroke-width="24"/>
    ${glyphPaths("V", { x: 331.9, baseline: 694, fontSize: 570, fill: GOLD, tracking: 0, strokeWidth: 17 })}
  </svg>
`);

await mkdir(outputDir, { recursive: true });

async function exportPair(source, basename, trim = false) {
  let image = sharp(source);
  if (trim) {
    image = image
      .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .extend({
        top: 48,
        right: 48,
        bottom: 48,
        left: 48,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      });
  }

  const png = await image.png().toBuffer();
  await sharp(png).toFile(fileURLToPath(new URL(`${basename}.png`, outputDir)));
  await sharp({
    create: {
      width: (await sharp(png).metadata()).width,
      height: (await sharp(png).metadata()).height,
      channels: 3,
      background: PAPER,
    },
  })
    .composite([{ input: png }])
    .jpeg({ quality: 95, chromaSubsampling: "4:4:4" })
    .toFile(fileURLToPath(new URL(`${basename}.jpeg`, outputDir)));
}

await exportPair(lockup, "vitis-vera-logo", true);
await exportPair(mark, "vitis-vera-v-mark");
