import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { PerspectiveCamera } from '@react-three/drei';
import TechGlobe from '../components/TechGlobe';
import { useMediaQuery } from 'react-responsive';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <section className="c-space my-20 pt-20" id='about'>
      <div className="
        grid 
        xl:grid-cols-3 xl:grid-rows-6 
        md:grid-cols-2 
        grid-cols-1 
        gap-5 
        xl:h-[850px]
        h-auto
        auto-rows-auto
      ">
        <div className="col-span-1 xl:row-span-3 grid-item">
          <div className="relative w-full h-full aspect-square rounded-3xl overflow-hidden">
            <img
              src="../src/assets/about-photo.png"
              alt="grid-1"
              className="absolute inset-0 w-full h-full object-contain z-0"
              width={500}
            />

            <div className="absolute bottom-0 left-0 w-full z-10 p-4 bg-black/40 text-white">
              <p className="grid-headtext">Hello, I am Emman</p>
              <p className="grid-subtext">
                Passionate about Mobile Development, AI, Robotics, and all technologies that create positive impact.
              </p>
            </div>
          </div>
        </div>



        <div className='col-span-1 xl:row-span-3 grid-item'>
            <div className="relative w-full h-full aspect-square rounded-3xl overflow-hidden">
                <div className="w-full h-[500px] sm:h-[700px] xl:translate-y-[-140px]"> 
                    <TechGlobe scale={isMobile? 1.3:1.6}/>
                </div>

                <div className="absolute bottom-0 left-0 w-full z-10 p-4 bg-black/40 text-white">
                  <p className="grid-headtext">Tech Stack</p>
                  <p className="grid-subtext">
                    I specialize in creating programs using Python with 5 years of experience and mobile development using Flutter. The Word Cloud contains all of the technology I have used for projects, feel free to click a word to see how I used them. 
                  </p>
                </div>
            </div>
        </div>

        <div className='col-span-1 xl:row-span-4 grid-item'>
            <div className="relative w-full h-full aspect-square rounded-3xl overflow-hidden">
                <div className="w-full h-full sm:h-[400px] xl:translate-y-[-90px]">
                  <Globe 
                    height={600} 
                    width={600} 
                    backgroundColor='rgba(0,0,0,0)' 
                    backgroundImageOpacity={0.5} 
                    showAtmosphere 
                    showGraticules
                    bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                    globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                    labelsData={[{ lat: 14.5995, lng: 120.9842, text: 'I am currently here', color: 'white', size: 1000000 }]}
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full z-10 p-4 bg-black/40 text-white">
                  <p className="grid-headtext">Globally Competitive</p>
                  <p className="grid-subtext">
                    I can work and communicate with teams from different parts of the world. Flexible with remote work and time zones.
                  </p>
                  <div className='mt-5'>
                    <p>‎ </p>
                  </div>
                  <div className='bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center'>
                    <Button name="See My Resume" isBeam url="" />
                  </div>
                  <div className='mt-5'>
                    <p>‎ </p>
                  </div>
                </div>
            </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3 grid-item-journey'>
          <div className="relative w-full h-full aspect-square rounded-3xl overflow-hidden">
            <img src="../src/assets/coding.png" alt="grid-3" className='className="absolute inset-0 w-full h-full object-contain z-0"' />
            <div className="absolute bottom-0 left-0 w-full z-10 p-4 bg-black/40 text-white">
              <p className='grid-headtext'>My Journey</p>
              <p className='grid-subtext-journey'>Even before having a chance to create my first application, I have always been drawn to problem solving and puzzles. The satisfaction of creating programs through coding made me want to learn more and apply it to solve real world problems.</p>
            </div>
          </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2 grid-item'>
          <div className="relative w-full h-full aspect-square rounded-3xl overflow-hidden">
            <img src="../src/assets/contact.png" alt="grid-4" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute bottom-0 left-0 w-full z-10 p-4 bg-black/40 text-white">
                <p className='grid-headtext'>Contact Me</p>
                <p className='grid-subtext'>Click the button to copy my contact info on your clipboard.</p>
            </div>
          
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;