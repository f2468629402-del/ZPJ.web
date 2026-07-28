// 在 data/projects.ts 的 banner-18 后面插入 20 条 poster 数据
import { readFileSync, writeFileSync } from "node:fs";

const path = "D:/LAST.WEB/data/projects.ts";
let content = readFileSync(path, "utf8");

const anchor = 'slug: "banner-18", image: "/images/portfolio/banner/banner-18.webp", width: 658, height: 366, alt: "\\u4e09\\u4e9a\\u6d6a\\u4e00\\u590f\\u65c5\\u6e38\\u5ea6\\u5047\\u84dd\\u8272\\u7535\\u5546 banner", tags: ["Banner", "Travel"], description: "\\u65c5\\u6e38\\u5ea6\\u5047\\u7535\\u5546 banner\\uff0c\\u4ee5\\u6d77\\u6ee8\\u573a\\u666f\\u4e0e\\u624b\\u7ed8\\u7eb9\\u7d20\\u5851\\u9020\\u590f\\u5b63\\u51fa\\u6e38\\u4e3b\\u9898\\u3002" },';

if (!content.includes(anchor)) {
  console.error("anchor not found");
  process.exit(1);
}

const entries = [
  { title: "\\u6cbb\\u6108\\u9999\\u85b9\\u8721\\u70db", slug: "poster-19", w: 1024, h: 1536, alt: "\\u6cbb\\u6108\\u9999\\u85b9\\u8721\\u70db\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aAROMA NEST \\u5929\\u7136\\u690d\\u7269\\u8721\\u8721\\u70db", tags: ["Poster", "Home"], desc: "\\u6cbb\\u6108\\u9999\\u85b9\\u8721\\u70db\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cAROMA NEST \\u5929\\u7136\\u690d\\u7269\\u8721\\u8721\\u70db\\uff0c\\u914d\\u4ee5\\u54c1\\u8d28\\u63a8\\u8350\\u5fbd\\u7ae0\\u4e0e\\u5356\\u70b9\\u56fe\\u6807\\u3002" },
  { title: "\\u5962\\u517b\\u6c34\\u4e73\\u5957\\u88c5", slug: "poster-20", w: 1086, h: 1448, alt: "\\u5962\\u517b\\u6c34\\u4e73\\u5957\\u88c5\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aLUM\\u00c9A \\u8865\\u6c34\\u4fdd\\u6e7f\\u62a4\\u80a4\\u5957\\u88c5", tags: ["Poster", "Beauty"], desc: "\\u5962\\u517b\\u6c34\\u4e73\\u5957\\u88c5\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cLUM\\u00c9A \\u8865\\u6c34\\u4fdd\\u6e7f / \\u6ecb\\u6da6\\u4fee\\u62a4 / \\u7115\\u4eae\\u80a4\\u8272\\u62a4\\u80a4\\u5957\\u88c5\\uff0c\\u4e3b\\u56fe\\u4e09\\u4f4d\\u4e00\\u4f53\\u7ec4\\u5408\\u6446\\u62cd\\u3002" },
  { title: "\\u8f7b\\u76c8\\u65c5\\u884c\\u7bb1", slug: "poster-21", w: 1024, h: 1536, alt: "\\u8f7b\\u76c8\\u65c5\\u884c\\u7bb1\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aVOYAGER \\u9759\\u97f3\\u4e07\\u5411\\u8f6e\\u65c5\\u884c\\u7bb1", tags: ["Poster", "Travel"], desc: "\\u8f7b\\u76c8\\u65c5\\u884c\\u7bb1\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cVOYAGER \\u9759\\u97f3\\u4e07\\u5411\\u8f6e\\u3001\\u9632\\u522e\\u5916\\u58f3\\u3001\\u8d85\\u5927\\u5bb9\\u91cf\\u65c5\\u884c\\u7bb1\\uff0c\\u673a\\u573a\\u573a\\u666f\\u4e3b\\u56fe\\u3002" },
  { title: "\\u939d\\u91d1\\u591c\\u8bed\\u9999\\u6c34", slug: "poster-22", w: 1086, h: 1448, alt: "\\u939d\\u91d1\\u591c\\u8bed\\u9999\\u6c34\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aNOIR \\u00c9TOILE \\u9ad8\\u7aef\\u9985\\u90c1\\u82b1\\u6728\\u9999\\u6c34", tags: ["Poster", "Beauty"], desc: "\\u939d\\u91d1\\u591c\\u8bed\\u9999\\u6c34\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cNOIR \\u00c9TOILE \\u9ad8\\u7aef\\u9985\\u90c1\\u82b1\\u6728\\u9999\\u6c34\\uff0c\\u6df1\\u8272\\u5962\\u534e\\u80cc\\u666f\\u4e0e\\u74f6\\u8eab\\u7ec6\\u8282\\u7279\\u5199\\u3002" },
  { title: "\\u4e1d\\u7ed2\\u96fe\\u9762\\u53e3\\u7ea2", slug: "poster-23", w: 1086, h: 1448, alt: "\\u4e1d\\u7ed2\\u96fe\\u9762\\u53e3\\u7ea2\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aVELORA \\u9ad8\\u7ea7\\u663e\\u8272\\u53e3\\u7ea2", tags: ["Poster", "Beauty"], desc: "\\u4e1d\\u7ed2\\u96fe\\u9762\\u53e3\\u7ea2\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cVELORA \\u9ad8\\u7ea7\\u663e\\u8272\\u3001\\u8f7b\\u76c8\\u987a\\u6ed1\\u53e3\\u7ea2\\uff0c\\u914d\\u4ee5\\u7c89\\u8272\\u4e1d\\u7ef8\\u80cc\\u666f\\u4e0e\\u8272\\u53f7\\u63a8\\u8350\\u5fbd\\u7ae0\\u3002" },
  { title: "\\u4e0d\\u9508\\u94a2\\u950b\\u5229\\u83dc\\u5200", slug: "poster-24", w: 1086, h: 1448, alt: "\\u4e0d\\u9508\\u94a2\\u950b\\u5229\\u83dc\\u5200\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aEDGE PRO \\u4e3b\\u53a8\\u5200", tags: ["Poster", "Kitchen"], desc: "\\u4e0d\\u9508\\u94a2\\u950b\\u5229\\u83dc\\u5200\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cEDGE PRO \\u950b\\u5229\\u6301\\u4e45\\u3001\\u8f7b\\u677e\\u5207\\u5272\\u4e3b\\u53a8\\u5200\\uff0c\\u6df1\\u8272\\u53a8\\u623f\\u80cc\\u666f\\u642d\\u914d\\u98df\\u6750\\u4e0e\\u7838\\u677f\\u3002" },
  { title: "\\u5bb6\\u7528\\u5496\\u5561\\u673a", slug: "poster-25", w: 1086, h: 1448, alt: "\\u5bb6\\u7528\\u5496\\u5561\\u673a\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aBREW ONE \\u6d53\\u7f29\\u5496\\u5561\\u673a", tags: ["Poster", "Kitchen"], desc: "\\u5bb6\\u7528\\u5496\\u5561\\u673a\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cBREW ONE \\u9999\\u9187\\u8350\\u53d6\\u3001\\u4e00\\u952e\\u4eab\\u53d7\\u6d53\\u7f29\\u5496\\u5561\\u673a\\uff0c\\u5496\\u5561\\u98de\\u6e85\\u52a8\\u6001\\u4e3b\\u56fe\\u3002" },
  { title: "\\u667a\\u80fd\\u8fd0\\u52a8\\u624b\\u8868", slug: "poster-26", w: 1086, h: 1448, alt: "\\u667a\\u80fd\\u8fd0\\u52a8\\u624b\\u8868\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aVITA TIME \\u5fc3\\u7387\\u76d1\\u6d4b", tags: ["Poster", "Tech"], desc: "\\u667a\\u80fd\\u8fd0\\u52a8\\u624b\\u8868\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cVITA TIME \\u5fc3\\u7387\\u76d1\\u6d4b\\u3001\\u9632\\u6c34\\u8bbe\\u8ba1\\u3001\\u957f\\u6548\\u7eed\\u822a\\u667a\\u80fd\\u624b\\u8868\\uff0c\\u6237\\u5916\\u8fd0\\u52a8\\u573a\\u666f\\u3002" },
  { title: "\\u9ad8\\u86cb\\u767d\\u51bb\\u5e72\\u732b\\u7cae", slug: "poster-27", w: 1024, h: 1536, alt: "\\u9ad8\\u86cb\\u767d\\u51bb\\u5e72\\u732b\\u7cae\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aPAW FEAST \\u5168\\u4ef7\\u732b\\u7cae", tags: ["Poster", "Pets"], desc: "\\u9ad8\\u86cb\\u767d\\u51bb\\u5e72\\u732b\\u7cae\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cPAW FEAST 95% \\u52a8\\u7269\\u86cb\\u767d\\u3001\\u54c8\\u62a4\\u80c3\\u80a0\\u5168\\u4ef7\\u732b\\u7cae\\uff0c\\u914d\\u4ee5\\u840c\\u732b\\u4e0e\\u4ea7\\u54c1\\u7ec4\\u5408\\u3002" },
  { title: "\\u58f0\\u6ce2\\u7535\\u52a8\\u7259\\u5237", slug: "poster-28", w: 1024, h: 1536, alt: "\\u58f0\\u6ce2\\u7535\\u52a8\\u7259\\u5237\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aPURE SMILE \\u7535\\u52a8\\u7259\\u5237", tags: ["Poster", "Beauty"], desc: "\\u58f0\\u6ce2\\u7535\\u52a8\\u7259\\u5237\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cPURE SMILE \\u9ad8\\u9891\\u9707\\u52a8\\u3001\\u667a\\u80fd\\u8ba1\\u65f6\\u3001IPX7 \\u9632\\u6c34\\u7535\\u52a8\\u7259\\u5237\\uff0c\\u6d45\\u7eff\\u6e05\\u65b0\\u98ce\\u683c\\u3002" },
  { title: "\\u4fbf\\u643a\\u84dd\\u7259\\u97f3\\u7bb1", slug: "poster-29", w: 1024, h: 1536, alt: "\\u4fbf\\u643a\\u84dd\\u7259\\u97f3\\u7bb1\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aSOUND MATE \\u84dd\\u7259\\u97f3\\u7bb1", tags: ["Poster", "Tech"], desc: "\\u4fbf\\u643a\\u84dd\\u7259\\u97f3\\u7bb1\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cSOUND MATE 360\\u00b0 \\u73af\\u7ed5\\u3001\\u957f\\u6548\\u7eed\\u822a\\u3001\\u84dd\\u7259 5.3 \\u9ed1\\u8272\\u97f3\\u7bb1\\uff0c\\u84dd\\u8272\\u79d1\\u6280\\u52a8\\u6548\\u80cc\\u666f\\u3002" },
  { title: "\\u8f7b\\u5f39\\u8dd1\\u978b", slug: "poster-30", w: 1024, h: 1536, alt: "\\u8f7b\\u5f39\\u8dd1\\u978b\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aRUN MAX \\u8fd0\\u52a8\\u8dd1\\u978b", tags: ["Poster", "Sports"], desc: "\\u8f7b\\u5f39\\u8dd1\\u978b\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cRUN MAX \\u8f7b\\u76c8\\u56de\\u5f39\\u3001\\u81ea\\u5728\\u5f00\\u8dd1\\u8fd0\\u52a8\\u8dd1\\u978b\\uff0c\\u9ed1\\u7ea2\\u8d5b\\u9053\\u52a8\\u611f\\u6fc0\\u70c8\\u98ce\\u683c\\u3002" },
  { title: "\\u4fbf\\u643a\\u69a8\\u6c41\\u676f", slug: "poster-31", w: 1024, h: 1536, alt: "\\u4fbf\\u643a\\u69a8\\u6c41\\u676f\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aFRESH GO \\u69a8\\u6c41\\u676f", tags: ["Poster", "Kitchen"], desc: "\\u4fbf\\u643a\\u69a8\\u6c41\\u676f\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cFRESH GO \\u4e00\\u952e\\u542f\\u52a8\\u3001\\u5f3a\\u52b2\\u5200\\u5934\\u3001\\u8f7b\\u5de7\\u4fbf\\u643a\\u69a8\\u6c41\\u676f\\uff0c\\u5947\\u5f02\\u679c\\u4e0e\\u9752\\u67e0\\u590f\\u65e5\\u4e3b\\u9898\\u3002" },
  { title: "\\u660e\\u524d\\u9f99\\u4e95\\u8336", slug: "poster-32", w: 1086, h: 1448, alt: "\\u660e\\u524d\\u9f99\\u4e95\\u8336\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1a\\u9752\\u96fe\\u8336\\u820d \\u7eff\\u8336\\u793c\\u76d2", tags: ["Poster", "Food"], desc: "\\u660e\\u524d\\u9f99\\u4e95\\u8336\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0c\\u9752\\u96fe\\u8336\\u820d \\u660e\\u524d\\u5934\\u91c7\\u3001\\u9c9c\\u7235\\u56de\\u7518\\u3001\\u5320\\u5236\\u597d\\u8336\\u7eff\\u8336\\u793c\\u76d2\\uff0c\\u7af9\\u5f71\\u5c71\\u6c34\\u80cc\\u666f\\u3002" },
  { title: "\\u6df1\\u5c42\\u7b4b\\u819c\\u67aa", slug: "poster-33", w: 1024, h: 1536, alt: "\\u6df1\\u5c42\\u7b4b\\u819c\\u67aa\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aPOWER PULSE \\u5065\\u8eab\\u7b4b\\u819c\\u67aa", tags: ["Poster", "Sports"], desc: "\\u6df1\\u5c42\\u7b4b\\u819c\\u67aa\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cPOWER PULSE \\u653e\\u677e\\u808c\\u7fa4\\u3001\\u5feb\\u901f\\u6062\\u590d\\u5065\\u8eab\\u7b4b\\u819c\\u67aa\\uff0c\\u9ed1\\u6a59\\u8fd0\\u52a8\\u98ce\\u683c\\u3002" },
  { title: "\\u667a\\u80fd\\u964d\\u566a\\u65e0\\u7ebf\\u8033\\u673a", slug: "poster-34", w: 1086, h: 1448, alt: "\\u667a\\u80fd\\u964d\\u566a\\u65e0\\u7ebf\\u8033\\u673a\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aNOVA SOUND \\u84dd\\u7259\\u8033\\u673a", tags: ["Poster", "Tech"], desc: "\\u667a\\u80fd\\u964d\\u566a\\u65e0\\u7ebf\\u8033\\u673a\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cNOVA SOUND \\u6c89\\u6d78\\u97f3\\u8d28\\u3001\\u4f4e\\u5ef6\\u8fdf\\u4f53\\u9a8c\\u84dd\\u7259\\u8033\\u673a\\uff0c\\u6df1\\u84dd\\u79d1\\u6280\\u5149\\u6548\\u3002" },
  { title: "\\u6e05\\u900f\\u9632\\u6652\\u971c", slug: "poster-35", w: 1024, h: 1536, alt: "\\u6e05\\u900f\\u9632\\u6652\\u971c\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aSUN VEIL SPF50+ \\u9632\\u6652\\u971c", tags: ["Poster", "Beauty"], desc: "\\u6e05\\u900f\\u9632\\u6652\\u971c\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cSUN VEIL \\u9ad8\\u500d\\u9632\\u62a4\\u3001\\u8f7b\\u8584\\u4e0d\\u9ecf SPF50+ PA++++ \\u9632\\u6652\\u971c\\uff0c\\u6d77\\u8fb9\\u67e0\\u6aac\\u4e3b\\u9898\\u3002" },
  { title: "\\u673a\\u68b0\\u952e\\u76d8", slug: "poster-36", w: 1024, h: 1536, alt: "\\u673a\\u68b0\\u952e\\u76d8\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aKEY STORM RGB \\u80cc\\u5149\\u952e\\u76d8", tags: ["Poster", "Tech"], desc: "\\u673a\\u68b0\\u952e\\u76d8\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cKEY STORM \\u7545\\u5feb\\u6572\\u51fb\\u3001\\u7535\\u7ade\\u624b\\u611f RGB \\u80cc\\u5149\\u952e\\u76d8\\uff0c\\u8d5b\\u535a\\u670b\\u514b\\u7d2b\\u7c89\\u98ce\\u683c\\u3002" },
  { title: "\\u8d1f\\u79bb\\u5b50\\u5439\\u98ce\\u673a", slug: "poster-37", w: 1086, h: 1448, alt: "\\u8d1f\\u79bb\\u5b50\\u5439\\u98ce\\u673a\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aAERO GLOW \\u7d2b\\u8272\\u5439\\u98ce\\u673a", tags: ["Poster", "Beauty"], desc: "\\u8d1f\\u79bb\\u5b50\\u5439\\u98ce\\u673a\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cAERO GLOW \\u5feb\\u901f\\u5e72\\u53d1\\u3001\\u67d4\\u987a\\u4eae\\u6cfd\\u7d2b\\u8272\\u5439\\u98ce\\u673a\\uff0c\\u6df1\\u8272\\u5c55\\u5385\\u706f\\u5149\\u98ce\\u683c\\u3002" },
  { title: "\\u5143\\u6c14\\u6c14\\u6ce1\\u6a59\\u996e", slug: "poster-38", w: 1086, h: 1448, alt: "\\u5143\\u6c14\\u6c14\\u6ce1\\u6a59\\u996e\\u4ea7\\u54c1\\u6d77\\u62a5\\uff1aSUN BURST \\u6a59\\u5473\\u6c7d\\u6c34", tags: ["Poster", "Beverage"], desc: "\\u5143\\u6c14\\u6c14\\u6ce1\\u6a59\\u996e\\u4ea7\\u54c1\\u6d77\\u62a5\\uff0cSUN BURST \\u6e05\\u7235\\u6c14\\u6ce1\\u3001\\u679c\\u9999\\u7206\\u53d1\\u6a59\\u5473\\u6c7d\\u6c34\\uff0c\\u6a59\\u9ec4\\u8272\\u8c03\\u590f\\u65e5\\u6d3b\\u529b\\u3002" },
];

const newLines = entries
  .map(
    (e) =>
      '    { title: "' +
      e.title +
      '", subtitle: "POSTER DESIGN / 2026", slug: "' +
      e.slug +
      '", image: "/images/portfolio/poster/' +
      e.slug +
      '.webp", width: ' +
      e.w +
      ", height: " +
      e.h +
      ', alt: "' +
      e.alt +
      '", tags: ["' +
      e.tags.join('", "') +
      '"], description: "' +
      e.desc +
      '" },'
  )
  .join("\n");

const idx = content.indexOf(anchor);
const before = content.slice(0, idx + anchor.length);
const after = content.slice(idx + anchor.length);
const newContent = before + "\n" + newLines + after;

writeFileSync(path, newContent, "utf8");
console.log("done. inserted " + entries.length + " poster entries");
console.log("first slug: " + entries[0].slug);
console.log("last slug: " + entries[entries.length - 1].slug);