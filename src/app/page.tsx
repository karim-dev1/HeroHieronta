const services = [
  {
    number: "01",
    name: "Urheiluhieronta",
    description:
      "Tavoitteellista lihashuoltoa harjoitteluun, palautumiseen ja arjen kuormitukseen.",
    duration: "45 min",
    price: "50 €",
    icon: "↗",
  },
  {
    number: "02",
    name: "Niska, hartiat & selkä",
    description:
      "Kohdennettua käsittelyä kireyksiin ja istumatyön tai liikunnan rasituksiin.",
    duration: "30 min",
    price: "38 €",
    icon: "＋",
  },
  {
    number: "03",
    name: "Koko kehon huolto",
    description:
      "Pidempi huoltohetki, jossa keskitytään kehosi tarpeisiin päästä varpaisiin.",
    duration: "60 min",
    price: "65 €",
    icon: "◎",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M3.75 9h10.5m0 0-4.5-4.5M14.25 9l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="Urheiluhieronnan liikkeestä ja palautumisesta inspiroitunut kuvitus"
    >
      <div className="art-sun" />
      <div className="art-number" aria-hidden="true">01</div>
      <div className="art-copy" aria-hidden="true">
        <span>LIHASTEN HUOLTO</span>
        <strong>LIIKU.</strong>
        <strong>PALAUDU.</strong>
      </div>
      <div className="art-caption">
        <span className="caption-dot" />
        <span>Urheiluhierontaa Espoossa</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#alku" aria-label="HeroHieronta, etusivu">
          <span className="brand-mark">H</span>
          <span>HeroHieronta</span>
        </a>
        <nav className="desktop-nav" aria-label="Päänavigaatio">
          <a href="#palvelut">Palvelut</a>
          <a href="#meista">Meistä</a>
          <a href="#yhteys">Yhteystiedot</a>
        </nav>
        <a className="header-cta" href="#yhteys">
          Varaa aikasi <ArrowIcon />
        </a>
      </header>

      <section className="hero section-wrap" id="alku">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Urheiluhierontaa Espoossa
          </p>
          <h1>
            Liiku vahvemmin.
            <br />
            <span>Palaudu paremmin.</span>
          </h1>
          <p className="hero-intro">
            Tavoitteellista lihashuoltoa liikkujille ja aktiiviseen arkeen.
            Hoito suunnitellaan aina kehosi ja tavoitteidesi mukaan.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#palvelut">
              Tutustu hoitoihin <ArrowIcon />
            </a>
            <a className="text-link" href="#yhteys">
              Ota yhteyttä <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="note-stars" aria-hidden="true">＋</span>
            <p>Palautumista, joka auttaa jatkamaan.</p>
          </div>
        </div>
        <HeroArtwork />
        <div className="hero-bottom">
          <span>01 / 03</span>
          <span className="hero-bottom-line" />
          <span>Huolla kehoa. Jatka matkaa.</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="HeroHieronnan palvelun edut">
        <div className="trust-inner">
          <p><span>＋</span> Yksilöllinen lihashuolto</p>
          <p><span>＋</span> Liikkujan palautuminen</p>
          <p><span>＋</span> Helposti Espoossa</p>
        </div>
      </section>

      <section className="services section-wrap" id="palvelut">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" />Palvelut</p>
            <h2>Huoltoa keholle. Tukea <em>liikkeeseen.</em></h2>
          </div>
          <p className="section-intro">
            Olitpa aktiiviliikkuja tai vasta matkalla kohti uusia tavoitteita,
            hoito suunnitellaan sinun tarpeisiisi.
          </p>
        </div>
        <p className="price-note">
          Esimerkkihinnat – muokkaa hinnat ennen sivun julkaisua.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
              </div>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <span>{service.duration}</span>
                <span className="service-price">{service.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="meista">
        <div className="about-art" aria-hidden="true">
          <div className="about-circle">
            <span className="about-leaf">＋</span>
            <span className="about-word">liike</span>
            <span className="about-small">huolto · palautuminen</span>
          </div>
          <span className="about-side-note">LIHASHUOLTO · ESPOO</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span className="eyebrow-line" />Huoltoa sinun ehdoillasi</p>
          <h2>Jokainen keho liikkuu <em>omalla tavallaan.</em></h2>
          <p>
            Siksi hieronta suunnitellaan aina yhdessä sinun kanssasi.
            Keskitymme siihen, mitä kehosi tarvitsee juuri nyt – oli tavoitteena
            palautuminen, liikkuvuus tai arjen kireyksien helpottaminen.
          </p>
          <p>
            Kerro tavoitteistasi ja tuntemuksistasi, niin löydämme sopivan
            tavan huoltaa kehoasi.
          </p>
          <a className="text-link about-link" href="#yhteys">
            Kysy hoidosta <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="visit section-wrap" id="yhteys">
        <div className="visit-copy">
          <p className="eyebrow"><span className="eyebrow-line" />Aloita palautuminen</p>
          <h2>Valmiina takaisin <em>liikkeeseen?</em></h2>
          <p>
            HeroHieronta palvelee Espoossa. Ota yhteyttä, niin valitaan
            tavoitteisiisi sopiva hoito ja aika.
          </p>
          <div className="location-chip">
            <span className="location-icon" aria-hidden="true">⌖</span>
            <span>Espoo</span>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-flower" aria-hidden="true">＋</span>
          <p className="contact-label">Ajanvaraus</p>
          <h3>Anna kehollesi<br />sen ansaitsema huolto.</h3>
          <p className="contact-placeholder">
            Lisää tähän puhelinnumero, sähköposti tai ajanvarauslinkki ennen
            sivun julkaisua.
          </p>
          <span className="contact-ready">Yhteystieto lisätään tähän <span>↗</span></span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#alku">
          <span className="brand-mark">H</span>
          <span>HeroHieronta</span>
        </a>
        <p>Urheiluhierontaa ja lihashuoltoa.</p>
        <span className="footer-location">Espoo · © {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
