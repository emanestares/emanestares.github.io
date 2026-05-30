import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="nav-logo">
            <span className="nav-logo-bracket">&lt;</span>Emman<span className="nav-logo-bracket">/&gt;</span>
          </a>
          <p className="footer-tagline">Technology towards positive change.</p>
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#work" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="/assets/cv.pdf" download="Emmanuel_Estares_CV.pdf" className="footer-link">Resume</a>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/emanestares" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <img src="/assets/github.png" alt="github" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://www.linkedin.com/in/frederick-emmanuel-estares-566820245/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <img src="/assets/linkedin.png" alt="linkedin" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://www.facebook.com/eman.estares" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <img src="/assets/facebook.png" alt="facebook" className="w-5 h-5 object-contain" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Frederick Emmanuel Estares · All Rights Reserved</p>
        <p>Built with React · Three.js · Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
