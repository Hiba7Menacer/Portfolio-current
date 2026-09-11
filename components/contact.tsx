"use client"

import { useState } from "react"
import AnimatedSection from "./animated-section"
import TextReveal from "./text-reveal"
import MagneticButton from "./magnetic-button"
import { Linkedin, Github, Mail, Copy, Check } from "lucide-react"

const EMAIL = "nh_menacer@esi.dz"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

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

            <div className="inline-flex items-center gap-2">
              <span className="text-black/40">Email: </span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-black hover:text-[#58AFED] transition-colors underline decoration-[#58AFED]/40 underline-offset-4"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy email to clipboard"
                className="ml-1 p-1.5 rounded-lg bg-black/5 border border-black/10 text-black/60 hover:text-[#58AFED] hover:border-[#58AFED]/40 hover:bg-[#58AFED]/5 transition-all duration-300"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#58AFED]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              {copied && (
                <span className="text-xs text-[#58AFED] animate-pulse">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex gap-4 mt-8">
            <MagneticButton strength={0.4}>
              <a
                href="https://www.linkedin.com/in/hiba-menacer-8999463b1?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/70 hover:text-white hover:border-[#58AFED] hover:bg-[#58AFED] transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="https://github.com/Hiba7Menacer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/70 hover:text-white hover:border-[#58AFED] hover:bg-[#58AFED] transition-all duration-300"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href={`mailto:${EMAIL}`}
                className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/70 hover:text-white hover:border-[#58AFED] hover:bg-[#58AFED] transition-all duration-300"
                aria-label="Email Hiba"
              >
                <Mail className="w-5 h-5" />
              </a>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
