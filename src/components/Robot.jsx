import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Robot = (props) => {
  const { nodes, materials } = useGLTF('/models/puppy_robot_stylized_3d_model.glb')
  return (
    <Float floatIntensity={0.5} rotationIntensity={0.5}>
      <group rotation={[-Math.PI / 2, 0, 0]} {...props}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[92.375, 1.115, 183.588]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body_00} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ear_Puppy_Robot_MAT_0.geometry}
              material={materials.Puppy_Robot_MAT}
              position={[0.476, 0.766, 0.544]}
              rotation={[0, 0.596, Math.PI / 2]}
              scale={0.338}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Puppy_Robot_MAT_0.geometry}
              material={materials.Puppy_Robot_MAT}
              position={[0.181, 1.628, -0.008]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
          <group
            position={[92.375, -87.427, -56.314]}
            rotation={[-1.673, 0, Math.PI / 2]}
            scale={64.025}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant_Plant_MAT_0.geometry}
              material={materials.Plant_MAT}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant001_Plant_MAT_0.geometry}
              material={materials.Plant_MAT}
              position={[-0.084, -0.085, -0.033]}
              rotation={[0.137, -0.105, -1.593]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant002_Plant_MAT_0.geometry}
              material={materials.Plant_MAT}
              position={[-0.142, 0.032, -0.035]}
              rotation={[-0.043, -0.195, 2.704]}
              scale={0.818}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Plant_Base_MAT_0.geometry}
            material={materials.Plant_Base_MAT}
            position={[92.375, -98.932, -51.851]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
        </group>
        <skinnedMesh
          geometry={nodes.Object_29.geometry}
          material={materials.Puppy_Robot_MAT}
          skeleton={nodes.Object_29.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_31.geometry}
          material={materials.Puppy_Robot_MAT}
          skeleton={nodes.Object_31.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_33.geometry}
          material={materials.Puppy_Robot_MAT}
          skeleton={nodes.Object_33.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_35.geometry}
          material={materials.Puppy_Robot_MAT}
          skeleton={nodes.Object_35.skeleton}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/puppy_robot_stylized_3d_model.glb')

export default Robot;