"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ── Customize here ───────────────────────────────────────
const BG_COLOR = "var(--black)";
const SVG_FILL = "var(--white)";

// ── Component ────────────────────────────────────────────
// Place this directly after your hero section.
//
// How it works:
//   • The trigger wrapper (height: 100vh) creates scroll space.
//   • scrollYProgress = 0 when the trigger's top hits the viewport bottom.
//   • scrollYProgress = 1 when the trigger's top hits the viewport top.
//   • The sticky inner div grows from 0 → 100vh over that 100vh of scroll.
//   • The SVG height is "80%" — pure CSS — so it always fills 80% of
//     whatever the container height is. No separate motion value needed.
//   • preserveAspectRatio="none" lets the glyphs stretch vertically as
//     the container grows, creating the "pulled downward" word effect.
export default function InvisibilidadeReveal() {
  const triggerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "start start"],
  });

  // Drives the container's height from 0 → full viewport height.
  const containerHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", "100vh"]
  );

  return (
    <>
      {/* ── Section 1: Hero (replace with your own) ─────── */}
      <section
        style={{
          height: "100vh",
          background: "var(--gray-100)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Your hero content */}
      </section>

      {/* ── Section 2: Scroll trigger ────────────────────────
          height: 100vh = the scroll distance for the full animation.
          The sticky child is anchored to top: 0 and grows downward
          as the trigger scrolls into view.
      ───────────────────────────────────────────────────── */}
      <div ref={triggerRef} style={{ height: "100vh", position: "relative" }}>
        <motion.div
          style={{
            position: "sticky",
            top: 0,
            height: containerHeight,
            overflow: "hidden",
            background: BG_COLOR,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*
            width:  100vw  — always full viewport width
            height: 80%    — always 80 % of the container (CSS, not motion)
            The SVG grows WITH the container, not independently.
            preserveAspectRatio="none" is the key: the glyphs stretch
            vertically to fill whatever height the container gives them.
          */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1192.8 141.45"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              display: "block",
              width: "100vw",
              height: "80%",
              fill: SVG_FILL,
            }}
          >
            <g>
              <path d="M0,139.57V1.98h32.75v137.59H0Z" />
              <path d="M159.24,139.57h-38.21l-35.86-85.55h-.75c.38,5.02.67,9.68.89,13.98.22,4.3.38,8.19.47,11.67.09,3.48.14,6.54.14,9.18v50.73h-30.4V1.98h37.93l35.67,83.2h.75c-.25-4.64-.47-8.97-.66-12.99-.19-4.01-.35-7.72-.47-11.11-.13-3.39-.19-6.46-.19-9.22V1.98h30.68v137.59Z" />
              <path d="M278.48,1.98l-35.1,137.59h-38.12L170.53,1.98h34.35l13.83,67.86c.63,3.01,1.33,6.71,2.12,11.11.78,4.39,1.49,8.75,2.12,13.08.63,4.33,1.07,7.87,1.32,10.63.38-2.76.89-6.29,1.55-10.59.66-4.3,1.38-8.63,2.16-12.99.78-4.36,1.49-8.05,2.12-11.06L244.13,1.98h34.35Z" />
              <path d="M289.87,139.57V1.98h32.75v137.59h-32.75Z" />
              <path d="M416.74,97.78c0,8.53-1.77,16.08-5.32,22.63-3.55,6.56-8.55,11.7-15.01,15.43-6.46,3.73-14.09,5.6-22.87,5.6-3.95,0-7.8-.27-11.53-.8-3.73-.53-7.45-1.43-11.15-2.68-3.7-1.25-7.53-2.98-11.48-5.18v-33.13c5.4,3.64,10.93,6.48,16.61,8.52,5.68,2.04,10.87,3.06,15.58,3.06,2.7,0,4.91-.44,6.64-1.32,1.72-.88,3.01-2.09,3.86-3.62.85-1.54,1.27-3.31,1.27-5.32s-.35-3.87-1.04-5.6c-.69-1.72-2.23-3.64-4.61-5.74-2.39-2.1-6.09-4.72-11.11-7.86-4.02-2.57-7.66-5.16-10.92-7.76-3.26-2.6-6.04-5.46-8.33-8.56-2.29-3.11-4.05-6.7-5.27-10.78-1.22-4.08-1.84-8.88-1.84-14.4,0-8.16,1.6-15.25,4.8-21.27s7.91-10.7,14.12-14.02c6.21-3.33,13.83-4.99,22.87-4.99,5.71,0,11.45.82,17.22,2.45,5.77,1.63,11.61,4.11,17.51,7.43l-8.75,28.71c-4.77-3.01-9.19-5.24-13.27-6.68-4.08-1.44-7.87-2.16-11.39-2.16-2.32,0-4.22.39-5.69,1.18-1.47.79-2.56,1.84-3.25,3.15-.69,1.32-1.04,2.82-1.04,4.52,0,2.45.41,4.55,1.22,6.31.81,1.76,2.49,3.62,5.04,5.6s6.41,4.56,11.62,7.76c5.52,3.39,10.18,6.96,13.98,10.73,3.8,3.76,6.67,7.97,8.61,12.61,1.94,4.64,2.92,10.04,2.92,16.19Z" />
              <path d="M432.92,139.57V1.98h32.75v137.59h-32.75Z" />
              <path d="M488.45,1.98h39.9c15.5,0,27.01,2.76,34.54,8.28,7.53,5.52,11.29,14.18,11.29,25.97,0,5.08-.75,9.71-2.26,13.88-1.51,4.17-3.59,7.67-6.26,10.49-2.67,2.82-5.79,4.8-9.36,5.93v.94c4.77,1.44,8.63,3.59,11.58,6.45,2.95,2.86,5.13,6.4,6.54,10.63,1.41,4.23,2.12,9.14,2.12,14.73,0,8.28-1.79,15.43-5.36,21.46-3.58,6.02-8.67,10.67-15.29,13.93-6.62,3.26-14.51,4.89-23.67,4.89h-43.76V1.98ZM521.2,55.53h7.15c4.08,0,7.21-1.19,9.41-3.58,2.2-2.38,3.29-5.93,3.29-10.64,0-4.27-1.1-7.47-3.29-9.6-2.2-2.13-5.52-3.2-9.98-3.2h-6.59v27.01ZM521.2,81.13v31.25h8.47c4.45,0,7.78-1.3,9.98-3.91,2.2-2.6,3.29-6.57,3.29-11.91,0-3.26-.52-6.04-1.55-8.33-1.04-2.29-2.57-4.05-4.61-5.27-2.04-1.22-4.53-1.83-7.48-1.83h-8.09Z" />
              <path d="M596.02,139.57V1.98h32.75v137.59h-32.75Z" />
              <path d="M651.55,139.57V1.98h32.75v109.45h35.86v28.14h-68.61Z" />
              <path d="M734.09,139.57V1.98h32.75v137.59h-32.75Z" />
              <path d="M883.82,67.86c0,15.25-2.31,28.2-6.92,38.87-4.61,10.67-11.28,18.81-20,24.42-8.72,5.62-19.33,8.42-31.81,8.42h-35.48V1.98h37.74c12.05,0,22.27,2.54,30.68,7.62,8.41,5.08,14.81,12.52,19.2,22.3,4.39,9.79,6.59,21.77,6.59,35.95ZM849.94,69.17c0-9.29-.86-16.78-2.59-22.49-1.73-5.71-4.3-9.87-7.72-12.47-3.42-2.6-7.7-3.91-12.85-3.91h-4.42v80.75h2.54c8.66,0,15-3.39,19.01-10.16,4.01-6.78,6.02-17.35,6.02-31.72Z" />
              <path d="M966.92,139.57l-5.18-26.82h-29.74l-5.18,26.82h-35.48L924.85,1.98h43.2l33.98,137.59h-35.1ZM956.66,84.61l-5.55-30.78c-.63-3.45-1.21-6.81-1.74-10.07-.53-3.26-1-6.38-1.41-9.36-.41-2.98-.77-5.76-1.08-8.33-.25,2.45-.58,5.15-.99,8.09-.41,2.95-.89,6.04-1.46,9.27-.56,3.23-1.16,6.57-1.79,10.02l-5.83,31.15h19.86Z" />
              <path d="M1107.62,67.86c0,15.25-2.31,28.2-6.92,38.87-4.61,10.67-11.28,18.81-20,24.42-8.72,5.62-19.33,8.42-31.81,8.42h-35.48V1.98h37.74c12.05,0,22.27,2.54,30.68,7.62,8.41,5.08,14.81,12.52,19.2,22.3,4.39,9.79,6.59,21.77,6.59,35.95ZM1073.74,69.17c0-9.29-.86-16.78-2.59-22.49-1.73-5.71-4.3-9.87-7.72-12.47-3.42-2.6-7.7-3.91-12.85-3.91h-4.42v80.75h2.54c8.66,0,15-3.39,19.01-10.16,4.01-6.78,6.02-17.35,6.02-31.72Z" />
              <path d="M1192.8,139.57h-66.26V1.98h66.26v27.76h-33.5v24.85h31.06v27.76h-31.06v29.08h33.5v28.14Z" />
            </g>
          </svg>
        </motion.div>
      </div>
    </>
  );
}
