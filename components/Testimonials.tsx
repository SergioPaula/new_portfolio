"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react/dist/ssr";

/* ── sub-components ─────────────────────────────────────── */

function Stars() {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} weight="fill" size={18} color="var(--rosa-4)" />
      ))}
    </div>
  );
}

function Avatar({
  src,
  initials,
  fallbackBg = "var(--azul-1)",
}: {
  src: string;
  initials: string;
  fallbackBg?: string;
}) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: fallbackBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 800,
          fontSize: "var(--text-small)",
          color: "var(--white)",
          flexShrink: 0,
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={initials}
      onError={() => setErr(true)}
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        objectFit: "cover",
        flexShrink: 0,
      }}
    />
  );
}

interface CardProps {
  className: string;
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  initials: string;
  fallbackBg?: string;
  delay?: number;
}

function TestimonialCard({
  className,
  quote,
  name,
  title,
  avatarSrc,
  initials,
  fallbackBg,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      style={{
        background: "var(--gray-100)",
        borderRadius: 16,
        padding: 32,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stars />
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "var(--text-body)",
          color: "var(--gray-600)",
          lineHeight: 1.7,
          marginBottom: 24,
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar src={avatarSrc} initials={initials} fallbackBg={fallbackBg} />
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "var(--text-body)",
              color: "var(--gray-900)",
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "var(--text-small)",
              color: "var(--gray-400)",
            }}
          >
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function StatsCard({ className }: { className: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      style={{
        background: "var(--azul-1)",
        borderRadius: 16,
        padding: 32,
        color: "var(--white)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "var(--text-small)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          opacity: 0.85,
          marginBottom: 8,
        }}
      >
        Ao longo de 15 anos, trabalhei com
      </p>
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 800,
          fontStretch: "condensed",
          fontSize: "var(--text-h1)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        20+
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "var(--text-body)",
        }}
      >
        marcas atendidas
      </p>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.3)",
          margin: "16px 0",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "var(--text-small)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          opacity: 0.85,
          marginBottom: 8,
        }}
      >
        entre elas
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          fontSize: "var(--text-small)",
          lineHeight: 1.6,
          opacity: 0.9,
        }}
      >
        Mondelez · Mars · Heineken · Danone
        <br />
        Coca-Cola · BNP Paribas · Roche
        <br />
        Magazine Luiza · Mercedes-Benz
      </p>
    </motion.div>
  );
}

/* ── main section ───────────────────────────────────────── */

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      style={{
        background: "var(--white)",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      <div className="page-container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            fontStretch: "condensed",
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            fontSize: "var(--text-h3)",
            color: "var(--gray-900)",
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          O QUE DIZEM
          <br />
          SOBRE O MEU TRABALHO
        </motion.h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--gray-600)",
            marginTop: "-1rem",
            marginBottom: "var(--space-xl)",
          }}
        >
          Veja o que meus clientes compartilharam sobre a experiência de
          trabalhar comigo. A confiança e a satisfação deles me motivam a
          continuar entregando designs que geram impacto real.
        </p>

        <div className="testimonials-grid">
          {/* A — Renan Finco (tall, spans 3 rows) */}
          <TestimonialCard
            className="tcard-a"
            quote="Trabalhei com o Sérgio por mais de 10 anos na PontoPPT como diretor de arte. Nossa parceria foi fundamental no desenvolvimento de direções de arte e apresentações de alto impacto para diversos clientes. O Sérgio é um profissional extremamente criativo, com um talento especial para criar apresentações profissionais incríveis e soluções práticas que sempre se destacam. Além de ser um ótimo líder e parceiro de equipe, sempre focado em atender demandas e prazos."
            name="Renan Finco"
            title="Diretor de Arte & Especialista em Apresentações"
            avatarSrc="/images/depoimentos/renan.jpg"
            initials="RF"
            fallbackBg="var(--azul-1)"
            delay={0}
          />

          {/* B — Carolina Monteiro */}
          <TestimonialCard
            className="tcard-b"
            quote="Você foi sensacional na construção do material que levamos ao Stellato e Juan. Ficou MUITO bom — o Stellato gostou e ficou claro para as discussões."
            name="Carolina Monteiro"
            title="Gerente de Serviço ao Cliente"
            avatarSrc="/images/depoimentos/carolina.jpg"
            initials="CM"
            fallbackBg="var(--azul-1)"
            delay={0.1}
          />

          {/* C — Ricardo Ferraz */}
          <TestimonialCard
            className="tcard-c"
            quote="Uma das melhores apresentações suas… Você é impressionante… Parabéns!"
            name="Ricardo Ferraz"
            title="Gerente de Qualidade"
            avatarSrc="/images/depoimentos/ricardo.jpg"
            initials="RF"
            fallbackBg="var(--roxo-1)"
            delay={0.2}
          />

          {/* D — Julia Fernandes (tall, spans 2 rows) */}
          <TestimonialCard
            className="tcard-d"
            quote="Você é muito bom! De verdade! Toda vez que vemos algum documento novo seu, nos impressionamos! Parabéns!"
            name="Julia Fernandes"
            title="Analista de Telecom"
            avatarSrc="/images/depoimentos/julia.jpg"
            initials="JF"
            fallbackBg="var(--verde-1)"
            delay={0.1}
          />

          {/* E — Alexandre Costa */}
          <TestimonialCard
            className="tcard-e"
            quote="Não chegou, mas você tá de parabéns pela iniciativa, mano! Ótimo trabalho."
            name="Alexandre Costa"
            title="Coordenador de Telecom"
            avatarSrc="/images/depoimentos/alexandre.jpg"
            initials="AC"
            fallbackBg="var(--roxo-1)"
            delay={0.2}
          />

          {/* F — Stats card (blue, no stars/avatar) */}
          <StatsCard className="tcard-f" />
        </div>
      </div>
    </section>
  );
}
