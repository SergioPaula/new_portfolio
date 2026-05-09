# PROJECT.md v2 — Sérgio Paula Portfolio / Home Page

## Visão Geral
Site portfolio pessoal de Sérgio Paula, Designer Gráfico & Digital.
Home é uma single-page com scroll vertical e uma seção de scroll horizontal (desktop only).
O site conta uma história sobre clareza na comunicação como diferencial.

**Stack:** Next.js + Framer Motion + Tailwind (ou HTML/CSS/JS vanilla)
**Hospedagem:** Vercel
**Design System:** ver `DESIGN_SYSTEM.md` na raiz do projeto

---

## Referências Visuais

### Thingy & Thingy (https://www.thingyandthingy.com)
O que pegar como inspiração:
- **Hero rotativo com personalidade** — múltiplas frases que mudam no mesmo layout (hero slides com backgrounds diferentes). Energia e atitude no texto.
- **Illustrations como protagonistas** — ilustrações autorais no lugar de fotos genéricas. Speech bubbles, elementos gráficos vivos.
- **Grid de portfolio com hover impactante** — cards grandes com imagem + logo do cliente sobreposto. Hover revela mais info.
- **Tom provocativo mas inteligente** — "anti-advertising agency, advertising agency". Ironia com substância.
- **Footer com personalidade** — não é só links, tem contato, ilustração, easter eggs.
- **Marquee/ticker text** — texto correndo horizontal como separador de seções (usar com moderação).

O que NÃO copiar:
- O caos visual excessivo (muitos elementos decorativos). O Sérgio é mais limpo e contido.
- O tom humorístico demais. O tom do Sérgio é irônico mas profissional.

### Framer App do Sérgio (https://special-satisfaction-921076.framer.app)
O que já funciona e manter:
- **Layout do Hero** — limpo, centralizado, tags em pills, título bold
- **Seção "Meu trabalho é eliminar o ruído"** com card giratório
- **Seção "What I Can Do For You"** com accordion
- **Seção "About Me"** com números e foto
- **Featured Projects** — grid 2x2 com cards grandes, tag de categoria, título, descrição
- **Testimonials** com stats intercalados (satisfaction rate, growth)
- **FAQ accordion**
- **Footer** com formulário de contato, foto, "Let's work together"

O que melhorar na versão web:
- **Scroll horizontal do manifesto** — no Framer não ficou legal. Na versão web, usar a técnica CSS/JS de "horizontal scroll on vertical scroll" (sticky container + translateX)
- **Card 3D** — no Framer usa flip nativo. Na web, usar CSS 3D transforms ou Framer Motion
- **Textos placeholder** — trocar tudo para conteúdo real do Sérgio em PT-BR
- **Números zerados** — preencher com dados reais

---

## Estratégia Responsive

### Desktop (≥1024px)
- Todas as seções como descritas
- Scroll horizontal no manifesto (4 painéis)
- Card 3D com flip animation
- Layout multi-coluna nas seções

### Mobile (<1024px)
- **SEM scroll horizontal** — os 4 painéis do manifesto ficam empilhados verticalmente, um abaixo do outro, com scroll normal
- Card 3D simplificado (flip on tap ou scroll-triggered)
- Layouts single column
- Nav vira hamburger menu
- Sidebar social vai pro footer

---

## Estrutura da Home (ordem de scroll)

1. **Header / Hero** — apresentação
2. **Manifesto** — scroll horizontal (desktop) / vertical stack (mobile)
3. **"Meu trabalho é eliminar o ruído"** — card 3D giratório
4. **What I Can Do For You** — serviços em accordion
5. **About Me** — bio, números, contato
6. **Featured Projects** — grid de projetos
7. **What My Clients Say** — testimonials + stats
8. **FAQ** — perguntas frequentes
9. **Footer** — "Let's work together" + formulário + contato

---

## SEÇÃO 1 — HEADER / HERO
**Referência:** `1__header.png`

### Layout
- Full viewport: `100vw × 100vh`
- Background: `#00a8d9` (azul sólido)
- Conteúdo centralizado vertical e horizontalmente

