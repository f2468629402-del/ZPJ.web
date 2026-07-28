import { getImagePath } from "@/lib/basePath";

export type Project = {
  id?: string;
  title: string;
  category?: string;
  subtitle: string;
  image: string;
  tags: string[];
  description: string;
  slug?: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: "type" | "symbol";
};

const iconTitle = "\u56fe\u6807\u8bbe\u8ba1";
const typeSymbolTitle = "\u8d85\u7ea7\u5b57\u4f53\u4e0e\u8d85\u7ea7\u7b26\u53f7";
const superTypeTitle = "\u8d85\u7ea7\u5b57\u4f53\u4f5c\u54c1";
const superSymbolTitle = "\u8d85\u7ea7\u7b26\u53f7\u4f5c\u54c1";
const ecommerceMainTitle = "APP\u8bbe\u8ba1\u4f5c\u54c1";

export const projectsByModule: Record<string, Project[]> = {
  ip: [
    { id: "ip-character-01", title: "\u8d64\u7fbd Scarlet Boy", category: "\u8d64\u7fbd \u00b7 \u72fc\u8c2c\u76f8\u878d", subtitle: "CHARACTER DESIGN / 2026", slug: "ip-character-01", image: getImagePath('/images/portfolio/ip-character/ip-character-01.webp'), width: 1600, height: 900, alt: "\u8d64\u7fbd\u5c11\u5e74\u4e0e\u72fc\u9b54\u7684 AIGC \u89d2\u8272\u4e09\u89c6\u56fe", tags: ["Character", "VI Brand"], description: "\u8d64\u7fbd\u5c11\u5e74\u00b7\u72fc\u9b54\u76f8\u878d\uff0c\u4ee5\u706b\u7ea2\u4e3b\u8272\u5851\u9020\u70ce\u70c8\u00b7\u6d3b\u529b\u5341\u8db3\u7684 AIGC \u89d2\u8272\u4e0e VI \u54c1\u724c\u62d3\u5c55\u3002" },
    { id: "ip-character-02", title: "\u7130\u77b3 Blaze Boy", category: "\u7130\u77b3 \u00b7 \u706b\u7130\u63a7\u5236", subtitle: "CHARACTER DESIGN / 2026", slug: "ip-character-02", image: getImagePath('/images/portfolio/ip-character/ip-character-02.webp'), width: 1600, height: 900, alt: "\u897f\u88c5\u70ce\u7237\u5c11\u5e74\u638c\u63a7\u706b\u7130\u7684 AIGC \u89d2\u8272\u4e09\u89c6\u56fe", tags: ["Character", "VI Brand"], description: "\u897f\u88c5\u9020\u578b\u00b7\u706b\u7130\u529b\u91cf\uff0c\u70ce\u70c8\u4e0e\u793e\u4ea4\u573a\u666f\u9f50\u5934\u7684\u539f\u521b\u89d2\u8272 IP\u3002" },
    { id: "ip-character-03", title: "\u7af9\u7075 Bamboo Panda", category: "\u7af9\u7075 \u00b7 \u4ed9\u7c7b\u4e0e\u7af9", subtitle: "CHARACTER DESIGN / 2026", slug: "ip-character-03", image: getImagePath('/images/portfolio/ip-character/ip-character-03.webp'), width: 1600, height: 900, alt: "\u7af9\u7075\u718a\u732b\u62ff\u7af9\u6756\u7684 AIGC \u89d2\u8272\u4e09\u89c6\u56fe", tags: ["Character", "VI Brand"], description: "\u7af9\u7075\u00b7\u4ed9\u4e0e\u7af9\u5143\u7d20\uff0c\u7531\u201c\u70d8\u70d8\u00b7\u70d8\u00b7\u9ed1\u718a\u732b\u201d\u62b5\u8fbe\u7684\u53ef\u7231\u4e0e\u91ce\u6027\u3002" },
    { id: "ip-character-04", title: "\u8d64\u9704 Crimson General", category: "\u8d64\u9704 \u00b7 \u864e\u5175\u5c06\u9886", subtitle: "CHARACTER DESIGN / 2026", slug: "ip-character-04", image: getImagePath('/images/portfolio/ip-character/ip-character-04.webp'), width: 1600, height: 900, alt: "\u8d64\u9704\u5c06\u9886\u626c\u67aa\u9a91\u864e\u7684 AIGC \u89d2\u8272\u4e09\u89c6\u56fe", tags: ["Character", "VI Brand"], description: "\u8d64\u9704\u864e\u5c06\u00b7\u626a\u67aa\u9521\u9510\u00b7\u51b7\u9177\u70ab\u70c8\uff0c\u4ee5\u53e4\u98ce\u7ec6\u8282\u91cd\u9020\u4e2d\u5f0f\u5947\u8df3\u4e0e\u5175\u9a6c\u3002" },
    { id: "ip-character-05", title: "\u7d2b\u68a6 Lilac Dream", category: "\u7d2b\u68a6 \u00b7 \u62a4\u591c\u5e7d\u7075", subtitle: "CHARACTER DESIGN / 2026", slug: "ip-character-05", image: getImagePath('/images/portfolio/ip-character/ip-character-05.webp'), width: 1600, height: 900, alt: "\u7d2b\u68a6\u68a6\u5e7d\u7075\u5c0f\u59d0\u7684 AIGC \u89d2\u8272\u4e09\u89c6\u56fe", tags: ["Character", "VI Brand"], description: "\u7d2b\u68a6\u5c11\u5973\u00b7\u62a4\u591c\u8272\u00b7\u6e29\u67d4\u8ff7\u4eba\u00b7\u4ee5\u6d45\u7d2b\u8272\u8c31\u4e0e\u68a6\u5e7d\u8d28\u611f\u7ec4\u6210\u7684\u539f\u521b IP\u3002" },
    { id: "ip-character-06", title: "\u9752\u7384 Azure Scholar", category: "\u9752\u7384 \u00b7 \u4e1c\u65b9\u4e66\u751f", subtitle: "CHARACTER DESIGN / 2026", slug: "ip-character-06", image: getImagePath('/images/portfolio/ip-character/ip-character-06.webp'), width: 1600, height: 900, alt: "\u9752\u7384\u4e1c\u65b9\u4e66\u751f\u62ff\u624b\u673a\u7684 AIGC \u89d2\u8272\u4e09\u89c6\u56fe", tags: ["Character", "VI Brand"], description: "\u9752\u7384\u00b7\u4e1c\u65b9\u4e66\u751f\u4e0e\u9f99\u7075\u00b7\u4ee5\u9ec4\u9752\u914d\u8272\u4e0e\u4e66\u5377\u8d28\u611f\u8425\u9020\u4ed9\u4e3a\u3002" },
  ],
  brand: [
    { id: "brand-visual-01", title: "11SH97早春新品", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-01", image: getImagePath('/images/portfolio/brand/brand-visual-01.webp'), width: 658, height: 304, alt: "11SH97 春季早春新品电商 banner：灰色上衣与造型示范", tags: ["服装电商", "Fashion"], description: "11SH97 春季早春新品上线，粉色主调的电商首页 banner，集合模特、字体与 CTA 按钮于一体。" },
    { id: "brand-visual-02", title: "食品级硅胶奶瓶", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-02", image: getImagePath('/images/portfolio/brand/brand-visual-02.webp'), width: 658, height: 370, alt: "食品级硅胶奶瓶电商 banner：全场满 199 减 30", tags: ["母婴用品", "E-commerce"], description: "蓝色调性的母婴用品电商 banner，以胶瓶三件套为主体，附以中英双语字体与优惠信息。" },
    { id: "brand-visual-03", title: "春夏换新 大牌直降", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-03", image: getImagePath('/images/portfolio/brand/brand-visual-03.webp'), width: 658, height: 370, alt: "春夏换新运动鞋鞋电商 banner：全场满 399 减 40", tags: ["运动鞋类", "Sportswear"], description: "紫色调性的运动鞋类促销 banner，以点线灯光与字体组合营造动感节奏。" },
    { id: "brand-visual-04", title: "忽而一夏", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-04", image: getImagePath('/images/portfolio/brand/brand-visual-04.webp'), width: 658, height: 370, alt: "忽而一夏女装电商 banner：SUDDENLY SUMMER 上新第 6 波", tags: ["时装电商", "Summer"], description: "明黄调性的女装上新 banner，以带草帽模特与文案组合营造治愈气息。" },
    { id: "brand-visual-05", title: "专注高端品质装修", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-05", image: getImagePath('/images/portfolio/brand/brand-visual-05.webp'), width: 658, height: 280, alt: "专注高端品质装修品牌 banner：区别工艺细节诠释精装品味", tags: ["家居装修", "Interior"], description: "高端装修品牌 banner，以玻璃发光背景与客厅实景提升品牌质感。" },
    { id: "brand-visual-06", title: "天生绝配", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-06", image: getImagePath('/images/portfolio/brand/brand-visual-06.webp'), width: 658, height: 370, alt: "天生绝配奶茶饮品电商 banner：有颜更有料", tags: ["奶茶饮品", "F&B"], description: "粉色调性的奶茶饮品电商 banner，以两杯产品为主体营造甜美节奏。" },
    { id: "brand-visual-07", title: "30% Off In-Store", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-07", image: getImagePath('/images/portfolio/brand/brand-visual-07.webp'), width: 658, height: 344, alt: "30% Off In-Store 家居绿植门店促销 banner：9am-9pm Mon-Sun", tags: ["家居绿植", "Lifestyle"], description: "圣诞节主题的门店促销 banner，以玻璃瓶与多肉植物塑造云静氛围。" },
    { id: "brand-visual-08", title: "三亚浪一夏", subtitle: "BRAND VISUAL / 2026", slug: "brand-visual-08", image: getImagePath('/images/portfolio/brand/brand-visual-08.webp'), width: 658, height: 366, alt: "三亚浪一夏旅游品牌 banner：9 天 3 夜豪华大餐享不停", tags: ["旅游品牌", "Travel"], description: "旅游品牌主题 banner，以海滩背景、手绘插画与五个人物营造夏日活力。" },
  ],
  symbol: [
    { id: "super-type-01", title: superTypeTitle, type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-01", image: getImagePath('/images/portfolio/type-symbol/super-type-01.webp'), width: 1024, height: 1536, alt: "\u8d85\u7ea7\u5b57\u4f53\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Type"], description: "" },
    { id: "super-type-02", title: superTypeTitle, type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-02", image: getImagePath('/images/portfolio/type-symbol/super-type-02.webp'), width: 1536, height: 1024, alt: "\u8d85\u7ea7\u5b57\u4f53\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Type"], description: "" },
    { id: "super-type-03", title: superTypeTitle, type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-03", image: getImagePath('/images/portfolio/type-symbol/super-type-03.webp'), width: 1024, height: 1536, alt: "\u8d85\u7ea7\u5b57\u4f53\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Type"], description: "" },
    { id: "super-type-04", title: superTypeTitle, type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-04", image: getImagePath('/images/portfolio/type-symbol/super-type-04.webp'), width: 1536, height: 1024, alt: "\u8d85\u7ea7\u5b57\u4f53\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Type"], description: "" },
    { id: "super-type-05", title: superTypeTitle, type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-05", image: getImagePath('/images/portfolio/type-symbol/super-type-05.webp'), width: 1254, height: 1254, alt: "\u8d85\u7ea7\u5b57\u4f53\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Type"], description: "" },
    { id: "super-type-06", title: superTypeTitle, type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-06", image: getImagePath('/images/portfolio/type-symbol/super-type-06.webp'), width: 1536, height: 1024, alt: "\u8d85\u7ea7\u5b57\u4f53\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Type"], description: "" },
    { id: "super-type-07", title: "\u4e1c\u65b9\u7985\u97f5", type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-07", image: getImagePath('/images/portfolio/type-symbol/super-type-07.webp'), width: 1254, height: 1254, alt: "\u9ed1\u5e95\u91d1\u5b57\u53e4\u98ce\u4e66\u6cd5\u5b57\u4f53\u4e1c\u65b9", tags: ["Super Type", "\u53e4\u98ce\u4e66\u6cd5"], description: "\u9ed1\u5e95\u91d1\u5b57\u53e4\u98ce\u4e66\u6cd5\u5b57\u4f53\uff0c\u96c6\u7ecf\u5178\u96d5\u521b\u4e0e\u73b0\u4ee3\u8bbe\u8ba1\u4e8e\u4e00\u4f53\u3002" },
    { id: "super-type-08", title: "\u5c71\u6cb3\u6c14\u8c61", type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-08", image: getImagePath('/images/portfolio/type-symbol/super-type-08.webp'), width: 1254, height: 1254, alt: "\u7ea2\u5e95\u91d1\u5b57\u4e66\u6cd5\u5b57\u4f53\u5c71\u6cb3", tags: ["Super Type", "\u56fd\u98ce\u4e66\u6cd5"], description: "\u4ee5\u7ea2\u91d1\u5bf9\u6bd4\u7684\u6c14\u52bf\u5851\u9020\u5c71\u6cb3\uff0c\u8c8c\u4ee5\u7b14\u52bf\u4e0e\u91d1\u5c5e\u8d28\u611f\u3002" },
    { id: "super-type-09", title: "\u7965\u4e91\u5409\u745e", type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-09", image: getImagePath('/images/portfolio/type-symbol/super-type-09.webp'), width: 1254, height: 1254, alt: "\u9752\u7389\u6d6e\u96d5\u5b57\u4f53\u7965\u4e91", tags: ["Super Type", "3D \u6d6e\u96d5"], description: "\u9752\u7389\u8d28\u611f\u7684\u4e09\u7ef4\u6d6e\u96d5\u5b57\u4f53\uff0c\u8d34\u5408\u4e91\u7eb9\u4e0e\u91d1\u8fb9\u8003\u5ba1\u3002" },
    { id: "super-type-10", title: "\u98ce\u534e\u6b63\u8302", type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-10", image: getImagePath('/images/portfolio/type-symbol/super-type-10.webp'), width: 1254, height: 1254, alt: "\u6c34\u58a8\u98ce\u683c\u4e66\u6cd5\u5b57\u4f53\u98ce\u534e", tags: ["Super Type", "\u6c34\u58a8\u4e66\u6cd5"], description: "\u6c34\u58a8\u4e0e\u91d1\u7c89\u8d28\u611f\u76f8\u878d\u7684\u4e66\u6cd5\u5b57\u4f53\u3002" },
    { id: "super-type-11", title: "\u56fd\u6f6e\u5f53\u9053", type: "type", category: typeSymbolTitle, subtitle: "SUPER TYPE / 2026", slug: "super-type-11", image: getImagePath('/images/portfolio/type-symbol/super-type-11.webp'), width: 1254, height: 1254, alt: "\u9ed1\u91d1\u7acb\u4f53\u5b57\u56fd\u6f6e", tags: ["Super Type", "\u56fd\u6f6e\u7acb\u4f53"], description: "\u9ed1\u91d1\u7acb\u4f53\u5b57\u4e0e\u706b\u7f0e\u5143\u7d20\u7684\u5f3a\u70c8\u89c6\u89c9\u51b2\u51fb\u3002" },
    { id: "super-symbol-01", title: superSymbolTitle, type: "symbol", category: typeSymbolTitle, subtitle: "SUPER SYMBOL / 2026", slug: "super-symbol-01", image: getImagePath('/images/portfolio/type-symbol/super-symbol-01.webp'), width: 1800, height: 1800, alt: "\u8d85\u7ea7\u7b26\u53f7\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Symbol"], description: "" },
    { id: "super-symbol-02", title: superSymbolTitle, type: "symbol", category: typeSymbolTitle, subtitle: "SUPER SYMBOL / 2026", slug: "super-symbol-02", image: getImagePath('/images/portfolio/type-symbol/super-symbol-02.webp'), width: 1200, height: 1800, alt: "\u8d85\u7ea7\u7b26\u53f7\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Symbol"], description: "" },
    { id: "super-symbol-03", title: superSymbolTitle, type: "symbol", category: typeSymbolTitle, subtitle: "SUPER SYMBOL / 2026", slug: "super-symbol-03", image: getImagePath('/images/portfolio/type-symbol/super-symbol-03.webp'), width: 1011, height: 1800, alt: "\u8d85\u7ea7\u7b26\u53f7\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Symbol"], description: "" },
    { id: "super-symbol-04", title: superSymbolTitle, type: "symbol", category: typeSymbolTitle, subtitle: "SUPER SYMBOL / 2026", slug: "super-symbol-04", image: getImagePath('/images/portfolio/type-symbol/super-symbol-04.webp'), width: 1011, height: 1800, alt: "\u8d85\u7ea7\u7b26\u53f7\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Symbol"], description: "" },
    { id: "super-symbol-05", title: superSymbolTitle, type: "symbol", category: typeSymbolTitle, subtitle: "SUPER SYMBOL / 2026", slug: "super-symbol-05", image: getImagePath('/images/portfolio/type-symbol/super-symbol-05.webp'), width: 1200, height: 1800, alt: "\u8d85\u7ea7\u7b26\u53f7\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Symbol"], description: "" },
    { id: "super-symbol-06", title: superSymbolTitle, type: "symbol", category: typeSymbolTitle, subtitle: "SUPER SYMBOL / 2026", slug: "super-symbol-06", image: getImagePath('/images/portfolio/type-symbol/super-symbol-06.webp'), width: 1200, height: 1800, alt: "\u8d85\u7ea7\u7b26\u53f7\u8bbe\u8ba1\u4f5c\u54c1", tags: ["Super Symbol"], description: "" },
  ],
  poster: [
    { title: "治愈香薹蜡烛", subtitle: "POSTER DESIGN / 2026", slug: "poster-19", image: getImagePath('/images/portfolio/poster/poster-19.webp'), width: 1024, height: 1536, alt: "治愈香薹蜡烛产品海报：AROMA NEST 天然植物蜡蜡烛", tags: ["Poster", "Home"], description: "AROMA NEST 天然植物蜡蜡烛，配以品质推荐徽章与卖点图标。" },
    { title: "奢养水乳套装", subtitle: "POSTER DESIGN / 2026", slug: "poster-20", image: getImagePath('/images/portfolio/poster/poster-20.webp'), width: 1086, height: 1448, alt: "奢养水乳套装产品海报：LUMÉA 补水保湿护肤套装", tags: ["Poster", "Beauty"], description: "LUMÉA 补水保湿 / 滋润修护 / 焕亮肤色护肤套装，主图三位一体组合摆拍。" },
    { title: "轻盈旅行箱", subtitle: "POSTER DESIGN / 2026", slug: "poster-21", image: getImagePath('/images/portfolio/poster/poster-21.webp'), width: 1024, height: 1536, alt: "轻盈旅行箱产品海报：VOYAGER 静音万向轮旅行箱", tags: ["Poster", "Travel"], description: "VOYAGER 静音万向轮、防刮外壳、超大容量旅行箱，机场场景主图。" },
    { title: "鎝金夜语香水", subtitle: "POSTER DESIGN / 2026", slug: "poster-22", image: getImagePath('/images/portfolio/poster/poster-22.webp'), width: 1086, height: 1448, alt: "鎝金夜语香水产品海报：NOIR ÉTOILE 高端馅郁花木香水", tags: ["Poster", "Beauty"], description: "NOIR ÉTOILE 高端馅郁花木香水，深色奢华背景与瓶身细节特写。" },
    { title: "丝绒雾面口红", subtitle: "POSTER DESIGN / 2026", slug: "poster-23", image: getImagePath('/images/portfolio/poster/poster-23.webp'), width: 1086, height: 1448, alt: "丝绒雾面口红产品海报：VELORA 高级显色口红", tags: ["Poster", "Beauty"], description: "VELORA 高级显色、轻盈顺滑口红，配以粉色丝绸背景与色号推荐徽章。" },
    { title: "不锈钢锋利菜刀", subtitle: "POSTER DESIGN / 2026", slug: "poster-24", image: getImagePath('/images/portfolio/poster/poster-24.webp'), width: 1086, height: 1448, alt: "不锈钢锋利菜刀产品海报：EDGE PRO 主厨刀", tags: ["Poster", "Kitchen"], description: "EDGE PRO 锋利持久、轻松切割主厨刀，深色厨房背景搭配食材与砸板。" },
    { title: "家用咖啡机", subtitle: "POSTER DESIGN / 2026", slug: "poster-25", image: getImagePath('/images/portfolio/poster/poster-25.webp'), width: 1086, height: 1448, alt: "家用咖啡机产品海报：BREW ONE 浓缩咖啡机", tags: ["Poster", "Kitchen"], description: "BREW ONE 香醇荐取、一键享受浓缩咖啡机，咖啡飞溅动态主图。" },
    { title: "智能运动手表", subtitle: "POSTER DESIGN / 2026", slug: "poster-26", image: getImagePath('/images/portfolio/poster/poster-26.webp'), width: 1086, height: 1448, alt: "智能运动手表产品海报：VITA TIME 心率监测", tags: ["Poster", "Tech"], description: "VITA TIME 心率监测、防水设计、长效续航智能手表，户外运动场景。" },
    { title: "高蛋白冻干猫粮", subtitle: "POSTER DESIGN / 2026", slug: "poster-27", image: getImagePath('/images/portfolio/poster/poster-27.webp'), width: 1024, height: 1536, alt: "高蛋白冻干猫粮产品海报：PAW FEAST 全价猫粮", tags: ["Poster", "Pets"], description: "PAW FEAST 95% 动物蛋白、哈护胃肠全价猫粮，配以萌猫与产品组合。" },
    { title: "声波电动牙刷", subtitle: "POSTER DESIGN / 2026", slug: "poster-28", image: getImagePath('/images/portfolio/poster/poster-28.webp'), width: 1024, height: 1536, alt: "声波电动牙刷产品海报：PURE SMILE 电动牙刷", tags: ["Poster", "Beauty"], description: "PURE SMILE 高频震动、智能计时、IPX7 防水电动牙刷，浅绿清新风格。" },
    { title: "便携蓝牙音箱", subtitle: "POSTER DESIGN / 2026", slug: "poster-29", image: getImagePath('/images/portfolio/poster/poster-29.webp'), width: 1024, height: 1536, alt: "便携蓝牙音箱产品海报：SOUND MATE 蓝牙音箱", tags: ["Poster", "Tech"], description: "SOUND MATE 360° 环绕、长效续航、蓝牙 5.3 黑色音箱，蓝色科技动效背景。" },
    { title: "轻弹跑鞋", subtitle: "POSTER DESIGN / 2026", slug: "poster-30", image: getImagePath('/images/portfolio/poster/poster-30.webp'), width: 1024, height: 1536, alt: "轻弹跑鞋产品海报：RUN MAX 运动跑鞋", tags: ["Poster", "Sports"], description: "RUN MAX 轻盈回弹、自在开跑运动跑鞋，黑红赛道动感激烈风格。" },
    { title: "便携榨汁杯", subtitle: "POSTER DESIGN / 2026", slug: "poster-31", image: getImagePath('/images/portfolio/poster/poster-31.webp'), width: 1024, height: 1536, alt: "便携榨汁杯产品海报：FRESH GO 榨汁杯", tags: ["Poster", "Kitchen"], description: "FRESH GO 一键启动、强劲刀头、轻工便携榨汁杯，奇异果与青柠夏日主题。" },
    { title: "明前龙井茶", subtitle: "POSTER DESIGN / 2026", slug: "poster-32", image: getImagePath('/images/portfolio/poster/poster-32.webp'), width: 1086, height: 1448, alt: "明前龙井茶产品海报：青雾茶舍 绿茶礼盒", tags: ["Poster", "Food"], description: "青雾茶舍 明前头采、鲜爵回甘、匠制好茶绿茶礼盒，竹影山水背景。" },
    { title: "深层筋膜枪", subtitle: "POSTER DESIGN / 2026", slug: "poster-33", image: getImagePath('/images/portfolio/poster/poster-33.webp'), width: 1024, height: 1536, alt: "深层筋膜枪产品海报：POWER PULSE 健身筋膜枪", tags: ["Poster", "Sports"], description: "POWER PULSE 放松肌群、快速恢复健身筋膜枪，黑橙运动风格。" },
    { title: "智能降噪无线耳机", subtitle: "POSTER DESIGN / 2026", slug: "poster-34", image: getImagePath('/images/portfolio/poster/poster-34.webp'), width: 1086, height: 1448, alt: "智能降噪无线耳机产品海报：NOVA SOUND 蓝牙耳机", tags: ["Poster", "Tech"], description: "NOVA SOUND 沉浸音质、低延迟体验蓝牙耳机，深蓝科技光效。" },
    { title: "清透防晒霜", subtitle: "POSTER DESIGN / 2026", slug: "poster-35", image: getImagePath('/images/portfolio/poster/poster-35.webp'), width: 1024, height: 1536, alt: "清透防晒霜产品海报：SUN VEIL SPF50+ 防晒霜", tags: ["Poster", "Beauty"], description: "SUN VEIL 高倍防护、轻薄不黏 SPF50+ PA++++ 防晒霜，海边柠檬主题。" },
    { title: "机械键盘", subtitle: "POSTER DESIGN / 2026", slug: "poster-36", image: getImagePath('/images/portfolio/poster/poster-36.webp'), width: 1024, height: 1536, alt: "机械键盘产品海报：KEY STORM RGB 背光键盘", tags: ["Poster", "Tech"], description: "KEY STORM 畅快敲击、电竞手感 RGB 背光键盘，赛博朋克紫粉风格。" },
    { title: "负离子吹风机", subtitle: "POSTER DESIGN / 2026", slug: "poster-37", image: getImagePath('/images/portfolio/poster/poster-37.webp'), width: 1086, height: 1448, alt: "负离子吹风机产品海报：AERO GLOW 紫色吹风机", tags: ["Poster", "Beauty"], description: "AERO GLOW 快速干发、柔顺亮泽紫色吹风机，深色展厅灯光风格。" },
    { title: "元气气泡橙饮", subtitle: "POSTER DESIGN / 2026", slug: "poster-38", image: getImagePath('/images/portfolio/poster/poster-38.webp'), width: 1086, height: 1448, alt: "元气气泡橙饮产品海报：SUN BURST 橙味汽水", tags: ["Poster", "Beverage"], description: "SUN BURST 清爵气泡、果香爆发橙味汽水，橙黄色调夏日活力。" },
  ],
  ecommerce: [
    { id: "ecommerce-main-01", title: ecommerceMainTitle, category: "APP\u754c\u9762", subtitle: "APP DESIGN / 2026", slug: "ecommerce-main-01", image: getImagePath('/images/portfolio/ecommerce-main/ecommerce-main-01.webp'), width: 904, height: 1740, alt: "APP\u8bbe\u8ba1\u4f5c\u54c1 01", tags: ["APP Design"], description: "" },
    { id: "ecommerce-main-02", title: ecommerceMainTitle, category: "APP\u754c\u9762", subtitle: "APP DESIGN / 2026", slug: "ecommerce-main-02", image: getImagePath('/images/portfolio/ecommerce-main/ecommerce-main-02.webp'), width: 904, height: 1740, alt: "APP\u8bbe\u8ba1\u4f5c\u54c1 02", tags: ["APP Design"], description: "" },
    { id: "ecommerce-main-03", title: ecommerceMainTitle, category: "APP\u754c\u9762", subtitle: "APP DESIGN / 2026", slug: "ecommerce-main-03", image: getImagePath('/images/portfolio/ecommerce-main/ecommerce-main-03.webp'), width: 904, height: 1740, alt: "APP\u8bbe\u8ba1\u4f5c\u54c1 03", tags: ["APP Design"], description: "" },
    { id: "ecommerce-main-04", title: ecommerceMainTitle, category: "APP\u754c\u9762", subtitle: "APP DESIGN / 2026", slug: "ecommerce-main-04", image: getImagePath('/images/portfolio/ecommerce-main/ecommerce-main-04.webp'), width: 904, height: 1740, alt: "APP\u8bbe\u8ba1\u4f5c\u54c1 04", tags: ["APP Design"], description: "" },
    { id: "ecommerce-main-05", title: ecommerceMainTitle, category: "APP\u754c\u9762", subtitle: "APP DESIGN / 2026", slug: "ecommerce-main-05", image: getImagePath('/images/portfolio/ecommerce-main/ecommerce-main-05.webp'), width: 904, height: 1740, alt: "APP\u8bbe\u8ba1\u4f5c\u54c1 05", tags: ["APP Design"], description: "" },
    { id: "ecommerce-main-06", title: ecommerceMainTitle, category: "APP\u754c\u9762", subtitle: "APP DESIGN / 2026", slug: "ecommerce-main-06", image: getImagePath('/images/portfolio/ecommerce-main/ecommerce-main-06.webp'), width: 904, height: 1740, alt: "APP\u8bbe\u8ba1\u4f5c\u54c1 06", tags: ["APP Design"], description: "" },
    { id: "ecommerce-main-07", title: ecommerceMainTitle, category: "APP\u754c\u9762", subtitle: "APP DESIGN / 2026", slug: "ecommerce-main-07", image: getImagePath('/images/portfolio/ecommerce-main/ecommerce-main-07.webp'), width: 904, height: 1740, alt: "APP\u8bbe\u8ba1\u4f5c\u54c1 07", tags: ["APP Design"], description: "" },
  ],
  icon: [
    { id: "icon-design-01", title: iconTitle, category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-01", image: getImagePath('/images/portfolio/icons/icon-design-01.webp'), width: 1536, height: 1024, alt: "\u56fe\u6807\u8bbe\u8ba1\u4f5c\u54c1\uff1a\u91d1\u5c5e\u5fbd\u7ae0\u8d28\u611f12\u679a\u56fe\u6807\u5408\u96c6", tags: ["Icon Design", "Metal"], description: "" },
    { id: "icon-design-02", title: iconTitle, category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-02", image: getImagePath('/images/portfolio/icons/icon-design-02.webp'), width: 1536, height: 1024, alt: "\u56fe\u6807\u8bbe\u8ba1\u4f5c\u54c1\uff1a\u5f69\u8272\u900f\u660e\u6c34\u6676\u8d28\u611f12\u679a\u56fe\u6807\u5408\u96c6", tags: ["Icon Design", "Glass"], description: "" },
    { id: "icon-design-03", title: iconTitle, category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-03", image: getImagePath('/images/portfolio/icons/icon-design-03.webp'), width: 1536, height: 1024, alt: "\u56fe\u6807\u8bbe\u8ba1\u4f5c\u54c1\uff1a\u51b0\u84dd\u6c34\u6676\u6446\u4ef6\u8d28\u611f12\u679a\u56fe\u6807\u5408\u96c6", tags: ["Icon Design", "Crystal"], description: "" },
    { id: "icon-design-04", title: iconTitle, category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-04", image: getImagePath('/images/portfolio/icons/icon-design-04.webp'), width: 1536, height: 1024, alt: "\u56fe\u6807\u8bbe\u8ba1\u4f5c\u54c1\uff1a\u67d4\u8f6f\u6bdb\u7ed2\u8d28\u611f12\u679a\u56fe\u6807\u5408\u96c6", tags: ["Icon Design", "Plush"], description: "" },
    { id: "icon-design-05", title: iconTitle, category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-05", image: getImagePath('/images/portfolio/icons/icon-design-05.webp'), width: 1536, height: 1024, alt: "\u56fe\u6807\u8bbe\u8ba1\u4f5c\u54c1\uff1a\u6d45\u8272\u6bdb\u73bb\u7483\u8d28\u611f12\u679a\u56fe\u6807\u5408\u96c6", tags: ["Icon Design", "Frosted Glass"], description: "" },
    { id: "icon-design-06", title: iconTitle, category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-06", image: getImagePath('/images/portfolio/icons/icon-design-06.webp'), width: 1536, height: 1024, alt: "\u56fe\u6807\u8bbe\u8ba1\u4f5c\u54c1\uff1a\u6676\u84dd\u73bb\u7483\u79d1\u6280\u8d28\u611f12\u679a\u56fe\u6807\u5408\u96c6", tags: ["Icon Design", "Crystal Blue"], description: "" },
    { id: "icon-design-07", title: "\u73a9\u8da3\u6d41\u884c\u56fe\u6807", category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-07", image: getImagePath('/images/portfolio/icons/icon-design-07.webp'), width: 1448, height: 1086, alt: "\u5f69\u8272\u53ef\u7231\u7684 3D AI \u4ea7\u54c1\u56fe\u6807\u8bbe\u8ba1\u5c55\u793a", tags: ["Icon Design", "Playful 3D"], description: "\u660e\u4eae\u53cb\u597d\u7684 3D \u56fe\u6807\u7cfb\u5217\uff0c\u4ee5\u8f7b\u677e\u7684\u8272\u5f69\u548c\u5706\u6da6\u6750\u8d28\u8868\u73b0 AI \u4ea7\u54c1\u4e2d\u7684\u521b\u610f\u3001\u667a\u80fd\u4e0e\u4ea4\u4e92\u3002" },
    { id: "icon-design-08", title: "\u672a\u6765\u6c34\u6676\u56fe\u6807", category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-08", image: getImagePath('/images/portfolio/icons/icon-design-08.webp'), width: 1448, height: 1086, alt: "\u84dd\u7d2b\u8272\u672a\u6765\u6c34\u6676 AI \u56fe\u6807\u8bbe\u8ba1\u5c55\u793a", tags: ["Icon Design", "Future Crystal"], description: "\u4ee5\u900f\u660e\u6c34\u6676\u4e0e\u51b0\u84dd\u5149\u5f71\u6784\u5efa\u7684\u672a\u6765\u56fe\u6807\u8bed\u8a00\uff0c\u5c55\u73b0\u4e00\u5957\u9ad8\u7aef AI \u4ea7\u54c1\u89c6\u89c9\u7ec4\u4ef6\u3002" },
    { id: "icon-design-09", title: "\u6db2\u6001\u91d1\u5c5e\u56fe\u6807", category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-09", image: getImagePath('/images/portfolio/icons/icon-design-09.webp'), width: 1448, height: 1086, alt: "\u9ed1\u5e95\u6db2\u6001\u91d1\u5c5e AI \u56fe\u6807\u96c6\u5408", tags: ["Icon Design", "Liquid Chrome"], description: "\u5728\u9ed1\u8272\u821e\u53f0\u4e0a\u5c55\u5f00\u7684\u6db2\u6001\u91d1\u5c5e\u56fe\u6807\u7cfb\u5217\uff0c\u7528\u955c\u9762\u53cd\u5c04\u4e0e\u7d2b\u84dd\u9ad8\u5149\u6536\u7d27\u8d28\u611f\u3002" },
    { id: "icon-design-10", title: "\u7eb8\u827a\u526a\u7eb8\u56fe\u6807", category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-10", image: getImagePath('/images/portfolio/icons/icon-design-10.webp'), width: 1448, height: 1086, alt: "\u5f69\u8272\u7eb8\u827a\u526a\u7eb8 AI \u56fe\u6807\u96c6\u5408", tags: ["Icon Design", "Paper Cut"], description: "\u7528\u5206\u5c42\u7eb8\u6750\u3001\u67d4\u548c\u9634\u5f71\u4e0e\u4e30\u5bcc\u8272\u5757\u5851\u9020\u7684\u56fe\u6807\u7cfb\u5217\uff0c\u5177\u6709\u4eb2\u548c\u529b\u4e0e\u624b\u4f5c\u6e29\u5ea6\u3002" },
    { id: "icon-design-11", title: "\u8f6f\u840c\u7c98\u571f\u56fe\u6807", category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-11", image: getImagePath('/images/portfolio/icons/icon-design-11.webp'), width: 1448, height: 1086, alt: "\u67d4\u8f6f\u53ef\u7231\u7684\u7c98\u571f 3D AI \u56fe\u6807\u96c6\u5408", tags: ["Icon Design", "Soft Clay"], description: "\u8f6f\u7c98\u571f\u6750\u8d28\u4e0e\u7cd6\u679c\u8272\u7684\u8f7b\u677e\u56fe\u6807\u7cfb\u7edf\uff0c\u4e3a\u529f\u80fd\u4e0e\u54c1\u724c\u573a\u666f\u6ce8\u5165\u53ef\u7231\u7684\u4ea4\u4e92\u8bed\u6c14\u3002" },
    { id: "icon-design-12", title: "\u6676\u4f53\u79d1\u6280\u56fe\u6807", category: iconTitle, subtitle: "ICON DESIGN / 2026", slug: "icon-design-12", image: getImagePath('/images/portfolio/icons/icon-design-12.webp'), width: 1448, height: 1086, alt: "\u51b0\u84dd\u6676\u4f53\u79d1\u6280 AI \u56fe\u6807\u96c6\u5408", tags: ["Icon Design", "Crystal Tech"], description: "\u5c06\u51e0\u4f55\u6676\u4f53\u3001\u900f\u660e\u6750\u8d28\u548c\u79d1\u6280\u7ebf\u7d22\u7ed3\u5408\uff0c\u6253\u9020\u6e05\u6670\u800c\u5145\u6ee1\u672a\u6765\u611f\u7684 AI \u56fe\u6807\u8bed\u8a00\u3002" },
  ],
};

export const videoProjects = [
  { title: "\u8dd1\u8f66", description: "\u9ec4\u660f\u8d5b\u8f66\u573a\u666f\uff0c\u9ad8\u6027\u80fd\u8dd1\u8f66\u9ad8\u901f\u6f02\u79fb\uff0c\u8f6e\u80ce\u5377\u8d77\u6d53\u70c8\u70df\u96fe\uff0c\u6781\u901f\u7a7f\u8d8a\u5f2f\u9053\uff0c\u7535\u5f71\u7ea7\u8fd0\u955c\uff0c\u70ed\u8840\u7ade\u901f\u6c1b\u56f4\uff0c\u672a\u6765\u611fCG\u52a8\u753b\u98ce\u683c\uff0c\u5149\u5f71\u7ec6\u817b\uff0c\u753b\u9762\u9707\u64bc\u3002", cover: getImagePath('/images/portfolio/video/video-01.webp'), platform: "Bilibili", url: "https://www.bilibili.com/video/BV1XBgf6mEnu/" },
  { title: "\u5973\u88c5\u5e26\u8d27\u89c6\u9891", description: "AI\u751f\u6210\u5973\u88c5\u8425\u9500\u77ed\u89c6\u9891\uff0c\u6a21\u62df\u771f\u4eba\u6a21\u7279\u7a7f\u642d\u5c55\u793a\uff0c\u901a\u8fc7\u52a8\u6001\u8fd0\u955c\u3001\u670d\u9970\u7ec6\u8282\u6355\u6349\u4e0e\u573a\u666f\u878d\u5408\uff0c\u5448\u73b0\u9ad8\u7ea7\u65f6\u5c1a\u6c1b\u56f4\uff0c\u63d0\u5347\u5546\u54c1\u89c6\u89c9\u8868\u73b0\u529b\u3002", cover: getImagePath('/images/portfolio/video/video-02.webp'), platform: "Bilibili", url: "https://www.bilibili.com/video/BV15vgf6SEM7/" },
  { title: "诺娃行李箱TVC广告", description: "诺瓦行李箱商业广告场景，现代都市旅途氛围，箱体细节特写，流畅滑行展示，金属质感与高级光影结合，突出轻便、防护、容量与时尚设计。", cover: getImagePath('/images/portfolio/video/video-03.webp'), platform: "Bilibili", url: "https://www.bilibili.com/video/BV1Dwgf6GEvi/" },
  { title: "AI漫剧《白泽之契》预告片", description: "上古时期，天地间存在一种神秘力量——白泽之力。传说白泽能识天下妖邪，掌控天地秘闻，是守护人间的神兽。然而千年前，一场神魔大战后，白泽一族消失，人间妖邪再起，各大宗门为了争夺力量陷入纷争。", cover: getImagePath('/images/portfolio/video/video-04.webp'), platform: "Bilibili", url: "https://www.bilibili.com/video/BV1hFgf6CE5n/" },
  { title: "禁忌实验第一集", description: "第一集，未来世界。人类为了突破生命极限，建立秘密科研基地。科学家研发一种名为：“深渊基因”的未知生命能源。他们希望利用它：强化人体延长寿命创造超级战士但实验过程中发生意外。实验体失控。整个地下研究基地陷入灾难。", cover: getImagePath('/images/portfolio/video/video-05.webp'), platform: "Bilibili", url: "https://www.bilibili.com/video/BV1jhgf6pEnv/" },
  { title: "禁忌实验第二集", description: "第二集，未来世界。人类为了突破生命极限，建立秘密科研基地。科学家研发一种名为：“深渊基因”的未知生命能源。他们希望利用它：强化人体延长寿命创造超级战士但实验过程中发生意外。实验体失控。整个地下研究基地陷入灾难。", cover: getImagePath('/images/portfolio/video/video-06.webp'), platform: "Bilibili", url: "https://www.bilibili.com/video/BV1Vvgf6SE17/" },
  {
    title: "香水广告",
    description: "LOVE香水商业大片，晶莹瓶身特写，玫瑰花瓣飘落，柔光照射，液体流动质感，镜头缓慢推进，浪漫梦幻氛围，高端奢华香氛广告风格。",
    url: "https://www.bilibili.com/video/BV1nHgf6bESM/",
    cover: getImagePath('/images/portfolio/video/video-07.webp'),
    platform: "BILIBILI",
    duration: "0:16",
  },
  {
    title: "机甲",
    description: "公元2098年，地球爆发「机械灾变」。人工智能失控，全球城市被机械生命体占领，人类文明濒临毁灭。曾经辉煌的机甲军团全部覆灭，只剩下一台被封存百年的神秘机甲——「零号」。废土少女叶澜，在一次 scavenger 搜寻任务中意外唤醒零号机甲。所有人认为他只是一个普通拾荒者，却不知道他的身体里隐藏着与零号机甲匹配的特殊基因。随着机械兽不断进化，人类最后的避难城即将沦陷。叶澜驾驶最后一台机甲，从废墟中崛起，寻找失落的机甲核心，组建新的反抗军。但他逐渐发现：当年的机械灾难，并不是AI失控。而是人类自己制造的一场战争。",
    url: "https://www.bilibili.com/video/BV1exKt6DEyF/",
    cover: getImagePath('/images/portfolio/video/video-08.webp'),
    platform: "BILIBILI",
    duration: "1:32",
  },
  {
    title: "洗地机",
    platform: "BILIBILI",
    cover: getImagePath('/images/portfolio/video/video-09.webp'),
    url: "https://www.bilibili.com/video/BV1jHKt6WEJH/",
    description: "智能家居清洁场景，京东京造小虎鲸洗地机高效运行，吸拖洗一体化设计，轻松处理地面污渍，流畅移动搭配科技光影，展现便捷、智能、高品质生活体验。",
  },
];

export type VideoZone = {
  id: "manga" | "tvc";
  title: string;
  cn: string;
  category: string;
  description: string;
  cover: string;
  indices: number[];
};

export const videoZones: VideoZone[] = [
  {
    id: "manga",
    title: "AI MANGA",
    cn: "AI\u6f2b\u5267",
    category: "NARRATIVE / CINEMATIC / SERIES",
    description: "AI\u751f\u6210\u7684\u53d9\u4e8b\u77ed\u7247\u4e0e\u7cfb\u5217\u6f2b\u5267\uff0c\u63a2\u7d22\u7535\u5f71\u7ea7\u89c6\u89c9\u53d9\u4e8b\u7684\u8fb9\u754c\u3002",
    cover: getImagePath('/images/portfolio/video/video-04.webp'),
    indices: [0, 3, 4, 5, 7],
  },
  {
    id: "tvc",
    title: "TVC COMMERCIAL",
    cn: "TVC\u5e7f\u544a",
    category: "COMMERCIAL / PRODUCT / BRAND VIDEO",
    description: "\u5546\u4e1a\u5e7f\u544a\u4e0e\u4ea7\u54c1\u5ba3\u4f20\u89c6\u9891\uff0c\u878d\u5408\u54c1\u724c\u7b56\u7565\u4e0e\u89c6\u89c9\u521b\u610f\u3002",
    cover: getImagePath('/images/portfolio/video/video-03.webp'),
    indices: [1, 2, 6, 8],
  },
];

export const getVideoZone = (id: string) => videoZones.find((z) => z.id === id);

export const contacts = [
  { label: "GOOGLE EMAIL", value: "f2468629402@gmail.com", display: "f2468629402@gmail.com", href: "mailto:f2468629402@gmail.com", action: "OPEN MAIL" },
  { label: "QQ EMAIL", value: "2468629402@qq.com", display: "2468629402@qq.com", href: "mailto:2468629402@qq.com", action: "OPEN MAIL" },
  { label: "WECHAT", value: "f13310039786", display: "\u5fae\u4fe1\u8d26\u53f7\uff1af13310039786", href: "/contact/wechat", action: "QR / ACCOUNT" },
  { label: "XIAOHONGSHU", value: "5071744636", display: "\u5c0f\u7ea2\u4e66\u8d26\u53f7\uff1a5071744636", href: "https://www.xiaohongshu.com/search_result?keyword=5071744636", action: "OPEN LINK" },
  { label: "BILIBILI", value: "497110399", display: "Bilibili\u8d26\u53f7\uff1a497110399", href: "https://space.bilibili.com/497110399", action: "OPEN LINK" },
];

export const aboutContactProfile = {
  title: "\u5173\u4e8e\u6211",
  titleEn: "ABOUT ME",
  body: "\u6211\u662f\u4e00\u540d\u62e5\u67092\u5e74\u7ecf\u9a8c\u7684AIGC\u89c6\u89c9\u5185\u5bb9\u521b\u4f5c\u8005\uff0c\u4e13\u6ce8\u4e8eAI\u56fe\u7247\u751f\u6210\u3001\u77ed\u89c6\u9891\u5236\u4f5c\u4e0ePrompt\u4f18\u5316\u3002\u64c5\u957f\u7535\u5546\u4e3b\u56fe\u3001\u8425\u9500\u6d77\u62a5\u3001\u5546\u54c1\u8be6\u60c5\u9875\u548c\u77ed\u89c6\u9891\u5206\u955c\uff0c\u80fd\u591f\u7ed3\u5408\u54c1\u724c\u4e0e\u5e73\u53f0\u9700\u6c42\uff0c\u9ad8\u6548\u5b8c\u6210\u5546\u4e1a\u89c6\u89c9\u7d20\u6750\u521b\u4f5c\u3002",
  skills: ["AIGC\u56fe\u7247\u751f\u6210", "AI\u89c6\u9891\u751f\u6210", "Prompt\u4f18\u5316", "LoRA\u8bad\u7ec3", "\u7535\u5546\u89c6\u89c9", "IP\u8bbe\u8ba1"],
};

export type AboutContactMethod = {
  id: "phone" | "wechat" | "qq" | "email" | "gmail";
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
};

export const aboutContactMethods: AboutContactMethod[] = [
  { id: "phone", label: "\u7535\u8bdd", value: "15682892647", copyable: true },
  { id: "wechat", label: "\u5fae\u4fe1", value: "f13310039786", copyable: true },
  { id: "qq", label: "QQ", value: "2468629402", copyable: true },
  { id: "email", label: "\u90ae\u7bb1", value: "2468629402@qq.com", copyable: true },
  { id: "gmail", label: "\u5907\u7528\u90ae\u7bb1", value: "f2468629402@gmail.com", copyable: true },
];

export const wechatQrImage = getImagePath('/images/contact/wechat-qr-new.webp');
