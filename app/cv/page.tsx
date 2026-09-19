import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "CV | Hiba Menacer",
  description: "Curriculum vitae of Hiba Menacer — Designer & Front-End Developer.",
}

export default function CVPage() {
  return (
    <main className="relative min-h-screen px-6 md:px-16 lg:px-24 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/70 hover:text-black transition-colors font-sans text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
        <a
          href="/resume.pdf"
          download="Hiba-Menacer-CV.pdf"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white bg-[#58AFED] hover:bg-[#58AFED]/80 transition-colors rounded-full px-5 py-2.5"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
      </div>

      <div className="max-w-4xl mx-auto border border-black/10 rounded-2xl overflow-hidden bg-white">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-[85vh]"
          aria-label="Hiba Menacer resume"
        >
          <p className="p-8 font-sans text-black/70 text-center">
            Your browser doesn&apos;t support embedded PDFs.{" "}
            <a href="/resume.pdf" download className="text-[#58AFED] underline">
              Download the CV instead
            </a>
          </p>
        </object>
      </div>
    </main>
  )
}