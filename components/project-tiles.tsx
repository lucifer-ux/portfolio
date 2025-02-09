import Image from "next/image"
import Link from "next/link"
import "./project-tiles.css"

const projects = [
  { id: 1, title: "Project 1", videoUrl: "#", liveUrl: "#", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "Project 2", videoUrl: "#", liveUrl: "#", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Project 3", videoUrl: "#", liveUrl: "#", image: "/placeholder.svg?height=200&width=300" },
]

export default function ProjectTiles() {
  return (
    <section className="project-tiles">
      <h2 className="project-tiles__title">My Projects</h2>
      <div className="project-tiles__grid">
        {projects.map((project) => (
          <div key={project.id} className="project-tile">
            <div className="project-tile__image-wrapper">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="project-tile__image"
              />
            </div>
            <div className="project-tile__content">
              <h3 className="project-tile__title">{project.title}</h3>
              <div className="project-tile__links">
                <Link href={project.videoUrl} className="project-tile__link project-tile__link--demo">
                  Watch Demo
                </Link>
                <Link href={project.liveUrl} className="project-tile__link project-tile__link--live">
                  Live Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

