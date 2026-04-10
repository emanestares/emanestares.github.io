import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import TechGlobe from '../components/TechGlobe';
import { useMediaQuery } from 'react-responsive';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('emanestares@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="c-space my-20 pt-20" id="about">
      {/* Section heading */}
      <div className="section-header">
        <span className="section-tag">Who I Am</span>
        <h2 className="head-text">About the Dev</h2>
        <p className="section-subtext">
          Passionate builder at the intersection of mobile, AI, and robotics.
        </p>
      </div>

      <div className="
        grid
        xl:grid-cols-3 xl:grid-rows-6
        md:grid-cols-2
        grid-cols-1
        gap-5
        xl:h-[850px]
        h-auto
        auto-rows-auto
        mt-10
      ">
        {/* Card 1 — Photo */}
        <div className="col-span-1 xl:row-span-3 about-card">
          <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden">
            <img
              src="/assets/about-photo.png"
              alt="Emman Estares"
              className="absolute inset-0 w-full h-full object-contain z-0"
              width={500}
            />
            <div className="card-overlay">
              <p className="grid-headtext">Hello, I'm Emman</p>
              <p className="grid-subtext">
                Passionate about Mobile Development, AI, Robotics, and all technologies that create positive impact.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 — Tech Globe */}
        <div className="col-span-1 xl:row-span-3 about-card">
          <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden">
            <div className="w-full h-[500px] sm:h-[700px] xl:translate-y-[-140px]">
              <TechGlobe scale={isMobile ? 1.3 : 1.6} />
            </div>
            <div className="card-overlay">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                5 years of Python experience and mobile development with Flutter. Click any word in the globe to see how I used that technology.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 — Globe / Location */}
        <div className="col-span-1 xl:row-span-4 about-card">
          <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden">
            <div className="w-full h-full sm:h-[400px] xl:translate-y-[-90px] flex items-center justify-center">
              <Globe
                height={600}
                width={600}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                labelsData={[{ lat: 14.5995, lng: 120.9842, text: 'I am here 📍', color: 'white', size: 1000000 }]}
              />
            </div>
            <div className="card-overlay">
              <p className="grid-headtext">Globally Competitive</p>
              <p className="grid-subtext">
                Available for remote work and collaboration across time zones. Based in Manila, Philippines.
              </p>
              <div className="mt-4 mb-2 flex justify-center">
                <Button name="See My Resume" isBeam url="" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 — Journey (wide) */}
        <div className="xl:col-span-2 xl:row-span-3 about-card">
          <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden">
            <img
              src="/assets/coding.png"
              alt="My Journey"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
            <div className="card-overlay">
              <p className="grid-headtext">My Journey</p>
              <p className="grid-subtext-journey">
                Even before writing my first line of code, I was drawn to problem-solving and puzzles. The satisfaction of turning ideas into working programs led me to pursue CS — and apply it to real-world challenges in AI, mobile development, and robotics.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 — Contact copy */}
        <div className="xl:col-span-1 xl:row-span-2 about-card">
          <div className="relative w-full h-full min-h-[200px] rounded-2xl overflow-hidden">
            <img
              src="/assets/contact.png"
              alt="Contact"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
            <div className="card-overlay">
              <p className="grid-headtext">Contact Me</p>
              <p className="grid-subtext">Click the button to copy my email to your clipboard.</p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleCopy}
                  className={`copy-btn ${copied ? 'copy-btn-success' : ''}`}
                >
                  {copied ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
