"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/projects"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import AnimatedSection from "./animated-section"
import TextReveal from "./text-reveal"

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const cardWidth = 280
  const gap = 24

  const getOffset = useCallback(() => {
    return -(currentIndex * (cardWidth + gap))
  }, [currentIndex])

  useEffect(() => {
    setTranslateX(getOffset())
  }, [currentIndex, getOffset])

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(getOffset() + diff)
  }

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return
    setIsDragging(false)
    const diff = clientX - startX
    const threshold = cardWidth / 3

    if (diff < -threshold && currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else if (diff > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    } else {
      setTranslateX(getOffset())
    }
  }

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((p) => p - 1)
  }

  const next = () => {
    if (currentIndex < projects.length - 1) setCurrentIndex((p) => p + 1)
  }

  return (
    <section id="work" className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24">
      <AnimatedSection>
        <TextReveal
          text="MY WORK"
          as="h2"
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
        />
        <p className="font-sans text-sm md:text-base text-black/60 mb-12 max-w-md leading-relaxed">
          Selected projects showcasing my design and development work.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="relative">
          {/* Navigation arrows */}
          <button
            type="button"
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute -left-2 md:left-[-40px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-black transition-all disabled:opacity-30 hover:bg-white/40 hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentIndex === projects.length - 1}
            className="absolute -right-2 md:right-[-40px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-black transition-all disabled:opacity-30 hover:bg-white/40 hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex gap-6 select-none"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isDragging
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={(e) => handleDragEnd(e.clientX)}
              onMouseLeave={(e) => {
                if (isDragging) handleDragEnd(e.clientX)
              }}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
            >
              {projects.map((project, index) => {
                const isActive = index === currentIndex
                return (
                  <Link
                    key={project.id}
                    href={`/project/${project.id}`}
                    className={`flex-shrink-0 block group transition-all duration-500 ${
                      isActive ? "scale-105" : "scale-95 opacity-60 hover:opacity-80"
                    }`}
                    style={{ width: cardWidth }}
                    draggable={false}
                  >
                    <motion.div
                      className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white/20 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center justify-between">
                          <p className="font-serif text-lg font-bold text-white">
                            {project.title}
                          </p>
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                        <p className="font-sans text-xs text-white/70 mt-1">
                          {project.tags.join(" / ")}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-black w-8"
                    : "bg-black/20 w-2 hover:w-4"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
