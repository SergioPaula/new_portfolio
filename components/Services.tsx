"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Accordion from "./Accordion";

const SERVICES = [
  {
    title: "Apresentações Estratégicas (Slidemodelismo)",
    content:
      "Transformo dados, argumentos e ideias complexas em narrativas visuais que convencem.",
  },
  {
    title: "Design Digital & Web (O Panfleteiro)",
    content:
      "Identidade visual, presença digital e sites para empresas que querem existir de verdade online.",
  },
  {
    title: "Design Gráfico & Produto (Tô à Toa)",
    content:
      "Design que sai da tela e vira material real.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        background: "#fff",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      <div
        className="page-container flex flex-col lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start"
      >
        {/* ── Left: text + accordion (60%) ── */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
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
              marginBottom: "1rem",
            }}
          >
            O QUE EU
            <br />
            FAÇO
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "#666",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: 480,
            }}
          >
            Eu crio apresentações e peças visuais de alto impacto que dão voz e direção a boas ideias.
          </p>

          <Accordion items={SERVICES} />
        </motion.div>

        {/* ── Right: illustration (40%) ── */}
        <motion.div
          className="lg:col-span-2 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{
            position: "sticky",
            top: "120px",
          }}
        >
          <div
            className="lg:invisible block" // Placeholder on desktop, visible on mobile
            style={{
              borderRadius: 24,
              overflow: "hidden",
              transform: "rotate(5deg)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.10)",
              position: "relative",
              aspectRatio: "3/4",
            }}
          >
            <Image
              src="/images/ilustra_manga_sergio.png"
              alt="Sérgio Paula — ilustração mangá"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
