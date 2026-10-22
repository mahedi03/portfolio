// Generates the favicon set from the personal photo:
//  - public/favicon.ico  (multi-size, PNG-compressed entries: 16..256)
//  - public/apple-touch-icon.png (180x180)
// Run: node scripts/generate-favicon.mjs
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public");
const SOURCE = path.join(ROOT, "Mahedi Hasan-transparent.webp");

// Proportional face crop tuned for this portrait.
const CROP = { leftRatio: 0.275, topRatio: 0.04, sizeRatio: 0.36 };

const ICO_SIZES = [16, 32, 48, 64, 128, 256];

async function faceBuffer(size) {
  const meta = await sharp(SOURCE, { failOn: "none" }).metadata();
  const faceSize = Math.round(meta.width * CROP.sizeRatio);
  const left = Math.max(0, Math.round(meta.width * CROP.leftRatio));
  const top = Math.max(0, Math.round(meta.height * CROP.topRatio));
  return sharp(SOURCE, { failOn: "none" })
    .extract({ left, top, width: faceSize, height: faceSize })
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// Build a valid .ico that embeds PNG-compressed entries (supported everywhere).
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4); // entry count

  const entrySize = 16;
  const entriesTotal = entrySize * pngs.length;
  let offset = header.length + entriesTotal;

  const entries = [];
  const blobs = [];
  for (const { size, png } of pngs) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
    entry.writeUInt8(0, 2); // palette size
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image data offset
    entries.push(entry);
    blobs.push(png);
    offset += png.length;
  }
  return Buffer.concat([header, ...entries, ...blobs]);
}

const pngs = [];
for (const size of ICO_SIZES) {
  pngs.push({ size, png: await faceBuffer(size) });
}
const ico = buildIco(pngs);
await writeFile(path.join(ROOT, "favicon.ico"), ico);

const apple = await faceBuffer(180);
await writeFile(path.join(ROOT, "apple-touch-icon.png"), apple); // PNG required for iOS

console.log(
  `favicon.ico written (${ICO_SIZES.length} sizes, ${(ico.length / 1024).toFixed(1)} KB) + apple-touch-icon.png (180x180, ${(apple.length / 1024).toFixed(1)} KB)`
);
