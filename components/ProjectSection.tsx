"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectImage from "@/components/ProjectImage";
import type { ImageAspect } from "@/components/ProjectImage";

interface SectionImage {
  src?: string;
  alt: string;
  aspect?: ImageAspect;
}

interface ProjectSectionProps {
  label: string;
  paragraphs: string[];
  image?: SectionImage;
}

export default function ProjectSection({ label, paragraphs, image }: ProjectSectionProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.section
      aria-label={label}
      initial={shouldReduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="page-container"
      style={{
        paddingTop: "clamp(4rem, 8vw, 7.5rem)",
        paddingBottom: image ? "0" : "clamp(2rem, 4vw, 3rem)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#a3a3a3",
          marginBottom: "1.75rem",
        }}
      >
        {label}
      </h2>

      <div
        style={{
          maxWidth: 720,
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          marginBottom: image ? "clamp(2.5rem, 5vw, 4rem)" : 0,
        }}
      >
        {paragraphs.map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
              color: "#404040",
              lineHeight: 1.8,
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {image && (
        <ProjectImage
          src={image.src}
          alt={image.alt}
          aspect={image.aspect ?? "video"}
          className="w-full"
        />
      )}
    </motion.section>
  );
}
