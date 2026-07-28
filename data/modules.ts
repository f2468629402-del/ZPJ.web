import { getImagePath } from "@/lib/basePath";

export type Module = {
  id: string;
  number: string;
  title: string;
  cn: string;
  category: string;
  color: string;
  color2: string;
  image: string;
  count: string;
  description: string;
};

export const modules: Module[] = [
  { id: "video", number: "01", title: "VIDEO LAB", cn: "AI\u5f71\u50cf\u5b9e\u9a8c\u5ba4", category: "AI VIDEO / TVC / MOTION / COMMERCIAL", color: "#705cff", color2: "#be5cff", image: getImagePath('/images/video.png'), count: "\u221e", description: "\u63a2\u7d22\u751f\u6210\u5f0f\u5f71\u50cf\u3001\u52a8\u6001\u53d9\u4e8b\u4e0e\u5546\u4e1a\u89c6\u89c9\u7684\u8fb9\u754c\u3002" },
  { id: "ip", number: "02", title: "IP UNIVERSE", cn: "\u89d2\u8272\u521b\u9020\u5b87\u5b99", category: "CHARACTER / WORLD / IP DESIGN", color: "#a855f7", color2: "#f0abfc", image: getImagePath('/images/ip/lilac-dream.png'), count: "10", description: "\u4ece\u89d2\u8272\u6027\u683c\u5230\u4e16\u754c\u89c2\uff0c\u6784\u5efa\u53ef\u6301\u7eed\u751f\u957f\u7684\u89c6\u89c9\u8d44\u4ea7\u3002" },
  { id: "brand", number: "03", title: "BRAND SYSTEM", cn: "\u54c1\u724c\u89c6\u89c9\u7cfb\u7edf", category: "VI / BRAND / VISUAL IDENTITY", color: "#26dfbf", color2: "#13a997", image: getImagePath('/images/brand.png'), count: "08", description: "\u4ee5\u6e05\u6670\u7b56\u7565\u548c\u89c6\u89c9\u79e9\u5e8f\uff0c\u5efa\u7acb\u5b8c\u6574\u7684\u54c1\u724c\u8bc6\u522b\u4f53\u9a8c\u3002" },
  { id: "symbol", number: "04", title: "SUPER TYPE & SYMBOL", cn: "\u8d85\u7ea7\u5b57\u4f53\u4e0e\u8d85\u7ea7\u7b26\u53f7", category: "SUPER TYPE / SUPER SYMBOL / VISUAL LANGUAGE", color: "#a64cff", color2: "#7258ff", image: getImagePath('/images/symbol.png'), count: "\u221e", description: "\u6574\u5408\u521b\u610f\u5b57\u5f62\u3001\u6807\u9898\u5b57\u4e0e\u54c1\u724c\u8bb0\u5fc6\u7b26\u53f7\uff0c\u6784\u5efa\u5177\u6709\u8bc6\u522b\u529b\u548c\u5ef6\u5c55\u6027\u7684\u89c6\u89c9\u8bed\u8a00\u3002" },
  { id: "poster", number: "05", title: "VISUAL POSTER", cn: "\u5546\u4e1a\u89c6\u89c9\u6d77\u62a5", category: "BANNER / POSTER / CAMPAIGN VISUAL", color: "#ff4fa8", color2: "#fe376c", image: getImagePath('/images/poster.png'), count: "12", description: "\u7528\u5f3a\u53d9\u4e8b\u753b\u9762\u6355\u6349\u6ce8\u610f\u529b\uff0c\u8ba9\u5546\u4e1a\u4fe1\u606f\u62e5\u6709\u60c5\u7eea\u3002" },
  { id: "ecommerce", number: "06", title: "APP DESIGN", cn: "APP\u8bbe\u8ba1", category: "APP UI / UX / PRODUCT DESIGN", color: "#23b8ff", color2: "#2367ff", image: getImagePath('/images/ecommerce.webp'), count: "07", description: "\u805a\u7126\u7528\u6237\u4f53\u9a8c\u7684\u79fb\u52a8\u7aef APP \u754c\u9762\u8bbe\u8ba1\u4e0e\u4ea4\u4e92\u65b9\u6848\u3002" },
  { id: "icon", number: "07", title: "ICON DESIGN", cn: "\u56fe\u6807\u8bbe\u8ba1", category: "APP ICON / FUNCTION / BRAND ICON", color: "#ffc64a", color2: "#b67a16", image: getImagePath('/images/icon.png'), count: "12", description: "\u5728\u5c0f\u5c3a\u5ea6\u4e2d\u5e73\u8861\u8bc6\u522b\u3001\u79e9\u5e8f\u4e0e\u72ec\u7279\u54c1\u724c\u4e2a\u6027\u3002" },
  { id: "about", number: "08", title: "ABOUT ME", cn: "\u5173\u4e8e\u6211", category: "MY STORY / EXPERIENCE / SKILLS", color: "#83c6ff", color2: "#427dff", image: getImagePath('/images/about.png'), count: "05", description: "\u5173\u4e8e\u6211\u7684\u7ecf\u5386\u3001\u65b9\u6cd5\u3001\u80fd\u529b\u4e0e\u6301\u7eed\u63a2\u7d22\u7684\u65b9\u5411\u3002" },
  { id: "contact", number: "09", title: "CONTACT ME", cn: "\u8054\u7cfb\u6211", category: "EMAIL / SOCIAL / COOPERATION", color: "#3ce5ff", color2: "#ad54ff", image: getImagePath('/images/contact.png'), count: "\u2192", description: "\u6709\u4e00\u4e2a\u6709\u8da3\u7684\u60f3\u6cd5\uff1f\u6b22\u8fce\u804a\u804a\u9879\u76ee\u3001\u5408\u4f5c\u6216\u65b0\u53ef\u80fd\u3002" },
];

export const getModule = (id: string) => modules.find((item) => item.id === id);
