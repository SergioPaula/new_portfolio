"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./IntroScreen.module.css";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className={styles.inner}>
            <p className={styles.quote}>
              Em um mundo cheio de vacas comuns, a vaca roxa é aquela que se
              torna extraordinária, memorável e impossível de ignorar.
            </p>

            <p className={styles.highlight}>Seja uma vaca roxa.</p>

            <p className={styles.attribution}>
              — A Vaca Roxa&nbsp;·&nbsp;Seth Godin
            </p>

            <motion.div
              className={styles.cowWrap}
              animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Image
                src="/images/vaca-roxa.webp"
                alt="Ilustração de uma vaca roxa — símbolo da originalidade"
                width={312}
                height={260}
                className={styles.cow}
                priority
              />
            </motion.div>

            <button
              className={styles.btn}
              onClick={() => setVisible(false)}
              type="button"
            >
              ENTRAR
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
