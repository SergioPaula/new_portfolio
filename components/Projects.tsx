"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BLUR_DEVASSA,
  BLUR_CBSOCIAL,
  BLUR_DIVINAFATIA,
  BLUR_VIVO,
} from "@/lib/placeholders";

const PROJECTS = [
  {
    image: "/images/projetos/devassa.png",
    blur: BLUR_DEVASSA,
    category: "Apresentação Estratégica",
    title: "CONVENÇÃO DE VENDAS DEVASSA",
    description:
      "Design de apresentação para o maior evento de vendas nacional da marca.",
    accent: "#f5a623",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao",
  },
  {
    image: "/images/projetos/cbsocial.png",
    blur: BLUR_CBSOCIAL,
    category: "Apresentação Estratégica",
    title: "CONVENÇÃO DE VENDAS MONDELĒZ",
    description:
      "Apresentação visual de alto impacto para a convenção de vendas da Mondelēz International.",
    accent: "var(--azul-1)",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao",
  },
  {
    image: "/images/projetos/f5c50c86bd26665a8a9eec6d5244c6d7.jpg",
    blur: BLUR_DIVINAFATIA,
    category: "Identidade de Marca",
    title: "DIVINA FATIA",
    description:
      "Criação completa da identidade visual para confeitaria artesanal.",
    accent: "var(--roxo-1)",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao",
  },
  {
    image: "/images/projetos/s20.png",
    blur: BLUR_VIVO,
    category: "Apresentação Corporativa",
    title: "VIVO — VP ENGENHARIA 2025",
    description:
      "Apresentação de diretoria e arte visual para o evento VP Engenharia Vivo 2025.",
    accent: "#660099",
    // TODO: reconectar para página do projeto quando pronta
    href: "/em-construcao",
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
  project: (typeof PROJECTS)[number];
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
        sizes="(max-width: 480px) 96vw, (max-width: 768px) 92vw, min(1440px, 100vw)"
        placeholder="blur"
        blurDataURL={project.blur}
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
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              color: "var(--white)",
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
              fontSize: "var(--text-h3)",
              color: "var(--white)",
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
              fontSize: "var(--text-micro)",
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (!lenis) return;
    const onScroll = () => {};
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, []);

  return (
    <section id="projetos" style={{ background: "var(--white)" }}>
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
              fontSize: "var(--text-h3)",
              color: "var(--gray-900)",
              marginBottom: "0.75rem",
            }}
          >
            PROJETOS EM DESTAQUE
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-small)",
              color: "var(--gray-600)",
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
          paddingTop: "var(--space-lg)",
          paddingBottom: "clamp(4rem, 8vw, 8rem)",
        }}
      >
        {/* TODO: reconectar para página do projeto quando pronta */}
        <Link
          href="/em-construcao"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.875rem 2.25rem",
            borderRadius: 9999,
            background: "var(--gray-900)",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            fontStretch: "condensed",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            fontSize: "var(--text-small)",
            color: "var(--white)",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "var(--azul-1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--gray-900)";
          }}
        >
          Ver Todos os Projetos
        </Link>
      </div>
    </section>
  );
}
