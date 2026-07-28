import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ZPJ.web',
  assetPrefix: '/ZPJ.web',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/ZPJ.web',
  },
}

export default nextConfig
