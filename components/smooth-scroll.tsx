"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { MotionConfig, useReducedMotion } from "framer-motion"

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [reduceMotion])

  return (
    <MotionConfig reducedMotion="user">
      <div ref={containerRef}>{children}</div>
    </MotionConfig>
  )
}
