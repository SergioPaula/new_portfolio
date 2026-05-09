# PROMPT.md — Master Prompt for Claude Code

You are building a personal portfolio website for Sérgio Paula, a Brazilian graphic and digital designer. This is a high-quality, production-grade one-page website that tells a story about clarity in communication.

## Setup

1. Read `DESIGN_SYSTEM.md` and `PROJECT_v2.md` in the project root — these are your source of truth for every design decision. Follow them exactly.
2. Install skills before starting:
```bash
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
npx skills add vercel-labs/agent-skills --skill vercel-deploy
```

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations (scroll-triggered reveals, 3D card flip, horizontal scroll)
- **Lucide React** for icons
- **Google Fonts**: Open Sans (condensed weight 800 + italic) for headings, Work Sans (400/500/600) for body
- Deploy target: **Vercel**

## Build Instructions

Build the home page section by section, in this exact order. After each section, verify it renders correctly before moving to the next.

### Section 1 — Hero / Header
- Full viewport (100vw × 100vh), background `#00a8d9`
- Fixed floating pill-shaped navbar at top center: avatar image + links (Home, Sobre, Projetos, Blogs) + black "Contato" button. Navbar has glassmorphism effect (white bg 92% opacity + backdrop-blur).
- The navbar should switch to show "Disponível" with a green dot when scrolled past the hero section.
- Two small pill tags centered: "BRAGANÇA PAULISTA, SÃO PAULO" and "2K26" (white border, no fill, white text)
- Main title centered, 3 lines: "SERGIO PAULA" / "DESIGNER GRÁFICO" / "& DIGITAL" — Open Sans Condensed ExtraBold, 6rem, white, uppercase
- Subtitle below: "TRANSFORMO IDEIAS EM MENSAGENS CLARAS, IMPOSSÍVEIS DE IGNORAR" — Work Sans SemiBold, 16px, white, uppercase, letter-spacing 0.1em
- Fixed left sidebar with 4 social icons stacked vertically (Instagram, LinkedIn, AtSign, MessageCircle from Lucide) — color `#006d8a`, hover white. Hide on mobile.
- Staggered fade-in + slide-up entrance animation for all elements

### Section 2 — Manifesto (Horizontal Scroll)
**Desktop (≥1024px):** Horizontal scroll triggered by vertical scrolling. Use a sticky container technique:
- Wrapper div: `position: sticky; top: 0; height: 100vh; overflow: hidden`
- Track div: `display: flex; width: 400vw` — translated horizontally based on scroll position
- A spacer div (height ~300vh) after the wrapper to create scroll room
- Use Framer Motion `useScroll` + `useTransform` to map scrollYProgress to translateX

**Mobile (<1024px):** Stack all 4 panels vertically, each with `min-height: 80vh`, normal scroll flow. No horizontal scroll.

**Panel 1:** Background `#d8df20`. SVG watermark "INVISIBILIDADE" (`Asset_2.svg`) at 70% opacity behind. Purple text overlay (`#9979da`): "É O CAMINHO MAIS CURTO PARA O FIM DE UMA GRANDE IDEIA" — Open Sans Condensed ExtraBold Italic, 6rem, centered.

**Panel 2:** Background `#00a8d9`. Light blue text (`#c7ecf7`): "BOAS IDEIAS NÃO MORREM POR FALTA DE VALOR" — 6rem. SVG overlay (`Asset_3.svg`) with handwritten "Elas morrem por falta de clareza" crossing over the text.

**Panel 3:** Background `#e6c9bb`. Centered SVG (`Asset_5.svg`) containing the full text layout for this panel.

**Panel 4:** Background `#7f5e3c`. Centered SVG (`Asset_6.svg`) containing the full text layout for this panel.

If SVG files are not yet available in `/public/images/`, create placeholder text elements with the correct typography and colors so the layout is already in place. Add a comment `{/* TODO: Replace with SVG asset */}` where SVGs should go.

### Section 3 — "Meu trabalho é eliminar o ruído" + 3D Card
- Background white, min-height 100vh
- Three-area layout:
  - **Left:** Blue decorative dot (10px, `#00a8d9`) + text "MEU TRABALHO É ELIMINAR O RUÍDO." and "ENCONTRAR O FIO CONDUTOR" — Open Sans Condensed ExtraBold, ~36px, black, uppercase
  - **Center:** 3D flipping card (350×450px, border-radius 24px, shadow). The card has 3 faces that rotate on the Y axis:
    - Face 1: `sergio_desenho.png` (editorial illustration)
    - Face 2: `ilustra_manga_sergio.png` (manga illustration)
    - Face 3: Stats component (15+ years, 200+ projects, 50+ clients)
    - Animation: scroll-triggered or auto-play with ~3s pause between flips. Use CSS `perspective: 1200px`, `transform-style: preserve-3d`, `backface-visibility: hidden`.
    - A floating "Blz?" speech bubble badge near the bottom of the card
    - A wave hand icon (👋) in a blue circle below the card
  - **Right:** Large text "COMO DESIGNER" — Open Sans Condensed ExtraBold, 96px, black. Below: "construo narrativa que tenha... COMEÇO, MEIO E FIM" — Work Sans, 16px, gray
