"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { projects } from "@/lib/projects"
import { ExternalLink } from "lucide-react"
import SpotlightCard from "./spotlight-card"
import ScrollHeading from "./scroll-heading"

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3 + index * 0.1, 1, 1, 0.4 - index * 0.05]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [80 + index * 20, 0, -60 - index * 10])
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? 8 : -8, 0, index % 2 === 0 ? -5 : 5]
  )

  const side = index % 2 === 0 ? "left" : "right"
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [side === "left" ? -60 : 60, 0, side === "left" ? 40 : -40]
  )

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y, x, rotate }}
      className="w-full"
    >
      <a
        href={project.link || `/project/${project.id}`}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="block group"
      >
        <SpotlightCard>
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.02, rotate: 0, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="aspect-video relative">
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09314D]/60 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#58AFED]/10" />
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Content overlay at bottom of card */}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-black">
                  {project.title}
                </h3>
                <span className="font-sans text-xs text-black/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 font-sans text-sm text-black/60 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-sans bg-black/5 text-black/50 rounded-full border border-black/10 transition-colors duration-300 group-hover:border-[#58AFED]/30 group-hover:text-black/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </SpotlightCard>
      </a>
    </motion.div>
  )
}

export default function Works() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <ScrollHeading className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-black">
          MY WORK
        </ScrollHeading>
        <p className="mt-4 font-sans text-sm md:text-base text-black/50 max-w-md mx-auto">
          Projects drifting in the digital cosmos — each one a world of its own.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
