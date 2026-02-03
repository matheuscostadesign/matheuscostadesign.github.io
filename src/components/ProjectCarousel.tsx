import { useEffect, useRef } from "react";

interface Project {
  title: string;
  image: string;
  alt: string;
  link: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  autoplayDelay?: number;
}

export default function ProjectCarousel({
  projects,
  autoplayDelay = 3000,
}: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          // Reset to start when reaching the end
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to next item
          carousel.scrollBy({
            left: carousel.clientWidth / 3,
            behavior: "smooth",
          });
        }
      }, autoplayDelay);
    };

    startAutoScroll();

    // Pause on hover
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startAutoScroll();

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [autoplayDelay]);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={carouselRef}>
        {projects.map((projeto, index) => (
          <div key={index} className="carousel-item">
            <div className="projeto">
              <div className="img">
                <img src={projeto.image} alt={projeto.alt} loading="lazy" />
              </div>
              <div className="text">
                <h3>{projeto.title}</h3>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Acessar o case</span>
                  <img
                    src="/assets/icons/arrow-right-up.svg"
                    alt="Icone Link"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
