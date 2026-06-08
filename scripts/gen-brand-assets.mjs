/**
 * Generates the W4GZ favicon / app-icon raster set from the W monogram (the same
 * mark used in the nav logo). Source of truth is this script; re-run with:
 *   node scripts/gen-brand-assets.mjs
 * Outputs: app/icon.svg, app/apple-icon.png, app/favicon.ico, public/icons/*.
 * Replace these with final brand artwork (same paths) once dropped in /assets.
 */
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";

const INK = "#141414";
const PAPER = "#F4F1EB";

// W monogram in the symbol vocabulary (stroke + nodes), centred in the maskable
// safe zone of a 0–100 box.
const VERTS = [
  [26, 32],
  [40, 72],
  [50, 48],
  [60, 72],
  [74, 32],
];
function mark(stroke, sw) {
  const path = `<path d="M${VERTS.map((p) => p.join(",")).join(" L")}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const nodes = VERTS.map(
    ([x, y]) => `<circle cx="${x}" cy="${y}" r="${(sw * 0.85).toFixed(1)}" fill="${stroke}"/>`,
  ).join("");
  return path + nodes;
}
function iconSvg({ bg = null, stroke = INK, sw = 7 } = {}) {
  const rect = bg ? `<rect width="100" height="100" fill="${bg}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${rect}${mark(stroke, sw)}</svg>`;
}

// Minimal single-image ICO (a PNG embedded in the ICO container).
function icoFromPng(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(1, 4); // image count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(png.length, 8); // size
  entry.writeUInt32LE(6 + 16, 12); // offset
  return Buffer.concat([header, entry, png]);
}

mkdirSync("public/icons", { recursive: true });
const onPaper = Buffer.from(iconSvg({ bg: PAPER }));

await sharp(onPaper).resize(192, 192).png().toFile("public/icons/icon-192.png");
await sharp(onPaper).resize(512, 512).png().toFile("public/icons/icon-512.png");
await sharp(onPaper).resize(180, 180).png().toFile("app/apple-icon.png");

const png48 = await sharp(onPaper).resize(48, 48).png().toBuffer();
writeFileSync("app/favicon.ico", icoFromPng(png48, 48));

writeFileSync("app/icon.svg", iconSvg({ bg: null }) + "\n");

console.log("brand assets generated: app/icon.svg, app/apple-icon.png, app/favicon.ico, public/icons/*");
