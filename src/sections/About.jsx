import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { PerspectiveCamera } from '@react-three/drei';
import TechGlobe from '../components/TechGlobe';
import { useMediaQuery } from 'react-responsive';
import Globe from 'react-globe.gl';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'Emmanuel_Estares_CV.pdf';
    link.click();
  };

  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <span className="section-tag">Who I Am</span>
        <h2 className="section-title">Hello, I am Emman</h2>
        <p className="section-subtitle">
          Building technology that makes a difference, one line of code at a time.
        </p>
      </div>

      <div className="about-grid">
        {/* Photo card */}
        <div className="about-card about-card-photo">
          <div className="about-photo-img-wrap">
            <img
              src="/assets/about-photo.png"
              alt="Emmanuel Estares"
              className="about-photo"
            />
          </div>
          <div className="about-card-overlay">
            <p className="about-card-title">Frederick Emmanuel Estares</p>
            <p className="about-card-text">
              Passionate about Mobile Development, AI, Robotics, and technologies that create positive impact.
            </p>
          </div>
        </div>

        {/* Tech stack globe */}
        <div className="about-card about-card-tech">
          <div className="about-globe-container">
            <TechGlobe scale={isMobile ? 1.3 : 1.6} />
          </div>
          <div className="about-card-overlay">
            <p className="about-card-title">Tech Stack</p>
            <p className="about-card-text">
              Specialized in Python (5 yrs) and Flutter mobile development. Click any word in the cloud to explore how I've used each technology.
            </p>
          </div>
        </div>

        {/* Globe card */}
        <div className="about-card about-card-globe">
          <div className="about-world-container">
            <Globe
              height={isMobile ? 400 : 600}
              width={isMobile ? 400 : 600}
              backgroundColor="rgba(0,0,0,0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
              globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
              labelsData={[{ lat: 14.5995, lng: 120.9842, text: "📍 I'm here", color: 'white', size: 1000000 }]}
            />
          </div>
          <div className="about-card-overlay">
            <p className="about-card-title">Globally Competitive</p>
            <p className="about-card-text">
              Based in Manila, Philippines. Open to remote work and collaboration across time zones.
            </p>
            <button onClick={handleResumeDownload} className="resume-download-btn">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>

        {/* Journey card */}
        <div className="about-card about-card-journey">
          <img src="/assets/coding.png" alt="coding journey" className="about-journey-img" />
          <div className="about-card-overlay">
            <p className="about-card-title">My Journey</p>
            <p className="about-card-text">
              Even before creating my first application, I was drawn to problem solving and puzzles. The satisfaction of building programs through code drives me to keep learning and apply technology to solve real-world problems.
            </p>
            <div className="about-stats" style={{ marginTop: '0.75rem' }}>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Years Python</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">9+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Tech Stacks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact card */}
        <div className="about-card about-card-contact">
          <img src="/assets/contact.png" alt="contact" className="about-contact-img" />
          <div className="about-card-overlay">
            <p className="about-card-title">Let's Connect</p>
            <p className="about-card-text">Looking for a developer or tutor? I'd love to hear from you.</p>
            <a href="#contact" className="contact-now-btn">
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
