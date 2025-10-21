import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */ 
const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/gozone/', // Replace with your GitHub repo name
  basePath: '/gozone', // Replace with your GitHub repo name
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'i.guim.co.uk'],
  },
};

export default nextConfig;
