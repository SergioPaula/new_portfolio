"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const accent = "#660099";

const sectionGap = "clamp(5rem, 10vw, 9rem)";

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
  color: "#404040",
  lineHeight: 1.8,
};

const fadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }) as const;

function SLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </p>
  );
}

export default function VivoPage() {
  return (
    <>
      <title>VIVO — VP Engenharia 2025 · Sérgio Paula</title>
      <Navbar />

      <div style={{ paddingTop: "clamp(5rem, 10vw, 7rem)" }}>
        <div className="page-container">

          {/* Back link */}
          <motion.div {...fadeUp()} style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <Link
              href="/projetos"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--gray-400)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gray-900)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gray-400)")
              }
            >
              ← Projetos
            </Link>
          </motion.div>

          {/* Hero block */}
          <motion.div
            {...fadeUp(0.05)}
            style={{ marginBottom: sectionGap }}
          >
            {/* Category tag */}
            <span
              style={{
                display: "inline-block",
                padding: "5px 14px",
                borderRadius: 9999,
                border: "1.5px solid var(--gray-200)",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--gray-600)",
                marginBottom: "1.25rem",
              }}
            >
              Apresentação Corporativa · Arte de Evento
            </span>

            {/* Title */}
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--gray-900)",
                marginBottom: "1rem",
              }}
            >
              VIVO — VP ENGENHARIA 2025
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.35vw, 1.125rem)",
                color: "var(--gray-600)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: 600,
              }}
            >
              Apresentação de diretoria e arte visual para o evento VP Engenharia Vivo 2025.
            </p>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                borderTop: "1px solid var(--gray-200)",
                paddingTop: "1.25rem",
              }}
            >
              {[
                { label: "Ano", value: "2025" },
                { label: "Cliente", value: "Vivo / Telefônica Brasil" },
                { label: "Tipo", value: "Evento Corporativo" },
                { label: "Duração", value: "2 semanas" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--gray-400)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: accent,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section — CONTEXTO */}
          <motion.div
            {...fadeUp()}
            style={{ marginBottom: sectionGap }}
          >
            <SLabel>Contexto</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              O EVENTO E O DESAFIO
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              <p style={bodyText}>
                O evento VP Engenharia reúne anualmente os diretores e lideranças seniores da área de
                engenharia da Vivo. Para a edição 2025, fui responsável pelo design da apresentação dos
                diretores e pela criação das artes visuais utilizadas no ambiente e nas telas do evento.
              </p>
              <p style={bodyText}>
                O projeto exigiu aderência rigorosa às diretrizes da marca Vivo/Telefônica, com linguagem
                visual elevada compatível com uma audiência de alta liderança.
              </p>
            </div>

            <ImagePlaceholder label="contexto-evento" aspect="16/9" />
          </motion.div>

          {/* Section — ENTREGA */}
          <motion.div
            {...fadeUp()}
            style={{ marginBottom: sectionGap }}
          >
            <SLabel>Entrega</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              APRESENTAÇÃO E ARTE DO EVENTO
            </h2>

            <p style={{ ...bodyText, marginBottom: "2rem" }}>
              Apresentação completa em PowerPoint seguindo as brand guidelines da Vivo (cor primária #660099),
              com layouts para abertura, pauta executiva, resultados e premiação. Além dos slides,
              foram criadas artes para as telas do evento e o design do troféu de premiação.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <ImagePlaceholder label="slide-01" aspect="4/3" />
              <ImagePlaceholder label="slide-02" aspect="4/3" />
            </div>

            {/* Centered trophy placeholder, max-width 480px */}
            <div
              style={{
                maxWidth: 480,
                margin: "1rem auto",
              }}
            >
              <ImagePlaceholder label="trofeu" aspect="4/3" />
            </div>

            <ImagePlaceholder label="foto-evento" aspect="16/9" />
          </motion.div>

        </div>
      </div>

      <MoreProjects excludeSlugs={["vivo"]} />
      <Footer />
    </>
  );
}
