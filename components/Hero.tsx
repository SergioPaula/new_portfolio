"use client";

import { motion } from "framer-motion";
import { InstagramLogo, LinkedinLogo, At, WhatsappLogo } from "@phosphor-icons/react";

const socialLinks = [
  {
    icon: InstagramLogo,
    label: "Instagram",
    href: "https://www.instagram.com/serginho_paula/",
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sergiopaula-designer",
  },
  {
    icon: At,
    label: "E-mail",
    href: "#contato",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    href: "https://wa.me/5511949632858",
  },
];

/* Stagger container */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {

  return (
    <section
      id="home"
      aria-label="Apresentação"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "var(--azul-1)",
      }}
    >
      {/* ─── Fixed left sidebar — social icons (desktop only) ─── */}
      <aside
        aria-label="Redes sociais"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-8"
      >
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("#") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00a8d9] rounded"
            style={{ color: "#000000" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#d8df20")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#000000")
            }
          >
            <Icon size={28} weight="regular" aria-hidden={true} />
          </a>
        ))}
      </aside>

      {/* ─── Main hero content ─── */}
      <motion.div
        className="page-container flex flex-col items-center text-center py-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Pill tags */}
        <motion.div
          variants={itemVariant}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {["BRAGANÇA PAULISTA, SÃO PAULO", "2K26"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white"
              style={{
                border: "1px solid rgba(255,255,255,0.8)",
                fontFamily: "var(--font-body)",
                letterSpacing: "var(--tracking-wide)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariant}
          className="font-display text-white mb-6"
          style={{
            fontSize: "clamp(3rem, 10vw, 6rem)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontStretch: "condensed",
            textTransform: "uppercase",
          }}
        >
          SERGIO PAULA
          <br />
          DESIGNER GRÁFICO
          <br />
          &amp; DIGITAL
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariant}
          className="text-white font-semibold uppercase max-w-2xl"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
            letterSpacing: "var(--tracking-wide)",
            fontWeight: 600,
          }}
        >
          TRANSFORMO IDEIAS EM MENSAGENS CLARAS,
          <br className="hidden sm:block" />
          {" "}IMPOSSÍVEIS DE IGNORAR
        </motion.p>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
