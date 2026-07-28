import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const maxEdge = 1600;
const ecommerceQuality = 90;
const smallFileThreshold = 150 * 1024;

const ecommerceInputs = [
  {
    id: "ecommerce-main-01",
    source: "D:/桌面/冯进/整理/电商主图+详情页/西瓜/未标题-6.png",
    originalDir: "src/assets/originals/ecommerce-main",
    assetDir: "src/assets/portfolio/ecommerce-main",
    publicDir: "public/images/portfolio/ecommerce-main",
    quality: ecommerceQuality,
  },
  {
    id: "ecommerce-main-02",
    source: "D:/桌面/冯进/整理/电商主图+详情页/水乳/未标题-3.png",
    originalDir: "src/assets/originals/ecommerce-main",
    assetDir: "src/assets/portfolio/ecommerce-main",
    publicDir: "public/images/portfolio/ecommerce-main",
    quality: ecommerceQuality,
  },
  {
    id: "ecommerce-main-03",
    source: "D:/桌面/冯进/整理/电商主图+详情页/汽水/未标题-1.png",
    originalDir: "src/assets/originals/ecommerce-main",
    assetDir: "src/assets/portfolio/ecommerce-main",
    publicDir: "public/images/portfolio/ecommerce-main",
    quality: ecommerceQuality,
  },
  {
    id: "ecommerce-main-04",
    source: "D:/桌面/冯进/整理/电商主图+详情页/吹风机/未标题-4.png",
    originalDir: "src/assets/originals/ecommerce-main",
    assetDir: "src/assets/portfolio/ecommerce-main",
    publicDir: "public/images/portfolio/ecommerce-main",
    quality: ecommerceQuality,
  },
  {
    id: "ecommerce-main-05",
    source: "D:/桌面/冯进/整理/电商主图+详情页/LABB/未标题-5.png",
    originalDir: "src/assets/originals/ecommerce-main",
    assetDir: "src/assets/portfolio/ecommerce-main",
    publicDir: "public/images/portfolio/ecommerce-main",
    quality: ecommerceQuality,
  },
];

const toPosix = (value) => value.replace(/\\/g, "/");
const bytesToKB = (bytes) => Math.round((bytes / 1024) * 10) / 10;
const absolute = (value) => path.isAbsolute(value) ? value : path.join(root, value);

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function statOrNull(file) {
  try {
    return await fs.stat(file);
  } catch {
    return null;
  }
}

async function ensureDir(dir) {
  await fs.mkdir(absolute(dir), { recursive: true });
}

async function copyIfMissing(source, destination) {
  if (await exists(destination)) return false;
  await fs.copyFile(source, destination);
  return true;
}

async function optimizeEcommerce(input) {
  const source = absolute(input.source);
  const sourceStat = await statOrNull(source);
  if (!sourceStat) {
    return { id: input.id, status: "failed", reason: "source missing", source: input.source };
  }

  await ensureDir(input.originalDir);
  await ensureDir(input.assetDir);
  await ensureDir(input.publicDir);

  const originalExt = path.extname(source).toLowerCase();
  const originalPath = absolute(path.join(input.originalDir, `${input.id}${originalExt}`));
  await copyIfMissing(source, originalPath);

  const assetPath = absolute(path.join(input.assetDir, `${input.id}.webp`));
  const publicPath = absolute(path.join(input.publicDir, `${input.id}.webp`));
  const beforeBytes = sourceStat.size;

  if (await exists(assetPath)) {
    const assetStat = await fs.stat(assetPath);
    const metadata = await sharp(assetPath).metadata();
    await copyIfMissing(assetPath, publicPath);
    return {
      id: input.id,
      status: "skipped",
      reason: "optimized output already exists",
      source: input.source,
      output: toPosix(path.relative(root, assetPath)),
      beforeBytes,
      afterBytes: assetStat.size,
      width: metadata.width,
      height: metadata.height,
    };
  }

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
    .webp({ quality: input.quality, effort: 6, smartSubsample: true })
    .toFile(assetPath);

  const assetStat = await fs.stat(assetPath);
  const outputMetadata = await sharp(assetPath).metadata();
  await fs.copyFile(assetPath, publicPath);

  return {
    id: input.id,
    status: "optimized",
    reason: shouldResize ? `resized longest edge to ${maxEdge}px` : "converted without enlargement",
    source: input.source,
    output: toPosix(path.relative(root, assetPath)),
    publicOutput: toPosix(path.relative(root, publicPath)),
    beforeBytes,
    afterBytes: assetStat.size,
    width: outputMetadata.width,
    height: outputMetadata.height,
  };
}

async function scanProjectImages() {
  const projectsFile = path.join(root, "data/projects.ts");
  const content = await fs.readFile(projectsFile, "utf8");
  const matches = [...content.matchAll(/image:\s*"([^"]+)"/g)].map((match) => match[1]);
  const unique = [...new Set(matches)];
  const portfolioImages = unique.filter((image) => image.startsWith("/images/portfolio/"));
  const results = [];

  for (const image of portfolioImages) {
    const publicFile = path.join(root, "public", image.replace(/^\/images\//, "images/"));
    const stat = await statOrNull(publicFile);
    const ext = path.extname(publicFile).toLowerCase();

    if (!stat) {
      results.push({ image, status: "failed", reason: "referenced file missing" });
      continue;
    }

    if ([".webp", ".avif"].includes(ext)) {
      results.push({
        image,
        status: "skipped",
        reason: "already optimized webp/avif, avoiding second-generation loss",
        beforeBytes: stat.size,
        afterBytes: stat.size,
      });
      continue;
    }

    if (stat.size < smallFileThreshold) {
      results.push({
        image,
        status: "skipped",
        reason: "small compatible image under threshold",
        beforeBytes: stat.size,
        afterBytes: stat.size,
      });
      continue;
    }

    results.push({
      image,
      status: "skipped",
      reason: "non-webp portfolio image needs manual destination mapping",
      beforeBytes: stat.size,
      afterBytes: stat.size,
    });
  }

  return results;
}

function summarize(entries) {
  const success = entries.filter((item) => item.status === "optimized").length;
  const skipped = entries.filter((item) => item.status === "skipped").length;
  const failed = entries.filter((item) => item.status === "failed").length;
  const beforeBytes = entries.reduce((sum, item) => sum + (item.beforeBytes || 0), 0);
  const afterBytes = entries.reduce((sum, item) => sum + (item.afterBytes || 0), 0);
  return {
    scanned: entries.length,
    optimized: success,
    skipped,
    failed,
    beforeBytes,
    afterBytes,
    savedBytes: beforeBytes - afterBytes,
    beforeKB: bytesToKB(beforeBytes),
    afterKB: bytesToKB(afterBytes),
    savedKB: bytesToKB(beforeBytes - afterBytes),
  };
}

async function main() {
  const ecommerce = [];
  for (const input of ecommerceInputs) {
    try {
      ecommerce.push(await optimizeEcommerce(input));
    } catch (error) {
      ecommerce.push({ id: input.id, status: "failed", source: input.source, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  const history = await scanProjectImages();
  const all = [...ecommerce, ...history];
  const report = {
    generatedAt: new Date().toISOString(),
    maxEdge,
    ecommerceQuality,
    ecommerce,
    history,
    summary: summarize(all),
  };

  await ensureDir("src/assets/portfolio/ecommerce-main");
  await fs.writeFile(
    absolute("src/assets/portfolio/ecommerce-main/optimization-report.json"),
    JSON.stringify(report, null, 2),
    "utf8",
  );

  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
