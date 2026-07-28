"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Props {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  delay?: number
}

export default function TextReveal({
  text,
  className = "",
  as: Tag = "p",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const letters = text.split("")

  return (
    <div ref={ref} className="overflow-hidden">
      <Tag className={className}>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 40, rotateZ: -5 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, rotateZ: 0 }
                : { opacity: 0, y: 40, rotateZ: -5 }
            }
            transition={{
              duration: 0.5,
              delay: delay + i * 0.03,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </Tag>
    </div>
  )
}
