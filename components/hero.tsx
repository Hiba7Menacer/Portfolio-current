"use client"

import React from "react"
import { motion } from "framer-motion"

import { FourPointStar, SmallStar } from "./star"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Decorative stars */}
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

      {/* Content */}
      <div className="relative z-10 mt-20 md:mt-0">
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
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 text-black/80 text-sm font-sans hover:bg-black/5 transition-all duration-300"
          >
            Explore my work
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
