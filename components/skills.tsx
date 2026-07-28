"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillData = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "Java"],
  },
  {
    category: "Data & AI",
    skills: ["Data Analysis", "Machine Learning", "Data Preprocessing", "Exploratory Analysis"],
  },
  {
    category: "Front-End & Design",
    skills: ["HTML / CSS", "React", "Figma", "Photoshop"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git / GitHub", "Kaggle", "Next.js"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            SKILLS
          </h2>
          <p className="mt-4 font-sans text-sm md:text-base text-black/50 max-w-md mx-auto">
            Tools and technologies I work with across the stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillData.map((category, catIndex) => (
            <CategoryCard
              key={category.category}
              category={category.category}
              skills={category.skills}
              index={catIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({
  category,
  skills,
  index,
}: {
  category: string
  skills: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="p-6 md:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-all duration-500"
    >
      <h3 className="font-serif text-xl md:text-2xl font-bold text-black mb-5 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#58AFED]" />
        {category}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <SkillChip key={skill} name={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillChip({ name, index }: { name: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="px-4 py-2 text-sm font-sans text-black/70 bg-white/[0.06] rounded-full border border-white/10 hover:border-[#58AFED]/40 hover:text-black hover:bg-white/[0.1] transition-all duration-300 cursor-default"
    >
      {name}
    </motion.span>
  )
}
