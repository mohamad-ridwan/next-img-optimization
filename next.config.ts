import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // path: '**',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'http',
        hostname: '**'
      }
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ['image/webp']
  }
};

export default nextConfig;
