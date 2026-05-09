"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import ProjectImage from "@/components/ProjectImage";
import type { ProjectData } from "@/data/projects";

export default function ProjectHero({ project }: { project: ProjectData }) {
  const shouldReduce = useReducedMotion();

  const metaItems = [
    { label: "Ano", value: project.meta.year },
    { label: "Cliente", value: project.meta.client },
    { label: "Tipo", value: project.meta.projectType },
    ...(project.meta.duration ? [{ label: "Duração", value: project.meta.duration }] : []),
  ];

  return (
    <section aria-label={`Projeto: ${project.title}`}>
      {/* Cover image — above fold, priority load */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProjectImage
          src={project.cover.src}
          alt={project.cover.alt}
          aspect="wide"
          priority
          className="w-full"
          sizes="100vw"
        />
      </motion.div>

      {/* Title block */}
      <div
        className="page-container"
        style={{
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        {/* Category tag */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-micro)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: project.accentColor ?? "var(--azul-1)",
            marginBottom: "0.875rem",
          }}
        >
          {project.category}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            fontStretch: "condensed",
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            fontSize: "var(--text-h2)",
            color: "var(--gray-900)",
            textWrap: "balance" as CSSProperties["textWrap"],
            marginBottom: "1.125rem",
          }}
        >
          {project.title}
        </motion.h1>

        {/* One-line description */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--gray-600)",
            lineHeight: 1.6,
            maxWidth: 640,
            marginBottom: "clamp(1.75rem, 3.5vw, 2.5rem)",
          }}
        >
          {project.description}
        </motion.p>

        {/* Meta strip */}
        <div
          role="list"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(1.5rem, 3vw, 3.5rem)",
            paddingTop: "clamp(1.25rem, 2.5vw, 1.75rem)",
            borderTop: "1px solid #e5e5e5",
          }}
        >
          {metaItems.map((item, i) => (
            <motion.div
              key={item.label}
              role="listitem"
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-micro)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--gray-400)",
                  marginBottom: "0.3rem",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-small)",
                  fontWeight: 500,
                  color: "var(--gray-900)",
                  lineHeight: 1.3,
                }}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
