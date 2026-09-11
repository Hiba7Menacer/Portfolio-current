"use client"

import React from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"

import { FourPointStar, SmallStar } from "./star"
import MagneticButton from "./magnetic-button"

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  const starX = useTransform(sx, (v) => (reduceMotion ? 0 : v * -20))
  const starY = useTransform(sy, (v) => (reduceMotion ? 0 : v * -20))
  const titleX = useTransform(sx, (v) => (reduceMotion ? 0 : v * 8))
  const titleY = useTransform(sy, (v) => (reduceMotion ? 0 : v * 8))
  const handleMouse = (e: React.MouseEvent) => {
    if (reduceMotion) return
    const { innerWidth, innerHeight } = window
    mx.set((e.clientX / innerWidth - 0.5) * 2)
    my.set((e.clientY / innerHeight - 0.5) * 2)
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouse}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Decorative stars with parallax */}
      <motion.div style={{ x: starX, y: starY }} className="absolute inset-0 pointer-events-none">
        <FourPointStar
          size={60}
          className="absolute top-[15%] left-[8%] text-white/80 animate-float-1"
        />
        <FourPointStar
          size={45}
          className="absolute top-[10%] right-[30%] text-white/90 animate-float-2"
        />
        <FourPointStar
          size={70}
          className="absolute top-[8%] right-[22%] text-white animate-float-3"
        />
        <SmallStar
          size={16}
          className="absolute top-[12%] left-[25%] text-white/60 animate-twinkle"
        />
        <SmallStar
          size={14}
          className="absolute top-[6%] right-[40%] text-white/50 animate-twinkle"
          style={{ animationDelay: "1s" } as React.CSSProperties}
        />
        <SmallStar
          size={12}
          className="absolute top-[20%] right-[15%] text-white/40 animate-twinkle"
          style={{ animationDelay: "2s" } as React.CSSProperties}
        />
        <SmallStar
          size={18}
          className="absolute top-[18%] left-[45%] text-white/50 animate-twinkle"
          style={{ animationDelay: "0.5s" } as React.CSSProperties}
        />
        <FourPointStar
          size={90}
          className="absolute top-[40%] left-[-2%] text-white/70 animate-float-2"
          style={{ animationDelay: "1.5s" } as React.CSSProperties}
        />
        <SmallStar
          size={10}
          className="absolute top-[25%] right-[50%] text-white/40 animate-twinkle"
          style={{ animationDelay: "3s" } as React.CSSProperties}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mt-20 md:mt-0">
        <motion.div
          style={{ x: titleX, y: titleY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-none tracking-tight"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="block">
                {"HIBA".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 80, rotateZ: -10 }}
                    animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {"MENACER".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 80, rotateZ: -10 }}
                    animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7 + i * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>
          <motion.p
            className="mt-6 text-sm md:text-base text-black/70 font-sans max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {'"Designer & Front-End Developer blending art and code."'}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <MagneticButton>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 text-black/80 text-sm font-sans hover:bg-black/5 hover:border-black/40 transition-all duration-300"
              >
                Explore my work
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a
                href="/cv"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white/90 text-sm font-sans hover:bg-black/80 hover:shadow-[0_0_20px_rgba(88,175,237,0.35)] transition-all duration-300"
              >
                Download CV
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                </svg>
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="font-sans text-[10px] md:text-xs text-black/50 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.span
          className="block w-px h-10 bg-black/40"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.a>
    </section>
  )
}
