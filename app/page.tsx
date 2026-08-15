"use client";

import { useEffect, useState } from "react";

const gallery = [
  { src: "/images/gallery-01.webp", alt: "Sala de jantar com marcenaria planejada e iluminação decorativa" },
  { src: "/images/gallery-02.webp", alt: "Sala de estar integrada, mobiliada e iluminada" },
  { src: "/images/gallery-03.webp", alt: "Painel de televisão planejado na sala" },
  { src: "/images/gallery-04.webp", alt: "Integração entre sala de estar, jantar e varanda" },
  { src: "/images/gallery-05.webp", alt: "Vista para o mar a partir da varanda" },
  { src: "/images/gallery-06.webp", alt: "Varanda envidraçada com vista aberta" },
  { src: "/images/gallery-07.webp", alt: "Cozinha americana planejada" },
  { src: "/images/gallery-08.webp", alt: "Varanda gourmet com bancada" },
  { src: "/images/gallery-09.webp", alt: "Cozinha com armários e bancada em pedra" },
  { src: "/images/gallery-10.webp", alt: "Detalhes da cozinha integrada" },
  { src: "/images/gallery-11.webp", alt: "Banheiro com acabamento contemporâneo" },
  { src: "/images/gallery-12.webp", alt: "Suíte mobiliada com marcenaria planejada" },
];

const amenities = [
  "Vista para o mar", "Mobiliado", "Ar-condicionado", "Varanda",
  "Cozinha americana", "Área de serviço", "Piscina", "Academia",
  "Espaço gourmet", "Churrasqueira", "Salão de festas", "Brinquedoteca",
  "Playground", "Portaria 24h", "Elevador",
];

const whatsappMessage = encodeURIComponent(
  "Olá! Tenho interesse no apartamento Orizzon, código GI97678. Gostaria de conhecer as opções de locação e venda e agendar uma visita.",
);

