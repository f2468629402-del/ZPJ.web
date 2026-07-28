// 删除 banner-11 到 banner-18 的 8 条数据行，以及对应的图片文件
import fs from 'fs';

const dataPath = 'D:/LAST.WEB/data/projects.ts';
let content = fs.readFileSync(dataPath, 'utf8');
let lines = content.split('\n');

// 第 65-72 行（1-based）= 索引 64-71（0-based）
// 先确认这些行确实包含 banner-11 ~ banner-18
const startIdx = 64; // 第 65 行
const endIdx = 72;   // 第 73 行（不含），即删除索引 64..71

const toDelete = lines.slice(startIdx, endIdx);
const slugs = toDelete.map(l => (l.match(/slug: "banner-(\d+)"/) || [])[1]);
console.log('待删除行 slugs:', slugs);

if (!slugs.every(s => s && Number(s) >= 11 && Number(s) <= 18)) {
  console.error('行号校验失败，未删除');
  process.exit(1);
}

// 删除这 8 行
lines.splice(startIdx, 8);
fs.writeFileSync(dataPath, lines.join('\n'));
console.log('已删除 banner-11 到 banner-18 共 8 条数据');

// 删除对应图片文件
const dirs = [
  'public/images/portfolio/banner',
  'src/assets/originals/banner',
  'src/assets/portfolio/banner',
];
let deletedFiles = 0;
for (const dir of dirs) {
  for (let i = 11; i <= 18; i++) {
    const p = `${dir}/banner-${i}.webp`;
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      deletedFiles++;
      console.log('删除', p);
    }
  }
}
console.log(`共删除 ${deletedFiles} 个图片文件`);
