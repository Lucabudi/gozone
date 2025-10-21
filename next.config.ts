import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
        domains: ['images.unsplash.com', 'i.guim.co.uk'],
    },
};

export default nextConfig;
