import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const maxEdge = 1600;
const quality = 90;

const inputs = [
  { id: "super-type-07", source: "D:/桌面/AIGC作品集/艺术字/7d6ddb71-f8d4-4393-996e-d18577617c6c.png" },
  { id: "super-type-08", source: "D:/桌面/AIGC作品集/艺术字/9a1a6803-c0ca-4172-a7e5-0c921c01862e.png" },
  { id: "super-type-09", source: "D:/桌面/AIGC作品集/艺术字/36d54e11-76f9-47dc-bee1-e273da418c0a.png" },
  { id: "super-type-10", source: "D:/桌面/AIGC作品集/艺术字/c4049145-2f49-4617-b310-f0e791462c32.png" },
  { id: "super-type-11", source: "D:/桌面/AIGC作品集/艺术字/d4a805b9-d0f1-4219-9121-0edf9555b6db.png" },
];

const originalDir = "src/assets/originals/type-symbol";
const assetDir = "src/assets/portfolio/type-symbol";
const publicDir = "public/images/portfolio/type-symbol";

async function ensureDir(dir) {
  await fs.mkdir(path.join(root, dir), { recursive: true });
}

async function processOne(input) {
  const source = input.source;
  const ext = path.extname(source);
  const originalPath = path.join(root, originalDir, `${input.id}${ext}`);
  const assetPath = path.join(root, assetDir, `${input.id}.webp`);
  const publicPath = path.join(root, publicDir, `${input.id}.webp`);

  await fs.copyFile(source, originalPath);

  const image = sharp(source, { failOn: "none" }).rotate();
  const metadata = await image.metadata();
  const width = metadata.width || 0;
  const height = metadata.height || 0;
  const shouldResize = Math.max(width, height) > maxEdge;

  await image
    .resize({
      width: shouldResize && width >= height ? maxEdge : undefined,
      height: shouldResize && height > width ? maxEdge : undefined,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(assetPath);

  await fs.copyFile(assetPath, publicPath);

  const stat = await fs.stat(assetPath);
  const outMeta = await sharp(assetPath).metadata();
  return {
    id: input.id,
    width: outMeta.width,
    height: outMeta.height,
    beforeBytes: (await fs.stat(source)).size,
    afterBytes: stat.size,
  };
}

async function main() {
  await ensureDir(originalDir);
  await ensureDir(assetDir);
  await ensureDir(publicDir);

  const results = [];
  for (const input of inputs) {
    try {
      results.push({ status: "ok", ...(await processOne(input)) });
    } catch (err) {
      results.push({ status: "failed", id: input.id, error: err.message });
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});