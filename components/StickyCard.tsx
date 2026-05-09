"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface StickyCardProps {
  images: string[];
  alts: string[];
  activeIndex: number;
}

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
        <span className="text-neutral-400 text-sm text-center px-6 leading-relaxed select-none">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="440px"
      onError={() => setError(true)}
    />
  );
}

export default function StickyCard({ images, alts, activeIndex }: StickyCardProps) {
  const safeIndex = Math.max(0, Math.min(activeIndex, images.length - 1));

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 440,
        height: 580,
        borderRadius: 24,
        overflow: "hidden",
        position: "relative",
        background: "#f5f5f5",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={safeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <CardImage src={images[safeIndex] ?? ""} alt={alts[safeIndex] ?? ""} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
