"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type CarouselSlide = {
  image: string;
  title: string;
  slug: string;
};

const SLIDE_DURATION = 6000;

export default function BlogHeroCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const current = slides[currentIndex];

  return (
    <div className="hidden md:block w-full relative overflow-hidden bg-gray-900 group" style={{ height: '800px' }}>

      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Link href={`/blog/${current.slug}`} className="block w-full h-full relative cursor-pointer">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/10" />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Título sobreposto */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="page-container h-full flex flex-col justify-center">
          <motion.div
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h2
              className="text-white text-5xl md:text-7xl pointer-events-auto"
              style={{ fontFamily: 'var(--font-coustard)', lineHeight: '1.1' }}
            >
              <Link href={`/blog/${current.slug}`} className="hover:text-gray-200 transition-colors">
                {current.title}
              </Link>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Barras de progresso inferiores */}
      {slides.length > 1 && (
        <div className="absolute bottom-10 left-0 w-full">
          <div className="page-container flex gap-4 max-w-xl mx-auto">
            {slides.map((slide, index) => (
              <div
                key={slide.slug}
                className="h-[3px] bg-white/30 flex-1 relative overflow-hidden cursor-pointer rounded-full"
                onClick={() => setCurrentIndex(index)}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  />
                )}
                {index < currentIndex && (
                  <div className="absolute top-0 left-0 h-full w-full bg-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
