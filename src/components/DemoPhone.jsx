import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const DemoPhone = ({ texture, ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/android_phone.gltf');
  const txt = useVideoTexture(texture || '/textures/microcodex.mp4');

  // Screen UVs go from ~0.02→0.98, video fills it naturally
  txt.flipY = true;
  txt.wrapS = THREE.ClampToEdgeWrapping;
  txt.wrapT = THREE.ClampToEdgeWrapping;

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Phone body */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Phone_phone_base_0.geometry}
        material={materials.phone_base}
      />
      {/* Full screen — video texture directly on the screen mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Phone_phone_screen_0.geometry}
      >
        <meshBasicMaterial map={txt} toneMapped={false} />
      </mesh>
      {/* Cameras on the back */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Phone_phone_cameras_0.geometry}
        material={materials.phone_cameras}
      />
    </group>
  );
};

useGLTF.preload('/models/android_phone.gltf');

export default DemoPhone;

