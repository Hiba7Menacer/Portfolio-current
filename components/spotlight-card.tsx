"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
  className?: string
  color?: string
}

export default function SpotlightCard({
  children,
  className = "",
  color = "rgba(88, 175, 237, 0.12)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty("--spotlight-x", `${x}px`)
    el.style.setProperty("--spotlight-y", `${y}px`)
    el.style.setProperty("--spotlight-color", color)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card relative ${className}`}
    >
      {children}
    </motion.div>
  )
}