### Navegação (fixa no topo, persiste em todas as seções)
- `position: fixed`, topo centralizado, `z-index: 1000`
- Formato pill: `border-radius: 9999px`
- Background: `rgba(255,255,255,0.92)` + `backdrop-filter: blur(12px)`
- Padding: `8px 8px 8px 16px`
- Elementos:
  - Avatar circular 40px (`sergio_avatar.png`)
  - Links: **Home | Sobre | Projetos | Blogs** — Work Sans Regular, 14px, `#333`
  - Botão **"Contato"**: bg `#000`, text white, pill shape, Work Sans SemiBold 14px
- **Variação "Disponível"**: em seções abaixo do hero, a nav pode mudar para mostrar avatar + "Disponível" com bolinha verde (como no Framer). Implementar como classe alternativa triggered por scroll position.

### Tags (acima do título)
- Duas pills: **"BRAGANÇA PAULISTA, SÃO PAULO"** e **"2K26"**
- Border 1px solid white, no fill, texto branco
- Work Sans SemiBold, 14px, uppercase, letter-spacing 0.1em
- Gap: 12px

### Título Principal
```
SERGIO PAULA
DESIGNER GRÁFICO
& DIGITAL
```
- Open Sans Condensed ExtraBold, 96px (6rem), branco, uppercase
- Line-height: 1.0, letter-spacing: -0.02em

### Subtítulo
**"TRANSFORMO IDEIAS EM MENSAGENS CLARAS, IMPOSSÍVEIS DE IGNORAR"**
- Work Sans SemiBold, 16px, branco, uppercase, letter-spacing 0.1em

### Sidebar Social (esquerda)
- `position: fixed`, left 24px, vertical center
- Ícones Lucide: `instagram`, `linkedin`, `at-sign`, `message-circle` — 28px, cor `#006d8a`
- Hover: branco, transition 0.3s
- **Esconde no mobile** (vai pro footer)

### Animação de Entrada
- Staggered fade-in + slide-up, delay incremental 0.15s
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`, duration 0.8s

---

## SEÇÃO 2 — MANIFESTO (Scroll Horizontal / Desktop Only)
**Referência:** `2__scroll_horizontal.png`

### Comportamento Desktop
Técnica "horizontal scroll on vertical scroll":
```
┌─────────────────────────────────┐
│  .manifesto-wrapper             │ ← position: sticky, top: 0, height: 100vh
│  ┌────┬────┬────┬────┐          │
│  │ P1 │ P2 │ P3 │ P4 │         │ ← .manifesto-track: flex, width: 400vw
│  └────┴────┴────┴────┘          │    translateX driven by scrollY
│                                 │
│  Spacer div height: 300vh       │ ← creates scroll room for 4 panels
└─────────────────────────────────┘
```

O scroll vertical do usuário é convertido em translateX horizontal via JS:
```javascript
// Pseudo-code (usar Framer Motion useScroll + useTransform ou vanilla IntersectionObserver)
const scrollProgress = (scrollY - sectionStart) / scrollRange; // 0 to 1
const translateX = scrollProgress * -(totalWidth - viewportWidth);
track.style.transform = `translateX(${translateX}px)`;
```

### Comportamento Mobile
Os 4 painéis ficam empilhados verticalmente, cada um com `min-height: 80vh`, scroll normal.

### PAINEL 1 — "Invisibilidade"
- Background: `#d8df20`
- Watermark: SVG `Asset_2.svg` ("INVISIBILIDADE"), branco, `opacity: 0.7`
- Texto por cima, centralizado:
  ```
  É O CAMINHO
  MAIS CURTO
  PARA O FIM DE UMA
  GRANDE IDEIA
  ```
  Open Sans Condensed ExtraBold **Italic**, 96px, `#9979da`, uppercase

### PAINEL 2 — "Boas ideias"
- Background: `#00a8d9`
- Texto:
  ```
  BOAS IDEIAS
  NÃO MORREM
  POR FALTA
  DE VALOR
  ```
  Open Sans Condensed ExtraBold, 96px, `#c7ecf7`
- SVG sobreposto: `Asset_3.svg` ("Elas morrem por falta de clareza") — manuscrito riscando por cima

