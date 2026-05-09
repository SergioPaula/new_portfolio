"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Globe } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const SOFT_SKILLS = [
  { label: "Storytelling", value: 8, tooltip: "Conecto dados e ideias em narrativas que fazem sentido — do briefing ao slide final." },
  { label: "Colaboração", value: 10, tooltip: "Trabalho melhor em conjunto do que sozinho. Escuto antes de criar." },
  { label: "Consistência", value: 9, tooltip: "Entrego no prazo, mantenho o padrão e não deixo a qualidade cair no final do projeto." },
  { label: "Adaptabilidade", value: 8, tooltip: "Mudo de rota sem perder o fio. Contextos novos viram oportunidade, não obstáculo." },
  { label: "Raciocínio\nEstratégico", value: 8, tooltip: "Antes de desenhar, pergunto: qual o objetivo? Para quem? O que precisa acontecer depois?" },
  { label: "Inovação", value: 6, tooltip: "Prefiro inovar onde faz diferença. Criatividade com propósito, não novidade pela novidade." },
];

const HARD_SKILLS = [
  {
    name: "Illustrator",
    percent: 45,
    color: "#ff5b35",
    iconSrc: "/images/sobre/Adobe_Illustrator_CC_icon.svg",
  },
  {
    name: "Photoshop",
    percent: 80,
    color: "#00a8d9",
    iconSrc: "/images/sobre/Adobe_Photoshop_CC_2026_icon.svg",
  },
  {
    name: "PowerPoint",
    percent: 95,
    color: "#e74c3c",
    iconSrc: "/images/sobre/Microsoft_Office_PowerPoint_(2025–present).svg",
    isBlackBg: true,
  },
  {
    name: "Figma",
    percent: 66,
    color: "#ff3366",
    iconSrc: "/images/sobre/Figma-logo.svg",
    isBlackBg: true,
  },
  {
    name: "Premiere",
    percent: 48,
    color: "#9b59b6",
    iconSrc: "/images/sobre/Adobe_Premiere_Pro_CC_icon.svg",
  },
  {
    name: "Inglês",
    percent: 62,
    color: "#2980b9",
    iconSrc: null,
  },
];

const getSkillLevel = (percent: number) => {
  if (percent >= 95) return "Especialista";
  if (percent >= 85) return "Avançado";
  if (percent >= 70) return "Sênior";
  if (percent > 60) return "Pleno";
  return "Em evolução";
};

// ─── SVG Radar Chart ─────────────────────────────────────────────────────────

