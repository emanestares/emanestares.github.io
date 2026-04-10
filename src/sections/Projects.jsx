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
    <section className="c-space my-20 px-6 min-h-screen" id="work">
      {/* Section heading */}
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="head-text">Works &amp; Projects</h2>
        <p className="section-subtext">
          A selection of things I've built — from AI models to mobile apps.
        </p>
      </div>

      {/* Project counter */}
      <div className="flex justify-center mt-4 mb-8">
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
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full">
        {/* Left panel — project info */}
        <div className="relative rounded-2xl shadow-2xl shadow-black/40 overflow-hidden xl:min-h-[700px] sm:min-h-[400px] min-h-[340px]">
          <img
            src={currentProject.spotlight}
            alt="spotlight"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8">
            {/* Logo + index */}
            <div className="flex items-start justify-between">
              <div
                className="p-3 backdrop-blur-xl w-fit rounded-xl project-logo"
                style={currentProject.logoStyle}
              >
                <img
                  src={currentProject.logo}
                  alt="logo"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="project-index-badge">
                {String(selectedIndex + 1).padStart(2, '0')} / {String(projectCount).padStart(2, '0')}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 mt-6">
              <p className="text-white text-3xl sm:text-4xl font-bold animatedText leading-tight">
                {currentProject.name}
              </p>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed animatedText">
                {currentProject.description}
              </p>
            </div>

            {/* Tags + Link */}
            <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
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
                href={currentProject.link || '#'}
                target="_blank"
                rel="noreferrer"
              >
                <span>View Project</span>
                <img src="/assets/arrow.png" className="w-5 h-5" alt="arrow" />
              </a>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left.png" alt="previous" className="w-10 h-10" />
              </button>
              <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                <img src="/assets/right.png" alt="next" className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>

        {/* Right panel — 3D computer */}
        <div className="border border-white/10 bg-black/40 backdrop-blur-sm rounded-2xl flex flex-col justify-between xl:min-h-[700px] sm:min-h-[400px] min-h-[260px] overflow-hidden">
          <Canvas>
            <Center>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} intensity={4} />
              <Environment background files="/assets/spotlight1.jpg" />
              <hemisphereLight intensity={2} color="#ffffff" groundColor="#444444" />
              <Suspense fallback={<CanvasLoader />}>
                <group scale={0.75} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
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
