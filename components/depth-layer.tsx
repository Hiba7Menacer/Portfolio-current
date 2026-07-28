"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface Props {
  children: React.ReactNode
  depth: number
  className?: string
  id?: string
  fadeDistance?: number
}

const TOTAL_DEPTH = 2400
const FOCAL_LENGTH = 1200

export default function DepthLayer({
  children,
  depth,
  className = "",
  id,
  fadeDistance = 800,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()

  const cameraZ = useTransform(scrollYProgress, [0, 1], [0, TOTAL_DEPTH])
  const distance = useTransform(cameraZ, (cz) => Math.abs(depth - cz))

  const scale = useTransform(distance, (d) => FOCAL_LENGTH / (FOCAL_LENGTH + d))
  const opacity = useTransform(distance, (d) => {
    const dist = Math.abs(d)
    return Math.max(0, Math.min(1, 1 - dist / fadeDistance))
  })
  const y = useTransform(distance, (d) => Math.min(d / fadeDistance, 1) * 30)

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ scale, opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
