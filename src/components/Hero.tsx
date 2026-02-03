import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="s-hero">
      <div className="particles-wrapper">
        <ParticlesBackground />
      </div>
      <div className="container">
        <picture>
          <source type="image/webp" srcSet="/assets/matheus.webp" />
          <source type="image/jpeg" srcSet="/assets/matheus.jpg" />
          <img
            src="/assets/matheus.jpg"
            alt="Matheus Costa Design"
            width="250"
            height="250"
            className="img-profile"
          />
        </picture>
        <h1>Matheus Costa</h1>
        <h2 className="subtitle">UX/UI Designer | Desenvolvedor Front-end</h2>
        <div className="icons">
          <a
            href="https://linkedin.com/in/mattheuscosta"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <div className="icon">
              <img
                src="/assets/icons/linkedin.svg"
                alt="Icone Linkedin"
                width="24"
                height="24"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/matheuscosta.design/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <div className="icon">
              <img
                src="/assets/icons/instagram.svg"
                alt="Icone Instagram"
                width="24"
                height="24"
              />
            </div>
          </a>
          <a
            href="https://github.com/matheuscostadesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <div className="icon">
              <img
                src="/assets/icons/github.svg"
                alt="Icone Github"
                width="24"
                height="24"
              />
            </div>
          </a>
          <a
            href="https://www.behance.net/matheuscostadesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance"
          >
            <div className="icon">
              <img
                src="/assets/icons/behance.svg"
                alt="Icone Behance"
                width="24"
                height="24"
              />
            </div>
          </a>
          <a
            href="https://dribbble.com/matheuscostadesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Dribbble"
          >
            <div className="icon">
              <img
                src="/assets/icons/dribbble.svg"
                alt="Icone Dribbble"
                width="24"
                height="24"
              />
            </div>
          </a>
          <a
            href="https://x.com/matheuscdesign"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter/X"
          >
            <div className="icon">
              <img
                src="/assets/icons/twitter-x.svg"
                alt="Icone Twitter/X"
                width="24"
                height="24"
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
