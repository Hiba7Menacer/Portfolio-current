export interface Project {
  id: string
  title: string
  shortTitle: string
  thumbnail: string
  description: string
  images: string[]
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    shortTitle: "Portfolio",
    thumbnail: "/images/project1-thumb.jpg",
    description:
      "A beautifully designed portfolio website — clean typography, elegant layout, and a cohesive color scheme for a professional online presence.",
    images: [
      "/images/project1-thumb.jpg",
      "/images/Desktop-3.jpg",
      "/images/Desktop-4.jpg",
    ],
    tags: ["Graphic Design", "Branding", "Web Design"],
    link: "",
  },
  {
    id: "project-2",
    title: "Public Library Website",
    shortTitle: "Library",
    thumbnail: "/images/project2-thumb.jpg",
    description:
      "A comprehensive web design for a public reading library with Arabic content support, intuitive navigation, and responsive layouts.",
    images: [
      "/images/project2-thumb.jpg",
      "/images/Desktop-1.jpg",
      "/images/Desktop-2.jpg",
    ],
    tags: ["Web Design", "UI/UX", "Arabic Content"],
    link: "https://www.figma.com/design/cpGi81YIYnYlprpBY5Qu06/library-website-design?node-id=0-1&t=GRIyDhGUhvdYwf2g-1",
  },
  {
    id: "project-3",
    title: "Aero App",
    shortTitle: "Aero",
    thumbnail: "/images/project3-thumb.jpg",
    description:
      "A clean mobile application design for Aero — a location-based service app with minimalist branding and intuitive user flows.",
    images: [
      "/images/project3-thumb.jpg",
      "/images/FirstPage.jpg",
      "/images/SecondPage.jpg",
    ],
    tags: ["App Design", "Branding", "Mobile UI"],
    link: "https://www.figma.com/design/EjaVxRx97nMNry14QcVmOw/Design-app--Copy-?t=GRIyDhGUhvdYwf2g-1",
  },
  {
    id: "project-4",
    title: "Planning App",
    shortTitle: "Planning",
    thumbnail: "/images/project4-thumb.jpg",
    description:
      "A modern mobile planning app focused on simplicity, intuitive flows, and a fresh color palette with clean minimal design.",
    images: [
      "/images/Phone-1.jpg",
      "/images/Phone-2.jpg",
      "/images/Phone-3.jpg",
    ],
    tags: ["App Design", "Planning", "Mobile UI"],
    link: "https://www.figma.com/design/uZrAJ17gcjZpAQ4AoAHOBR/planner?node-id=0-1&t=gKcU1MuvAzbTWbtU-1",
  },
]
