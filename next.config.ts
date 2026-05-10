import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [],
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
