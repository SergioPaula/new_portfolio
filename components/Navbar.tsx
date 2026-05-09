"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  // TODO: reconectar para página do projeto quando pronta
  { label: "Projetos", href: "/em-construcao.html" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const contactHref = pathname === "/sobre" ? "#contact" : "/#contato";

  const [scrollingDown, setScrollingDown] = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) {
      const onLenisScroll = (e: { direction: number }) => {
        const curr = window.scrollY;
        if (curr < 50) {
          setScrollingDown(false);
        } else {
          setScrollingDown(e.direction === 1);
        }
      };
      lenis.on("scroll", onLenisScroll);
      return () => lenis.off("scroll", onLenisScroll);
    } else {
      let prev = window.scrollY;
      const onScroll = () => {
        const curr = window.scrollY;
        if (curr < 50) {
          setScrollingDown(false);
        } else if (curr !== prev) {
          setScrollingDown(curr > prev);
        }
        prev = curr;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const showLinks = !scrollingDown;

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    color: "var(--gray-800)",
    fontWeight: 400,
    textDecoration: "none",
  };

  return (
    <motion.nav
      aria-label="Navegação principal"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      {/* ── Desktop ── */}
      <div
        className="hidden md:flex items-center gap-6 px-3 py-2 rounded-full"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
        }}
      >
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/Gemini_Generated_Image_g0nh2ag0nh2ag0nh.png"
            alt="Sérgio Paula"
            fill
            sizes="40px"
            className="object-cover"
            priority
          />
        </div>

        {/* Compact: "Disponível" badge — visible when scrolling down */}
        <AnimatePresence>
          {scrollingDown && (
            <motion.div
              key="badge"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-1.5 text-sm font-semibold"
              style={{ fontFamily: "var(--font-body)", color: "var(--gray-800)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--verde-1)" }}
                aria-hidden="true"
              />
              Disponível
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full: nav links — visible when scrolling up */}
        <AnimatePresence>
          {showLinks && (
            <motion.ul
              key="nav-links"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-5 list-none m-0 p-0"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#00a8d9] rounded"
                    style={linkStyle}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* CTA — always visible */}
        <Link
          href={contactHref}
          className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00a8d9] motion-reduce:hover:translate-y-0"
          style={{
            background: "var(--black)",
            fontFamily: "var(--font-body)",
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          Contato
        </Link>
      </div>

      {/* ── Mobile pill ── */}
      <div
        className="flex md:hidden items-center gap-3 px-3 py-2 rounded-full"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
        }}
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/Gemini_Generated_Image_g0nh2ag0nh2ag0nh.png"
            alt="Sérgio Paula"
            fill
            sizes="32px"
            className="object-cover"
            priority
          />
        </div>
        <span
          className="text-sm font-semibold"
          style={{ fontFamily: "var(--font-body)", color: "var(--gray-800)" }}
        >
          Sérgio Paula
        </span>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="p-1.5 rounded-full transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8d9]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          <ul className="flex flex-col list-none m-0 p-2 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8d9]"
                  style={linkStyle}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={contactHref}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-white text-center transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8d9]"
                style={{
                  background: "var(--black)",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                }}
              >
                Contato
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
