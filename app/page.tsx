import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Works from "@/components/works"
import Contact from "@/components/contact"
import Skills from "@/components/skills"
import SpaceScene from "@/components/space-scene"
import ScrollProgress from "@/components/scroll-progress"
import CustomCursor from "@/components/custom-cursor"
import DepthLayer from "@/components/depth-layer"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      {/* 3D Particle Space Background */}
      <SpaceScene />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="relative z-10">
        <DepthLayer id="hero" depth={0} className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24">
          <Hero />
        </DepthLayer>

        <DepthLayer id="about" depth={500} fadeDistance={900} className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24">
          <About />
        </DepthLayer>

        <DepthLayer id="work" depth={1000} fadeDistance={900} className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24">
          <Works />
        </DepthLayer>

        <DepthLayer id="skills" depth={1500} fadeDistance={900} className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24">
          <Skills />
        </DepthLayer>

        <DepthLayer id="contact" depth={2000} fadeDistance={900} className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24">
          <Contact />
        </DepthLayer>

        <div className="h-screen" />
      </main>
    </>
  )
}
