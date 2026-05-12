import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [],
    // Breakpoints cobrindo mobile (480), tablet (768/1024) e desktop largo (1440, 1920)
    // Gera um srcset mais granular, melhorando LCP em cada viewport
    deviceSizes: [480, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: '/portf_temp',
        destination: '/portf_temp/index.html',
      },
      {
        source: '/portf_temp/',
        destination: '/portf_temp/index.html',
      },
    ];
  },
};

export default nextConfig;
