const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** 给图片等静态资源路径加上 basePath 前缀（GitHub Pages 子路径部署需要） */
export function getImagePath(path: string): string {
  return `${BASE_PATH}${path}`;
}

export { BASE_PATH };
