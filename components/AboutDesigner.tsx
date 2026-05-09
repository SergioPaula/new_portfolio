"use client";

import { motion } from "framer-motion";
import FlipCard from "./FlipCard";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function AboutDesigner() {
  return (
    <section
      id="sobre-trabalho"
      style={{
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      <div
        style={{
          gridTemplateColumns: "1fr 360px 1fr",
          gridTemplateRows: "1fr",
          alignItems: "center",
          gap: "clamp(2rem, 4vw, 5rem)",
        }}
        className="page-container flex flex-col lg:grid"
      >
        {/* ── Left text ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ order: 1 }}
        >

          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontStretch: "condensed",
              textTransform: "uppercase",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#171717",
            }}
          >
            MEU TRABALHO É
            <br />
            ELIMINAR O RUÍDO.
          </p>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontStretch: "condensed",
              textTransform: "uppercase",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#a3a3a3",
              marginTop: "1.25rem",
            }}
          >
            ENCONTRAR O FIO
            <br />
            CONDUTOR
          </p>
        </motion.div>

        {/* ── Center card (Desktop Placeholder / Mobile static) ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.75rem",
            order: 2,
          }}
          className="lg:invisible" // Invisible on desktop to leave space for the sticky card. Visible on mobile.
        >
          {/* We only render FlipCard on mobile to preserve the experience if they don't have the sticky animation */}
          <div className="block lg:hidden">
            <FlipCard />
          </div>

          {/* Olá! icon - We render it here only for mobile. The desktop one will be in the sticky layer */}
          <div
            className="block lg:hidden"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "var(--roxo-1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              color: "#fff",
              fontSize: "1.25rem",
              marginTop: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            Olá!
          </div>
        </motion.div>



        {/* ── Right text ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.25 }}
          style={{ order: 3 }}
        >
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontStretch: "condensed",
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              color: "#171717",
            }}
          >
            COMO
            <br />
            DESIGNER
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "#999",
              lineHeight: 1.7,
              marginTop: "1.5rem",
            }}
          >
            construo narrativas que tenham...
            <br />
            <strong style={{ color: "#171717", fontWeight: 600 }}>
              COMEÇO, MEIO E FIM
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
