"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  { end: 15, suffix: "+", label: "Anos de\nExperiência" },
  { end: 200, suffix: "+", label: "Projetos\nRealizados" },
  { end: 50, suffix: "+", label: "Clientes\nAtendidos" },
];

export default function AboutMe() {
  return (
    <section
      id="sobre"
      style={{
        background: "#fff",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      <div
        className="page-container flex flex-col lg:grid lg:grid-cols-11 lg:gap-16 lg:items-center"
      >
        {/* ── Left: info (55%) ── */}
        <motion.div
          className="lg:col-span-6"
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
              marginBottom: "1.5rem",
            }}
          >
            SOBRE MIM
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "#525252",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: 520,
            }}
          >
            15+ anos trabalhando com design e comunicação.
            <br /><br />
            10 anos em uma agência especializada em apresentações corporativas. 
            Aqui estão algumas empresas e projetos que passaram por esse processo.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "clamp(1.5rem, 4vw, 3rem)",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {STATS.map(({ end, suffix, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontStretch: "condensed",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "var(--azul-1)",
                  }}
                >
                  <CountUp end={end} suffix={suffix} />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "#a3a3a3",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginTop: "0.25rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginBottom: "1.75rem",
            }}
          >
            <a
              href="#contato"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "#525252",
                textDecoration: "none",
              }}
            >
              contato@sergiopaula.com.br
            </a>
            <a
              href="tel:+5511949632858"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "#525252",
                textDecoration: "none",
              }}
            >
              +55 11 94963-2858
            </a>
          </div>


          {/* MY STORY button */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: 9999,
              border: "2px solid var(--azul-1)",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontStretch: "condensed",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              fontSize: "0.9rem",
              color: "var(--azul-1)",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--azul-1)";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "var(--azul-1)";
            }}
          >
            MINHA HISTÓRIA
          </a>
        </motion.div>

        {/* ── Right: illustration (45%) ── */}
        <motion.div
          className="lg:col-span-5 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div
            className="lg:invisible block" // Placeholder on desktop, visible on mobile
            style={{
              borderRadius: 24,
              overflow: "hidden",
              background: "#e6c9bb",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              position: "relative",
              aspectRatio: "4/5",
            }}
          >
            <Image
              src="/images/sergio_desenho.jpeg"
              alt="Sérgio Paula — designer gráfico e digital"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
