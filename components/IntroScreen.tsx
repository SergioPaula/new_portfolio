"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./IntroScreen.module.css";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (visible) {
      // Direct scroll to top
      window.scrollTo(0, 0);

      // Lock body/html scroll
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      // Stop Lenis smooth scroll
      const stopLenis = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const lenis = (window as any).__lenis;
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
          lenis.stop();
        }
      };

      stopLenis();
      // Retry in case Lenis initializes shortly after mount
      const intervalId = setInterval(stopLenis, 100);
      const timeoutId = setTimeout(() => clearInterval(intervalId), 1500);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const lenis = (window as any).__lenis;
        if (lenis) {
          lenis.start();
        }
      };
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
        lenis.start();
      }
    }
  }, [visible]);

  const handleEnter = () => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    }
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.65, 0, 0.35, 1] }}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          {/* Background Desktop (1920x960) — Full Wide */}
          <div className={styles.bgDesktop}>
            <Image
              src="/images/tela_inicial/vaca_inicial.avif"
              alt="Ilustração A Vaca Roxa — Seth Godin"
              fill
              priority
              quality={95}
              sizes="100vw"
              className={styles.bgImg}
            />
          </div>

          {/* Background Mobile — Full Wide */}
          <div className={styles.bgMobile}>
            <Image
              src="/images/tela_inicial/vaca_inicial_mobile.avif"
              alt="Ilustração A Vaca Roxa — Seth Godin (Versão Mobile)"
              fill
              priority
              quality={95}
              sizes="100vw"
              className={styles.bgImg}
            />
          </div>

          {/* Content Block (Text & Button) */}
          <div className={styles.contentBox}>
            {/* Quote Text */}
            <p className={styles.introText}>
              Em um mundo cheio de vacas comuns,
              <br />
              a vaca roxa é aquela que se torna
            </p>

            {/* Highlighted Words (Em 1 linha no desktop, tudo minúsculo) */}
            <h1 className={styles.highlightBlock}>
              <span className={styles.highlightWord}>extraordinária, memorável</span>
            </h1>

            {/* Ending Phrase */}
            <p className={styles.outroText}>e impossível de ignorar.</p>

            {/* Attribution */}
            <p className={styles.attribution}>
              — A Vaca Roxa - Seth Godin
            </p>

            {/* Botão na cor preta com seta para a direita */}
            <motion.button
              className={styles.btn}
              onClick={handleEnter}
              type="button"
              whileHover={{ scale: reducedMotion ? 1 : 1.03 }}
              whileTap={{ scale: reducedMotion ? 1 : 0.97 }}
              aria-label="Entrar no portfolio"
            >
              <span>Entrar no portfolio</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrow}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}





