// 优化 20 张竖向海报为 webp，输出到 originals/portfolio/public 三个目录
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sourceDir = "D:/桌面/AIGC作品集/海报";
const targets = [
  "D:/LAST.WEB/src/assets/originals/poster",
  "D:/LAST.WEB/src/assets/portfolio/poster",
  "D:/LAST.WEB/public/images/portfolio/poster",
];

const mapping = [
  ["0aa8042d-1748-4b9b-8f77-d46c81ff15a5.png", "poster-19", "治愈香薰蜡烛", "治愈香薰蜡烛产品海报：AROMA NEST 天然植物蜡蜡烛，配以品质推荐徽章与卖点图标。", "Home", "Scented candle product poster with AROMA NEST branding, natural wax callouts, and warm lifestyle scene."],
  ["2dd11e55-6120-484a-8ffb-99fa7b150440.png", "poster-20", "奢养水乳套装", "奢养水乳套装产品海报：LUMÉA 补水保湿 / 滋润修护 / 焕亮肤色护肤套装，主图三位一体组合摆拍。", "Beauty", "Lumea hydrating toner lotion and essence cream product poster with three-product lineup and bilingual benefit icons."],
  ["06c6c0db-848d-4824-9480-d1a3517566bc.png", "poster-21", "轻盈旅行箱", "轻盈旅行箱产品海报：VOYAGER 静音万向轮、防刮外壳、超大容量旅行箱，机场场景主图。", "Travel", "Voyager lightweight suitcase product poster featuring silent spinner wheels, scratch-resistant shell, and large capacity."],
  ["6b5fe320-3627-489c-8ed4-44c739b171da.png", "poster-22", "鎏金夜语香水", "鎏金夜语香水产品海报：NOIR ÉTOILE 高端馥郁花木香水，深色奢华背景与瓶身细节特写。", "Beauty", "Noir Etoile parfum product poster with dark luxe mood, woody floral notes, and refined gift-set styling."],
  ["6c76494e-d35c-4ea5-8429-9af0d780a0f8.png", "poster-23", "丝绒雾面口红", "丝绒雾面口红产品海报：VELORA 高级显色、轻盈顺滑口红，配以粉色丝绸背景与色号推荐徽章。", "Beauty", "Velora velvet matte lipstick product poster with pink silk backdrop, color swatch, and shade recommendation badge."],
  ["7ee43dc7-20ef-457a-b7ff-09452c241bd7.png", "poster-24", "不锈钢锋利菜刀", "不锈钢锋利菜刀产品海报：EDGE PRO 锋利持久、轻松切割主厨刀，深色厨房背景搭配食材与砧板。", "Kitchen", "Edge Pro stainless steel chef knife product poster with kitchen prep scene, sharp-edge callouts, and forged steel detail."],
  ["274ffb45-8a9a-4e37-8e5e-5dad35bcd9a6.png", "poster-25", "家用咖啡机", "家用咖啡机产品海报：BREW ONE 香醇萃取、一键享受浓缩咖啡机，咖啡飞溅动态主图。", "Kitchen", "Brew One home espresso machine product poster with high-pressure extraction, milk frother, and coffee splash hero shot."],
  ["292f893d-f162-47c4-90ff-b00d6f94b9bd.png", "poster-26", "智能运动手表", "智能运动手表产品海报：VITA TIME 心率监测、防水设计、长效续航智能手表，户外运动场景。", "Tech", "Vita Time smartwatch product poster with heart-rate monitoring, water resistance, and 100+ sport modes."],
  ["01156ebc-db8a-49e8-bc13-65fc55eee591.png", "poster-27", "高蛋白冻干猫粮", "高蛋白冻干猫粮产品海报：PAW FEAST 95% 动物蛋白、呵护肠胃全价猫粮，配以萌猫与产品组合。", "Pets", "Paw Feast high-protein freeze-dried cat food product poster with 95% animal protein, gentle digestion, and live cat hero."],
  ["5859c74d-1cdc-42d0-929d-75f2ab43e950.png", "poster-28", "声波电动牙刷", "声波电动牙刷产品海报：PURE SMILE 高频震动、智能计时、IPX7 防水电动牙刷，浅绿清新风格。", "Beauty", "Pure Smile sonic electric toothbrush product poster with high-frequency vibration, smart timer, and IPX7 waterproofing."],
  ["6377a8a3-0d12-4baf-a555-d37a7e05ddfe.png", "poster-29", "便携蓝牙音箱", "便携蓝牙音箱产品海报：SOUND MATE 360° 环绕、长效续航、蓝牙 5.3 黑色音箱，蓝色科技动效背景。", "Tech", "Sound Mate portable Bluetooth speaker product poster with 360 sound, long battery life, and Bluetooth 5.3."],
  ["24198d1f-12b5-4227-a8a2-510d17414cf2.png", "poster-30", "轻弹跑鞋", "轻弹跑鞋产品海报：RUN MAX 轻盈回弹、自在开跑运动跑鞋，黑红赛道动感激烈风格。", "Sports", "Run Max lightweight running shoes product poster with breathable upper, shock-absorbing midsole, and grip outsole."],
  ["628129d6-73e4-49ca-8185-ffd65cbb93d7.png", "poster-31", "便携榨汁杯", "便携榨汁杯产品海报：FRESH GO 一键启动、强劲刀头、轻巧便携榨汁杯，奇异果与青柠夏日主题。", "Kitchen", "Fresh Go portable juicer cup product poster with one-touch start, sharp blades, and lightweight on-the-go design."],
  ["ac866503-d9ad-49cb-a9be-e09f4baa7c06.png", "poster-32", "明前龙井茶", "明前龙井茶产品海报：青雾茶舍 明前头采、鲜爽回甘、匠制好茶绿茶礼盒，竹影山水背景。", "Food", "Qingwu Tea House pre-Qingming Longjing tea product poster with first-flush pick, fresh sweet aftertaste, and bamboo scenery."],
  ["b19006c2-e617-4585-9b6b-3c7a07b763ff.png", "poster-33", "深层筋膜枪", "深层筋膜枪产品海报：POWER PULSE 放松肌群、快速恢复健身筋膜枪，黑橙运动风格。", "Sports", "Power Pulse deep-tissue massage gun product poster with multi-level intensity, quiet operation, and long battery life."],
  ["bf04c964-1c22-467b-95d4-aa7e0ee2b254.png", "poster-34", "智能降噪无线耳机", "智能降噪无线耳机产品海报：NOVA SOUND 沉浸音质、低延迟体验蓝牙耳机，深蓝科技光效。", "Tech", "Nova Sound active noise-cancelling wireless earbuds product poster with immersive audio, low-latency, and Bluetooth 5.3."],
  ["ee9e9b9a-7b2b-4e2b-b731-9a9fc90513d1.png", "poster-35", "清透防晒霜", "清透防晒霜产品海报：SUN VEIL 高倍防护、轻薄不黏 SPF50+ PA++++ 防晒霜，海边柠檬主题。", "Beauty", "Sun Veil clear UV sunscreen product poster with SPF50+ PA++++, water-resistant, and gentle skin formula."],
  ["ee9efd21-b047-44f6-9b35-56674bc7395f.png", "poster-36", "机械键盘", "机械键盘产品海报：KEY STORM 畅快敲击、电竞手感 RGB 背光键盘，赛博朋克紫粉风格。", "Tech", "Key Storm mechanical keyboard product poster with hot-swappable switches, RGB backlighting, and anti-ghosting."],
  ["f2fca14a-6eab-4a84-a329-34f3de43f25f.png", "poster-37", "负离子吹风机", "负离子吹风机产品海报：AERO GLOW 快速干发、柔顺亮泽紫色吹风机，深色展厅灯光风格。", "Beauty", "Aero Glow ionic hair dryer product poster with fast drying, smooth shine finish, and constant temperature care."],
  ["fb573e04-aad9-4ea5-a982-85c80842ca9d.png", "poster-38", "元气气泡橙饮", "元气气泡橙饮产品海报：SUN BURST 清爽气泡、果香爆发橙味汽水，橙黄色调夏日活力。", "Beverage", "Sun Burst orange sparkling drink product poster with real fruit flavor, cool bubbles, and summer-essential styling."],
];

