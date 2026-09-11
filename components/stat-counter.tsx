"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface Props {
  value: number
  suffix?: string
  label: string
  duration?: number
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1600,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl font-bold text-black">
        {display}
        <span className="text-[#58AFED]">{suffix}</span>
      </div>
      <div className="mt-1 font-sans text-xs md:text-sm text-black/50 tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}
