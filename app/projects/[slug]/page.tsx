import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";
import ProjectGallery from "@/components/ProjectGallery";
import MoreProjects from "@/components/MoreProjects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sérgio Paula`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const isBrandIdentity = project.kind === "brand-identity";

  return (
    <main>
      <Navbar />

      {/* Hero: cover image + title + meta strip */}
      <ProjectHero project={project} />

      {/* Context (presentation) or Briefing (brand-identity) */}
      <ProjectSection
        label={project.context.label}
        paragraphs={project.context.paragraphs}
        image={project.context.image}
      />

      {/* Brand Strategy — brand-identity projects only */}
      {isBrandIdentity && project.brandStrategy && (
        <ProjectSection
          label={project.brandStrategy.label}
          paragraphs={project.brandStrategy.paragraphs}
          image={project.brandStrategy.image}
        />
      )}

      {/* Deliverables: label + description text + image grid */}
      <ProjectGallery
        label={project.deliverables.label}
        description={project.deliverables.content}
        images={project.deliverables.images}
        layout={project.deliverables.layout}
      />

      {/* Gallery: remaining visuals, no label */}
      {project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} layout="grid" />
      )}

      {/* Related projects strip */}
      <MoreProjects excludeSlugs={[project.slug]} />

      <Footer />
    </main>
  );
}
