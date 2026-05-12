'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from '@studio-freight/lenis'
import { frame, cancelFrame } from 'framer-motion'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    const update = ({ timestamp }: { timestamp: number }) => {
      lenis.raf(timestamp)
    }
    frame.update(update, true)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).__lenis = lenis

    return () => {
      cancelFrame(update)
      lenis.destroy()
    }
  }, [])

  // Scroll to top on route change, or to hash anchor if present
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