const brokers = [
  {
    initials: "GC",
    name: "Gisele Carneiro",
    role: "Corretora de Imóveis",
    creci: "CRECI 34.759-F",
    phone: "(73) 99816-7532",
    href: `https://wa.me/5573998167532?text=${whatsappMessage}`,
  },
  {
    initials: "TM",
    name: "Thiago Melgaço",
    role: "Corretor de Imóveis",
    creci: "CRECI 32.586",
    phone: "(73) 99152-7808",
    href: `https://wa.me/5573991527808?text=${whatsappMessage}`,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeImage === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") {
        setActiveImage((current) => current === null ? 0 : (current + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((current) => current === null ? 0 : (current - 1 + gallery.length) % gallery.length);
      }
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Orizzon — início">
          <span className="brand-mark">O</span>
          <span className="brand-copy">
            <strong>ORIZZON</strong>
            <small>GI97678</small>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "is-open" : ""} aria-label="Navegação principal">
          <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#detalhes" onClick={closeMenu}>Detalhes</a>
          <a href="#corretores" onClick={closeMenu}>Contato</a>
        </nav>

        <a className="header-cta" href="#corretores">Agendar visita</a>
      </header>

      <section className="hero" id="inicio" aria-label="Apresentação do Orizzon">
        <div className="hero-image" />
        <div className="hero-noise" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Praia dos Milionários · Ilhéus</p>
          <h1>
            Onde o horizonte
            <span>entra para morar.</span>
          </h1>
          <p className="hero-intro">
            Um apartamento no Orizzon, disponível para locação mobiliada,
            sem móveis ou venda — sempre com conforto, luz natural e elegância.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#corretores">
              Agendar uma visita <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#experiencia">
              Descobrir o imóvel <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-facts" aria-label="Principais informações">
          <div><strong>105</strong><span>m² de área total</span></div>
          <div><strong>03</strong><span>quartos</span></div>
          <div><strong>02</strong><span>suítes</span></div>
          <div><strong>R$ 6,5 mil</strong><span>locação a partir de</span></div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span /></div>
      </section>

      <section className="statement" id="experiencia">
        <div className="section-index">01 — A experiência</div>
        <div className="statement-copy" data-reveal>
          <p className="eyebrow">Viver Orizzon</p>
          <h2>Design contemporâneo.<br />O mar como cenário.</h2>
          <p>
            Ambientes integrados, marcenaria planejada e uma paleta serena dão
            forma a um apartamento que acolhe sem abrir mão da personalidade.
            Da sala à varanda, a luz atravessa os espaços e conduz o olhar até
            o azul da orla sul de Ilhéus.
          </p>
        </div>
        <div className="statement-side" data-reveal>
          <span>Locação ou compra</span>
          <strong>Escolha como viver</strong>
          <p>Mobiliado, sem móveis ou para chamar de seu. Condomínio entregue em 2023.</p>
        </div>
      </section>

      <section className="cinematic" aria-label="Sala integrada do apartamento">
        <div className="cinematic-frame" data-reveal>
          <img src="/images/gallery-04.webp" alt="Sala integrada do apartamento Orizzon" />
          <div className="cinematic-caption">
            <span>01</span>
            <p>Integração que amplia<br />a sensação de liberdade.</p>
          </div>
        </div>
      </section>

      <section className="details" id="detalhes">
        <div className="details-heading" data-reveal>
          <p className="eyebrow">A unidade</p>
          <h2>Conforto em<br /><em>cada perspectiva.</em></h2>
        </div>

        <div className="details-grid">
          <article className="detail-card" data-reveal>
            <span className="detail-number">01</span>
            <h3>Área social</h3>
            <p>Sala de estar e jantar integradas, mobiliário planejado, iluminação linear e varanda com vista aberta.</p>
          </article>
          <article className="detail-card" data-reveal>
            <span className="detail-number">02</span>
            <h3>Área íntima</h3>
            <p>Três quartos, sendo duas suítes, com marcenaria, ar-condicionado e atmosfera tranquila.</p>
          </article>
          <article className="detail-card" data-reveal>
            <span className="detail-number">03</span>
            <h3>Praticidade</h3>
            <p>Cozinha americana planejada, área de serviço e três banheiros para uma rotina leve e funcional.</p>
          </article>
        </div>

        <div className="amenities" data-reveal>
          <p className="eyebrow">Estrutura & diferenciais</p>
          <div className="amenity-list">
            {amenities.map((amenity, index) => (
              <span key={amenity}><b>{String(index + 1).padStart(2, "0")}</b>{amenity}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <div className="gallery-heading" data-reveal>
          <div>
            <p className="eyebrow">Galeria selecionada</p>
            <h2>Um imóvel para<br />ser <em>sentido.</em></h2>
          </div>
          <p>Uma seleção dos ambientes do GI97678. Toque em qualquer imagem para ampliar.</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <button
              className={`gallery-item gallery-item-${index + 1}`}
              type="button"
              key={image.src}
              onClick={() => setActiveImage(index)}
              aria-label={`Ampliar foto ${index + 1}: ${image.alt}`}
              data-reveal
            >
              <img src={image.src} alt={image.alt} loading={index > 3 ? "lazy" : "eager"} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="video-section">
        <div className="video-copy" data-reveal>
          <p className="eyebrow">Em movimento</p>
          <h2>Veja como os<br />ambientes <em>se conectam.</em></h2>
          <p>
            Percorra o apartamento em vídeo e perceba a proporção, a iluminação
            e a fluidez entre os espaços.
          </p>
          <a
            className="button button-dark"
            href="https://youtube.com/shorts/LGb9Sm24w40"
            target="_blank"
            rel="noreferrer"
          >
            Abrir vídeo no YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="video-frame" data-reveal>
          <iframe
            src="https://www.youtube.com/embed/LGb9Sm24w40?rel=0"
            title="Vídeo do apartamento Orizzon GI97678"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="location">
        <div className="location-image" data-reveal>
          <img src="/images/gallery-05.webp" alt="Vista para o mar na região do Orizzon" />
        </div>
        <div className="location-copy" data-reveal>
          <p className="eyebrow">Localização</p>
          <h2>Orla sul de Ilhéus.<br /><em>Tudo por perto.</em></h2>
          <p>
            Rua dos Canários, na região da Praia dos Milionários. Um endereço
            conectado a supermercados, restaurantes, serviços e às melhores
            experiências da orla, com localização aproximada preservada.
          </p>
          <div className="address-line">
            <span>Ilhéus · Bahia</span>
            <span>Praia dos Milionários</span>
            <span>Localização aproximada</span>
          </div>
        </div>
      </section>

      <section className="brokers" id="corretores">
        <div className="brokers-intro" data-reveal>
          <p className="eyebrow">Atendimento exclusivo</p>
          <h2>Conheça o Orizzon<br /><em>de perto.</em></h2>
          <p>Escolha um dos corretores responsáveis e agende sua visita ao GI97678.</p>
        </div>

        <div className="broker-grid">
          {brokers.map((broker) => (
            <article className="broker-card" key={broker.name} data-reveal>
              <div className="broker-avatar" aria-hidden="true">{broker.initials}</div>
              <div className="broker-info">
                <h3>{broker.name}</h3>
                <p>{broker.role}</p>
                <span>{broker.creci}</span>
                <span>{broker.phone}</span>
              </div>
              <a href={broker.href} target="_blank" rel="noreferrer" aria-label={`Falar com ${broker.name} no WhatsApp`}>
                Falar no WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="pricing" data-reveal>
          <div className="pricing-heading">
            <p className="eyebrow">Condições comerciais</p>
            <h3>Escolha a opção<br /><em>ideal para você.</em></h3>
          </div>
          <div className="pricing-options">
            <article className="pricing-card">
              <span>Locação</span>
              <h4>Mobiliado</h4>
              <strong>R$ 7.000<small>/mês</small></strong>
            </article>
            <article className="pricing-card">
              <span>Locação</span>
              <h4>Sem móveis</h4>
              <strong>R$ 6.500<small>/mês</small></strong>
            </article>
            <article className="pricing-card pricing-card-sale">
              <span>Venda</span>
              <h4>Para chamar de seu</h4>
              <strong>R$ 1.200.000</strong>
            </article>
          </div>
          <p className="pricing-note">Valores e disponibilidade sujeitos a confirmação no momento do contato.</p>
        </div>
      </section>

      <footer>
        <div className="footer-brand">ORIZZON</div>
        <div className="footer-meta">
          <span>Imóvel GI97678</span>
          <span>Ilhéus · Bahia</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <a className="floating-contact" href="#corretores" aria-label="Ir para os contatos dos corretores">
        <span className="contact-dot" />
        <span>Agendar visita</span>
      </a>

      {activeImage !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada da galeria" onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" type="button" aria-label="Fechar galeria" onClick={() => setActiveImage(null)}>×</button>
          <button
            className="lightbox-arrow lightbox-prev"
            type="button"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.stopPropagation();
              setActiveImage((activeImage - 1 + gallery.length) % gallery.length);
            }}
          >←</button>
          <img src={gallery[activeImage].src} alt={gallery[activeImage].alt} onClick={(event) => event.stopPropagation()} />
          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            aria-label="Próxima foto"
            onClick={(event) => {
              event.stopPropagation();
              setActiveImage((activeImage + 1) % gallery.length);
            }}
          >→</button>
          <span className="lightbox-count">{String(activeImage + 1).padStart(2, "0")} / {gallery.length}</span>
        </div>
      )}
    </main>
  );
}
