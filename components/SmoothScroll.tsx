'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).__lenis = null
    }
  }, [])

  const pathname = usePathname()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis
    if (!lenis) return
    const hash = window.location.hash
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        setTimeout(() => lenis.scrollTo(target as HTMLElement), 120)
        return
      }
    }
    lenis.scrollTo(0, { immediate: true })
  }, [pathname])

  return <>{children}</>
}
