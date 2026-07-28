import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const workspace = process.cwd();
const publicRoot = path.join(workspace, "public");
const outputRoot = path.join(publicRoot, "images", "portfolio", "vi");
const originalRoot = path.join(workspace, "src", "assets", "originals", "vi");
const reportPath = path.join(workspace, "src", "assets", "portfolio", "vi", "optimization-report.json");

const assets = [
  {
    index: 1,
    project: "01-red-boy",
    role: "applications",
    source: "D:\\桌面\\555\\VI\\0e8deab8-99f4-4929-b327-2f753b99cd64.png",
  },
  {
    index: 2,
    project: "02-panda-guardian",
    role: "cover",
    source: "D:\\桌面\\555\\VI\\2e6fc086-ac39-4f33-8a3f-3c13d376234f.png",
  },
  {
    index: 3,
    project: "03-lilac-dream",
    role: "applications",
    source: "D:\\桌面\\555\\VI\\4a652573-548b-4190-9f27-c42f8cf842ea.png",
  },
  {
    index: 4,
    project: "04-mofan-fire",
    role: "cover",
    source: "D:\\桌面\\555\\VI\\4b1a2cf3-6e0c-47db-8902-30d6fda523b0.png",
  },
  {
    index: 5,
    project: "05-han-li",
    role: "character",
    source: "D:\\桌面\\555\\VI\\4f6fdd08-c340-4625-8e2b-be3eb1354e64.png",
  },
  {
    index: 6,
    project: "02-panda-guardian",
    role: "applications",
    source: "D:\\桌面\\555\\VI\\7b498f05-3313-4a5c-8a23-4e0faee77caa.png",
  },
  {
    index: 7,
    project: "01-red-boy",
    role: "character",
    source: "D:\\桌面\\555\\VI\\9efa5bff-ac51-4c68-9bf6-6807bdd6b716.png",
  },
  {
    index: 8,
    project: "06-yue-fei",
    role: "applications",
    source: "D:\\桌面\\555\\VI\\9f7f3e44-27ea-47a0-b63d-007b4b986dee.png",
  },
  {
    index: 9,
    project: "04-mofan-fire",
    role: "applications",
    source: "D:\\桌面\\555\\VI\\13e1373a-f4ea-483c-8994-c9547df8d4c1.png",
  },
  {
    index: 10,
    project: "06-yue-fei",
    role: "character",
    source: "D:\\桌面\\555\\VI\\74b57e14-1bd3-4584-86fc-b09c18a06f28.png",
  },
  {
    index: 11,
    project: "01-red-boy",
    role: "cover",
    source: "D:\\桌面\\555\\VI\\516a8296-8a7d-4ae3-aee1-a8ae7bfd9001.png",
  },
  {
    index: 12,
    project: "05-han-li",
    role: "cover",
    source: "D:\\桌面\\555\\VI\\490026d8-b9b8-47cd-aca8-1154f8be56c3.png",
  },
  {
    index: 13,
    project: "04-mofan-fire",
    role: "character",
    source: "D:\\桌面\\555\\VI\\b35b8455-8ef1-4ed7-85c4-28ba04ca86f0.png",
  },
  {
    index: 14,
    project: "05-han-li",
    role: "applications",
    source: "D:\\桌面\\555\\VI\\bd468324-55fe-4808-bc80-88eb5821d72d.png",
  },
  {
    index: 15,
    project: "06-yue-fei",
    role: "cover",
    source: "D:\\桌面\\555\\VI\\d6c92a9f-4cbd-43b2-87a7-105f112bcf63.png",
  },
  {
    index: 16,
    project: "07-mofan-green",
    role: "applications",
    source: "D:\\桌面\\555\\VI\\db0a8fd4-a004-4b5e-bc41-781fcc7d51b4.png",
  },
  {
    index: 17,
    project: "02-panda-guardian",
    role: "character",
    source: "D:\\桌面\\555\\VI\\e0bc3f1b-5508-400f-8478-a1aa557fab63.png",
  },
  {
    index: 18,
    project: "07-mofan-green",
    role: "cover",
    source: "D:\\桌面\\555\\VI\\e96ef406-e0b0-4ea3-8c28-f7883d3d6023.png",
  },
  {
    index: 19,
    project: "03-lilac-dream",
    role: "cover",
    source: "D:\\桌面\\555\\VI\\eeca6957-03f0-41f6-9c11-b01182da65b6.png",
  },
];

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function toPublicPath(filePath) {
  return `/${path.relative(publicRoot, filePath).replace(/\\/g, "/")}`;
}

