"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import "./hero-carousel.css"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image: "/SlateOS.png?height=400&width=400",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="hero-carousel" ref={emblaRef}>
      <div className="hero-carousel__container">
        {projects.map((project) => (
          <div key={project.id} className="hero-carousel__slide">
            <div className="hero-carousel__content">
              <div className="hero-carousel__text">
                <h2 className="hero-carousel__title">{project.title}</h2>
                <p className="hero-carousel__description">{project.description}</p>
              </div>
              <div className="hero-carousel__image-wrapper">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="hero-carousel__image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="hero-carousel__button hero-carousel__button--prev" onClick={scrollPrev}>
        &#8592;
      </button>
      <button className="hero-carousel__button hero-carousel__button--next" onClick={scrollNext}>
        &#8594;
      </button>
    </div>
  )
}

