"use client";

import { motion } from "framer-motion";
import Accordion from "./Accordion";

const FAQ_ITEMS = [
  {
    title: "Quais serviços você oferece?",
    content:
      "Apresentações Estratégicas, Design Digital & Web, e Design Gráfico & Produto. Trabalho com projetos de diferentes escalas — desde freelancers e startups até empresas consolidadas que precisam de uma nova perspectiva visual.",
  },
  {
    title: "Qual é o prazo médio de entrega?",
    content:
      "Depende do escopo. Um logo pode levar 1–2 semanas; um branding completo, 4–8 semanas. O prazo é sempre definido no briefing inicial para que não haja surpresas.",
  },
  {
    title: "Como funciona o processo de trabalho?",
    content:
      "Começo com uma conversa de descoberta para entender sua marca, objetivos e público. Em seguida, apresento propostas de conceito, iteramos com base no seu feedback e entrego os arquivos finais organizados.",
  },
  {
    title: "Você oferece revisões?",
    content:
      "Sim. Todos os projetos incluem 3 rodadas de revisão. Revisões adicionais são cobradas por hora — mas na prática, raramente chegamos a isso porque o processo de briefing é muito cuidadoso.",
  },
  {
    title: "Quais formatos você entrega?",
    content:
      "Entrego todos os arquivos necessários: AI, PDF vetorial, PNG, SVG, JPG e formatos específicos para impressão ou digital, conforme o projeto. Tudo organizado e documentado.",
  },
  {
    title: "Você trabalha com clientes fora do Brasil?",
    content:
      "Sim, atendo clientes em todo o mundo. Trabalho 100% remoto e me comunico em português e inglês. O fuso horário raramente é uma barreira.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{
        background: "#f5f5f5",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-x-16 gap-y-10 items-start">
          {/* Left: title + description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 800,
                fontStretch: "condensed",
                textTransform: "uppercase",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                color: "#171717",
                marginBottom: "1.5rem",
              }}
            >
              PERGUNTAS
              <br />
              FREQUENTES
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "#666",
                lineHeight: 1.7,
              }}
            >
              Aqui estão as respostas para as dúvidas mais comuns que recebo. Se a sua pergunta não estiver aqui, é só me chamar — fico feliz em ajudar!
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <Accordion items={FAQ_ITEMS} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
