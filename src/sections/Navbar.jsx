import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onClick, activeSection }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, title, href }) => (
        <li key={id} className="nav-li">
          <a
            href={href}
            className={`nav-li_a ${activeSection === id ? "nav-li_a--active" : ""}`}
            onClick={onClick}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view using IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers = [];

    // Use a map to track intersection ratios and pick the most visible
    const visibilityMap = {};

    const pickActive = () => {
      let best = "";
      let bestRatio = 0;
      for (const [id, ratio] of Object.entries(visibilityMap)) {
        if (ratio > bestRatio) { bestRatio = ratio; best = id; }
      }
      if (best) setActiveSection(best);
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.intersectionRatio;
          pickActive();
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], rootMargin: "-60px 0px -20% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="px-5 sm:px-10">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo — same as navbar: logo.png + gradient text */}
          <a href="#" className="flex items-center gap-2 select-none">
            <img
              src="/logo.png"
              alt="EE Logo"
              className="w-7 h-8 sm:w-8 sm:h-9"
              style={{ filter: 'drop-shadow(0 0 6px rgba(59,111,255,0.4))' }}
            />
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Eman Estares
            </span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`hamburger-line ${isOpen ? "opacity-0" : ""}`} />
            <span className={`hamburger-line ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* Desktop nav — no resume button */}
          <nav className="sm:flex hidden items-center gap-2">
            <NavItems onClick={closeMenu} activeSection={activeSection} />
          </nav>
        </div>
      </div>

      {/* Mobile menu — no resume button */}
      <div
        className={`sm:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(1,1,3,0.97)", backdropFilter: "blur(20px)" }}
      >
        <nav className="px-5 pb-6 pt-2 flex flex-col gap-4">
          <NavItems onClick={closeMenu} activeSection={activeSection} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
