// Converts every .png/.jpg/.jpeg under public/ to optimized .webp and deletes
// the original once the replacement is verified smaller.
//  - Screenshots/photos: capped at 1600px wide, quality 82
//  - Small UI/brand images: no resize, quality 90 (preserves crispness)
// Run: node scripts/optimize-images.mjs
import { readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public");
const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const SMALL_BYTES = 60 * 1024; // treat images below this as UI/brand images
// apple-touch-icon must remain PNG — iOS does not support WebP touch icons.
const SKIP = new Set([path.join(ROOT, "apple-touch-icon.png")]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const results = [];
for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (!EXTENSIONS.has(ext) || SKIP.has(file)) continue;

  const relative = path.relative(ROOT, file);
  const target = file.slice(0, -ext.length) + ".webp";

  const before = (await stat(file)).size;
  const meta = await sharp(file, { failOn: "none" }).metadata();

  let pipeline = sharp(file, { failOn: "none" });
  const isSmall = before < SMALL_BYTES;
  if (!isSmall && (meta.width ?? 0) > 1600) {
    pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true, fit: "inside" });
  }
  const webp = await pipeline
    .webp({ quality: isSmall ? 90 : 82, effort: 4, alphaQuality: 85, smartSubsample: true })
    .toBuffer();

  await writeFile(target, webp);

  // Keep the smaller of the two — original stays only if webp didn't help.
  const after = webp.length;
  if (after < before) {
    await unlink(file);
    results.push({ file: relative, before, after, kept: "webp" });
  } else {
    await unlink(target);
    results.push({ file: relative, before, after, kept: "original" });
  }
}

const pad = (n) => String(n).padStart(8);
let converted = 0;
let saved = 0;
console.log(`Results (path / before / after / kept):`);
for (const r of results) {
  const { file, before, after, kept } = r;
  saved += before - after;
  if (kept === "webp") converted++;
  console.log(`${file}  ${pad(before)}  ${pad(after)}  ${kept}`);
}
console.log(
  `\n${converted}/${results.length} images converted to webp. Total saved: ${(saved / 1024).toFixed(1)} KB`
);
