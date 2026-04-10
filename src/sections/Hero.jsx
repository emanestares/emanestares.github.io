import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import Laptop from "../components/Laptop";
import Cellphone from "../components/Cellphone";
import Robot from "../components/Robot";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Arduino from "../components/Arduino";
import bgImage from '/assets/herobg-1.png';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10 pointer-events-none" />

      {/* Hero text */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 pt-17 c-space gap-4 relative z-20">
        <div className="hero-greeting">
          <span className="hero-greeting-dot" />
          <p className="sm:text-lg text-base font-medium text-neutral-300 tracking-widest uppercase">
            Hello, I'm Emman
          </p>
        </div>
        <h1 className="hero-headline">
          Technology towards
          <br />
          <span className="hero-headline-accent">positive change</span>
        </h1>
        <p className="hero-subtext">
          Mobile Developer · AI Enthusiast · Robotics Builder
        </p>
      </div>

      {/* Three.js Canvas */}
      <div className="absolute inset-0 w-full h-full z-[9]">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 46]} />
            <HeroCamera isMobile={isMobile}>
              <Room
                scale={isMobile ? 7 : 9.5}
                position={isMobile ? [0.9, -7.3, 10.0] : [0.9, -6.8, 10.0]}
                rotation={[0.12, -3.49, 0.01]}
              />
            </HeroCamera>

            <group>
              <Laptop
                scale={isMobile ? 0.09 : 0.15}
                position={isMobile ? [-5.9, 6.3, 10.0] : [-15.9, 6.3, 10.0]}
                rotation={[0.12, 0.49, 0.01]}
              />
              <Cellphone
                scale={isMobile ? 0.12 : 0.2}
                position={isMobile ? [7.9, 6.3, 10.0] : [17.9, 6.3, 10.0]}
                rotation={[0.12, 0.49, 0.01]}
              />
              <Robot
                scale={isMobile ? 1.2 : 2}
                position={isMobile ? [-6.9, -10.3, 10.0] : [-16.9, -10.3, 10.0]}
                rotation={[1.12, 2.49, 0.01]}
              />
              <Arduino
                scale={isMobile ? 2 : 5}
                position={isMobile ? [7.9, -10.3, 10.0] : [16.9, -10.3, 10.0]}
                rotation={[0.12, 0, 0.01]}
              />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-10 left-0 right-0 w-full z-20 c-space flex justify-center gap-4 flex-wrap">
        <a href="#about" className="w-fit">
          <Button name="About the Dev" isBeam />
        </a>
        <a href="#work" className="w-fit">
          <Button name="View My Work" containerClass="btn-outline" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-20 hidden sm:flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-neutral-400 tracking-widest uppercase rotate-90 origin-center">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
