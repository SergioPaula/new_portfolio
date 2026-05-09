import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos — Sérgio Paula",
  description: "Portfólio de projetos de design gráfico, identidade de marca e apresentações corporativas.",
};

export default function ProjetosPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "clamp(6rem, 12vw, 8rem)" }}>
        <div className="page-container" style={{ paddingBottom: "clamp(4rem, 8vw, 7.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--gray-400)",
              marginBottom: "0.875rem",
            }}
          >
            Portfólio
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--gray-900)",
              marginBottom: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            PROJETOS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                aria-label={`Ver projeto: ${project.title}`}
                className="group block rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
                style={{ touchAction: "manipulation" }}
              >
                <div className="aspect-video relative overflow-hidden bg-neutral-100">
                  {project.cover.src ? (
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-neutral-400 text-sm text-center px-6 select-none">
                        {project.cover.alt}
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ padding: "1.25rem 0 0.5rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
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
                      fontSize: "1.25rem",
                      color: "var(--gray-900)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                      textWrap: "balance" as CSSProperties["textWrap"],
                    }}
                  >
                    {project.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--gray-600)",
                      marginTop: "0.5rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
