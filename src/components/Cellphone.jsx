import { Float, useGLTF, useTexture } from '@react-three/drei'

const Cellphone = (props) => {
  const { nodes, materials } = useGLTF('/models/emergency_phone_sos.glb');
  const monitorTexture = useTexture('/textures/s1.png');
  return (
    <Float floatIntensity={0.5} rotationIntensity={0.5}>
        <group position={[0, 0, 0]} scale={1} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
      >
        <meshStandardMaterial map={monitorTexture} />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.cellphone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.cellphone}
      />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/emergency_phone_sos.glb')

export default Cellphone;

