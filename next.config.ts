import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/gozone',
  basePath: '/gozone',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'i.guim.co.uk'],
  },
};

export default nextConfig;