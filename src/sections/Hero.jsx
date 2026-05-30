import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Laptop from "../components/Laptop";
import Cellphone from "../components/Cellphone";
import Robot from "../components/Robot";
import HeroCamera from "../components/HeroCamera";
import Arduino from "../components/Arduino";
import bgImage from '/assets/herobg-1.png';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-[1]" />

      {/* Hero text — sits BEHIND the 3D canvas (z-[1]) */}
      <div
        className={`w-full mx-auto flex flex-col items-center sm:mt-36 mt-24 pt-10 px-5 sm:px-10 gap-4 absolute inset-x-0 top-0 z-[1] pointer-events-none transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="hero-tag" style={{pointerEvents:'auto'}}>Available for work</div>
        <h1 className="hero-title">
          Technology towards<br />
          <span className="hero-title-accent">positive change</span>
        </h1>
        <p className="hero-subtitle">
          Mobile Developer · AI Enthusiast · Robotics Engineer
        </p>
      </div>

      {/* 3D Canvas — sits ON TOP of the text (z-[2]) */}
      <div className="absolute inset-0 w-full h-full z-[2]">
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
                scale={isMobile ? 0.11 : 0.19}
                position={isMobile ? [-7.5, 8.5, 10.0] : [-21.0, 10.0, 10.0]}
                rotation={[0.12, 0.49, 0.01]}
              />
              <Cellphone
                scale={isMobile ? 0.14 : 0.25}
                position={isMobile ? [9.5, 8.5, 10.0] : [22.0, 10.0, 10.0]}
                rotation={[0.12, 0.49, 0.01]}
              />
              <Robot
                scale={isMobile ? 1.5 : 2.8}
                position={isMobile ? [-8.5, -13.0, 10.0] : [-22.0, -13.5, 10.0]}
                rotation={[1.12, 2.49, 0.01]}
              />
              <Arduino
                scale={isMobile ? 2.5 : 6.5}
                position={isMobile ? [9.5, -13.0, 10.0] : [22.0, -13.5, 10.0]}
                rotation={[0.12, 0, 0.01]}
              />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-8 left-0 right-0 w-full z-10 flex justify-center gap-4 px-5">
        <a href="#about" className="hero-cta-primary">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
          </span>
          About Me
        </a>
        <a href="#work" className="hero-cta-secondary">
          View Projects →
        </a>
      </div>
    </section>
  );
};

export default Hero;
