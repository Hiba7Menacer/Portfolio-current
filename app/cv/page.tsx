import Link from "next/link"
import type { Metadata } from "next"
import { projects } from "@/lib/projects"
import PrintButton from "@/components/print-button"
import { ArrowLeft, Mail, Github, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "CV | Hiba Menacer",
  description: "Curriculum vitae of Hiba Menacer — Designer & Front-End Developer.",
}

const skillGroups = [
  { title: "Programming", skills: ["Python", "SQL", "Java"] },
  {
    title: "Data & AI",
    skills: ["Data Analysis", "Machine Learning", "Data Preprocessing", "Exploratory Analysis"],
  },
  {
    title: "Front-End & Design",
    skills: ["HTML / CSS", "React", "Figma", "Photoshop"],
  },
  { title: "Tools & Platforms", skills: ["Git / GitHub", "Kaggle", "Next.js"] },
]

export default function CVPage() {
  return (
    <main className="relative min-h-screen px-6 md:px-16 lg:px-24 py-12">
      <div className="print:hidden mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/70 hover:text-black transition-colors font-sans text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="max-w-3xl mx-auto bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 print:bg-white print:border-0 print:shadow-none">
        {/* Header */}
        <header className="border-b border-black/10 pb-6 print:border-black/20">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black">
            Hiba Menacer
          </h1>
          <p className="mt-2 font-sans text-sm md:text-base text-black/60">
            Designer & Front-End Developer
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs md:text-sm text-black/50">
            <a href="mailto:nh_menacer@esi.dz" className="inline-flex items-center gap-1.5 hover:text-[#58AFED] transition-colors">
              <Mail className="w-3.5 h-3.5" />
              nh_menacer@esi.dz
            </a>
            <a href="https://github.com/Hiba7Menacer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#58AFED] transition-colors">
              <Github className="w-3.5 h-3.5" />
              github.com/Hiba7Menacer
            </a>
            <a href="https://www.linkedin.com/in/hiba-menacer-8999463b1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#58AFED] transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
              /in/hiba-menacer
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-8">
          <h2 className="font-serif text-xl font-bold text-black uppercase tracking-wide">
            Profile
          </h2>
          <p className="mt-3 font-sans text-sm md:text-base text-black/75 leading-relaxed">
            Designer and front-end developer who loves the sweet spot between
            creativity and logic. I craft clean, modern web experiences with
            HTML, CSS, and React, and bring them to life with Figma and
            Photoshop. On the data side, I work with Python and SQL for
            analysis, and I&apos;m exploring machine learning. I keep everything
            versioned with Git.
          </p>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="font-serif text-xl font-bold text-black uppercase tracking-wide">
            Education
          </h2>
          <div className="mt-3">
            <h3 className="font-sans font-semibold text-sm md:text-base text-black">
              Computer Science Student
            </h3>
            <p className="font-sans text-sm text-black/60">
              École Nationale Supérieure d&apos;Informatique (ESI), Algiers
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="font-serif text-xl font-bold text-black uppercase tracking-wide">
            Skills
          </h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-sans font-semibold text-sm text-[#58AFED]">
                  {group.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-black/70">
                  {group.skills.join("  ·  ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <h2 className="font-serif text-xl font-bold text-black uppercase tracking-wide">
            Selected Projects
          </h2>
          <ul className="mt-3 space-y-4">
            {projects.map((project) => (
              <li key={project.id}>
                <h3 className="font-sans font-semibold text-sm md:text-base text-black">
                  {project.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-black/70 leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-1 font-sans text-xs text-black/50">
                  {project.tags.join("  ·  ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="mt-8">
          <h2 className="font-serif text-xl font-bold text-black uppercase tracking-wide">
            Languages
          </h2>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-black/70">
            <span>Arabic — Native</span>
            <span>English — Fluent</span>
            <span>French — Fluent</span>
          </div>
        </section>
      </article>
    </main>
  )
}
