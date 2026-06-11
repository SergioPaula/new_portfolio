"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";

const accent = "#e0365b";
const IMG = "/images/estampas/mockups/fliperama";

const BASE_COLOR = {
  hex: "#f5f3ee",
  name: "Off-white",
  note: "Cor da camiseta · não impressa",
};

const PRINTED_COLORS: { hex: string; border?: boolean; note: string }[] = [
  { hex: "#e0365b", note: "1ª cor" },
  { hex: "#408bb8", note: "2ª cor" },
  { hex: "#e3795f", note: "3ª cor" },
  { hex: "#4b0d16", note: "4ª cor" },
];
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

const darkLabel: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.75rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "0.875rem",
};

const TECH_SHEET = [
  { label: "Técnica de criação", value: "Referência IA + Pintura digital" },
  { label: "Impressão", value: "DTG e DTF" },
  { label: "Texturas aplicadas", value: "Halftone e Retículas" },
  { label: "Ferramentas", value: "Photoshop" },
];

export default function ArcadePage() {
  return (
    <>
      <title>ARCADE — Estampa · DTG & DTF · Sérgio Paula</title>
      <Navbar />

      {/* ─── HERO ─── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
        aria-labelledby="hero-heading"
      >
        <Image
          src={`${IMG}/header-1920x1080.webp`}
          alt="Arte final da estampa Arcade — camiseta com design retro-digital dos anos 80"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "clamp(2rem, 6vw, 7rem)",
            paddingBottom: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "5px 14px",
              borderRadius: 9999,
              border: "1.5px solid rgba(255,255,255,0.35)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "1.25rem",
            }}
          >
            Estampa · DTG & DTF
          </span>
          <h1
            id="hero-heading"
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            ARCADE
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            Estampa para camiseta inspirada na estética retro-digital das
            arcades dos anos 80 e 90, desenvolvida com pintura digital em
            Photoshop para aplicação em DTG e DTF.
          </p>
        </div>
      </motion.section>

      {/* ─── CONTEÚDO ─── */}
      <div className="page-container">

        {/* Voltar */}
        <motion.div
          {...fadeUp()}
          style={{
            paddingTop: "clamp(3rem, 6vw, 5rem)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
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

        {/* ─── VISÃO GERAL ─── */}
        <motion.div
          {...fadeUp()}
          className="pipa-overview-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
            marginBottom: sectionGap,
          }}
        >
          <div>
            <SLabel>Visão Geral</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              A ESTAMPA E O PROJETO
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={bodyText}>
                A estampa Arcade parte da nostalgia das máquinas de videogame
                dos anos 80 e 90 — uma iconografia que mistura pixels, tubos de
                raio catódico e a cultura pop de uma época. Uma estética que
                ainda ressoa com força no design contemporâneo.
              </p>
              <p style={bodyText}>
                O projeto foi desenvolvido para aplicação em DTG
                (Direct-to-Garment) e DTF (Direct-to-Film), técnicas que
                permitem reproduzir a riqueza de texturas e gradientes presentes
                na pintura digital, sem as limitações de paleta da serigrafia.
              </p>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              src={`${IMG}/olhando-fliperama-topo.webp`}
              alt="Pessoa vestindo a camiseta Arcade, olhando para um fliperama — vista de cima"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* ─── ORGANIZAÇÃO NO PHOTOSHOP ─── */}
        <motion.div
          {...fadeUp()}
          className="pipa-overview-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
            marginBottom: sectionGap,
          }}
        >
          <div>
            <SLabel>Pintura Digital</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              ORGANIZAÇÃO DAS CAMADAS
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={bodyText}>
                O processo de pintura digital foi construído com uma estrutura
                de camadas organizada por grupos funcionais — fundo, elementos
                principais, texturas, efeitos e tipografia. Essa organização
                facilita ajustes pontuais e garante uma exportação limpa para o
                arquivo de impressão.
              </p>
              <p style={bodyText}>
                A IA foi usada como ponto de partida para referência visual — não
                como substituto da criação. Imagens geradas ajudaram a explorar
                composições e paletas rapidamente antes de qualquer traço
                digital. A autoria acontece na interpretação, na escolha e na
                execução: a pintura final é original.
              </p>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              src={`${IMG}/organizacao-photoshop.webp`}
              alt="Print do Photoshop mostrando a organização das camadas do arquivo da estampa Arcade"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* ─── ARTE FINAL ─── */}
        <motion.div {...fadeUp()} style={{ marginBottom: sectionGap }}>
          <SLabel>Arte Final</SLabel>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--gray-900)",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            FRENTE E COSTAS
          </h2>
          <div
            style={{
              position: "relative",
              aspectRatio: "16/9",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              src={`${IMG}/estampa-frente-e-costa.webp`}
              alt="Arte final da estampa Arcade — frente e costas da camiseta"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 640px) 100vw, 90vw"
            />
          </div>
        </motion.div>

        {/* ─── DECISÃO DE CORES ─── */}
        <motion.div {...fadeUp()} style={{ marginBottom: sectionGap }}>
          <SLabel>Decisão de Cores</SLabel>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--gray-900)",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            PALETA COM INTENÇÃO
          </h2>

          {/* Cor base da camiseta */}
          <div
            style={{
              background: BASE_COLOR.hex,
              border: "1.5px solid var(--gray-200)",
              borderRadius: 16,
              padding: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: BASE_COLOR.hex,
                border: "1.5px solid var(--gray-200)",
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--gray-800)",
                  marginBottom: "0.2rem",
                }}
              >
                {BASE_COLOR.name} · {BASE_COLOR.hex}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--gray-400)",
                  fontWeight: 500,
                }}
              >
                {BASE_COLOR.note} · custo zero de impressão — cor da própria peça
              </p>
            </div>
          </div>

          {/* Divisor — 4 cores de impressão */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              margin: "clamp(1.25rem, 2.5vw, 2rem) 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: accent,
                whiteSpace: "nowrap",
              }}
            >
              4 cores de impressão
            </span>
            <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }} />
          </div>

          {/* Swatches */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
            }}
          >
            {PRINTED_COLORS.map(({ hex, border, note }) => (
              <div key={hex}>
                <div
                  style={{
                    aspectRatio: "1/1",
                    borderRadius: 12,
                    background: hex,
                    border: border ? "1.5px solid var(--gray-200)" : undefined,
                    marginBottom: "0.75rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--gray-800)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {hex}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "var(--gray-400)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>

          {/* Filosofia de cores */}
          <div
            style={{
              marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
              background: "var(--gray-100)",
              borderRadius: 16,
              padding: "clamp(1.25rem, 2.5vw, 2rem)",
            }}
          >
            <p style={bodyText}>
              O DTF não impõe limites de paleta — tecnicamente, a estampa poderia
              usar centenas de cores. Mesmo assim, a escolha foi trabalhar com
              apenas 4 cores de impressão. Paletas restritas passam a estética
              da serigrafia: resultados visuais de alto impacto com economia de
              meios. E mantêm a porta aberta: se amanhã a demanda justificar uma
              produção em silkscreen, o arquivo já está pronto.
            </p>
          </div>
        </motion.div>

        {/* ─── TÉCNICA DE IMPRESSÃO ─── */}
        <motion.div {...fadeUp()} style={{ marginBottom: sectionGap }}>
          <SLabel>Técnica de Impressão</SLabel>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--gray-900)",
              marginBottom: "1.5rem",
            }}
          >
            DTF E A LEVEZA DA ESTAMPA
          </h2>
          <div
            style={{
              background: "var(--gray-100)",
              borderRadius: 16,
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <p style={bodyText}>
              O grande desafio do DTF é o peso: ao contrário do DTG — que
              imprime tinta diretamente no fio do tecido — o DTF transfere um
              filme termocolante que fica fisicamente sobre a superfície. Em
              estampas com grande cobertura de cor, isso cria uma &quot;placa&quot;
              que prejudica a respiração do tecido e torna a camiseta mais pesada.
            </p>
            <p style={bodyText}>
              Para minimizar esse efeito, a estampa Arcade incorpora texturas de
              halftone e retículas — técnicas tradicionais da impressão gráfica
              que fragmentam as áreas sólidas em pontos e tramas. Isso reduz a
              cobertura efetiva de tinta sem comprometer a percepção visual da
              cor, tornando a peça mais leve e mais respirável.
            </p>
            <p style={bodyText}>
              O resultado é uma estampa que preserva a riqueza cromática da
              pintura digital e, ao mesmo tempo, respeita o conforto de quem
              veste. Halftone e retículas não são apenas recursos estéticos —
              aqui, são decisões técnicas com impacto direto no produto final.
            </p>
          </div>
        </motion.div>

      </div>

      {/* ─── A ESTAMPA NA RUA ─── full-bleed */}
      <motion.section
        {...fadeUp()}
        style={{
          background: "#e0365b",
          padding: "clamp(5rem, 10vw, 10rem) clamp(2rem, 6vw, 7rem)",
        }}
        aria-labelledby="rua-heading"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p style={darkLabel}>Resultado</p>
          <h2
            id="rua-heading"
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "#ffffff",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            A ESTAMPA NA RUA
          </h2>

          {/* Row 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
              marginBottom: "clamp(0.75rem, 1.5vw, 1.25rem)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "clamp(360px, 50vw, 580px)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/domino.webp`}
                alt="Pessoa vestindo a camiseta Arcade jogando dominó"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div
              style={{
                position: "relative",
                height: "clamp(360px, 50vw, 580px)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/sentado-breja.webp`}
                alt="Pessoa vestindo a camiseta Arcade sentada com uma cerveja"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "clamp(360px, 50vw, 580px)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/copo-cerveja.webp`}
                alt="Copo de cerveja com a camiseta Arcade ao fundo"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            {/* detalhe — hover overlay */}
            <div
              className="stamp-hover-container"
              style={{ height: "clamp(360px, 50vw, 580px)", borderRadius: 16 }}
            >
              <Image
                src={`${IMG}/detalhe.webp`}
                alt="Detalhe da estampa Arcade — texturas de halftone e retículas aplicadas para reduzir o peso do DTF"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div
                className="stamp-hover-overlay"
                style={{ background: "rgba(75, 13, 22, 0.92)" }}
                aria-hidden="true"
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Estampa · DTF
                </p>
                <p
                  style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.4,
                  }}
                >
                  Halftone e retículas
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                    maxWidth: 260,
                  }}
                >
                  Texturas de pontilhado aplicadas para fragmentar áreas sólidas
                  — estampa mais leve e respirável no DTF, sem abrir mão da
                  riqueza cromática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── FICHA TÉCNICA ─── */}
      <div className="page-container">
        <motion.div
          {...fadeUp()}
          style={{
            paddingTop: "clamp(4rem, 8vw, 7rem)",
            paddingBottom: "clamp(4rem, 8vw, 7rem)",
          }}
        >
          <SLabel>Ficha Técnica</SLabel>
          <div
            style={{
              background: "var(--gray-100)",
              borderRadius: 16,
              padding: "clamp(1.5rem, 3vw, 2rem)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
            }}
            role="list"
            aria-label="Ficha técnica do projeto"
          >
            {TECH_SHEET.map(({ label, value }) => (
              <div key={label} role="listitem">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--gray-400)",
                    marginBottom: "0.375rem",
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
      </div>

      <MoreProjects excludeSlugs={["arcade"]} />
      <Footer />
    </>
  );
}