function RadarChart() {
  const cx = 160;
  const cy = 160;
  const maxR = 96;
  const n = SOFT_SKILLS.length;
  const gridLevels = [2, 4, 6, 8, 10];

  const toRad = (i: number) => (i * (360 / n) - 90) * (Math.PI / 180);
  const pt = (i: number, r: number) => ({
    x: cx + r * Math.cos(toRad(i)),
    y: cy + r * Math.sin(toRad(i)),
  });

  const gridPolygon = (level: number) =>
    Array.from({ length: n }, (_, i) => {
      const p = pt(i, (level / 10) * maxR);
      return `${p.x},${p.y}`;
    }).join(" ");

  const dataPolygon = SOFT_SKILLS.map((s, i) => {
    const p = pt(i, (s.value / 10) * maxR);
    return `${p.x},${p.y}`;
  }).join(" ");

  const anchor = (i: number): "middle" | "start" | "end" => {
    if (i === 0 || i === 3) return "middle";
    if (i === 1 || i === 2) return "start";
    return "end";
  };

  const labelR = maxR + 26;

  return (
    <svg
      viewBox="-60 -20 440 360"
      width="100%"
      style={{ maxWidth: 360, display: "block", overflow: "visible" }}
      aria-label="Gráfico radar de soft skills"
    >
      {/* Grid hexagons */}
      {gridLevels.map((level) => (
        <polygon
          key={level}
          points={gridPolygon(level)}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
        />
      ))}

      {/* Axis lines */}
      {Array.from({ length: n }, (_, i) => {
        const p = pt(i, maxR);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
          />
        );
      })}



      {/* Data fill */}
      <polygon
        points={dataPolygon}
        fill="rgba(0, 168, 217, 0.15)"
        stroke="#00a8d9"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Data points */}
      {SOFT_SKILLS.map((s, i) => {
        const p = pt(i, (s.value / 10) * maxR);
        return <circle key={i} cx={p.x} cy={p.y} r="4" fill="#00a8d9" />;
      })}

      {/* Labels */}
      {SOFT_SKILLS.map((s, i) => {
        const p = pt(i, labelR);
        const lines = s.label.split("\n");
        return (
          <text
            key={i}
            textAnchor={anchor(i)}
            dominantBaseline="middle"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              fill: "#525252",
            }}
          >
            {lines.map((line, j) => (
              <tspan
                key={j}
                x={p.x}
                y={p.y}
                dy={
                  lines.length > 1
                    ? j === 0
                      ? "-0.55em"
                      : "1.3em"
                    : "0"
                }
              >
                {line}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}

// ─── RPG Card ─────────────────────────────────────────────────────────────────

function RpgCard() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (!lenis) return;
    const onScroll = () => {};
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, []);

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: 320,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.img
        src="/images/sobre/bggb_8bit.webp"
        alt="Design Alquimista BG"
        style={{
          display: "block",
          zIndex: 1,
          width: "100%",
          height: "auto",
          y: shouldReduce ? 0 : bgY,
        }}
      />

      {/* Character layer — padded so character clears the header badges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          paddingTop: 56,
          paddingBottom: 12,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/sobre/sergio_8bit.webp"
          alt="Sérgio Paula 8bit"
          style={{ width: "55%", height: "auto", transform: "translateY(90px)" }}
        />
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Fortalezas() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    ({
      initial: shouldReduce ? false : { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
    }) as const;

  const colLabel: React.CSSProperties = {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 800,
    fontStretch: "condensed",
    textTransform: "uppercase",
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
    color: "var(--gray-900)",
    marginBottom: "1.5rem",
    display: "block",
    letterSpacing: "-0.01em",
  };

  return (
    <section
      id="fortalezas"
      style={{ paddingBottom: "clamp(5rem, 10vw, 9rem)" }}
    >
      <style>{`
        @keyframes bgParallax {
          0%   { transform: translateY(0px) scale(1.08); }
          50%  { transform: translateY(-18px) scale(1.08); }
          100% { transform: translateY(0px) scale(1.08); }
        }
        .rpg-bg-img {
          animation: bgParallax 7s ease-in-out infinite;
          width: 100%;
          height: 100%;
          object-fit: cover;
          image-rendering: pixelated;
        }
        @media (prefers-reduced-motion: reduce) {
          .rpg-bg-img { animation: none; transform: scale(1.08); }
        }
        .skill-pill { position: relative; cursor: default; }
        .skill-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #171717;
          color: #c7ecf7;
          font-family: 'Work Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.6;
          border-radius: 8px;
          padding: 10px 14px;
          max-width: 220px;
          width: max-content;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          white-space: normal;
          text-align: center;
          z-index: 100;
        }
        .skill-pill:hover .skill-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .skill-tooltip-arrow {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top-color: #171717;
        }
      `}</style>
      {/* Section header */}
      <motion.div {...fadeUp()} style={{ marginBottom: "4rem" }}>
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
          Habilidades
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            color: "var(--gray-900)",
            marginBottom: "1rem",
          }}
        >
          FORTALEZAS
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
            color: "var(--gray-600)",
            lineHeight: 1.7,
            maxWidth: 560,
          }}
        >
          Vejo o design, como um ALQUIMISTA, como um processo de transformação:<br />
          Lapida o bruto. Transforma o lixo em luxo. O caos em clareza.<br />
          É assim que eu enxergo o design — e cada ferramenta aqui é escolhida
          com essa intenção.
        </p>
      </motion.div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">

        {/* ── LEFT: Soft Skills Radar ── */}
        <motion.div {...fadeUp(0.1)} className="lg:order-1 order-2">
          <span style={colLabel}>SOFT SKILLS</span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RadarChart />
          </div>
          {/* Legend pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              justifyContent: "center",
              marginTop: "1rem",
              overflow: "visible",
            }}
          >
            {SOFT_SKILLS.map((s) => (
              <motion.span
                key={s.label}
                className="skill-pill"
                whileHover={{ backgroundColor: "#ff6571", color: "#ffffff" }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--gray-600)",
                  background: "#f5f5f5",
                  borderRadius: 9999,
                  padding: "4px 12px",
                  whiteSpace: "nowrap",
                  cursor: "default",
                  transition: "background-color 0.2s, color 0.2s",
                }}
              >
                {s.label.replace("\n", " ")} · {s.value}
                <span className="skill-tooltip">
                  {s.tooltip}
                  <span className="skill-tooltip-arrow" />
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── CENTER: RPG Card ── */}
        <motion.div
          {...fadeUp(0)}
          className="lg:order-2 order-1"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
        >
          <RpgCard />
        </motion.div>

        {/* ── RIGHT: Hard Skills bars ── */}
        <motion.div {...fadeUp(0.2)} className="lg:order-3 order-3">
          <span style={colLabel}>HARD SKILLS</span>
          <div>
            {HARD_SKILLS.map((skill, i) => (
              <div key={skill.name} style={{ marginBottom: "1.25rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                {/* ICON */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    background: skill.isBlackBg ? "#000000" : (skill.iconSrc ? "transparent" : "#005bb5"),
                    borderRadius: 8,
                  }}
                >
                  {skill.iconSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={skill.iconSrc}
                      alt={skill.name}
                      aria-hidden="true"
                      width={skill.name === "PowerPoint" ? 32 : skill.name === "Figma" ? 24 : skill.isBlackBg ? 28 : 44}
                      height={skill.name === "PowerPoint" ? 32 : skill.name === "Figma" ? 24 : skill.isBlackBg ? 28 : 44}
                      style={{ display: "block", objectFit: "contain" }}
                    />
                  ) : (
                    <Globe size={24} color="#ffffff" aria-hidden="true" />
                  )}
                </div>

                {/* TEXT & BAR */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "var(--gray-800)",
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--gray-400)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {getSkillLevel(skill.percent)}
                    </span>
                  </div>
                  
                  {/* BAR CONTAINER */}
                  <div
                    style={{
                      height: 8,
                      background: "var(--gray-200)",
                      borderRadius: 9999,
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={shouldReduce ? false : { width: "0%" }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        height: "100%",
                        background: skill.color,
                        borderRadius: 9999,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
