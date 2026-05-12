import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Em Construção — Sérgio Paula",
  robots: "noindex, nofollow",
};

export default function EmConstrucaoPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      
      <style>{`
        .em-main { flex: 1; display: flex; align-items: center; padding: 64px clamp(1.5rem, 5vw, 4rem) 0; min-height: 100vh; background: var(--white); }
        .em-wrapper { display: flex; align-items: center; gap: clamp(3rem, 8vw, 8rem); max-width: 1200px; margin: 0 auto; width: 100%; padding: clamp(2rem, 6vh, 5rem) 0; }
        .em-left { flex: 1; min-width: 0; max-width: 540px; }
        .em-tag { display: block; font-family: 'Work Sans', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.875rem; }
        .em-h1 { font-family: 'Open Sans', sans-serif; font-weight: 800; font-stretch: condensed; text-transform: uppercase; font-size: clamp(2.75rem, 7vw, 5rem); line-height: 1; letter-spacing: -0.02em; color: var(--gray-900); margin-bottom: 1.75rem; }
        .em-body-main { font-family: 'Work Sans', sans-serif; font-weight: 400; font-size: 1.125rem; line-height: 1.7; color: var(--gray-800); margin-bottom: 0.875rem; }
        .em-body-accent { font-family: 'Work Sans', sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.7; color: var(--azul-1); margin-bottom: 2.25rem; }
        .em-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 40px; border-radius: 9999px; background: var(--azul-1); color: var(--white); font-family: 'Work Sans', sans-serif; font-weight: 600; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.06em; text-decoration: none; transition: transform 0.25s ease, box-shadow 0.25s ease; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
        .em-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0, 168, 217, 0.35); }
        .em-btn:focus-visible { outline: 2px solid var(--azul-1); outline-offset: 4px; }
        .em-right { flex: 0 0 auto; width: clamp(220px, 36vw, 420px); display: flex; align-items: center; justify-content: center; }
        .em-stack { position: relative; width: 100%; height: clamp(140px, 24vw, 270px); }
        .em-slide { position: absolute; width: 82%; aspect-ratio: 16 / 9; border-radius: 6px; left: 50%; top: 50%; }
        .em-s1 { background: #c7ecf7; transform: translate(-50%, -50%) rotate(-7deg) translate(-14px, 20px); z-index: 1; animation: float1 5s ease-in-out infinite; }
        .em-s2 { background: var(--roxo-1); opacity: 0.72; transform: translate(-50%, -50%) rotate(-2deg) translate(6px, 8px); z-index: 2; animation: float2 5s ease-in-out infinite 0.45s; }
        .em-s3 { background: var(--azul-1); transform: translate(-50%, -50%) rotate(4deg) translate(0px, 0px); z-index: 3; animation: float3 5s ease-in-out infinite 0.9s; }
        @keyframes float1 { 0%, 100% { transform: translate(-50%, -50%) rotate(-7deg) translate(-14px, 20px); } 50% { transform: translate(-50%, -50%) rotate(-7deg) translate(-14px, 10px); } }
        @keyframes float2 { 0%, 100% { transform: translate(-50%, -50%) rotate(-2deg) translate(6px, 8px); } 50% { transform: translate(-50%, -50%) rotate(-2deg) translate(6px, -2px); } }
        @keyframes float3 { 0%, 100% { transform: translate(-50%, -50%) rotate(4deg) translate(0px, 0px); } 50% { transform: translate(-50%, -50%) rotate(4deg) translate(0px, -10px); } }
        @media (prefers-reduced-motion: reduce) { .em-s1, .em-s2, .em-s3 { animation: none; } .em-btn { transition: none; } .em-btn:hover { transform: none; box-shadow: 0 2px 8px rgba(0, 168, 217, 0.3); } }
        @media (max-width: 768px) { .em-wrapper { flex-direction: column-reverse; gap: 2.5rem; align-items: flex-start; } .em-right { width: 100%; max-width: 360px; align-self: center; } .em-left { max-width: none; } }
      `}</style>
      
      <main className="em-main">
        <div className="em-wrapper">
          <div className="em-left">
            <span className="em-tag" aria-label="Status: em construção">Em Construção</span>
            <h1 className="em-h1">Essa parte<br/>ainda está<br/>ganhando<br/>forma.</h1>
            <p className="em-body-main">Cada projeto aqui dentro tem uma história. Estou organizando tudo com cuidado para apresentar da forma que merece.</p>
            <p className="em-body-accent">Mas se você quiser dar uma espiada<br/>no que já foi feito&hellip;</p>
            <Link href="/projetos" className="em-btn" aria-label="Ver apresentações corporativas anteriores">
              Ver Apresentações <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="em-right" aria-hidden="true" role="presentation">
            <div className="em-stack">
              <div className="em-slide em-s1"></div>
              <div className="em-slide em-s2"></div>
              <div className="em-slide em-s3"></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