function toWorkspacePath(filePath) {
  return path.relative(workspace, filePath).replace(/\\/g, "/");
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function processAsset(asset) {
  const outputDir = path.join(outputRoot, asset.project);
  const originalDir = path.join(originalRoot, asset.project);
  const outputPath = path.join(outputDir, `${asset.role}.webp`);
  const originalPath = path.join(originalDir, `${String(asset.index).padStart(2, "0")}-${asset.role}.png`);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(originalDir, { recursive: true });

  const beforeStat = await fs.stat(asset.source);
  const originalMeta = await sharp(asset.source).metadata();

  if (!(await exists(originalPath))) {
    await fs.copyFile(asset.source, originalPath);
  }

  let skipped = false;
  if (!(await exists(outputPath))) {
    await sharp(asset.source)
      .rotate()
      .resize({
        width: 1800,
        height: 1800,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 90,
        smartSubsample: true,
        effort: 6,
      })
      .toFile(outputPath);
  } else {
    skipped = true;
  }

  const afterStat = await fs.stat(outputPath);
  const outputMeta = await sharp(outputPath).metadata();

  return {
    index: asset.index,
    project: asset.project,
    role: asset.role,
    source: asset.source,
    originalBackup: toWorkspacePath(originalPath),
    output: toPublicPath(outputPath),
    originalWidth: originalMeta.width,
    originalHeight: originalMeta.height,
    width: outputMeta.width,
    height: outputMeta.height,
    beforeBytes: beforeStat.size,
    afterBytes: afterStat.size,
    before: formatBytes(beforeStat.size),
    after: formatBytes(afterStat.size),
    savedBytes: beforeStat.size - afterStat.size,
    saved: formatBytes(Math.max(0, beforeStat.size - afterStat.size)),
    skipped,
  };
}

const results = [];
const failures = [];

for (const asset of assets) {
  try {
    const result = await processAsset(asset);
    results.push(result);
    const status = result.skipped ? "skipped" : "optimized";
    console.log(`${status}: ${result.project}/${result.role} ${result.before} -> ${result.after}`);
  } catch (error) {
    failures.push({
      index: asset.index,
      project: asset.project,
      role: asset.role,
      source: asset.source,
      message: error instanceof Error ? error.message : String(error),
    });
    console.error(`failed: ${asset.project}/${asset.role}`, error);
  }
}

const beforeBytes = results.reduce((sum, item) => sum + item.beforeBytes, 0);
const afterBytes = results.reduce((sum, item) => sum + item.afterBytes, 0);
const report = {
  generatedAt: new Date().toISOString(),
  quality: 90,
  maxLongestSide: 1800,
  total: {
    input: assets.length,
    succeeded: results.length,
    optimized: results.filter((item) => !item.skipped).length,
    skipped: results.filter((item) => item.skipped).length,
    failed: failures.length,
    beforeBytes,
    afterBytes,
    savedBytes: beforeBytes - afterBytes,
    before: formatBytes(beforeBytes),
    after: formatBytes(afterBytes),
    saved: formatBytes(Math.max(0, beforeBytes - afterBytes)),
    reductionPercent: beforeBytes ? Number((((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(2)) : 0,
  },
  results,
  failures,
};

await fs.mkdir(path.dirname(reportPath), { recursive: true });
await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

console.log(
  `done: ${report.total.succeeded} succeeded, ${report.total.skipped} skipped, ${report.total.failed} failed, saved ${report.total.saved} (${report.total.reductionPercent}%)`,
);

if (failures.length) {
  process.exitCode = 1;
}
