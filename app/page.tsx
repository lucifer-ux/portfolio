import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import ProjectTiles from "@/components/project-tiles"

export default function Home() {
  return (
    <main className="main">
      <Header />
      <HeroCarousel />
      <ProjectTiles />
    </main>
  )
}

