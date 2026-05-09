# Design System — Sérgio Paula Portfolio

## Projeto
Portfolio pessoal / branding de Sérgio Paula, Designer Gráfico & Digital.
Site one-page com scroll vertical e seções com scroll horizontal.
Hospedagem: GitHub Pages (depois Vercel).
Stack: HTML, CSS, JS (vanilla ou Next.js/React se preferir).

---

## Tipografia

### Fontes
| Uso | Família | Peso | Import |
|-----|---------|------|--------|
| Títulos (H1, H2, H3) | **Open Sans Condensed** | ExtraBold (800) | Google Fonts: `Open+Sans+Condensed:wght@300;700` *ou* `Open+Sans:wdth,wght@75,800` |
| Títulos Itálico (manifesto) | **Open Sans Condensed** | ExtraBold Italic (800i) | Mesma família |
| Body / Parágrafos | **Work Sans** | Regular (400) | Google Fonts: `Work+Sans:wght@300;400;500;600;700` |
| Body destaque | **Work Sans** | SemiBold (600) | Mesma família |

> **Nota:** "Open Sans Condensed ExtraBold" no Google Fonts atual corresponde à variável `Open Sans` com `wdth: 75` e `wght: 800`. Verifique a disponibilidade e use fallback `font-stretch: condensed`.

### Escala Tipográfica
```css
:root {
  /* Títulos */
  --font-display: 'Open Sans Condensed', 'Open Sans', sans-serif;
  --font-body: 'Work Sans', sans-serif;
  
  --text-h1: 6rem;      /* 96px — hero, manifesto */
  --text-h2: 4rem;       /* 64px — títulos de seção */
  --text-h3: 2.5rem;     /* 40px — subtítulos */
  --text-h4: 1.5rem;     /* 24px — cards, destaques */
  --text-body: 1.125rem; /* 18px — parágrafos */
  --text-small: 0.875rem;/* 14px — tags, nav, captions */
  --text-micro: 0.75rem; /* 12px — labels, metadata */
  
  /* Line heights */
  --leading-tight: 1.0;   /* títulos grandes */
  --leading-snug: 1.2;    /* subtítulos */
  --leading-normal: 1.6;  /* body text */
  --leading-relaxed: 1.8; /* texto longo */
  
  /* Letter spacing */
  --tracking-tight: -0.02em;  /* títulos */
  --tracking-normal: 0;       /* body */
  --tracking-wide: 0.1em;     /* tags, labels, uppercase */
}
```

### Regras Tipográficas
- Títulos: SEMPRE `text-transform: uppercase`
- Títulos: `font-weight: 800`, `font-stretch: condensed`
- Body: `font-weight: 400`, tamanho mínimo 16px
- Tags/pills: `font-weight: 600`, `letter-spacing: 0.1em`, uppercase
- Nunca usar: Arial, Inter, Roboto, Helvetica, system fonts genéricos

---

## Paleta de Cores

### Cores Primárias
```css
:root {
  /* Primárias */
  --azul-1: #00a8d9;       /* Azul principal — hero, CTAs */
  --roxo-1: #9979da;       /* Roxo — destaques, manifesto */
  --verde-1: #01ad63;      /* Verde — sucesso, ação */
  --vermelho-1: #ff5b35;   /* Vermelho/laranja — alerta, energia */
  --rosa-1: #ffabcc;       /* Rosa claro — accent suave */
  
  /* Secundárias */
  --limao-1: #d8df20;      /* Limão/amarelo — fundo manifesto P1 */
  --morrom-1: #7f5e3c;     /* Marrom — fundo manifesto P4 */
  --azul-claro: #c7ecf7;   /* Azul gelo — texto sobre azul */
  --rosa-2: #ff80ab;       /* Rosa quente — accent forte */
  --rosa-3: #e6c9bb;       /* Nude/beige — fundo manifesto P3 */
  --verm-1: #ff6571;       /* Vermelho rosa — variação */
  
  /* Neutros */
  --white: #ffffff;
  --black: #000000;
  --gray-100: #f5f5f5;
  --gray-200: #e5e5e5;
  --gray-400: #a3a3a3;
  --gray-600: #525252;
  --gray-800: #262626;
  --gray-900: #171717;
}
```

### Uso de Cores por Seção
| Seção | Background | Texto Principal | Texto Destaque |
|-------|-----------|----------------|---------------|
| Hero / Header | `--azul-1` | `--white` | — |
| Manifesto P1 | `--limao-1` | — | `--roxo-1` |
| Manifesto P2 | `--azul-1` | `--azul-claro` | SVG escuro |
| Manifesto P3 | `--rosa-3` | `--gray-800` | — |
| Manifesto P4 | `--morrom-1` | `--rosa-3` | — |
| Sobre | `--white` | `--gray-800` | `--azul-1` |
| Portfolio | `--gray-100` | `--gray-800` | `--roxo-1` |
| Footer | `--black` | `--white` | `--azul-1` |

### Regra de Cor
- Fundo colorido forte → texto branco ou tom muito claro
- Fundo claro/neutro → texto escuro (`--gray-800` ou `--black`)
- Accent colors nunca em body text, só em destaques, ícones, botões, links
- Nunca colocar roxo sobre azul ou vice-versa sem contraste suficiente

---

## Ícones

### Biblioteca
**Lucide Icons** — https://lucide.dev

