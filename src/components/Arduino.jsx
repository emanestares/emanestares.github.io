import { Float, useGLTF } from '@react-three/drei'

const Arduino = (props) => {
  const { nodes, materials } = useGLTF('/models/arduino_uno_low_poly.glb')
  return (
    <Float floatIntensity={0.5} rotationIntensity={0.5}>
      <group position={[-6.005, 5.132, 12.455]} rotation={[-Math.PI / 2, 0, 0]} scale={100} {...props} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arduino_Blue2_FiberGlass_0.geometry}
          material={materials.FiberGlass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arduino_Blue2_Metal_0.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arduino_Blue2_Back_0.geometry}
          material={materials.Back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arduino_Blue2_LED_0.geometry}
          material={materials.material}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/arduino_uno_low_poly.glb')

export default Arduino;

