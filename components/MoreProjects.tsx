import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { PROJECTS } from "@/data/projects";

interface MoreProjectsProps {
  excludeSlugs?: string[];
}

export default function MoreProjects({ excludeSlugs = [] }: MoreProjectsProps) {
  const projects = PROJECTS.filter((p) => !excludeSlugs.includes(p.slug));

  if (projects.length === 0) return null;

  return (
    <section
      aria-label="Mais projetos"
      style={{
        background: "var(--gray-100)",
        paddingTop: "clamp(4rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(4rem, 8vw, 7.5rem)",
      }}
    >
      <div className="page-container">
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-micro)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--gray-400)",
            marginBottom: "var(--space-lg)",
          }}
        >
          Mais Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`Ver projeto: ${project.title}`}
              className="group block rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
              style={{ touchAction: "manipulation" }}
            >
              {/* Cover image */}
              <div className="aspect-video relative overflow-hidden bg-neutral-100">
                {project.cover.src ? (
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-neutral-400 text-sm text-center px-4">
                      {project.cover.alt}
                    </span>
                  </div>
                )}
              </div>

              {/* Project info */}
              <div style={{ padding: "1rem 0 0.25rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-micro)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: project.accentColor ?? "var(--azul-1)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {project.category}
                </p>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontStretch: "condensed",
                    textTransform: "uppercase",
                    fontSize: "1.0625rem",
                    color: "var(--gray-900)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                    textWrap: "balance" as CSSProperties["textWrap"],
                  }}
                >
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