### Ícones Sociais (sidebar esquerda)
| Rede | Ícone Lucide | Nome |
|------|-------------|------|
| Instagram | `<Instagram />` | `instagram` |
| LinkedIn | `<Linkedin />` | `linkedin` |
| Email | `<AtSign />` | `at-sign` |
| WhatsApp | `<MessageCircle />` | `message-circle` |

### Ícones de UI
| Uso | Ícone | Nome |
|-----|-------|------|
| Menu mobile | `<Menu />` | `menu` |
| Fechar | `<X />` | `x` |
| Seta direita | `<ArrowRight />` | `arrow-right` |
| Seta baixo (scroll) | `<ChevronDown />` | `chevron-down` |
| Download CV | `<Download />` | `download` |
| Link externo | `<ExternalLink />` | `external-link` |

### Regras de Ícones
- Tamanho padrão: 24px (`size={24}`)
- Sidebar social: 28px, cor `#006d8a` (teal escuro sobre azul)
- Stroke width: 2 (padrão Lucide)
- Nunca usar ícones preenchidos (filled), sempre outline

---

## Layout & Grid

### Breakpoints
```css
:root {
  --bp-mobile: 480px;
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
  --bp-wide: 1440px;
}
```

### Container
```css
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 4rem);
}
```

### Espaçamento
```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
  --space-section: 8rem;/* 128px — entre seções */
}
```

### Seções Full-Screen
- Hero: `100vh`, `100vw`
- Manifesto panels: `100vw` cada, `min-height: 700px`
- Scroll horizontal no manifesto: `overflow-x: scroll`, `scroll-snap-type: x mandatory`

---

## Componentes

### Navegação (Top)
- Posição: fixed, top, center
- Background: `rgba(255,255,255,0.9)` com `backdrop-filter: blur(10px)`
- Border-radius: `9999px` (pill shape)
- Padding: `8px 24px`
- Links: Work Sans Regular, 14px, `--gray-800`
- Botão "Contato": background `--black`, text `--white`, border-radius pill

### Tags/Pills
- Border: 1px solid white (sobre fundo colorido) ou 1px solid `--gray-200` (sobre fundo claro)
- Padding: `6px 16px`
- Border-radius: `9999px`
- Font: Work Sans SemiBold, 14px, uppercase, tracking wide

### Botões
```css
.btn-primary {
  background: var(--black);
  color: var(--white);
  padding: 12px 32px;
  border-radius: 9999px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--azul-1);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--white);
  color: var(--white);
  /* demais props iguais ao primary */
}
```

### Cards de Serviço (Seção "O que eu faço")
- Background: branco ou cor de accent
- Border-radius: 16px
- Padding: 32px
- Sombra: `0 4px 24px rgba(0,0,0,0.08)`
- Hover: elevação sutil + sombra mais forte

---

## Animações & Transições

### Princípios
- Entrada: `fade-in` + `translateY(20px)` com `ease-out`
- Duração padrão: `0.6s`
- Delay entre elementos stagger: `0.1s`
- Scroll horizontal manifesto: `scroll-snap-type: x mandatory`, `scroll-behavior: smooth`
- SVG "INVISIBILIDADE": fade para 70% opacity no scroll (`opacity: 0.7`)

### Easing
```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### Scroll Behavior
```css
/* Manifesto horizontal scroll */
.manifesto-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.manifesto-panel {
  flex: 0 0 100vw;
  min-height: 700px;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## SVG Assets

### Lista de Assets
| Asset | Arquivo | Conteúdo | Seção |
|-------|---------|----------|-------|
| Asset 2 | `Asset_2.svg` | Palavra "INVISIBILIDADE" — watermark branco | Manifesto P1 |
| Asset 3 | `Asset_3.svg` | "Elas morrem por falta de clareza" — handwritten | Manifesto P2 |
| Asset 5 | `Asset_5.svg` | Texto completo painel 3 | Manifesto P3 |
| Asset 6 | `Asset_6.svg` | Texto completo painel 4 | Manifesto P4 |

### Regras SVG
- Importar como `<img>` ou inline `<svg>` conforme necessidade de animação
- Se precisar animar: inline SVG
- Se estático: `<img src="..." alt="..." />`
- Manter `viewBox` original, usar `width: 100%` e `max-width` pra responsividade

---

## Estrutura de Seções (Ordem no Site)

1. **Loading Screen** — vacas, Seth Godin quote, botão "Entrar"
2. **Hero / Header** — nome, título, tagline
3. **Manifesto** — 4 painéis scroll horizontal (invisibilidade, clareza, barulho)
4. **Por Quê** — texto sobre clareza e propósito
5. **O Que Eu Faço** — 3 cards (Slidemodelismo, O Panfleteiro, Tô à Toa)
6. **Sobre Mim** — bio, timeline, logos de clientes
7. **Portfolio** — grid de projetos
8. **Feedbacks** — depoimentos
9. **Footer** — contato, redes, links

---

## Instalação de Skills (Claude Code)

Rodar no terminal antes de começar:
```bash
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
npx skills add vercel-labs/agent-skills --skill vercel-deploy
```

---

## Tom & Personalidade Visual

- **Não é genérico.** Cada seção tem personalidade própria, cor própria, ritmo próprio.
- **Editorial, não corporativo.** Pense em revista, não em template de agência.
- **Minimalista com punch.** Muito espaço branco, poucos elementos, mas cada um tem peso.
- **Ilustrações autorais.** As imagens do site são ilustrações digitais com traço bold — não fotos de banco.
- **Ironia inteligente.** O tom dos textos é provocativo mas adulto — nunca infantil.
