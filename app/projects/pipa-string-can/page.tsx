"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const accent = "#104734";

const sectionGap = "clamp(5rem, 10vw, 9rem)";

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
  color: "#404040",
  lineHeight: 1.8,
};

const fadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }) as const;

function SLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "var(--gray-400)",
        marginBottom: "0.875rem",
      }}
    >
      {children}
    </p>
  );
}

const darkLabel: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.75rem",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "0.875rem",
};

const IMG = "/images/estampas/mockups/pipa";

const BASE_COLOR = { hex: "#104734", name: "Verde Esmeralda", note: "Cor da camiseta · não impressa" };
const PRINTED_COLORS = [
  { hex: "#ffb02f", name: "Amarelo Ouro", note: "1ª tela" },
  { hex: "#dcdbc9", name: "Areia", note: "2ª tela", border: true },
  { hex: "#f24141", name: "Vermelho", note: "3ª tela" },
];

const TECH_SHEET = [
  { label: "Técnica de criação", value: "Desenho manual + Vetorização" },
  { label: "Impressão", value: "Serigrafia" },
  { label: "Cor da camiseta", value: "#104734" },
  { label: "Telas de impressão", value: "3" },
  { label: "Ferramentas", value: "Illustrator" },
  { label: "Aplicação", value: "Frente e costas" },
  { label: "Estilo", value: "Retrô brasileiro" },
  { label: "Inspiração", value: "Cultura popular e memórias dos anos 80 e 90" },
];

