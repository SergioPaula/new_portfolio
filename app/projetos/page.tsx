"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
    {
      slug: "achederma", name: "Achederma",
      cover: "assets/capas/achederma.avif",
      slides: ["assets/img/slides/Slide1.avif","assets/img/slides/Slide2.avif","assets/img/slides/Slide3.avif"]
    },
    {
      slug: "aptar", name: "Aptar",
      cover: "assets/capas/aptar.avif",
      slides: ["assets/img/slides/Slide97.avif","assets/img/slides/Slide98.avif","assets/img/slides/Slide99.avif","assets/img/slides/Slide100.avif","assets/img/slides/Slide101.avif","assets/img/slides/Slide102.avif","assets/img/slides/Slide103.avif"]
    },
    {
      slug: "bnp", name: "BNP Paribas",
      cover: "assets/capas/bnp.avif",
      slides: ["assets/img/slides/Slide118.avif","assets/img/slides/Slide119.avif","assets/img/slides/Slide120.avif","assets/img/slides/Slide121.avif","assets/img/slides/Slide122.avif","assets/img/slides/Slide123.avif","assets/img/slides/Slide124.avif"]
    },
    {
      slug: "bvcontabil", name: "BV Contábil",
      cover: "assets/capas/bvcontabil.avif",
      slides: ["assets/img/slides/Slide13.avif","assets/img/slides/Slide14.avif","assets/img/slides/Slide15.avif"]
    },
    {
      slug: "cbsocial", name: "Club Social",
      cover: "assets/capas/cbsocial.avif",
      slides: ["assets/img/slides/Slide44.avif","assets/img/slides/Slide45.avif","assets/img/slides/Slide46.avif","assets/img/slides/Slide47.avif"]
    },
    {
      slug: "cpfl", name: "CPFL",
      cover: "assets/capas/cpfl.avif",
      slides: ["assets/img/slides/Slide112.avif","assets/img/slides/Slide113.avif","assets/img/slides/Slide114.avif","assets/img/slides/Slide115.avif","assets/img/slides/Slide116.avif"]
    },
    {
      slug: "danone", name: "Danone",
      cover: "assets/capas/danone.avif",
      slides: ["assets/img/slides/Slide195.avif","assets/img/slides/Slide196.avif","assets/img/slides/Slide197.avif","assets/img/slides/Slide198.avif","assets/img/slides/Slide199.avif","assets/img/slides/Slide200.avif","assets/img/slides/Slide201.avif","assets/img/slides/Slide202.avif"]
    },
    {
      slug: "delvale", name: "Delvale",
      cover: "assets/capas/delvale.avif",
      slides: ["assets/img/slides/Slide190.avif","assets/img/slides/Slide191.avif","assets/img/slides/Slide192.avif","assets/img/slides/Slide193.avif"]
    },
    {
      slug: "devassa", name: "Devassa",
      cover: "assets/capas/devassa.avif",
      slides: ["assets/img/slides/Slide137.avif","assets/img/slides/Slide138.avif","assets/img/slides/Slide139.avif","assets/img/slides/Slide140.avif","assets/img/slides/Slide141.avif","assets/img/slides/Slide142.avif","assets/img/slides/Slide143.avif"]
    },
    {
      slug: "fanta", name: "Fanta",
      cover: "assets/capas/fanta.avif",
      slides: ["assets/img/slides/Slide5.avif","assets/img/slides/Slide6.avif","assets/img/slides/Slide7.avif","assets/img/slides/Slide8.avif"]
    },
    {
      slug: "fys", name: "FYS",
      cover: "assets/capas/fys.avif",
      slides: ["assets/img/slides/Slide145.avif","assets/img/slides/Slide146.avif","assets/img/slides/Slide147.avif","assets/img/slides/Slide148.avif","assets/img/slides/Slide149.avif"]
    },
    {
      slug: "gbmen", name: "GB Men",
      cover: "assets/capas/gbmen.avif",
      slides: ["assets/img/slides/Slide49.avif","assets/img/slides/Slide50.avif","assets/img/slides/Slide51.avif","assets/img/slides/Slide52.avif","assets/img/slides/Slide53.avif"]
    },
    {
      slug: "gerdau", name: "Gerdau",
      cover: "assets/capas/gerdau.avif",
      slides: ["assets/img/slides/Slide173.avif","assets/img/slides/Slide174.avif","assets/img/slides/Slide175.avif","assets/img/slides/Slide176.avif","assets/img/slides/Slide177.avif","assets/img/slides/Slide178.avif"]
    },
    {
      slug: "heineken", name: "Heineken",
      cover: "assets/capas/heineken.avif",
      slides: ["assets/img/slides/Slide151.avif","assets/img/slides/Slide152.avif","assets/img/slides/Slide153.avif","assets/img/slides/Slide154.avif"]
    },
    {
      slug: "lg", name: "LG",
      cover: "assets/capas/lg.avif",
      slides: ["assets/img/slides/Slide38.avif","assets/img/slides/Slide39.avif","assets/img/slides/Slide40.avif","assets/img/slides/Slide41.avif","assets/img/slides/Slide42.avif"]
    },
    {
      slug: "maglu", name: "Magalu",
      cover: "assets/capas/maglu.avif",
      slides: ["assets/img/slides/Slide86.avif","assets/img/slides/Slide87.avif","assets/img/slides/Slide88.avif","assets/img/slides/Slide89.avif"]
    },
    {
      slug: "mem", name: "MEM",
      cover: "assets/capas/mem.avif",
      slides: ["assets/img/slides/Slide56.avif","assets/img/slides/Slide57.avif","assets/img/slides/Slide105.avif","assets/img/slides/Slide106.avif","assets/img/slides/Slide107.avif","assets/img/slides/Slide58.avif","assets/img/slides/Slide59.avif","assets/img/slides/Slide60.avif","assets/img/slides/Slide109.avif","assets/img/slides/Slide110.avif"]
    },
    {
      slug: "mercedes", name: "Mercedes-Benz",
      cover: "assets/capas/mercedes.avif",
      slides: ["assets/img/slides/Slide62.avif","assets/img/slides/Slide63.avif","assets/img/slides/Slide64.avif","assets/img/slides/Slide65.avif","assets/img/slides/Slide66.avif","assets/img/slides/Slide67.avif","assets/img/slides/Slide68.avif","assets/img/slides/Slide69.avif"]
    },
    {
      slug: "mudee", name: "Mudee",
      cover: "assets/capas/mudee.avif",
      slides: ["assets/img/slides/Slide156.avif","assets/img/slides/Slide157.avif","assets/img/slides/Slide158.avif","assets/img/slides/Slide159.avif"]
    },
    {
      slug: "nutro", name: "Nutro",
      cover: "assets/capas/nutro.avif",
      slides: ["assets/img/slides/Slide91.avif","assets/img/slides/Slide92.avif","assets/img/slides/Slide93.avif","assets/img/slides/Slide94.avif","assets/img/slides/Slide95.avif"]
    },
    {
      slug: "pernod", name: "Pernod Ricard",
      cover: "assets/capas/pernod.avif",
      slides: ["assets/img/slides/Slide165.avif","assets/img/slides/Slide166.avif","assets/img/slides/Slide167.avif","assets/img/slides/Slide168.avif","assets/img/slides/Slide169.avif","assets/img/slides/Slide170.avif","assets/img/slides/Slide171.avif"]
    },
    {
      slug: "pronova", name: "Pronova",
      cover: "assets/capas/pronova.avif",
      slides: ["assets/img/slides/Slide131.avif","assets/img/slides/Slide132.avif","assets/img/slides/Slide133.avif","assets/img/slides/Slide134.avif","assets/img/slides/Slide135.avif"]
    },
    {
      slug: "roche", name: "Roche",
      cover: "assets/capas/roche.avif",
      slides: ["assets/img/slides/Slide180.avif","assets/img/slides/Slide181.avif","assets/img/slides/Slide182.avif","assets/img/slides/Slide183.avif"]
    },
    {
      slug: "sandoz", name: "Sandoz",
      cover: "assets/capas/sandoz.avif",
      slides: ["assets/img/slides/Slide71.avif","assets/img/slides/Slide72.avif","assets/img/slides/Slide73.avif","assets/img/slides/Slide74.avif","assets/img/slides/Slide75.avif","assets/img/slides/Slide76.avif","assets/img/slides/Slide77.avif","assets/img/slides/Slide78.avif","assets/img/slides/Slide79.avif"]
    },
    {
      slug: "sculptra", name: "Sculptra",
      cover: "assets/capas/sculptra.avif",
      slides: ["assets/capas/sculptra.avif"]
    },
    {
      slug: "sol", name: "Sol",
      cover: "assets/capas/sol.avif",
      slides: ["assets/img/slides/Slide161.avif","assets/img/slides/Slide162.avif","assets/img/slides/Slide163.avif"]
    },
    {
      slug: "ultra", name: "Ultra",
      cover: "assets/capas/ultra.avif",
      slides: ["assets/img/slides/Slide126.avif","assets/img/slides/Slide127.avif","assets/img/slides/Slide128.avif","assets/img/slides/Slide129.avif"]
    }
  ];

