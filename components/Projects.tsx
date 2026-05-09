"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    image: "/images/projetos/devassa.png",
    category: "Apresentação Estratégica",
    title: "CONVENÇÃO DE VENDAS DEVASSA",
    description:
      "Design de apresentação para o maior evento de vendas nacional da marca.",
    accent: "#f5a623",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao.html",
  },
  {
    image: "/images/projetos/cbsocial.png",
    category: "Apresentação Estratégica",
    title: "CONVENÇÃO DE VENDAS MONDELĒZ",
    description:
      "Apresentação visual de alto impacto para a convenção de vendas da Mondelēz International.",
    accent: "#00a8d9",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao.html",
  },
  {
    image: "/images/projetos/f5c50c86bd26665a8a9eec6d5244c6d7.jpg",
    category: "Identidade de Marca",
    title: "DIVINA FATIA",
    description:
      "Criação completa da identidade visual para confeitaria artesanal.",
    accent: "#9979da",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao.html",
  },
  {
    image: "/images/projetos/s20.png",
    category: "Apresentação Corporativa",
    title: "VIVO — VP ENGENHARIA 2025",
    description:
      "Apresentação de diretoria e arte visual para o evento VP Engenharia Vivo 2025.",
    accent: "#660099",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao.html",
  },
];

const N = PROJECTS.length; // 4
// W = N+1 slots → section height = (N+2)*100vh → each slot = exactly 100vh of scroll
const W = N + 1;

function Card({
  project,
  index,
  scrollYProgress,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const slideStart = index / W;
  const slideEnd = (index + 1) / W;

  const y = useTransform(
    scrollYProgress,
    [slideStart, slideEnd],
    index === 0 ? ["0vh", "0vh"] : ["100vh", "0vh"]
  );

  // Scale this card down as the next one slides in on top of it
  const nextStart = (index + 1) / W;
  const nextEnd = Math.min((index + 2) / W, 1);
  const scale = useTransform(
    scrollYProgress,
    [nextStart, nextEnd],
    index === N - 1 ? [1, 1] : [1, 0.88]
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "none",
        zIndex: index + 1,
        y,
        scale,
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 92vw, min(1440px, 100vw)"
        priority={index === 0}
      />

      {/* Gradient — darkens top→bottom so centered text stays readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* Full-card link overlay */}
      {project.href && (
        <Link
          href={project.href}
          aria-label={`Ver projeto: ${project.title}`}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            display: "block",
            cursor: "pointer",
          }}
        />
      )}

      {/* Content — TRUE vertical + horizontal center */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            maxWidth: 600,
          }}
        >
          {/* Category badge */}
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: 9999,
              background: project.accent,
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
            }}
          >
            {project.category}
          </span>

          {/* Project title */}
          <h2
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontStretch: "condensed",
              textTransform: "uppercase",
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "#fff",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {project.title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;
    const onScroll = () => {};
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, []);

  return (
    <section id="projetos" style={{ background: "#fff" }}>
      {/* ── Section header ── */}
      <div
        className="page-container"
        style={{
          paddingTop: "clamp(4rem, 8vw, 8rem)",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontStretch: "condensed",
              textTransform: "uppercase",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              color: "#171717",
              marginBottom: "0.75rem",
            }}
          >
            PROJETOS EM DESTAQUE
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "#666",
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            Seleção de trabalhos onde estratégia e visualidade se encontram. Cada
            peça resolve um problema concreto de comunicação — não apenas um
            problema estético.
          </p>
        </motion.div>
      </div>

      {/* ── Scroll zone ──
          Height = (N+2)*100vh → each of the N+1 slots = exactly 100vh of scroll.
          Slot 0 → card 0 rests; slots 1-3 → cards 1-3 slide in; slot 4 → end rest.
      */}
      <div
        ref={scrollRef}
        style={{ position: "relative", height: `${(N + 2) * 100}vh` }}
      >
        {/* Sticky viewport container */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* page-container owns the padding; inner div is the containing block for cards */}
          <div className="page-container">
            <div style={{ position: "relative", height: "min(800px, 80vh)" }}>
              {PROJECTS.map((project, i) => (
                <Card
                  key={project.title}
                  project={project}
                  index={i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        className="page-container"
        style={{
          textAlign: "center",
          paddingTop: "2rem",
          paddingBottom: "clamp(4rem, 8vw, 8rem)",
        }}
      >
        {/* TODO: reconectar para página do projeto quando pronta */}
        <a
          href="/em-construcao.html"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.875rem 2.25rem",
            borderRadius: 9999,
            background: "#171717",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            fontStretch: "condensed",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            fontSize: "0.9rem",
            color: "#fff",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "var(--azul-1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#171717";
          }}
        >
          Ver Todos os Projetos
        </a>
      </div>
    </section>
  );
}
