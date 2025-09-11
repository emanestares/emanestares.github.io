import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense, use } from "react";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Laptop from "../components/Laptop";
import Cellphone from "../components/Cellphone";
import Robot from "../components/Robot";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Arduino from "../components/Arduino";
import bgImage from '/assets/herobg-1.png';

const Hero = () => {
    // const controls = useControls('Room', {
    //     positionX: { value: 2.5, min: -10, max: 10},
    //     positionY: { value: 2.5, min: -10, max: 10},
    //     positionZ: { value: 2.5, min: -10, max: 10},
    //     rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
    //     rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
    //     rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
    //     scale: { value: 1, min: 0.1, max: 10, step: 0.1},
    // });
    const isMobile = useMediaQuery({maxWidth: 768});
    return (
        <section className="min-h-screen w-full flex flex-col relative" style={{backgroundImage: `url(${bgImage})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center" }}>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 pt-17 c-space gap-3 relative z-10">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center">Hello! I am Emman!</p>
                <p className="sm:text-5xl text-4xl font-bold text-white text-center">Technology towards positive change</p>
            </div>
            <div className="absolute inset-0 w-full h-full z-9">
                <Canvas className="w-full h-full z-0">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 46]} />
                        <HeroCamera isMobile={isMobile}>
                            <Room 
                                scale={isMobile? 7:9.5} 
                                position={isMobile? [0.9,-7.3,10.0] : [0.9,-6.8,10.0]} 
                                rotation={[0.12,-3.49,0.01]} 
                            />
                        </HeroCamera>

                        <group>
                            <Laptop 
                                scale={isMobile? .09:.15} 
                                position={isMobile? [-5.9,6.3,10.0]: [-15.9,6.3,10.0]} 
                                rotation={[0.12,0.49,0.01]} 
                            />
                            <Cellphone 
                                scale={isMobile? .12:.2} 
                                position={isMobile? [7.9,6.3,10.0] :[17.9,6.3,10.0]} 
                                rotation={[0.12,0.49,0.01]} 
                            />
                            <Robot 
                                scale={isMobile? 1.2:2} 
                                position={isMobile? [-6.9,-10.3,10.0] :[-16.9,-10.3,10.0]} 
                                rotation={[1.12,2.49,0.01]} 
                            />
                            <Arduino 
                                scale={isMobile? 2:5} 
                                position={isMobile? [7.9,-10.3,10.0]: [16.9,-10.3,10.0]} 
                                rotation={[0.12,0,0.01]} 
                            />
                        </group>
                        
                        <ambientLight intensity={1} />
                        <directionalLight position={[10,10,10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
                
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
                <a href="#about" className="w-fit">
                    <Button name="About the Dev" isBeam />
                </a>
            </div>
        </section>
    );
};

export default Hero;