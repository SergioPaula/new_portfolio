"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

/*
 * Triangular drum (3 faces, each 340px wide).
 * Apothem = w / (2 * tan(60°)) = 340 / 3.464 ≈ 98px
 */
const APOTHEM = 98;

export default function FlipCard() {
  const [mounted, setMounted] = useState(false);
  const [face, setFace] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setFace((p) => (p + 1) % 3), 3500);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  // All hooks declared above — safe to return early now
  if (!mounted) return null;

  const drumY = face * -120;

  return (
    <div style={{ position: "relative", width: 340, height: 476 }}>
      {/* Perspective wrapper */}
      <div style={{ width: "100%", height: "100%", perspective: "1200px" }}>
        {/* Drum — rotates to reveal each face */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `rotateY(${drumY}deg)`,
            transition: shouldReduceMotion
              ? "none"
              : "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Face 1 — editorial illustration */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              overflow: "hidden",
              backfaceVisibility: "hidden",
              transform: `rotateY(0deg) translateZ(${APOTHEM}px)`,
            }}
          >
            <Image
              src="/images/sergio_desenho.jpeg"
              alt="Sérgio Paula — ilustração editorial"
              fill
              className="object-cover"
              sizes="350px"
            />
          </div>

          {/* Face 2 — manga illustration */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              overflow: "hidden",
              backfaceVisibility: "hidden",
              transform: `rotateY(120deg) translateZ(${APOTHEM}px)`,
            }}
          >
            <Image
              src="/images/ilustra_manga_sergio.png"
              alt="Sérgio Paula — ilustração mangá"
              fill
              className="object-cover"
              sizes="350px"
            />
          </div>

          {/* Face 3 — stats */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              overflow: "hidden",
              backfaceVisibility: "hidden",
              transform: `rotateY(240deg) translateZ(${APOTHEM}px)`,
              background: "var(--azul-1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.25rem",
              padding: "2.5rem",
            }}
          >
            {[
              { num: "15+", label: "Anos de Experiência" },
              { num: "200+", label: "Projetos Realizados" },
              { num: "50+", label: "Clientes Atendidos" },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: "center", color: "var(--white)" }}>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontStretch: "condensed",
                    fontSize: "var(--text-h2)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-micro)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.85,
                    marginTop: "0.35rem",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
