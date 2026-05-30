import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onClick }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, title, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={onClick}>
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="flex justify-end items-center h-16 sm:h-20">
          {/* Mobile: hamburger on the right */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`hamburger-line ${isOpen ? "opacity-0" : ""}`} />
            <span className={`hamburger-line ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* Desktop: links + resume flush to the right */}
          <nav className="sm:flex hidden items-center gap-2">
            <NavItems onClick={closeMenu} />
            <a
              href="/assets/cv.pdf"
              download="Emmanuel_Estares_CV.pdf"
              className="resume-btn ml-4"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(1,1,3,0.97)", backdropFilter: "blur(20px)" }}
      >
        <nav className="px-5 pb-6 pt-2 flex flex-col gap-4">
          <NavItems onClick={closeMenu} />
          <a
            href="/assets/cv.pdf"
            download="Emmanuel_Estares_CV.pdf"
            className="resume-btn-mobile"
            onClick={closeMenu}
          >
            ↓ Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
