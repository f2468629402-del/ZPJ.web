import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const maxEdge = 1600;
const quality = 90;

const inputs = [
  { id: "ip-character-01", source: "D:/桌面/AIGC作品集/bnner/vi/9dde9637-5033-4d99-b12c-7a29f44e585e.png" },
  { id: "ip-character-02", source: "D:/桌面/AIGC作品集/bnner/vi/43d56511-761b-4f59-b93e-727da878648f.png" },
  { id: "ip-character-03", source: "D:/桌面/AIGC作品集/bnner/vi/c8f62c11-76d2-4140-bc02-ca07186d2f41.png" },
  { id: "ip-character-04", source: "D:/桌面/AIGC作品集/bnner/vi/e7cdb30f-43b2-4f6d-8fed-053e2750e004.png" },
  { id: "ip-character-05", source: "D:/桌面/AIGC作品集/bnner/vi/e44561df-fc5d-4954-91e2-6adf30362fb5.png" },
  { id: "ip-character-06", source: "D:/桌面/AIGC作品集/bnner/vi/ee6f2d77-e192-455e-9d87-e38e9c8ae126.png" },
];

const originalDir = "src/assets/originals/ip-character";
const assetDir = "src/assets/portfolio/ip-character";
const publicDir = "public/images/portfolio/ip-character";

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