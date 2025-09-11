import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import { generate } from 'random-words'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '../src/assets/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(color.set(hovered ? '#0051ff' : 'white'), 0.1)
  })
  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} children={children} />
    </Billboard>
  )
}

function Cloud({ count, radius, words }) {
  const wordList = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    let counter = 0

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const pos = new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j)
        )
        const word = words[counter % words.length]
        temp.push([pos, word])
        counter++
      }
    }
    return temp
  }, [count, radius, words])

  return wordList.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ))
}

const TechGlobe = ({scale}) => {
  const techStack = ["Python", "React", "Flutter", "Node.js", "Express", "MongoDB", "JavaScript", "C", "Java", "PHP", "GitHub", "Firebase", "TensorFlow", "PyTorch", "Arduino", "YOLO"]
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[0.5, 0.5, 10]} scale={scale}>
          <Cloud count={4} radius={10} words={techStack} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  )
}

export default TechGlobe;
