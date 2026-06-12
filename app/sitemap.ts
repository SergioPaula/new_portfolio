import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";

// URL base do site - usa a variável de ambiente ou o fallback padrão
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sergiopaula.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Páginas estáticas do site (com a barra / no final, respeitando next.config.ts)
  const staticRoutes = ["", "sobre/", "projetos/", "blog/"].map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Projetos dinâmicos (/projects/[slug]/)
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
