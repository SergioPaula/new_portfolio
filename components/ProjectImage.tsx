// Sem "use client" — zero hooks, zero browser APIs.
// Renderiza como Server Component em MoreProjects e demais contextos de servidor.
// Quando importado por Client Components (ProjectHero, Gallery, Section)
// passa a fazer parte do bundle deles — sem custo extra de hidratação próprio.

import Image from "next/image";
import { BLUR_GREY } from "@/lib/placeholders";

export type ImageAspect = "video" | "square" | "portrait" | "wide";

const ASPECT_CLASSES: Record<ImageAspect, string> = {
  video:    "aspect-video",
  square:   "aspect-square",
  portrait: "aspect-[3/4]",
  wide:     "aspect-[21/9]",
};

interface ProjectImageProps {
  src?: string;
  alt: string;
  aspect?: ImageAspect;
  priority?: boolean;
  className?: string;
  sizes?: string;
  blurDataURL?: string;
}

export default function ProjectImage({
  src,
  alt,
  aspect = "video",
  priority = false,
  className = "",
  sizes = "(max-width: 480px) 100vw, (max-width: 1024px) 80vw, (max-width: 1440px) 60vw, 1152px",
  blurDataURL,
}: ProjectImageProps) {
  const aspectClass = ASPECT_CLASSES[aspect];

  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${aspectClass} bg-neutral-100 flex items-center justify-center ${className}`}
      >
        <span className="text-neutral-400 text-sm text-center px-6 select-none leading-relaxed">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`${aspectClass} relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataURL ?? BLUR_GREY}
        {...(priority ? { priority: true } : { loading: "lazy" })}
      />
    </div>
  );
}
