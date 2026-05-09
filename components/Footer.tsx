"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // ATENÇÃO: Substitua "SEU_ID_AQUI" pelo ID do seu form no Formspree!
    const FORMSPREE_ID = "xbdwplnr";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      
      if (response.ok) {
        alert("Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        alert("Ops, ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch {
      alert("Erro ao enviar a mensagem. Verifique sua conexão.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: 12,
    border: "1.5px solid #e5e5e5",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-small)",
    color: "var(--gray-900)",
    background: "var(--gray-100)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <footer
      id="contato"
      style={{
        background: "var(--white)",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "var(--space-lg)",
      }}
    >
      <div className="page-container">
        {/* ── Main content ── */}
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start"
          style={{ marginBottom: "var(--space-2xl)" }}
        >
          {/* Left: photo + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Photo with Blz? badge */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "var(--space-lg)",
              }}
            >
              <div
                style={{
                  width: "clamp(200px, 30vw, 320px)",
                  aspectRatio: "3/4",
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/Gemini_Generated_Image_g0nh2ag0nh2ag0nh.avif"
                  alt="Sérgio Paula"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              {/* Blz? badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -12,
                  right: -20,
                  background: "var(--white)",
                  border: "2px solid #171717",
                  borderRadius: "20px 20px 20px 4px",
                  padding: "6px 16px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "var(--text-body)",
                  color: "var(--gray-900)",
                  boxShadow: "2px 2px 0 #171717",
                  whiteSpace: "nowrap",
                }}
              >
                Blz? 😄
              </div>
            </div>

            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 800,
                fontStretch: "condensed",
                textTransform: "uppercase",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                fontSize: "var(--text-h2)",
                color: "var(--gray-900)",
                marginBottom: "var(--space-lg)",
              }}
            >
              VAMOS TRABALHAR
              <br />
              JUNTOS
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-xs)",
                marginBottom: "var(--space-md)",
              }}
            >
              <a
                href="#contato"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-small)",
                  color: "var(--gray-600)",
                  textDecoration: "none",
                }}
              >
                contato@sergiopaula.com.br
              </a>
              <a
                href="tel:+5511949632858"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-small)",
                  color: "var(--gray-600)",
                  textDecoration: "none",
                }}
              >
                +55 11 94963-2858
              </a>
            </div>

          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ marginTop: "clamp(2rem, 4vw, 0rem)" }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--space-sm)",
                }}
                className="grid-cols-1 sm:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="footer-name"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-micro)",
                      fontWeight: 600,
                      color: "var(--gray-600)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Nome
                  </label>
                  <input
                    id="footer-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--azul-1)")
                    }
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-200)")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="footer-email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-micro)",
                      fontWeight: 600,
                      color: "var(--gray-600)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--azul-1)")
                    }
                    onBlur={(e) => (e.target.style.borderColor = "var(--gray-200)")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="footer-service"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-micro)",
                    fontWeight: 600,
                    color: "var(--gray-600)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.4rem",
                  }}
                >
                  Serviço Necessário
                </label>
                <select
                  id="footer-service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--azul-1)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--gray-200)")}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="graphic">Design Gráfico</option>
                  <option value="web">Web Design</option>
                  <option value="branding">Branding</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="footer-message"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-micro)",
                    fontWeight: 600,
                    color: "var(--gray-600)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.4rem",
                  }}
                >
                  Mensagem
                </label>
                <textarea
                  id="footer-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte sobre o seu projeto..."
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--azul-1)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--gray-200)")}
                />
              </div>

              <button
                type="submit"
                style={{
                  alignSelf: "flex-start",
                  padding: "0.9rem 2.5rem",
                  borderRadius: 9999,
                  background: "var(--gray-900)",
                  border: "none",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 800,
                  fontStretch: "condensed",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  fontSize: "var(--text-small)",
                  color: "var(--white)",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--azul-1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--gray-900)";
                }}
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: "1px solid #e5e5e5",
            paddingTop: "var(--space-md)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-xs)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-micro)",
              color: "var(--gray-400)",
            }}
          >
            © 2026 Sérgio Paula. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-micro)",
              color: "var(--gray-400)",
            }}
          >
            Designer Gráfico & Digital — Bragança Paulista, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
