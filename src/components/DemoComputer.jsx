import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useRef } from 'react';

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/monitor.glb');
  const txt = useVideoTexture(props.texture? props.texture: '/textures/8puzzle.mkv' );
  txt.rotation = Math.PI/360; 
  txt.repeat.set(1, 0.5625);
  txt.offset.set(0, (1 - 0.5625) / 2);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
        y: Math.PI/2,
        duration: 1,
        ease: 'power3.out'
    })
  }, [txt])

  txt.center.set(0.5, 0.5);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, -0.001, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[0, 0, Math.PI / 2]} scale={[19.412, 536.206, 242.198]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Screen_0.geometry}
              material={materials.Screen}
            >
                <meshBasicMaterial map={txt} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0_1.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Lights_0.geometry}
              material={materials.Lights}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/monitor.glb')

export default DemoComputer;