export default function ProjetosGalleryPage() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const activeProject = activeProjectIdx !== null ? projects[activeProjectIdx] : null;

  const closeModal = useCallback(() => {
    setActiveProjectIdx(null);
    document.body.style.overflow = '';
  }, []);

  const openModal = (idx: number) => {
    setActiveProjectIdx(idx);
    setActiveSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const goNext = useCallback(() => {
    if (activeProject && activeSlide < activeProject.slides.length - 1) {
      setActiveSlide(s => s + 1);
    }
  }, [activeProject, activeSlide]);

  const goPrev = useCallback(() => {
    if (activeProject && activeSlide > 0) {
      setActiveSlide(s => s - 1);
    }
  }, [activeProject, activeSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeProjectIdx === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectIdx, closeModal, goNext, goPrev]);

  return (
    <>
      <Navbar />
      <style>{`
        /* Minimal CSS required, as global styles handle colors/fonts */
        .hero-tag { display: block; font-family: 'Work Sans', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.875rem; }
        .hero-h1 { font-family: 'Open Sans', sans-serif; font-weight: 800; font-stretch: condensed; text-transform: uppercase; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1; letter-spacing: -0.02em; color: var(--gray-900); margin-bottom: 1.25rem; }
        .hero-subtitle { font-size: 1.125rem; font-weight: 400; color: var(--gray-400); line-height: 1.5; max-width: 520px; margin-bottom: 2.75rem; }
        .hero-divider { border: none; border-top: 1px solid var(--gray-200); }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; }
        .card { background: var(--white); border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
        .card:hover { transform: scale(1.02); }
        .card:focus-visible { outline: 2px solid var(--azul-1); outline-offset: 3px; }
        .card-image-wrap { position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: var(--gray-100); }
        .card-image-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
        .card:hover .card-image-wrap img { transform: scale(1.04); }
        .card-overlay { position: absolute; inset: 0; background: rgba(0,168,217,0); display: flex; align-items: center; justify-content: center; transition: background 0.3s ease; }
        .card:hover .card-overlay { background: rgba(0,168,217,0.55); }
        .card-overlay-icon { opacity: 0; transform: scale(0.8); transition: opacity 0.25s ease, transform 0.25s ease; }
        .card:hover .card-overlay-icon { opacity: 1; transform: scale(1); }
        .card-info { padding: 14px 18px 16px; }
        .card-category { font-size: 0.6875rem; font-weight: 600; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .card-name { font-family: 'Open Sans', sans-serif; font-weight: 800; font-stretch: condensed; text-transform: uppercase; font-size: 1.0625rem; letter-spacing: -0.01em; color: var(--gray-900); line-height: 1.15; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.96); z-index: 9999; overscroll-behavior: contain; }
        .modal-overlay.is-open { display: flex; flex-direction: column; animation: fadeIn 0.22s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-bar { display: flex; align-items: center; justify-content: space-between; padding: 16px clamp(1rem, 4vw, 2.5rem); flex-shrink: 0; }
        .modal-title { font-family: 'Open Sans', sans-serif; font-weight: 800; font-stretch: condensed; text-transform: uppercase; font-size: clamp(1rem, 2.5vw, 1.5rem); letter-spacing: -0.01em; color: var(--white); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; margin-right: 1rem; }
        .modal-close { background: none; border: none; color: var(--white); font-size: 1.75rem; line-height: 1; cursor: pointer; padding: 6px 10px; border-radius: 6px; flex-shrink: 0; transition: color 0.2s, background 0.2s; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
        .modal-close:hover { color: var(--azul-1); background: rgba(255,255,255,0.07); }
        .modal-stage { flex: 1; display: flex; align-items: center; justify-content: center; position: relative; min-height: 0; padding: 0 clamp(3rem, 8vw, 5rem); }
        .modal-img-wrap { position: relative; width: 100%; max-width: 1100px; max-height: 82vh; aspect-ratio: 16 / 9; }
        .modal-img-wrap img { border-radius: 4px; }
        .modal-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.08); border: none; color: var(--white); font-size: 2.25rem; line-height: 1; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s, color 0.2s; touch-action: manipulation; }
        .modal-arrow:hover { background: rgba(0,168,217,0.25); color: var(--azul-1); }
        .modal-arrow:disabled { opacity: 0.2; pointer-events: none; }
        .modal-arrow-prev { left: clamp(0.5rem, 2vw, 1.25rem); }
        .modal-arrow-next { right: clamp(0.5rem, 2vw, 1.25rem); }
        .modal-footer { flex-shrink: 0; padding: 12px clamp(1rem, 4vw, 2.5rem) 20px; }
        .modal-counter { text-align: center; font-family: 'Work Sans', sans-serif; font-size: 0.8125rem; font-weight: 600; color: rgba(255,255,255,0.55); margin-bottom: 10px; font-variant-numeric: tabular-nums; }
        .modal-progress-track { height: 2px; background: rgba(255,255,255,0.12); border-radius: 9999px; overflow: hidden; max-width: 1100px; margin: 0 auto; }
        .modal-progress-fill { height: 100%; background: var(--azul-1); border-radius: 9999px; transition: width 0.22s ease; }
        @media (max-width: 600px) { .modal-stage { flex-direction: column; padding: 0 1rem; gap: 0.75rem; } .modal-img-wrap { max-height: 58vh; } .modal-arrow-prev, .modal-arrow-next { display: none; } .modal-arrows-mobile { display: flex; gap: 1rem; } .modal-arrow { position: static; transform: none; } }
        @media (min-width: 601px) { .modal-arrows-mobile { display: none; } }
      `}</style>

      <main style={{ minHeight: '100vh', background: 'var(--white)' }}>
        <header className="page-container" style={{ paddingTop: 112, paddingBottom: 40 }}>
          <span className="hero-tag">Apresentações Corporativas</span>
          <h1 className="hero-h1">Projetos</h1>
          <p className="hero-subtitle">Narrativas visuais para marcas que têm algo a dizer.</p>
          <hr className="hero-divider" aria-hidden="true" />
        </header>

        <div className="page-container" style={{ paddingBottom: '6rem' }}>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="card" onClick={() => openModal(idx)}>
                <div className="card-image-wrap">
                  <Image src={`/portf_temp/${project.cover}`} alt={project.name} width={640} height={360} priority={idx < 6} />
                  <div className="card-overlay" aria-hidden="true">
                    <div className="card-overlay-icon">
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <rect x="2" y="2" width="40" height="40" rx="6" stroke="white" strokeWidth="2"/>
                        <path d="M16 28L28 16M28 16H19M28 16V25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <p className="card-category">APRESENTAÇÃO CORPORATIVA</p>
                  <p className="card-name">{project.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer minimal />

      {/* MODAL */}
      <div className={`modal-overlay ${activeProject ? 'is-open' : ''}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
        <div className="modal-bar">
          <h2 className="modal-title">{activeProject?.name}</h2>
          <button className="modal-close" onClick={closeModal}>✕</button>
        </div>
        
        <div className="modal-stage">
          <button className="modal-arrow modal-arrow-prev" onClick={goPrev} disabled={activeSlide === 0}>‹</button>
          <div className="modal-img-wrap">
            {activeProject && (
              <Image
                src={`/portf_temp/${activeProject.slides[activeSlide]}`}
                alt="Slide"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                style={{ objectFit: "contain" }}
              />
            )}
          </div>
          <button className="modal-arrow modal-arrow-next" onClick={goNext} disabled={!!activeProject && activeSlide === activeProject.slides.length - 1}>›</button>
          
          <div className="modal-arrows-mobile">
            <button className="modal-arrow" onClick={goPrev} disabled={activeSlide === 0}>‹</button>
            <button className="modal-arrow" onClick={goNext} disabled={!!activeProject && activeSlide === activeProject.slides.length - 1}>›</button>
          </div>
        </div>

        <div className="modal-footer">
          <p className="modal-counter">{activeProject ? activeSlide + 1 : 1} / {activeProject ? activeProject.slides.length : 1}</p>
          <div className="modal-progress-track">
            <div className="modal-progress-fill" style={{ width: activeProject ? `${((activeSlide + 1) / activeProject.slides.length) * 100}%` : '0%' }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
