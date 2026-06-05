import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          {/* Same logo treatment as the navbar */}
          <a href="#" className="flex items-center gap-2 select-none">
            <img
              src="/logo.png"
              alt="EE Logo"
              className="w-7 h-8"
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
          <p className="footer-tagline">Technology towards positive change.</p>
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#work" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
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
