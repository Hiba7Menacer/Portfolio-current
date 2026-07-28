"use client"

import AnimatedSection from "./animated-section"
import TextReveal from "./text-reveal"

const serviceItems = [
  "UI & Visual Design",
  "Prototyping & Interaction",
  "Front-End Development",
  "Creative Coding Experiments",
  "UX & Product Research",
  "Data Analysis & Visualization",
  "Machine Learning Prototyping",
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <TextReveal
            text="SERVICES"
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
          />
          <p className="font-sans text-sm md:text-base text-black/60 mb-12 max-w-md mx-auto leading-relaxed">
            Blending design thinking with technical skill to craft thoughtful,
            user-centered digital experiences.
          </p>
        </AnimatedSection>
      </div>

      <ul className="max-w-2xl mx-auto space-y-0">
        {serviceItems.map((service, i) => (
          <AnimatedSection key={service} delay={i * 0.1} direction="up">
            <li className="flex items-center gap-4 py-4 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#58AFED] flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
              <span className="font-sans text-base md:text-lg text-black/90 group-hover:text-black transition-colors duration-300">
                {service}
              </span>
            </li>
          </AnimatedSection>
        ))}
      </ul>
    </section>
  )
}
