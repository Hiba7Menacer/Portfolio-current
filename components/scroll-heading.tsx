"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function ScrollHeading({ children, className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.25, 1])

  if (reduceMotion) {
    return <h2 className={className}>{children}</h2>
  }

  return (
    <motion.h2
      ref={ref}
      style={{ y, scale, opacity }}
      className={className}
    >
      {children}
    </motion.h2>
  )
}
