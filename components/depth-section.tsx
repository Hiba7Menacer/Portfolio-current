"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface Props {
  children: React.ReactNode
  className?: string
  id?: string
  depth?: number
}

export default function DepthSection({
  children,
  className = "",
  id,
  depth = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.5])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [120, 0, 0, -80])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -10])

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ scale, opacity, y, rotateX }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
