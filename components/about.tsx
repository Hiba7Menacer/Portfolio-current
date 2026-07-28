"use client"

import Image from "next/image"
import AnimatedSection from "./animated-section"
import TextReveal from "./text-reveal"

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 max-w-5xl mx-auto">
        {/* Photo */}
        <AnimatedSection direction="left" className="flex-shrink-0">
          <div className="w-52 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden rotate-[-2deg] shadow-lg">
            <Image
              src="/images/about-photo-2.jpg"
              alt="Hiba Menacer - Designer and Developer"
              width={256}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection direction="right" delay={0.2} className="flex-1">
          <TextReveal
            text="ABOUT ME"
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          />
          <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed max-w-lg">
            Hi! I&apos;m Hiba, a passionate web designer and developer. I create
            clean, modern websites and digital designs that bring ideas to life.
            Specialized in front-end development, UI/UX design, and creative
            branding, I love blending technology with creativity. Beyond coding
            and design, I enjoy exploring art, calligraphy, and sharing knowledge
            with others.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
