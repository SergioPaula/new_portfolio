import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Blog — Sérgio Paula",
  description: "Em breve novos conteúdos sobre design, branding e comunicação visual.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--gray-400)",
          }}
        >
          Blog
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            color: "var(--gray-900)",
          }}
        >
          EM CONSTRUÇÃO
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "var(--gray-600)",
            lineHeight: 1.6,
            maxWidth: 480,
          }}
        >
          Em breve novos conteúdos por aqui.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "var(--azul-1)",
            textDecoration: "none",
            marginTop: "1rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          ← Voltar
        </Link>
      </main>
    </>
  );
}
