"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";
import AboutDesigner from "./AboutDesigner";
import Services from "./Services";
import AboutMe from "./AboutMe";

export default function StorySequence() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (!lenis) return;
    const onScroll = () => {};
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, []);

  // Scroll-driven position transforms
  const xOffset = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0px", "0px", "350px", "350px", "320px", "320px"]
  );

  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0px", "0px", "-40px", "-40px", "0px", "0px"]
  );

  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, 5, 5, 0, 0]
  );

  // "Olá!" badge fades out after first 15% of scroll
  const olaOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0, 0]);

  // Tween-driven flip — NOT scroll-driven; fires once per section change
  const rotateY = useMotionValue(0);
  const currentPhase = useRef(0);
  const flipAnim = useRef<{ stop: () => void } | null>(null);


  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const phase = value < 0.2 ? 0 : value < 0.6 ? 1 : 2;
    if (phase === currentPhase.current) return;
    currentPhase.current = phase;

    const targets = [0, -180, -360];
    flipAnim.current?.stop();
    flipAnim.current = animate(rotateY, targets[phase], {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    });
  });

  return (
    <section ref={containerRef} style={{ position: "relative" }}>
      {/* ── Desktop Sticky Overlay ── */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: "none",
          zIndex: 40,
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -238,
              marginLeft: -170,
              x: xOffset,
              y: yOffset,
              rotateZ,
              width: 340,
              height: 476,
              borderRadius: 24,
              willChange: "transform",
            }}
          >
            {/* 3D perspective wrapper — perspective must be on the PARENT of the flipping element */}
            <div style={{ width: "100%", height: "100%", perspective: "1200px" }}>
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  rotateY,
                  willChange: "transform",
                }}
              >
                {/* Face 1 — sergio_desenho (visible at 0° and −360°) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 24,
                    overflow: "hidden",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                    background: "#e6c9bb",
                  }}
                >
                  <Image
                    src="/images/sergio_desenho.jpeg"
                    alt="Sérgio Paula"
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                </div>

                {/* Face 2 — ilustra_manga (visible at −180°) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 24,
                    overflow: "hidden",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(-180deg)",
                    background: "#fff",
                  }}
                >
                  <Image
                    src="/images/ilustra_manga_sergio.png"
                    alt="Sérgio Paula"
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                </div>
              </motion.div>
            </div>

            {/* Olá! badge — overlaps bottom-left corner of the card */}
            <motion.div
              style={{
                position: "absolute",
                bottom: -16,
                left: -16,
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#9979da",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: "#fff",
                fontSize: "14px",
                opacity: olaOpacity,
                willChange: "opacity",
                zIndex: 10,
              }}
            >
              Olá!
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Content Sections ── */}
      <AboutDesigner />
      <Services />
      <AboutMe />
    </section>
  );
}
