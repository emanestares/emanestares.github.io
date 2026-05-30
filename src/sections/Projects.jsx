import React, { Suspense, useState } from 'react';
import { projects } from '../constants';
import { Canvas } from '@react-three/fiber';
import { Center, Environment, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentProject = projects[selectedIndex];
  const projectCount = projects.length;

  const handleNavigation = (direction) => {
    setSelectedIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="projects-section" id="work">
      <div className="section-header">
        <span className="section-tag">My Work</span>
        <h2 className="section-title">Works & Projects</h2>
        <p className="section-subtitle">
          A collection of projects spanning mobile apps, AI, robotics, and web development.
        </p>
      </div>

      {/* Project counter */}
      <div className="project-counter">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`counter-dot ${i === selectedIndex ? 'counter-dot-active' : ''}`}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>

      <div className="projects-grid">
        {/* Info panel */}
        <div className="project-info-panel">
          <img
            src={currentProject.spotlight}
            alt="spotlight"
            className="project-spotlight"
          />

          <div className="project-info-content">
            {/* Logo */}
            <div
              className="project-logo-wrap"
              style={currentProject.logoStyle}
            >
              <img
                src={currentProject.logo}
                alt="logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>

            {/* Text */}
            <div className="project-text-area">
              <div className="project-index-badge">
                {String(selectedIndex + 1).padStart(2, '0')} / {String(projectCount).padStart(2, '0')}
              </div>
              <h3 className="project-name animatedText">{currentProject.name}</h3>
              <p className="project-description animatedText">{currentProject.description}</p>
            </div>

            {/* Tags + Link */}
            <div className="project-footer">
              <div className="project-tags">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo" title={tag.name}>
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <a
                className="project-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <img src="/assets/arrow.png" className="w-5 h-5" alt="arrow" />
              </a>
            </div>

            {/* Navigation */}
            <div className="project-nav">
              <button
                className="project-nav-btn"
                onClick={() => handleNavigation('previous')}
                aria-label="Previous project"
              >
                <img src="/assets/left.png" alt="left" className="w-6 h-6" />
                <span>Previous</span>
              </button>
              <button
                className="project-nav-btn"
                onClick={() => handleNavigation('next')}
                aria-label="Next project"
              >
                <span>Next</span>
                <img src="/assets/right.png" alt="right" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Computer */}
        <div className="project-canvas-wrap">
          <div className="project-canvas-hint">Drag to rotate · Scroll to explore</div>
          <Canvas>
            <Center>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} intensity={4} />
              <Environment background files={'/assets/spotlight1.jpg'} />
              <hemisphereLight intensity={2} color="#ffffff" groundColor="#444444" />
              <Suspense fallback={<CanvasLoader />}>
                <group scale={0.75} position={[0, 0.5, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
