import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onItemClick }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, title, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={onItemClick}>
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
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-5 sm:px-10 py-4">
          <a
            href="/"
            className="navbar-logo group flex items-center gap-2"
          >
            <span className="logo-dot" />
            <span className="logo-text">Emmanuel</span>
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex p-2 rounded-lg transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </div>
          </button>

          <nav className="sm:flex hidden">
            <NavItems onItemClick={closeMenu} />
          </nav>
        </div>
      </div>

      {/* Mobile menu with smooth slide animation */}
      <div className={`mobile-menu sm:hidden ${isOpen ? "mobile-menu-open" : ""}`}>
        <nav className="px-5 pb-5">
          <NavItems onItemClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
