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
    <div className="w-full max-w-[110rem] overflow-hidden py-8 mx-auto">
      <div
        className="flex gap-12 overflow-x-auto [scroll-snap-type:x_mandatory] py-8 scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-[820px]:px-6"
        ref={carouselRef}
      >
        {projects.map((projeto, index) => (
          <div
            key={index}
            className="[scroll-snap-align:start] flex-[0_0_auto] w-[385px] max-w-[90vw] max-[820px]:w-[300px]"
          >
            <div className="text-center w-full max-w-[385px]">
              <div className="w-full h-[216px] overflow-hidden rounded-[0.8rem] mb-6">
                <img
                  src={projeto.image}
                  alt={projeto.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="text">
                <h3 className="my-6 text-white text-[2.4rem] font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                  {projeto.title}
                </h3>
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
