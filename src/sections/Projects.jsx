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
        if(direction === 'previous') {
            return prevIndex === 0? projectCount - 1: prevIndex -1;
        } else {
            return prevIndex === projectCount -1 ? 0 : prevIndex + 1
        }
    })
  } 
  return (
    <section className="c-space my-20 px-6 min-h-screen" id="work">
      <div className='mt-5'>
        <p>‎ </p>
      </div>
      <h2 className="head-text mb8 text-center">Works & Projects</h2>
      <div className='mt-5'>
        <p>‎ </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full">
        <div className="relative rounded-xl shadow-2xl shadow-black-200 overflow-hidden xl:min-h-[800px] sm:min-h-[400px] max-[401px]:min-h-[200px]">
          <img
            src={currentProject.spotlight}
            alt="spotlight"
            className="absolute inset-0 w-full h-full object-cover "
          />

          <div className="relative z-10 flex flex-col justify-between h-full p-8 max-[401px]:h-1/2">
            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg project-logo"
              style={currentProject.logoStyle}
            >
              <img
                src={currentProject.logo}
                alt="logo"
                className="w-16 h-16 object-contain max-[401px]:w-9 max-[401px]:h-9 "
              />
            </div>

            <div className="flex flex-col gap-4 min-h-[401px] max-h-[401px] overflow-hidden max-[401px]:min-h-[351px]">
              <p className="text-white text-4xl font-bold animatedText max-[401px]:text-xl">
                {currentProject.name}
              </p>
              <p>‎ </p>
              

              <p className="text-neutral-400 text-2xl leading-relaxed animatedText max-[401px]:text-base">
                {currentProject.description}
              </p>

            </div>
            <div className='flex items-center justify-between flex-wrap gap-5'>
                <div className='flex items-center gap-3 max-[401px]:gap-1'>
                    {currentProject.tags.map((tag, index) => (
                        <div key={index} className='tech-logo'>
                            <img
                              src={tag.path}
                              alt={tag.name}
                              className="w-12 h-12 max-[401px]:w-8 max-[401px]:h-8 object-contain"
                            />
                        </div>
                    ))}
                </div>
                <a className='flex items-center gap-2 cursor-pointer text-white-600' href="" target='_blank' rel="noreferrer">
                    <p className='text-xl max-[401px]:text-base'>Give it a try</p>
                    <img src='/assets/arrow.png' className='w-7 h-7 max-[401px]:w-4 max-[401px]:h-4' alt="arrow" />
                </a>
            </div>
            <div className='flex justify-between items-center mt-7'>
                <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
                    <img src='/assets/left.png' alt="left" className='w-11 h-11 max-[401px]:w-7 max-[401px]:h-7 ' />
                </button>
                <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                    <img src='/assets/right.png' alt="right" className='w-11 h-11 max-[401px]:w-7 max-[401px]:h-7' />
                </button>
            </div>
          </div>
        </div>
        <div className="border border-black bg-black-200 rounded-2xl flex flex-col justify-between xl:min-h-[800px] sm:min-h-[400px] md:h-[500px] max-[401px]:h-[220px]">
            <Canvas>
                <Center>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10,10,5]} intensity={4} />
                    <Environment background files={'/assets/spotlight1.jpg'} />
                    <hemisphereLight intensity={2} color="#ffffff" groundColor="#444444" />
                    <Suspense fallback={<CanvasLoader />}>
                        <group scale={0.75} position={[0,0.5,0]} rotation={[0,0,0]}>
                            <DemoComputer texture={currentProject.texture}/>
                        </group>
                    </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false} />
            </Canvas>
          </div>
      </div>
    </section>
  );
};

export default Projects;
