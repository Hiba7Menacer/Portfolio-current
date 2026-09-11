import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import ProjectDetail from "@/components/project-detail"
import PageTransition from "@/components/page-transition"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return { title: "Project Not Found" }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      type: "website",
      title: `${project.title} | Hiba Menacer`,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Hiba Menacer`,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="noise-overlay" />
      <ProjectDetail project={project} />
    </PageTransition>
  )
}