async function main() {
  for (const t of targets) {
    await fs.mkdir(t, { recursive: true });
  }
  let totalIn = 0;
  let totalOut = 0;
  for (const [src, slug, title, descZh, tag, descEn] of mapping) {
    const srcPath = path.join(sourceDir, src);
    const stat = await fs.stat(srcPath);
    totalIn += stat.size;
    const meta = await sharp(srcPath).metadata();
    // 竖向 1024×1536 / 1086×1448 都低于 1600，直接转 webp
    const outName = `${slug}.webp`;
    const buf = await sharp(srcPath)
      .resize({ width: 1024, height: 1536, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toBuffer();
    for (const t of targets) {
      await fs.writeFile(path.join(t, outName), buf);
    }
    totalOut += buf.length * targets.length;
    console.log(`${src.slice(0, 8)}... ${meta.width}x${meta.height} ${(stat.size/1024).toFixed(0)}KB -> ${outName} ${(buf.length/1024).toFixed(0)}KB [${title}]`);
  }
  console.log("---");
  console.log(`Original total: ${(totalIn/1024/1024).toFixed(2)}MB`);
  console.log(`Per location: ${(totalOut/targets.length/1024/1024).toFixed(2)}MB`);
  console.log(`x3 locations: ${(totalOut/1024/1024).toFixed(2)}MB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});