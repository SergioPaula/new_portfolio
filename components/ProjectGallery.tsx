"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectImage from "@/components/ProjectImage";
import type { ProjectImageData } from "@/data/projects";

interface ProjectGalleryProps {
  images: ProjectImageData[];
  layout?: "grid" | "single";
  label?: string;
  description?: string;
}

export default function ProjectGallery({
  images,
  layout = "grid",
  label,
  description,
}: ProjectGalleryProps) {
  const shouldReduce = useReducedMotion();

  if (images.length === 0) return null;

  return (
    <section
      aria-label={label ?? "Galeria do projeto"}
      className="page-container"
      style={{
        paddingTop: "clamp(4rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(4rem, 8vw, 7.5rem)",
      }}
    >
      {/* Optional section label */}
      {label && (
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#a3a3a3",
            marginBottom: description ? "1.25rem" : "2rem",
          }}
        >
          {label}
        </h2>
      )}

      {/* Optional description text */}
      {description && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
            color: "#404040",
            lineHeight: 1.8,
            maxWidth: 720,
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {description}
        </p>
      )}

      {/* Image layout */}
      {layout === "single" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectImage
                src={img.src}
                alt={img.alt}
                aspect={img.aspect}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {images.map((img, i) => {
            const isLastOdd = images.length % 2 !== 0 && i === images.length - 1;
            return (
              <motion.div
                key={i}
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduce ? 0 : (i % 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={isLastOdd ? "lg:col-span-2" : ""}
              >
                <ProjectImage
                  src={img.src}
                  alt={img.alt}
                  aspect={isLastOdd ? "video" : (img.aspect ?? "video")}
                  className="w-full"
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
