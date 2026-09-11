"use client"

import { FourPointStar } from "./star"

const items = [
  "Designer",
  "Front-End Developer",
  "UI / UX",
  "Data Enthusiast",
  "React",
  "Python",
  "Figma",
]

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const row = items.join("  ")
  const sequence = Array.from({ length: 4 }, () => row)

  return (
    <div className="relative overflow-hidden py-6 md:py-8 select-none">
      <div
        className={`marquee-track flex w-max whitespace-nowrap items-center gap-8 md:gap-12 ${
          reverse ? "marquee-track-reverse" : ""
        }`}
      >
        {sequence.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-8 md:gap-12 font-serif text-3xl md:text-5xl font-bold text-black/25 uppercase tracking-wide"
          >
            {text}
            <FourPointStar size={18} className="text-[#58AFED]/60 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
