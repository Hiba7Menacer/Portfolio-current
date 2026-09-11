"use client"

import AnimatedSection from "./animated-section"
import TextReveal from "./text-reveal"
import StatCounter from "./stat-counter"

const stats = [
  { value: 3, suffix: "", label: "Years Coding" },
  { value: 7, suffix: "", label: "Projects Built" },
  { value: 4, suffix: "", label: "Core Languages" },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <TextReveal
            text="ABOUT ME"
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed max-w-2xl mx-auto">
            Hi! I&apos;m Hiba, a designer, AI enthusiast, and front-end
            developer. I love crafting clean, modern web experiences with HTML,
            CSS, and React, and bringing them to life with design tools like
            Figma and Photoshop. I also work with Python and SQL for data
            analysis and machine learning, and I keep everything versioned with
            Git. Beyond code and design, I enjoy art and sharing knowledge with
            others.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-10 max-w-md mx-auto">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.3 + i * 0.15}>
              <StatCounter {...stat} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}