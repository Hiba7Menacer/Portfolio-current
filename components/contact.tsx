"use client"

import AnimatedSection from "./animated-section"
import TextReveal from "./text-reveal"
import { Linkedin, Github, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-2xl">
        <AnimatedSection>
          <TextReveal
            text="CONTACT"
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-4 font-sans text-sm md:text-base text-black/80 leading-relaxed">
            <p>
              <span className="text-black/40">{"Let's connect."}</span>
              <br />
              Always open to new ideas, collaborations, or a quick chat about
              design, data & technology.
            </p>
            <p>
              <span className="text-black/40">Email: </span>
              <a
                href="mailto:nh_menacer@esi.dz"
                className="text-black hover:text-[#58AFED] transition-colors"
              >
                nh_menacer@esi.dz
              </a>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/hiba-menacer-8999463b1?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/70 hover:text-[#58AFED] hover:border-[#58AFED]/30 hover:bg-[#58AFED]/5 transition-all duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Hiba7Menacer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/70 hover:text-[#58AFED] hover:border-[#58AFED]/30 hover:bg-[#58AFED]/5 transition-all duration-300"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
