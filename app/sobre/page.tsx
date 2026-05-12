"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Fortalezas from "@/components/Fortalezas";
import Footer from "@/components/Footer";
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

// ─── Data ────────────────────────────────────────────────────────────────────

const CARD_IMAGES = [
  { src: "/images/sobre/Especialista-em-apresentações.avif", alt: "Sérgio Paula — Especialista em Apresentações" },
  { src: "/images/sobre/design_estrategia.avif", alt: "Design com Estratégia" },
  { src: "/images/sobre/minha-bagagem.avif", alt: "Minha Trajetória em Design" },
];

const SERVICES = [
  {
    title: "Apresentação Corporativa",
    body: "Apresentações executivas e de convenção que traduzem estratégia em narrativa visual. Especialista em PowerPoint corporativo para grandes marcas.",
  },
  {
    title: "Identidade de Marca",
    body: "Criação de sistemas visuais completos — logo, cores, tipografia, padrões e brand guidelines. Da estratégia de posicionamento ao manual de marca.",
  },
  {
    title: "Web Design",
    body: "Design de sites e interfaces digitais com foco em experiência do usuário. Prototipagem no Figma e implementação com Framer ou Next.js.",
  },
];

const TIMELINE = [
  {
    role: "Analista Sênior — Design & Comunicação Visual",
    company: "Vivo / Telefônica",
    period: "2023 – Atual",
  },
  {
    role: "Diretor de Arte",
    company: "PontoPPT",
    period: "2013 – 2023",
  },
  {
    role: "Estagiário de Marketing",
    company: "Paradygma Informática",
    period: "2011 – 2012",
  },
  {
    role: "Designer Gráfico",
    company: "Quality Itaim Copiadora",
    period: "2007 – 2011",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Briefing",
    body: "Escuta ativa para entender objetivos, público e contexto do projeto.",
    bg: "#1e1e1e",
    color: "#fff",
  },
  {
    num: "02",
    title: "Pesquisa",
    body: "Análise de referências, concorrentes e tendências para embasar as decisões criativas.",
    bg: "#00a8d9",
    color: "#fff",
  },
  {
    num: "03",
    title: "Moodboard",
    body: "Construção do painel de referências visuais que define o tom e a estética do projeto.",
    bg: "#f5f5f5",
    color: "#1e1e1e",
  },
  {
    num: "04",
    title: "Draft & Protótipo",
    body: "Primeiras versões e protótipos para validar direção antes de avançar.",
    bg: "#1e1e1e",
    color: "#fff",
  },
  {
    num: "05",
    title: "Apresentação ao Cliente",
    body: "Apresentação estruturada com racional criativo e abertura para alinhamento.",
    bg: "#f5f5f5",
    color: "#1e1e1e",
  },
  {
    num: "06",
    title: "Finalização",
    body: "Refinamento após feedback e entrega dos arquivos finais em todos os formatos necessários.",
    bg: "#9979da",
    color: "#fff",
  },
];

// ─── Style constants ──────────────────────────────────────────────────────────

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
  color: "#404040",
  lineHeight: 1.8,
};

const sectionGap = "clamp(5rem, 10vw, 9rem)";

// ─── Sub-components ───────────────────────────────────────────────────────────

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

function STitle({
  as: Tag = "h2",
  children,
  size = "clamp(1.75rem, 3.5vw, 3rem)",
}: {
  as?: "h1" | "h2";
  children: React.ReactNode;
  size?: string;
}) {
  return (
    <Tag
      className="font-display"
      style={{ fontSize: size, color: "var(--gray-900)", marginBottom: "1rem" }}
    >
      {children}
    </Tag>
  );
}

function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
        color: "var(--gray-600)",
        lineHeight: 1.7,
        maxWidth: 560,
        marginBottom: "2.5rem",
      }}
    >
      {children}
    </p>
  );
}