### PAINEL 3 — "Eu acredito"
- Background: `#e6c9bb`
- SVG: `Asset_5.svg` — texto completo, centralizado

### PAINEL 4 — "É barulho"
- Background: `#7f5e3c`
- SVG: `Asset_6.svg` — texto completo, centralizado

---

## SEÇÃO 3 — "MEU TRABALHO É ELIMINAR O RUÍDO" + Card 3D
**Referências:** `3__*.png` e `4__*.png`

### Layout
- Background: `#ffffff`
- Min-height: 100vh
- 3 áreas visuais: texto esquerda, card centro, título direita

### Texto Esquerda
- Bolinha decorativa azul `#00a8d9` (10px)
- Texto:
  ```
  MEU TRABALHO É
  ELIMINAR O RUÍDO.

  ENCONTRAR O FIO
  CONDUTOR
  ```
  Open Sans Condensed ExtraBold, ~36px, preto, uppercase

### Card 3D Centro
- 350px × 450px, border-radius 24px, shadow `0 8px 40px rgba(0,0,0,0.12)`
- **3 faces que giram (rotateY):**

| Face | Conteúdo | Imagem/Asset |
|------|----------|-------------|
| 1 | Ilustração editorial do Sérgio | `sergio_desenho.png` |
| 2 | Ilustração mangá do Sérgio | `ilustra_manga_sergio.png` |
| 3 | Stats/números | Componente HTML |

- Animação: scroll-triggered ou auto-play com pausas de ~3s entre flips
- CSS: `perspective: 1200px`, `transform-style: preserve-3d`, `backface-visibility: hidden`
- Badge "Blz?" aparece flutuando no canto inferior do card (speech bubble)

### Título Direita
```
COMO
DESIGNER
```
Open Sans Condensed ExtraBold, 96px, preto, uppercase

Subtítulo:
```
construo narrativa que tenha...
COMEÇO, MEIO E FIM
```
Work Sans Regular 16px, `#999`

### Ícone decorativo
- Mão/wave (👋) dentro de círculo azul `#00a8d9`, ~60px, abaixo do card

---

## SEÇÃO 4 — WHAT I CAN DO FOR YOU
**Referência:** `5__*.png`

### Layout
- Background: branco
- Two-column: texto/accordion (60%) | imagem (40%)

### Título
**"WHAT I CAN DO FOR YOU"**
Open Sans Condensed ExtraBold, 48px, preto, uppercase

> **NOTA IMPORTANTE:** Decidir se fica em inglês ou traduz para "O QUE EU POSSO FAZER POR VOCÊ". O Framer está em inglês — Sérgio decide.

### Accordion (4 itens)
1. **UI/UX DESIGN** — Wireframing, prototyping, interfaces web/mobile, usability testing, micro-animações
2. **GRAPHIC DESIGN** — Logo, brand identity, social media, infográficos, ilustrações
3. **WEB DESIGN** — Sites responsivos, landing pages, desenvolvimento, manutenção
4. **BRANDING** — Estratégia de marca, style guide, tipografia, storytelling

Estilo: border-bottom `#e5e5e5`, toggle com Lucide `chevron-up`/`chevron-down`, animação height 0.4s

### Imagem Direita
- `ilustra_manga_sergio.png` em card rotacionado ~5deg
- Border-radius 24px, sombra suave
- Posição sticky opcional

---

## SEÇÃO 5 — ABOUT ME
**Referência:** `6__*.png`

### Layout
- Background: branco
- Two-column: info (55%) | ilustração (45%)

### Conteúdo
- Título: **"ABOUT ME"** — Open Sans Condensed ExtraBold, 48px
- Bio: texto personalizado do Sérgio (substituir "Duncan")
- Números: **15+** Anos | **200+** Projetos | **50+** Clientes — números em azul `#00a8d9`, 48px
- Contato: email + telefone
- Social icons inline
- Botão **"MY STORY"** — outline azul, pill shape
- Imagem: `sergio_desenho.png` em card com bg bege, border-radius 24px

---

## SEÇÃO 6 — FEATURED PROJECTS
**Referência:** site Framer (seção "Featured Projects")

