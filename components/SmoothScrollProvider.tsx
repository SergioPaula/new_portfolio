'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from '@studio-freight/lenis'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).__lenis = lenis

    return () => lenis.destroy()
  }, [])

  // Force scroll to top on route change
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
