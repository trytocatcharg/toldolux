import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const galleryDir = join(root, "public", "images", "gallery");
const outFile = join(root, "lib", "gallery-manifest.json");

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const SCALED_SUFFIX = "-scaled";

const stripExt = (name) => name.replace(/\.[^.]+$/, "");

function prettifyAlt(stem) {
  return stem
    .replace(new RegExp(`${SCALED_SUFFIX}$`), "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const files = existsSync(galleryDir) ? readdirSync(galleryDir) : [];

const images = files
  .filter((f) => EXTENSIONS.has(f.slice(f.lastIndexOf(".")).toLowerCase()))
  // Skip WordPress-style "-scaled" duplicates when the original is also present.
  .filter((f) => {
    const base = stripExt(f);
    if (!base.endsWith(SCALED_SUFFIX)) return true;
    const originalBase = base.slice(0, -SCALED_SUFFIX.length);
    return !files.some(
      (other) => other !== f && stripExt(other) === originalBase,
    );
  })
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((f) => ({
    src: `/images/gallery/${f}`,
    alt: prettifyAlt(stripExt(f)),
  }));

writeFileSync(outFile, `${JSON.stringify({ images }, null, 2)}\n`);
process.stdout.write(
  `[gallery-manifest] ${images.length} images -> ${outFile}\n`,
);