export default function PipaStringCanPage() {
  return (
    <>
      <title>LINHA NA LATA — Estampa · Serigrafia · Sérgio Paula</title>
      <Navbar />

      {/* ─── HERO ─── CAPA-sentado-calcada.webp — 1200×896 */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <Image
          src={`${IMG}/header.webp`}
          alt="Capa do projeto Pipa String Can — camiseta estampada"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />

        {/* Degradê preto */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.85) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "clamp(2rem, 6vw, 7rem)",
            paddingBottom: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "5px 14px",
              borderRadius: 9999,
              border: "1.5px solid rgba(255,255,255,0.4)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "1.25rem",
            }}
          >
            Estampa · Serigrafia
          </span>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            LINHA NA LATA
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            Uma homenagem às tardes de vento, aos dedos marcados pela linha e à criatividade de transformar uma simples lata em diversão. Uma estampa inspirada nas memórias de quem cresceu soltando pipa nas ruas brasileiras.
          </p>
        </div>
      </motion.section>

      {/* ─── CONTEÚDO ─── */}
      <div className="page-container">

        {/* Voltar */}
        <motion.div
          {...fadeUp()}
          style={{
            paddingTop: "clamp(3rem, 6vw, 5rem)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <Link
            href="/projetos"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--gray-400)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gray-900)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gray-400)")
            }
          >
            ← Projetos
          </Link>
        </motion.div>

        {/* ─── VISÃO GERAL ─── layout 2 colunas: texto + imagem */}
        {/*
          Imagem necessária para o lado direito:
          Arquivo: pipa-overview.webp
          Dimensões recomendadas: 800×1000 px (proporção 4:5, retrato)
          Conteúdo sugerido: foto de produto, detalhe da estampa ou composição editorial
        */}
        <motion.div
          {...fadeUp()}
          style={{
            marginBottom: sectionGap,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "center",
          }}
          className="pipa-overview-grid"
        >
          {/* Coluna esquerda — texto */}
          <div>
            <SLabel>Visão Geral</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              A ESTAMPA E O PROJETO
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={bodyText}>
                Antes das carretilhas modernas e dos acessórios especializados, existia a criatividade.
              </p>
              <p style={bodyText}>
                Quem cresceu nos anos 80 e 90 provavelmente se lembra das tardes de céu azul, das disputas entre amigos e das latas de óleo ou de achocolatado transformadas em carretéis improvisados. Elas tinham o tamanho perfeito para a mão e permitiam recolher a linha rapidamente, tornando-se parte da brincadeira quase sem perceber.
              </p>
              <p style={bodyText}>
                Objetos comuns ganhavam novos significados.
              </p>
              <p style={bodyText}>
                A estampa Linha na Lata nasce dessa memória afetiva. Mais do que representar uma lata, a proposta é celebrar a inventividade e a simplicidade de uma época em que a diversão cabia em poucas coisas: vento, linha, amigos e tempo livre.
              </p>
              <p style={bodyText}>
                Pensada para uma geração que reconhece essa imagem em poucos segundos, a peça procura transformar uma lembrança coletiva em linguagem visual.
              </p>
            </div>
          </div>

          {/* Coluna direita — imagem */}
          {/* pipa-overview.webp — 800×1000 */}
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              src={`${IMG}/pipa-overview.webp`}
              alt="Visão geral do projeto Pipa String Can"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* ─── PROCESSO MANUAL ─── sketchfeitoamao.webp — 3916×5211 */}
        <motion.div
          {...fadeUp()}
          style={{
            marginBottom: sectionGap,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "center",
          }}
          className="pipa-overview-grid"
        >
          {/* Coluna esquerda — texto */}
          <div>
            <SLabel>Processo Manual</SLabel>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--gray-900)",
                marginBottom: "1.5rem",
              }}
            >
              DO PAPEL AO ARQUIVO DIGITAL
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={bodyText}>
                Todo projeto começa pela observação.
              </p>
              <p style={bodyText}>
                Antes do computador, vieram o papel e a caneta. O objetivo era capturar a personalidade do objeto e preservar suas imperfeições, marcas e proporções familiares.
              </p>
              <p style={bodyText}>
                Os primeiros esboços foram feitos manualmente, permitindo explorar formas com mais liberdade e espontaneidade. Nessa etapa, o importante não era a precisão, mas a memória.
              </p>
              <p style={bodyText}>
                Depois de digitalizado, o desenho serviu como base para a construção vetorial, mantendo a essência do traço original e preparando o projeto para o processo de impressão.
              </p>
              <p style={bodyText}>
                Porque algumas ideias nascem melhor longe da tela.
              </p>
            </div>
          </div>

          {/* Coluna direita — sketchfeitoamao.webp — mesma proporção 4:5 do overview */}
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              src={`${IMG}/sketchfeitoamao.webp`}
              alt="Sketch feito à mão — ilustração original antes da vetorização"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* ─── ARTE FINAL ─── estampa_frente.webp (1615×1600) + estampa-costas.webp (2351×3128) */}
        <motion.div {...fadeUp()} style={{ marginBottom: sectionGap }}>
          <SLabel>Arte Final</SLabel>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--gray-900)",
              marginBottom: "1.5rem",
            }}
          >
            FRENTE E COSTAS VETORIZADAS
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: 720, marginBottom: "2rem" }}>
            <p style={bodyText}>
              Com o desenho definido, o Illustrator foi utilizado para transformar os traços em uma estrutura limpa e precisa.
            </p>
            <p style={bodyText}>
              A composição foi pensada em duas aplicações complementares: uma arte principal nas costas e uma intervenção menor na frente da camiseta.
            </p>
            <p style={bodyText}>
              A intenção era criar uma peça equilibrada, permitindo que os elementos conversassem entre si sem competir por atenção.
            </p>
            <p style={bodyText}>
              Cada linha, área de preenchimento e detalhe foram organizados pensando não apenas na estética, mas também na produção em serigrafia, garantindo fidelidade entre o arquivo digital e o resultado impresso.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {/* estampa_frente.webp — 1615×1600 */}
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/estampa_frente.webp`}
                alt="Arte final da estampa — frente da camiseta"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            {/* estampa-costas.webp — 2351×3128 */}
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/estampa-costas.webp`}
                alt="Arte final da estampa — costas da camiseta"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* ─── DECISÃO DE CORES ─── */}
        <motion.div {...fadeUp()} style={{ marginBottom: sectionGap }}>
          <SLabel>Decisão de Cores</SLabel>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--gray-900)",
              marginBottom: "1.5rem",
            }}
          >
            4 CORES VISUALMENTE · 3 TELAS DE IMPRESSÃO
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: 720, marginBottom: "2.5rem" }}>
            <p style={bodyText}>
              Desde o início, a estampa foi pensada para ser produzida em serigrafia.
            </p>
            <p style={bodyText}>
              Ao invés de enxergar a limitação de cores como um problema, ela foi incorporada como parte da linguagem visual do projeto.
            </p>
            <p style={bodyText}>
              A própria camiseta participa da composição e funciona como a quarta cor da arte. Dessa forma, apenas três telas são necessárias para criar uma resultado visual rico e equilibrado.
            </p>
            <p style={bodyText}>
              Essa escolha não foi apenas econômica. Ela também reforça a estética das camisetas clássicas, aproximando o projeto das impressões retrô que marcaram diferentes décadas.
            </p>
            <p style={bodyText}>
              A limitação técnica acabou se transformando em identidade.
            </p>
          </div>

          {/* Cor da camiseta */}
          <div style={{ marginBottom: "2rem" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--gray-400)",
                marginBottom: "0.875rem",
              }}
            >
              Cor da camiseta · não impressa
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div
                style={{
                  width: "clamp(64px, 10vw, 96px)",
                  height: "clamp(64px, 10vw, 96px)",
                  borderRadius: 12,
                  background: BASE_COLOR.hex,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--gray-900)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {BASE_COLOR.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--gray-400)",
                    letterSpacing: "0.04em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {BASE_COLOR.hex.toUpperCase()}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--gray-600)",
                  }}
                >
                  Custo zero de impressão — cor da própria peça
                </p>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }} aria-hidden="true" />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--gray-400)",
                whiteSpace: "nowrap",
              }}
            >
              3 telas de impressão
            </p>
            <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }} aria-hidden="true" />
          </div>

          {/* Cores impressas */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
            role="list"
            aria-label="Cores impressas em serigrafia"
          >
            {PRINTED_COLORS.map((color) => (
              <div key={color.hex} role="listitem">
                <div
                  style={{
                    height: "clamp(80px, 12vw, 120px)",
                    borderRadius: 12,
                    background: color.hex,
                    marginBottom: "0.875rem",
                    border: color.border ? "1.5px solid var(--gray-200)" : "none",
                  }}
                  aria-hidden="true"
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--gray-900)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {color.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--gray-400)",
                    letterSpacing: "0.04em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {color.hex.toUpperCase()}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: accent,
                    fontWeight: 600,
                  }}
                >
                  {color.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── TÉCNICA DE IMPRESSÃO ─── */}
        <motion.div {...fadeUp()} style={{ marginBottom: sectionGap }}>
          <SLabel>Técnica de Impressão</SLabel>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--gray-900)",
              marginBottom: "1.5rem",
            }}
          >
            SERIGRAFIA: LIMITES E VANTAGENS
          </h2>
          <div
            style={{
              background: "var(--gray-100)",
              borderRadius: 16,
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <p style={bodyText}>
              A serigrafia faz parte da história das camisetas.
            </p>
            <p style={bodyText}>
              Sua textura, durabilidade e aspecto artesanal continuam sendo características valorizadas por quem aprecia peças com personalidade.
            </p>
            <p style={bodyText}>
              Por isso, o processo de impressão não foi uma decisão tomada no final do projeto. Ele participou desde o começo.
            </p>
            <p style={bodyText}>
              A quantidade reduzida de cores, a espessura dos traços e a separação dos elementos foram desenvolvidas especificamente para esse método.
            </p>
            <p style={bodyText}>
              Mais do que reproduzir uma imagem, a intenção era criar uma peça que carregasse a aparência e a presença das antigas estampas serigráficas, valorizando a matéria, a tinta e o toque.
            </p>
            <p style={bodyText}>
              Porque algumas técnicas envelhecem. Outras se tornam clássicas.
            </p>
          </div>
        </motion.div>

      </div>

      {/* ─── A ESTAMPA NA RUA ─── Full-bleed verde com 4 mockups */}
      {/* Imagens: CAPA-sentado-calcada (1200×896) · frente_busão (1792×2400) · bike_latalinha (1280×960) · vibe-raiz_v5 (2265×2792) */}
      <motion.section
        {...fadeUp()}
        style={{
          background: accent,
          padding: "clamp(4rem, 8vw, 8rem) clamp(2rem, 6vw, 7rem)",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p style={darkLabel}>Resultado</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "#ffffff",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            A ESTAMPA NA RUA
          </h2>

          {/* Grid 2×2 — linha 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {/* header.webp — 1920×1080 */}
            <div
              style={{
                position: "relative",
                height: "clamp(360px, 50vw, 580px)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/header.webp`}
                alt="Camiseta Pipa String Can — editorial sentado na calçada"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            {/* frente_busão.webp — 1792×2400 */}
            <div
              style={{
                position: "relative",
                height: "clamp(360px, 50vw, 580px)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/frente_busão.webp`}
                alt="Camiseta Pipa String Can — frente do busão"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Grid 2×2 — linha 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {/* bike_latalinha.webp — 1280×960 */}
            <div
              style={{
                position: "relative",
                height: "clamp(360px, 50vw, 580px)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src={`${IMG}/bike_latalinha.webp`}
                alt="Camiseta Pipa String Can — na bike com a lata de linha"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            {/* estampa2-colecaopipa.webp — 1200×1200 — segunda estampa da coleção */}
            <div
              className="stamp-hover-container"
              style={{
                height: "clamp(360px, 50vw, 580px)",
                borderRadius: 16,
              }}
            >
              <Image
                src={`${IMG}/estampa2-colecaopipa.webp`}
                alt="Segunda estampa da coleção Pipa String Can — mesmo universo visual, para ampliar o drop de lançamento da marca"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="stamp-hover-overlay" aria-hidden="true">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Coleção · Linha na Lata
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.4,
                  }}
                >
                  Segunda estampa da coleção
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                    maxWidth: 260,
                  }}
                >
                  Desenvolvida para expandir o universo visual da coleção, mantendo a mesma linguagem gráfica, referências culturais e estética inspirada nas memórias de rua que marcaram uma geração.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── FICHA TÉCNICA ─── */}
      <div className="page-container">
        <motion.div
          {...fadeUp()}
          style={{
            paddingTop: "clamp(4rem, 8vw, 7rem)",
            paddingBottom: "clamp(4rem, 8vw, 7rem)",
          }}
        >
          <SLabel>Ficha Técnica</SLabel>
          <div
            style={{
              background: "var(--gray-100)",
              borderRadius: 16,
              padding: "clamp(1.5rem, 3vw, 2rem)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
            }}
            role="list"
            aria-label="Ficha técnica do projeto"
          >
            {TECH_SHEET.map(({ label, value }) => (
              <div key={label} role="listitem">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--gray-400)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: accent,
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <MoreProjects excludeSlugs={["pipa-string-can"]} />
      <Footer />
    </>
  );
}
