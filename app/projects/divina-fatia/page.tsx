"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const accent = "#9979da";

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

export default function DivinaFatiaPage() {
  return (
    <>
      <title>DIVINA FATIA — Identidade Visual · Sérgio Paula</title>
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
              Identidade de Marca
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
              DIVINA FATIA — IDENTIDADE VISUAL
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
              Criação completa da identidade visual e posicionamento de marca para confeitaria artesanal.
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
                { label: "Ano", value: "2024" },
                { label: "Cliente", value: "Divina Fatia" },
                { label: "Tipo", value: "Brand Identity" },
                { label: "Duração", value: "6 semanas" },
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

          {/* Section — BRIEFING */}
          <motion.div
            {...fadeUp()}
            style={{ marginBottom: sectionGap }}
          >
            <SLabel>Briefing</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              A CONFEITARIA E A MARCA
            </h2>

            <p style={{ ...bodyText, marginBottom: "2rem" }}>
              A Divina Fatia nasceu como uma confeitaria artesanal em Bragança Paulista com o desafio de
              construir uma marca do zero — do nome ao sistema visual completo. A marca precisava comunicar
              qualidade artesanal e sofisticação acessível, sem cair nos clichês do setor.
            </p>

            <ImagePlaceholder label="briefing" aspect="16/9" />
          </motion.div>

          {/* Section — ESTRATÉGIA DE MARCA */}
          <motion.div
            {...fadeUp()}
            style={{ marginBottom: sectionGap }}
          >
            <SLabel>Estratégia de Marca</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              POSICIONAMENTO E TOM DE VOZ
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              <p style={bodyText}>
                O posicionamento foi construído em torno do conceito de &ldquo;o prazer do detalhe&rdquo; — uma confeitaria
                premium para quem valoriza qualidade acima de quantidade. Tom de voz: íntimo, orgulhoso, artesanal.
              </p>
              <p style={bodyText}>
                A estratégia definiu o território visual antes de qualquer execução: referências de luxo acessível,
                paleta quente e sofisticada, tipografia com personalidade.
              </p>
            </div>

            <ImagePlaceholder label="estrategia" aspect="16/9" />
          </motion.div>

          {/* Section — SISTEMA VISUAL */}
          <motion.div
            {...fadeUp()}
            style={{ marginBottom: sectionGap }}
          >
            <SLabel>Sistema Visual</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              IDENTIDADE VISUAL COMPLETA
            </h2>

            <p style={{ ...bodyText, marginBottom: "2rem" }}>
              O sistema visual entregue inclui logo principal com variações de aplicação, paleta de cores
              com especificações técnicas, tipografia primária e secundária, e pattern de suporte para
              uso em embalagens, adesivos e rótulos.
            </p>

            {/* Centered logo placeholder, max-width 480px */}
            <div
              style={{
                maxWidth: 480,
                margin: "0 auto 1.5rem",
              }}
            >
              <ImagePlaceholder label="logo-principal" aspect="1/1" />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <ImagePlaceholder label="paleta-de-cores" aspect="4/3" />
              <ImagePlaceholder label="tipografia" aspect="4/3" />
            </div>

            <ImagePlaceholder label="pattern" aspect="16/9" />
          </motion.div>

        </div>
      </div>

      <MoreProjects excludeSlugs={["divina-fatia"]} />
      <Footer />
    </>
  );
}
