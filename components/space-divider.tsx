"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Props {
  variant?: 1 | 2 | 3
}

export default function SpaceDivider({ variant = 1 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      <div className="flex items-center justify-center gap-4">
        {/* Left trail */}
        <motion.div
          className="h-[1px] flex-1 bg-gradient-to-l from-[#58AFED]/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ originX: 1 }}
        />

        {/* Center star cluster */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
        >
          {[4, 6, 3, 5, 4].map((size, i) => (
            <motion.div
              key={i}
              className="rounded-full bg-[#58AFED]"
              style={{
                width: size,
                height: size,
                opacity: 0.3 + i * 0.15,
              }}
              animate={{
                opacity: [0.3 + i * 0.15, 0.7, 0.3 + i * 0.15],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Right trail */}
        <motion.div
          className="h-[1px] flex-1 bg-gradient-to-r from-[#58AFED]/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  )
}
