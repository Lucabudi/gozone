import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */ 

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/gozone/' : '',
  basePath: isProd ? '/gozone' : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'i.guim.co.uk'],
  },
};

module.exports = nextConfig;
