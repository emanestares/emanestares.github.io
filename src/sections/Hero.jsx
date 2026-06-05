import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "../components/Room";
import Laptop from "../components/Laptop";
import Cellphone from "../components/Cellphone";
import Robot from "../components/Robot";
import Arduino from "../components/Arduino";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "../components/HeroCamera";
import bgImage from '/assets/herobg-1.png';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Giant background name — z-[2], behind 3D and text */}
      <div className="hero-bg-name" aria-hidden="true">ESTARES</div>

      {/* 3D Canvas — full viewport, pointer events ON so HeroCamera mouse tracking works */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
        <Canvas
          className="w-full h-full"
          gl={{ alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>

              {/* ── Room (computer desk) — large, center, grounded ── */}
              <Room
                scale={isMobile ? 7.0 : 12.0}
                position={isMobile ? [0, -8.0, 0] : [0, -9.5, 0]}
                rotation={[0.1, -3.49, 0.01]}
              />

              {/* ── Laptop — bottom-left corner ── */}
              <Laptop
                scale={isMobile ? 0.10 : 0.17}
                position={isMobile ? [-9, -9, 0] : [-19, -10, 0]}
                rotation={[0.1, 0.6, 0.0]}
              />

              {/* ── Cellphone — bottom-right corner ── */}
              <Cellphone
                scale={isMobile ? 0.13 : 0.22}
                position={isMobile ? [9, -9, 0] : [19, -10, 0]}
                rotation={[0.1, -0.6, 0.0]}
              />

              {/* ── Robot — top-right corner ── */}
              <Robot
                scale={isMobile ? 1.4 : 2.8}
                position={isMobile ? [9, 9, 0] : [19, 11, 0]}
                rotation={[0.05, -1.2, 0.0]}
              />

              {/* ── Arduino — top-left corner ── */}
              <Arduino
                scale={isMobile ? 2.2 : 5.5}
                position={isMobile ? [-9, 9, 0] : [-19, 11, 0]}
                rotation={[0.1, 0.8, 0.0]}
              />

            </HeroCamera>
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 10]} intensity={0.6} />
          </Suspense>
        </Canvas>
      </div>

      {/* Top-left: tag + headline — pointer-events none (just text) */}
      <div
        className={`hero-topleft transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ pointerEvents: 'none' }}
      >
        <div className="hero-tag">Available for work</div>
        <h1 className="hero-title-new">
          Tech towards<br />
          <span className="hero-title-accent">positive change.</span>
        </h1>
      </div>

      {/* Bottom-right: subtitle + CTA — all in one stacked overlay */}
      <div
        className={`hero-cta-overlay transition-all duration-700 delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ flexDirection: 'column', alignItems: 'flex-end', gap: '1.1rem' }}
      >
        <p className="hero-desc-new" style={{ pointerEvents: 'none', textAlign: 'right', margin: 0 }}>
          Full-stack developer with a focus on mobile, AI, and systems that matter —
          from disaster response tools to microbe classifiers.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#experience" className="hero-cta-pill">
            View My Work
            <span className="hero-cta-arrow">→</span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint z-[4]">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-label">scroll</span>
      </div>
    </section>
  );
};

export default Hero;