// ─── CardImage helper ─────────────────────────────────────────────────────────

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
        <span className="text-neutral-400 text-sm text-center px-6 leading-relaxed select-none">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="440px"
      onError={() => setError(true)}
    />
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function SobrePage() {
  const shouldReduce = useReducedMotion();
  const [cardImageIndex, setCardImageIndex] = useState(0);
  const [openService, setOpenService] = useState<number | null>(null);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>(Array(4).fill(null));
  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[i] = el;
  };

  // Track which of S1/S2/S3 is the active section based on scroll position
  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + window.innerHeight * 0.5;
      let active = 0;
      [0, 1, 2].forEach((i) => {
        const el = sectionRefs.current[i];
        if (!el) return;
        if (el.getBoundingClientRect().top + window.scrollY <= mid) active = i;
      });
      setCardImageIndex(active);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const fadeUp = (delay = 0) =>
    ({
      initial: shouldReduce ? false : { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
    }) as const;

  return (
    <>
      <title>Sobre — Sérgio Paula</title>
      <Navbar />

      <div style={{ paddingTop: "6rem" }}>
        <div className="page-container">

          {/* ═══════════════════════════════════════════════════════
              SECTIONS 1, 2 & 3 — two-column layout with sticky card
          ═══════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left column: S1 + S2 (Serviços) + S3 (Experiência) */}
            <div>

              {/* ── S1: Sobre Mim ── */}
              <div ref={setRef(0)} style={{ minHeight: "calc(100svh - 6rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <motion.div {...fadeUp()}>
                  <SLabel>Sobre Mim</SLabel>
                  <STitle as="h1" size="clamp(2.5rem, 5vw, 4.5rem)">
                    SÉRGIO PAULA
                  </STitle>
                </motion.div>

                <motion.div
                  {...fadeUp(0.1)}
                  style={{
                    maxWidth: 600,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    marginBottom: "2rem",
                  }}
                >
                  <p style={bodyText}>
                    Designer Gráfico e Especialista em Comunicação Visual com 15+
                    anos de experiência. Combino visão estratégica com execução
                    técnica para criar soluções visuais que comunicam com clareza
                    e consistência de marca.
                  </p>
                  <p style={bodyText}>
                    Atuo na Vivo/Telefônica como Analista Sênior de Design, onde
                    lidero a padronização visual corporativa. Em paralelo,
                    desenvolvo projetos próprios de branding, web design e
                    apresentações estratégicas.
                  </p>
                </motion.div>

                {/* Social icons */}
                <motion.div
                  {...fadeUp(0.2)}
                  style={{ display: "flex", gap: "1.25rem" }}
                >
                  {[
                    {
                      href: "https://www.linkedin.com/in/sergiopaula-designer",
                      label: "LinkedIn (abre em nova aba)",
                      Icon: LinkedinLogo,
                    },
                    {
                      href: "https://www.instagram.com/serginho_paula/",
                      label: "Instagram (abre em nova aba)",
                      Icon: InstagramLogo,
                    },
                    {
                      href: "https://wa.me/5511949632858",
                      label: "WhatsApp (abre em nova aba)",
                      Icon: WhatsappLogo,
                    },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8d9] focus-visible:ring-offset-2 rounded"
                      style={{ color: "var(--gray-900)", textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "#d8df20")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gray-900)")
                      }
                    >
                      <Icon size={28} weight="regular" aria-hidden />
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* ── S2: Serviços — O QUE POSSO FAZER POR VOCÊ ── */}
              <div ref={setRef(1)} style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <motion.div {...fadeUp()}>
                  <SLabel>Serviços</SLabel>
                  <STitle>O QUE POSSO FAZER POR VOCÊ</STitle>
                  <Subtitle>
                    Como designer, sou um contador de histórias visuais — criando
                    experiências que conectam e comunicam.
                  </Subtitle>
                </motion.div>

                <div style={{ borderTop: "1px solid var(--gray-200)" }}>
                  {SERVICES.map((svc, i) => (
                    <motion.div
                      key={svc.title}
                      {...fadeUp(i * 0.08)}
                      style={{ borderBottom: "1px solid var(--gray-200)" }}
                    >
                      <button
                        onClick={() =>
                          setOpenService(openService === i ? null : i)
                        }
                        aria-expanded={openService === i}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          padding: "1.375rem 0",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          gap: "1rem",
                        }}
                        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8d9] focus-visible:ring-offset-2 rounded"
                      >
                        <span
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 800,
                            fontStretch: "condensed",
                            textTransform: "uppercase",
                            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                            color: "var(--gray-900)",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.1,
                          }}
                        >
                          {svc.title}
                        </span>
                        <motion.span
                          animate={{ rotate: openService === i ? 45 : 0 }}
                          transition={{ duration: 0.22 }}
                          style={{
                            fontSize: "1.5rem",
                            lineHeight: 1,
                            color: "var(--gray-400)",
                            flexShrink: 0,
                          }}
                          aria-hidden="true"
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {openService === i && (
                          <motion.div
                            key="body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <p
                              style={{
                                ...bodyText,
                                paddingBottom: "1.375rem",
                                color: "var(--gray-600)",
                              }}
                            >
                              {svc.body}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── S3: Minha Trajetória em Design ── */}
              <div ref={setRef(2)} style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <motion.div {...fadeUp()}>
                  <SLabel>Experiência</SLabel>
                  <STitle>MINHA TRAJETÓRIA EM DESIGN</STitle>
                  <Subtitle>
                    De curioso com computação gráfica a especialista corporativo
                    — 15 anos construindo uma linguagem visual própria.
                  </Subtitle>
                </motion.div>

                <div>
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={item.role}
                      {...fadeUp(i * 0.1)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "1.5rem",
                        padding: "1.5rem 0",
                        borderBottom:
                          i < TIMELINE.length - 1
                            ? "1px solid var(--gray-200)"
                            : "none",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: 800,
                          fontStretch: "condensed",
                          textTransform: "uppercase",
                          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                          color: "var(--gray-900)",
                          lineHeight: 1.1,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.role}
                      </p>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            color: "var(--azul-1)",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {item.company}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.75rem",
                            color: "var(--gray-400)",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          {item.period}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Academic */}
                <motion.div {...fadeUp(0.4)} style={{ marginTop: "2rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--gray-400)",
                      lineHeight: 1.6,
                    }}
                  >
                    Graduação em Publicidade e Propaganda — Universidade
                    Presbiteriana Mackenzie · 2012
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--gray-400)",
                      lineHeight: 1.6,
                      marginTop: "0.375rem",
                    }}
                  >
                    MBA em Gestão, Marketing e Mídias Digitais — FGV (em
                    andamento)
                  </p>
                </motion.div>

                {/* Resume button */}
                <motion.div {...fadeUp(0.5)} style={{ marginTop: "2.5rem" }}>
                  <a
                    href="/images/sobre/Sergio_Paula_Curriculo_PT.pdf"
                    download
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--space-xs)",
                      padding: "0.75rem 1.75rem",
                      borderRadius: 9999,
                      border: "2px solid var(--azul-1)",
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 800,
                      fontStretch: "condensed",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      fontSize: "var(--text-small)",
                      color: "var(--azul-1)",
                      textDecoration: "none",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "var(--azul-1)";
                      el.style.color = "var(--white)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "transparent";
                      el.style.color = "var(--azul-1)";
                    }}
                  >
                    BAIXAR CURRÍCULO
                  </a>
                </motion.div>
              </div>

            </div>
            {/* END LEFT COLUMN */}

            {/* Right column: sticky card — sections 1, 2 & 3 */}
            <div className="hidden lg:flex lg:justify-center lg:items-start">
              <div style={{
                position: "sticky",
                top: "calc(50svh + 3rem - 238px)",
                marginTop: "calc(50svh - 3rem - 238px)"
              }}>
                <div
                  style={{
                    width: 340,
                    height: 476,
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                    background: "#f5f5f5",
                  }}
                >
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={cardImageIndex}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{
                        duration: 0.7,
                        ease: [0.65, 0, 0.35, 1] as const,
                      }}
                      style={{ position: "absolute", inset: 0 }}
                    >
                      <CardImage
                        src={CARD_IMAGES[cardImageIndex]?.src ?? ""}
                        alt={CARD_IMAGES[cardImageIndex]?.alt ?? ""}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
          {/* END SECTIONS 1, 2 & 3 GRID */}

          {/* ═══════════════════════════════════════════════════════
              SECTION: Fortalezas
          ═══════════════════════════════════════════════════════ */}
          <Fortalezas />

          {/* ═══════════════════════════════════════════════════════
              SECTION 4 — Design com Estratégia e Criatividade
          ═══════════════════════════════════════════════════════ */}
          <div ref={setRef(3)} style={{ paddingBottom: sectionGap }}>
            <motion.div {...fadeUp()}>
              <SLabel>Processo</SLabel>
              <STitle>DESIGN COM ESTRATÉGIA E CRIATIVIDADE</STitle>
              <Subtitle>
                Cada projeto segue um processo claro — da escuta à entrega
                final.
              </Subtitle>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={
                    shouldReduce ? false : { opacity: 0, scale: 0.97 }
                  }
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    background: step.bg,
                    borderRadius: 16,
                    padding: "1.75rem",
                    color: step.color,
                  }}
                >
                  <p
                    className="font-display"
                    style={{
                      fontSize: "2rem",
                      opacity: 0.35,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.num}
                  </p>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "0.9rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      opacity: 0.8,
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