- Use placeholder images if actual images are not available yet.

### Section 4 — What I Can Do For You (Services)
- Background white
- Two columns: content left (60%) + illustration right (40%)
- Title: "WHAT I CAN DO FOR YOU" — Open Sans Condensed ExtraBold, 48px, black
- Subtitle: "As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity." — Work Sans Regular, 16px, gray
- Accordion with 4 items, each expandable with smooth height animation:
  1. UI/UX DESIGN
  2. GRAPHIC DESIGN
  3. WEB DESIGN
  4. BRANDING
  - Each has a numbered prefix, chevron toggle icon, and hidden content that expands
  - Border-bottom separator between items
- Right side: manga illustration in a card with slight rotation (~5deg), border-radius 24px

### Section 5 — About Me
- Background white
- Two columns: info (55%) + illustration (45%)
- Small blue decorative dot above title
- Title: "ABOUT ME" — Open Sans Condensed ExtraBold, 48px
- Bio paragraph — Work Sans Regular, 16px (use placeholder text about Sérgio: "Sérgio Paula — designer gráfico e digital com 15+ anos de experiência...")
- 3 stats inline: 15+ (Anos de Experiência) | 200+ (Projetos Realizados) | 50+ (Clientes Atendidos) — numbers in `#00a8d9`, 48px, labels in gray 14px. Animate with countUp on viewport entry.
- Contact info: Email + Phone
- Social icons row
- "MY STORY" button — outline style, border `#00a8d9`, pill shape
- Right: editorial illustration in card with beige background, border-radius 24px

### Section 6 — Featured Projects
- Title: "FEATURED PROJECTS"
- Subtitle: descriptive text about the projects
- 2×2 grid (desktop) / 1 column (mobile)
- Each card: cover image, category tag (pill), project title (bold), short description
- Hover: image zoom (scale 1.03) + stronger shadow
- "Browse All Projects" button at bottom
- Use placeholder project images and content

### Section 7 — Testimonials
- Title: "WHAT MY CLIENTS SAY"
- Alternating layout: testimonial card ↔ stat block
- Testimonial: quote text + avatar (48px) + name + title
- Stats: "98% Satisfaction Rate", "200% Growth" with countUp animation
- Use placeholder testimonials

### Section 8 — FAQ
- Title: "FREQUENTLY ASKED QUESTIONS"
- 6-item numbered accordion (same style as services accordion)
- Use placeholder questions and answers

### Section 9 — Footer
- Photo of Sérgio on the left side with floating "Blz?" badge
- Title: "LET'S WORK TOGETHER"
- Contact form: Name, Email, Service Needed (select dropdown), Message textarea, Submit button
- Contact info: email (`contato@sergiopaula.com.br`) + phone
- Social links
- Copyright: "© 2026 Sérgio Paula. Todos os direitos reservados."

## Quality Standards

- **No generic AI aesthetics.** This must look like a designer's portfolio, not a template. Follow the DESIGN_SYSTEM.md color palette and typography exactly.
- **Smooth animations.** Use Framer Motion for scroll-triggered reveals (fade-in + slide-up, staggered). Every section should animate in on viewport entry.
- **Responsive.** Desktop-first but must work cleanly on mobile. Horizontal scroll is desktop-only.
- **Performance.** Lazy load images, optimize fonts, use next/image for all images.
- **Accessibility.** Semantic HTML, proper heading hierarchy, alt texts, keyboard navigation for accordion.
- **All text in Portuguese** except section titles that are already in English in the design (like "WHAT I CAN DO FOR YOU", "ABOUT ME", "FEATURED PROJECTS").

## File Structure
```
/app
  /page.tsx          — Home page (all sections)
  /layout.tsx        — Root layout with fonts + metadata
  /globals.css       — Tailwind + custom CSS variables from DESIGN_SYSTEM.md
/components
  /Navbar.tsx
  /Hero.tsx
  /Manifesto.tsx     — Horizontal scroll section
  /FlipCard.tsx      — 3D card component
  /AboutDesigner.tsx — "Eliminar o ruído" section
  /Services.tsx      — Accordion section
  /AboutMe.tsx
  /Projects.tsx
  /Testimonials.tsx
  /FAQ.tsx
  /Footer.tsx
  /CountUp.tsx       — Number animation component
  /Accordion.tsx     — Reusable accordion component
/public
  /images            — All image assets (SVGs, PNGs, JPGs)
```

## Start building now. Begin with project setup (Next.js + Tailwind + Framer Motion + Lucide), then build Section 1 (Hero). After each section, confirm it compiles and renders before moving to the next.
