import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-32 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none [&>canvas]:pointer-events-auto">
        <ParticlesBackground />
      </div>
      <div className="flex flex-col items-center justify-center z-[2] gap-2 w-full max-w-[110rem] mx-auto px-8 md:px-12 lg:px-6">
        <picture>
          <source type="image/webp" srcSet="/assets/matheus.webp" />
          <source type="image/jpeg" srcSet="/assets/matheus.jpg" />
          <img
            src="/assets/matheus.jpg"
            alt="Matheus Costa Design"
            width="250"
            height="250"
            className="h-auto [clip-path:circle()] transition-[filter] duration-300 hover:brightness-75 w-[160px] md:w-[180px] 2xl:w-[250px]"
          />
        </picture>
        <h1 className="text-white font-semibold text-center m-0 text-[4.8rem] leading-tight max-[1366px]:max-[800px]:text-[3.2rem]">
          Matheus Costa
        </h1>
        <h2 className="text-text-primary text-[2.4rem] font-normal text-center m-0">
          UX/UI Designer | Desenvolvedor Front-end
        </h2>
        <div className="my-7 grid grid-cols-3 gap-4 md:flex md:gap-4 md:flex-wrap md:justify-center max-[780px]:gap-6">
          <a
            href="https://linkedin.com/in/mattheuscosta"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <div className="p-6 bg-[#454548] rounded-[0.4rem] flex items-center justify-center transition-all duration-300 hover:bg-primary max-[780px]:p-10">
              <img
                src="/assets/icons/linkedin.svg"
                alt="Icone Linkedin"
                width="24"
                height="24"
                className="w-10 h-10"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/matheuscosta.design/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <div className="p-6 bg-[#454548] rounded-[0.4rem] flex items-center justify-center transition-all duration-300 hover:bg-primary max-[780px]:p-10">
              <img
                src="/assets/icons/instagram.svg"
                alt="Icone Instagram"
                width="24"
                height="24"
                className="w-10 h-10"
              />
            </div>
          </a>
          <a
            href="https://github.com/matheuscostadesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <div className="p-6 bg-[#454548] rounded-[0.4rem] flex items-center justify-center transition-all duration-300 hover:bg-primary max-[780px]:p-10">
              <img
                src="/assets/icons/github.svg"
                alt="Icone Github"
                width="24"
                height="24"
                className="w-10 h-10"
              />
            </div>
          </a>
          <a
            href="https://www.behance.net/matheuscostadesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance"
          >
            <div className="p-6 bg-[#454548] rounded-[0.4rem] flex items-center justify-center transition-all duration-300 hover:bg-primary max-[780px]:p-10">
              <img
                src="/assets/icons/behance.svg"
                alt="Icone Behance"
                width="24"
                height="24"
                className="w-10 h-10"
              />
            </div>
          </a>
          <a
            href="https://dribbble.com/matheuscostadesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Dribbble"
          >
            <div className="p-6 bg-[#454548] rounded-[0.4rem] flex items-center justify-center transition-all duration-300 hover:bg-primary max-[780px]:p-10">
              <img
                src="/assets/icons/dribbble.svg"
                alt="Icone Dribbble"
                width="24"
                height="24"
                className="w-10 h-10"
              />
            </div>
          </a>
          <a
            href="https://x.com/matheuscdesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter/X"
          >
            <div className="p-6 bg-[#454548] rounded-[0.4rem] flex items-center justify-center transition-all duration-300 hover:bg-primary max-[780px]:p-10">
              <img
                src="/assets/icons/twitter-x.svg"
                alt="Icone Twitter/X"
                width="24"
                height="24"
                className="w-10 h-10"
              />
            </div>
          </a>
        </div>
        <a
          href="https://wa.me/5517992143072"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Chamar Whatsapp
          <img
            src="/assets/icons/whatsapp.svg"
            alt="Icone Whatsapp"
            width="24"
            height="24"
          />
        </a>
      </div>
    </section>
  );
}