### Layout
- Título: **"FEATURED PROJECTS"** (ou "PROJETOS EM DESTAQUE")
- Subtítulo descritivo
- Grid 2×2 (desktop) / 1 coluna (mobile)
- Cada card:
  - Imagem cover grande (aspect ratio ~16:10)
  - Tag de categoria (pill): "Graphic Design", "Branding", "UI/UX Design"
  - Título do projeto — Open Sans Condensed ExtraBold, 24px
  - Descrição curta — Work Sans Regular, 14px, `#666`
  - Hover: leve zoom na imagem (scale 1.03), sombra mais forte
- Botão ao final: **"Browse All Projects"** — link para página /projects

---

## SEÇÃO 7 — WHAT MY CLIENTS SAY (Testimonials)
**Referência:** site Framer (seção "What My Clients Say")

### Layout
- Título: **"WHAT MY CLIENTS SAY"** (ou "O QUE DIZEM SOBRE O MEU TRABALHO")
- Layout alternado: testimonial | stat | testimonial | stat
- Cada testimonial:
  - Texto do depoimento em itálico ou aspas
  - Avatar pequeno (48px) + nome + cargo
- Stats intercalados:
  - "I've worked with 50+ happy clients" + **98% Satisfaction Rate**
  - "My work helped clients grow..." + **200% Growth**
- Números com animação countUp ao entrar na viewport

---

## SEÇÃO 8 — FAQ
**Referência:** site Framer (seção FAQ)

### Layout
- Título: **"FREQUENTLY ASKED QUESTIONS"** (ou "PERGUNTAS FREQUENTES")
- Accordion com 6 itens numerados
- Mesmo estilo de accordion da seção de serviços
- Conteúdo real a ser preenchido pelo Sérgio

---

## SEÇÃO 9 — FOOTER / "LET'S WORK TOGETHER"
**Referência:** site Framer (footer)

### Layout
- Background: branco ou off-white
- Foto do Sérgio à esquerda (foto real ou ilustração)
- Badge "Blz?" flutuando (speech bubble, como no site Framer)
- Título: **"LET'S WORK TOGETHER"** (ou "VAMOS TRABALHAR JUNTOS")
- Formulário de contato:
  - Campos: Name, Email, Service Needed (select), Message
  - Botão Submit — pill preto, texto branco
- Info de contato: email + telefone
- Social links
- Copyright: "© 2026 Sérgio Paula. Todos os direitos reservados."

---

## Assets Necessários (`/public/images/`)

| Arquivo | Descrição |
|---------|-----------|
| `sergio_avatar.png` | Foto circular para nav (40px) |
| `sergio_desenho.png` | Ilustração editorial — camiseta branca, óculos, braços cruzados |
| `ilustra_manga_sergio.png` | Ilustração mangá — headphone, polegar, estilo gamer |
| `sergio_foto_footer.jpg` | Foto real para o footer/contato |
| `Asset_2.svg` | "INVISIBILIDADE" watermark — Manifesto P1 |
| `Asset_3.svg` | "Elas morrem por falta de clareza" manuscrito — Manifesto P2 |
| `Asset_5.svg` | Texto completo — Manifesto P3 |
| `Asset_6.svg` | Texto completo — Manifesto P4 |
| `project_*.jpg` | Thumbnails dos projetos para Featured Projects |

---

## Dependências

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest",
    "lucide-react": "^0.383.0",
    "tailwindcss": "latest"
  }
}
```

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## Skills Claude Code
```bash
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
npx skills add vercel-labs/agent-skills --skill vercel-deploy
```

---

## Ordem de Build

1. Setup projeto (Next.js + Tailwind + Framer Motion)
2. Ler DESIGN_SYSTEM.md e este PROJECT.md
3. **Seção 1** — Hero/Header + Nav
4. **Seção 2** — Manifesto horizontal scroll (desktop) + stack (mobile)
5. **Seção 3** — Card 3D + texto "eliminar o ruído"
6. **Seção 4** — Serviços accordion
7. **Seção 5** — About Me
8. **Seção 6** — Featured Projects grid
9. **Seção 7** — Testimonials
10. **Seção 8** — FAQ
11. **Seção 9** — Footer + formulário
12. Polish: animações, transições, responsivo
13. Deploy Vercel
