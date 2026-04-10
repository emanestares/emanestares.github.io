import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner c-space">
        <p className="footer-copy">© 2025 Frederick Emmanuel Estares. All Rights Reserved.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/emanestares"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <img src="/assets/github.png" alt="github" className="w-5 h-5 object-contain" />
          </a>
          <a
            href="https://www.linkedin.com/in/frederick-emmanuel-estares-566820245/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <img src="/assets/linkedin.png" alt="linkedin" className="w-5 h-5 object-contain" />
          </a>
          <a
            href="https://www.facebook.com/eman.estares"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <img src="/assets/facebook.png" alt="facebook" className="w-5 h-5 object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
