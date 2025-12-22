import { useEffect, useState } from 'react';
import './styles.css';

export const Navbar = () => {
  const isMobile = window.matchMedia("(max-width: 991px)").matches;
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBgActive, setNavbarBgActive] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
    setNavbarBgActive((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-72px 0px -30% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <header className={`navbar-fixed ${(!isMobile && scrolled) || (isMobile && navbarBgActive)
        ? "navbar-bg"
        : ""
      }`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation"
                onClick={handleToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav">
                  <li className={`nav-item text-center ${activeSection === "hero" ? "active" : ""}`}>
                    <a className="nav-link transition" href="#hero">Inicio</a>
                  </li>
                  <li className={`nav-item text-center ${activeSection === "about" ? "active" : ""}`}>
                    <a className="nav-link transition" href="#about">Sobre mí</a>
                  </li>
                  <li className={`nav-item text-center ${activeSection === "skills" ? "active" : ""}`}>
                    <a className="nav-link transition" href="#skills">Habilidades</a>
                  </li>
                  <li className={`nav-item text-center ${activeSection === "services" ? "active" : ""}`}>
                    <a className="nav-link transition" href="#services">Servicios</a>
                  </li>
                  <li className={`nav-item text-center ${activeSection === "experience" ? "active" : ""}`}>
                    <a className="nav-link transition" href="#experience">Experiencias</a>
                  </li>
                  <li className={`nav-item text-center ${activeSection === "contact" ? "active" : ""}`}>
                    <a className="nav-link transition" href="#contact">Contacto</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
