import re
import json

with open('d:/PROJETOS/CURRICULO/PORTFOLIO/PORTIFA_V3/public/portf_temp/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract projects array
match = re.search(r'const projects = (\[.*?\]);', content, re.DOTALL)
if match:
    projects_str = match.group(1)
    
    tsx = f"""\"use client\";

import {{ useState, useEffect, useRef, useCallback }} from \"react\";
import Navbar from \"@/components/Navbar\";
import Footer from \"@/components/Footer\";

const projects = {projects_str};

export default function ProjetosGalleryPage() {{
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const activeProject = activeProjectIdx !== null ? projects[activeProjectIdx] : null;

  const closeModal = useCallback(() => {{
    setActiveProjectIdx(null);
    document.body.style.overflow = '';
  }}, []);

  const openModal = (idx: number) => {{
    setActiveProjectIdx(idx);
    setActiveSlide(0);
    document.body.style.overflow = 'hidden';
  }};

  const goNext = useCallback(() => {{
    if (activeProject && activeSlide < activeProject.slides.length - 1) {{
      setActiveSlide(s => s + 1);
    }}
  }}, [activeProject, activeSlide]);

  const goPrev = useCallback(() => {{
    if (activeProject && activeSlide > 0) {{
      setActiveSlide(s => s - 1);
    }}
  }}, [activeProject, activeSlide]);

  useEffect(() => {{
    const handleKeyDown = (e: KeyboardEvent) => {{
      if (activeProjectIdx === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }};
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }}, [activeProjectIdx, closeModal, goNext, goPrev]);

  return (
    <>
      <Navbar />
      <style>{{`
        /* Minimal CSS required, as global styles handle colors/fonts */
        .hero-gallery {{ padding-top: 112px; padding-bottom: 40px; padding-left: clamp(1.5rem, 5vw, 4rem); padding-right: clamp(1.5rem, 5vw, 4rem); max-width: 1440px; margin: 0 auto; background: var(--white); }}
        .hero-tag {{ display: block; font-family: 'Work Sans', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.875rem; }}
        .hero-gallery h1 {{ font-family: 'Open Sans', sans-serif; font-weight: 800; font-stretch: condensed; text-transform: uppercase; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1; letter-spacing: -0.02em; color: var(--gray-900); margin-bottom: 1.25rem; }}
        .hero-subtitle {{ font-size: 1.125rem; font-weight: 400; color: var(--gray-400); line-height: 1.5; max-width: 520px; margin-bottom: 2.75rem; }}
        .hero-divider {{ border: none; border-top: 1px solid var(--gray-200); }}
        .grid-container {{ max-width: 1440px; margin: 0 auto; padding: 3rem clamp(1.5rem, 5vw, 4rem) 6rem; background: var(--white); }}
        .projects-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; }}
        .card {{ background: var(--white); border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }}
        .card:hover {{ transform: scale(1.02); }}
        .card:focus-visible {{ outline: 2px solid var(--azul-1); outline-offset: 3px; }}
        .card-image-wrap {{ position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: var(--gray-100); }}
        .card-image-wrap img {{ width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }}
        .card:hover .card-image-wrap img {{ transform: scale(1.04); }}
        .card-overlay {{ position: absolute; inset: 0; background: rgba(0,168,217,0); display: flex; align-items: center; justify-content: center; transition: background 0.3s ease; }}
        .card:hover .card-overlay {{ background: rgba(0,168,217,0.55); }}
        .card-overlay-icon {{ opacity: 0; transform: scale(0.8); transition: opacity 0.25s ease, transform 0.25s ease; }}
        .card:hover .card-overlay-icon {{ opacity: 1; transform: scale(1); }}
        .card-info {{ padding: 14px 18px 16px; }}
        .card-category {{ font-size: 0.6875rem; font-weight: 600; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }}
        .card-name {{ font-family: 'Open Sans', sans-serif; font-weight: 800; font-stretch: condensed; text-transform: uppercase; font-size: 1.0625rem; letter-spacing: -0.01em; color: var(--gray-900); line-height: 1.15; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }}
        .modal-overlay {{ display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.96); z-index: 9999; overscroll-behavior: contain; }}
        .modal-overlay.is-open {{ display: flex; flex-direction: column; animation: fadeIn 0.22s ease; }}
        @keyframes fadeIn {{ from {{ opacity: 0; }} to {{ opacity: 1; }} }}
        .modal-bar {{ display: flex; align-items: center; justify-content: space-between; padding: 16px clamp(1rem, 4vw, 2.5rem); flex-shrink: 0; }}
        .modal-title {{ font-family: 'Open Sans', sans-serif; font-weight: 800; font-stretch: condensed; text-transform: uppercase; font-size: clamp(1rem, 2.5vw, 1.5rem); letter-spacing: -0.01em; color: var(--white); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; margin-right: 1rem; }}
        .modal-close {{ background: none; border: none; color: var(--white); font-size: 1.75rem; line-height: 1; cursor: pointer; padding: 6px 10px; border-radius: 6px; flex-shrink: 0; transition: color 0.2s, background 0.2s; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }}
        .modal-close:hover {{ color: var(--azul-1); background: rgba(255,255,255,0.07); }}
        .modal-stage {{ flex: 1; display: flex; align-items: center; justify-content: center; position: relative; min-height: 0; padding: 0 clamp(3rem, 8vw, 5rem); }}
        .modal-img-wrap {{ width: 100%; max-width: 1100px; max-height: 82vh; aspect-ratio: 16 / 9; }}
        .modal-img-wrap img {{ width: 100%; height: 100%; object-fit: contain; border-radius: 4px; display: block; }}
        .modal-arrow {{ position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.08); border: none; color: var(--white); font-size: 2.25rem; line-height: 1; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s, color 0.2s; touch-action: manipulation; }}
        .modal-arrow:hover {{ background: rgba(0,168,217,0.25); color: var(--azul-1); }}
        .modal-arrow:disabled {{ opacity: 0.2; pointer-events: none; }}
        .modal-arrow-prev {{ left: clamp(0.5rem, 2vw, 1.25rem); }}
        .modal-arrow-next {{ right: clamp(0.5rem, 2vw, 1.25rem); }}
        .modal-footer {{ flex-shrink: 0; padding: 12px clamp(1rem, 4vw, 2.5rem) 20px; }}
        .modal-counter {{ text-align: center; font-family: 'Work Sans', sans-serif; font-size: 0.8125rem; font-weight: 600; color: rgba(255,255,255,0.55); margin-bottom: 10px; font-variant-numeric: tabular-nums; }}
        .modal-progress-track {{ height: 2px; background: rgba(255,255,255,0.12); border-radius: 9999px; overflow: hidden; max-width: 1100px; margin: 0 auto; }}
        .modal-progress-fill {{ height: 100%; background: var(--azul-1); border-radius: 9999px; transition: width 0.22s ease; }}
        @media (max-width: 600px) {{ .modal-stage {{ flex-direction: column; padding: 0 1rem; gap: 0.75rem; }} .modal-img-wrap {{ max-height: 58vh; }} .modal-arrow-prev, .modal-arrow-next {{ display: none; }} .modal-arrows-mobile {{ display: flex; gap: 1rem; }} .modal-arrow {{ position: static; transform: none; }} }}
        @media (min-width: 601px) {{ .modal-arrows-mobile {{ display: none; }} }}
      `}}</style>

      <main style={{ minHeight: '100vh', background: 'var(--white)' }}>
        <header className="hero-gallery">
          <span className="hero-tag">Apresentações Corporativas</span>
          <h1>Projetos</h1>
          <p className="hero-subtitle">Narrativas visuais para marcas que têm algo a dizer.</p>
          <hr className="hero-divider" aria-hidden="true" />
        </header>

        <div className="grid-container">
          <div className="projects-grid">
            {{projects.map((project, idx) => (
              <div key={{idx}} className="card" onClick={{() => openModal(idx)}}>
                <div className="card-image-wrap">
                  <img src={{`/portf_temp/${{project.cover}}`}} alt={{project.name}} width="640" height="360" loading={{idx < 6 ? undefined : "lazy"}} />
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
                  <p className="card-name">{{project.name}}</p>
                </div>
              </div>
            )))}}
          </div>
        </div>
      </main>

      <Footer />

      {{/* MODAL */}}
      <div className={{`modal-overlay ${{activeProject ? 'is-open' : ''}}`}} onClick={{(e) => e.target === e.currentTarget && closeModal()}}>
        <div className="modal-bar">
          <h2 className="modal-title">{{activeProject?.name}}</h2>
          <button className="modal-close" onClick={{closeModal}}>✕</button>
        </div>
        
        <div className="modal-stage">
          <button className="modal-arrow modal-arrow-prev" onClick={{goPrev}} disabled={{activeSlide === 0}}>‹</button>
          <div className="modal-img-wrap">
            {{activeProject && (
              <img src={{`/portf_temp/${{activeProject.slides[activeSlide]}}`}} alt="Slide" />
            )}}
          </div>
          <button className="modal-arrow modal-arrow-next" onClick={{goNext}} disabled={{activeProject && activeSlide === activeProject.slides.length - 1}}>›</button>
          
          <div className="modal-arrows-mobile">
            <button className="modal-arrow" onClick={{goPrev}} disabled={{activeSlide === 0}}>‹</button>
            <button className="modal-arrow" onClick={{goNext}} disabled={{activeProject && activeSlide === activeProject.slides.length - 1}}>›</button>
          </div>
        </div>

        <div className="modal-footer">
          <p className="modal-counter">{{activeProject ? activeSlide + 1 : 1}} / {{activeProject ? activeProject.slides.length : 1}}</p>
          <div className="modal-progress-track">
            <div className="modal-progress-fill" style={{{{ width: activeProject ? `${{((activeSlide + 1) / activeProject.slides.length) * 100}}%` : '0%' }}}}></div>
          </div>
        </div>
      </div>
    </>
  );
}}
"""
    with open('d:/PROJETOS/CURRICULO/PORTFOLIO/PORTIFA_V3/app/projetos/page.tsx', 'w', encoding='utf-8') as fout:
        fout.write(tsx)
    print("app/projetos/page.tsx successfully generated!")
else:
    print("Failed to find projects array")
