"use client";

import { useEffect } from "react";

export default function Manifesto() {
  useEffect(() => {
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;
    const remap = (
      v: number,
      [inA, inB]: [number, number],
      [outA, outB]: [number, number]
    ) => lerp(outA, outB, clamp((v - inA) / (inB - inA), 0, 1));
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const manifestoDesktop    = document.getElementById("manifestoDesktop");
    const manifestoSticky     = document.getElementById("manifestoSticky");
    const manifestoRail       = document.getElementById("manifestoRail");
    const manifestoOverlayRail = document.getElementById("manifestoOverlayRail");

    if (!manifestoDesktop) return;

    const PANEL_COLORS: [number, number, number][] = [
      [216, 223,  32],
      [  0, 168, 217],
      [230, 201, 187],
      [127,  94,  60],
    ];

    function interpolatePanelColor(t: number) {
      const tt = clamp(t, 0, 1) * 3;
      const i  = Math.min(2, Math.floor(tt));
      const local = tt - i;
      const a = PANEL_COLORS[i], b = PANEL_COLORS[i + 1];
      const r  = Math.round(lerp(a[0], b[0], local));
      const g  = Math.round(lerp(a[1], b[1], local));
      const bl = Math.round(lerp(a[2], b[2], local));
      return `rgb(${r}, ${g}, ${bl})`;
    }

    function updateManifesto() {
      if (window.innerWidth < 1024) return;

      const rect     = manifestoDesktop!.getBoundingClientRect();
      const total    = manifestoDesktop!.offsetHeight - window.innerHeight;
      const progress = clamp(-rect.top / total, 0, 1);

      const preProgress = clamp(1 - rect.top / window.innerHeight, 0, 1);

      const introEnd  = 0.07;
      const fadeEnd   = 0.14;
      const revealEnd = 0.28;
      const restStart = 0.85;

      const preStretch  = lerp(0.10, 0.55, easeOutCubic(preProgress));
      const mainStretch = lerp(0.55, 1,    easeOutCubic(remap(progress, [0, introEnd], [0, 1])));
      const stretch     = progress > 0 ? mainStretch : preStretch;
      const svgOpacity  = lerp(1, 0.4, remap(progress, [introEnd, fadeEnd], [0, 1]));

      const root = document.documentElement;
      root.style.setProperty("--stretch",     stretch.toFixed(4));
      root.style.setProperty("--svg-opacity", svgOpacity.toFixed(3));

      const revealP     = remap(progress, [fadeEnd, revealEnd], [0, 1]);
      const stagger     = 0.18;
      const lineDuration = 1 - stagger * 3;
      for (let i = 0; i < 4; i++) {
        const t0 = i * stagger;
        const v  = easeOutCubic(remap(revealP, [t0, t0 + lineDuration], [0, 1]));
        root.style.setProperty(`--ln-${i}`, v.toFixed(3));
      }

      const railP    = clamp(remap(progress, [revealEnd, restStart], [0, 1]), 0, 1);
      const contentX = lerp(0, -300, railP);
      if (manifestoRail) manifestoRail.style.transform = `translateX(${contentX}vw)`;

      if (manifestoOverlayRail) {
        const overlayX = lerp(110, -490, railP);
        manifestoOverlayRail.style.transform = `translateX(${overlayX}vw)`;
      }

      if (manifestoSticky) {
        manifestoSticky.style.backgroundColor = interpolatePanelColor(railP);
      }
    }

    let pending = false;
    function onScroll() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => { updateManifesto(); pending = false; });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      const root = document.documentElement;
      root.style.removeProperty("--stretch");
      root.style.removeProperty("--svg-opacity");
      for (let i = 0; i < 4; i++) root.style.removeProperty(`--ln-${i}`);
    };
  }, []);

  return (
    <section id="manifesto" aria-label="Manifesto — A clareza como diferencial">

      {/* ─── DESKTOP: sticky horizontal scroll ─── */}
      <div className="manifesto-desktop" id="manifestoDesktop">
        <div className="manifesto-sticky" id="manifestoSticky">

          {/* Layer 1: Content rail — 400vw, 4 painéis lado a lado */}
          <div className="manifesto-rail" id="manifestoRail">

            {/* Panel 1 — SVG "INVISIBILIDADE" estica + texto revela linha por linha */}
            <div className="panel panel-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="bg-asset" src="/images/Asset%202.svg" alt="" aria-hidden="true" />
              <div className="panel-text panel-1-text" aria-label="É o caminho mais curto para o fim de uma grande ideia">
                <p>
                  <span className="ln" data-ln="0">É O CAMINHO</span>
                  <span className="ln" data-ln="1">MAIS CURTO</span>
                  <span className="ln" data-ln="2">PARA O FIM DE UMA</span>
                  <span className="ln" data-ln="3">GRANDE IDEIA</span>
                </p>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="panel panel-2">
              <div className="panel-text">
                <p>BOAS IDEIAS<br />NÃO MORREM<br />POR FALTA<br />DE VALOR</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="overlay-asset" src="/images/Asset%203.svg" alt="Elas morrem por falta de clareza" />
            </div>

            {/* Panel 3 */}
            <div className="panel panel-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="center-asset" src="/images/Asset%205.svg" alt="Eu acredito que toda grande ideia merece ser vista e entendida" />
            </div>

            {/* Panel 4 */}
            <div className="panel panel-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="center-asset" src="/images/Asset%206.svg" alt="É barulho. E barulho mata ideias." />
            </div>
          </div>

          {/* Layer 2: Parallax overlay rail — anda 2× mais rápido */}
          <div className="manifesto-overlay-rail" id="manifestoOverlayRail" aria-hidden="true">
            <div className="overlay-slot overlay-slot-1">
              <div className="overlay-img" style={{ transform: "rotate(-4deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/vaca_marrom.png" alt="" />
              </div>
            </div>
            <div className="overlay-slot overlay-slot-2">
              <div className="overlay-img" style={{ transform: "rotate(7deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ideia_enterrada.png" alt="" />
              </div>
            </div>
            <div className="overlay-slot overlay-slot-3">
              <div className="overlay-img" style={{ transform: "rotate(5deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/chapeu_dinheiro.png" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── MOBILE: empilhado vertical ─── */}
      <div className="manifesto-mobile">
        <div className="panel panel-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bg-asset" src="/images/Asset%202.svg" alt="" aria-hidden="true" />
          <div className="panel-text">
            <p>É O CAMINHO<br />MAIS CURTO<br />PARA O FIM DE UMA<br />GRANDE IDEIA</p>
          </div>
        </div>
        <div className="panel panel-2">
          <div className="panel-text">
            <p>BOAS IDEIAS<br />NÃO MORREM<br />POR FALTA<br />DE VALOR</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="overlay-asset" src="/images/Asset%203.svg" alt="Elas morrem por falta de clareza" />
        </div>
        <div className="panel panel-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="center-asset" src="/images/Asset%205.svg" alt="Eu acredito que toda grande ideia merece ser vista e entendida" />
        </div>
        <div className="panel panel-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="center-asset" src="/images/Asset%206.svg" alt="É barulho. E barulho mata ideias." />
        </div>
      </div>

    </section>
  );
}
