import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const maxEdge = 1600;
const quality = 90;
const inputs = [
  { id: "icon-design-07", source: "D:/桌面/AIGC作品集/bnner/图标/3d6bc7c8-6031-4a6c-9420-cc5a993f696c.png" },
  { id: "icon-design-08", source: "D:/桌面/AIGC作品集/bnner/图标/7b4bee64-47d0-4ed1-acbb-16daea86f566.png" },
  { id: "icon-design-09", source: "D:/桌面/AIGC作品集/bnner/图标/123b6643-615c-4356-a550-a31296f4ea05.png" },
  { id: "icon-design-10", source: "D:/桌面/AIGC作品集/bnner/图标/5157f8f2-8020-405b-bb2c-8bcc7814334e.png" },
  { id: "icon-design-11", source: "D:/桌面/AIGC作品集/bnner/图标/c7551075-04fd-4395-a237-1578e6ccdec5.png" },
  { id: "icon-design-12", source: "D:/桌面/AIGC作品集/bnner/图标/cbd5469f-d13b-469c-9ac3-cbb519cfb9aa.png" },
];
const originalDir = "src/assets/originals/icons";
const assetDir = "src/assets/portfolio/icons";
const publicDir = "public/images/portfolio/icons";

async function ensureDir(dir) { await fs.mkdir(path.join(root, dir), { recursive: true }); }
async function processOne(input) {
  const source = input.source;
  const originalPath = path.join(root, originalDir, `${input.id}.png`);
  const assetPath = path.join(root, assetDir, `${input.id}.webp`);
  const publicPath = path.join(root, publicDir, `${input.id}.webp`);
  await fs.copyFile(source, originalPath);
  const image = sharp(source, { failOn: "none" }).rotate();
  const metadata = await image.metadata();
  const width = metadata.width || 0;
  const height = metadata.height || 0;
  const shouldResize = Math.max(width, height) > maxEdge;
  await image.resize({
    width: shouldResize && width >= height ? maxEdge : undefined,
    height: shouldResize && height > width ? maxEdge : undefined,
    fit: "inside",
    withoutEnlargement: true,
  }).webp({ quality, effort: 6, smartSubsample: true }).toFile(assetPath);
  await fs.copyFile(assetPath, publicPath);
  const stat = await fs.stat(assetPath);
  const outMeta = await sharp(assetPath).metadata();
  return { id: input.id, width: outMeta.width, height: outMeta.height, beforeBytes: (await fs.stat(source)).size, afterBytes: stat.size };
}

async function main() {
  await ensureDir(originalDir); await ensureDir(assetDir); await ensureDir(publicDir);
  const results = [];
  for (const input of inputs) {
    try { results.push({ status: "ok", ...(await processOne(input)) }); }
    catch (error) { results.push({ status: "failed", id: input.id, error: error.message }); }
  }
  console.log(JSON.stringify(results, null, 2));
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
