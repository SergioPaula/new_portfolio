import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    browsersListForSwc: true,
  },
  trailingSlash: true,
  images: {
    remotePatterns: [],
    // Breakpoints cobrindo mobile (480), tablet (768/1024) e desktop largo (1440, 1920)
    // Gera um srcset mais granular, melhorando LCP em cada viewport
    deviceSizes: [480, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
  // Aliases em /projetos/[slug] → /projects/[slug]
  // Páginas "órfãs": acessíveis por URL direto, sem links públicos
  async redirects() {
    return [
      { source: "/projetos/devassa",      destination: "/projects/devassa",      permanent: false },
      { source: "/projetos/club-social",  destination: "/projects/club-social",  permanent: false },
      { source: "/projetos/divina-fatia", destination: "/projects/divina-fatia", permanent: false },
      { source: "/projetos/vivo",         destination: "/projects/vivo",         permanent: false },
    ];
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
