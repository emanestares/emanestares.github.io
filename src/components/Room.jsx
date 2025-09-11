import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { MeshMatcapMaterial } from 'three';

const Room = (props) => {
  const { nodes, materials } = useGLTF('/models/90s_stylized_office.glb')
  const monitorTexture = useTexture('/textures/monitor_texture.png');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[16.1247, 2.994, -78.8245]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chair_mChair_0.geometry}
            material={materials['m.Chair']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ChairSpine_mChair_0.geometry}
            material={materials['m.Chair']}
            position={[0, 0, 0.5918]}
          />
        </group>
        <group
          position={[62.801, 103.3989, -11.8667]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.8524}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Phone_mPhone_0.geometry}
            material={materials['m.Phone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes._Tube_mPhone_0.geometry}
            material={materials['m.Phone']}
            position={[0.6011, -0.1399, 0.7683]}
            scale={3.0618}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['B��zierCurve_mPhone_0'].geometry}
            material={materials['m.Phone']}
            position={[0.6711, 1.2682, 0.4323]}
            scale={3.0618}
          />
        </group>
        <group
          position={[32.8718, 2.0406, -0.0985]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.1043}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Table_mTable_0.geometry}
            material={materials['m.Table']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.drawer_mTable_0.geometry}
            material={materials['m.Table']}
            position={[-3.4128, 0.3037, 0.743]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.drawer2_mTable_0.geometry}
            material={materials['m.Table']}
            position={[-3.4128, 0.3037, 0.743]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.drawer3_mTable_0.geometry}
            material={materials['m.Table']}
            position={[-3.4128, 0.3037, 0.743]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus_mCactus_0.geometry}
          material={materials['m.Cactus']}
          position={[-73.3628, 103.4086, 33.3317]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Case_mPC_0.geometry}
          material={materials['m.PC']}
          position={[0, 110.8701, 13.2504]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_mPC_0.geometry}
          material={materials['m.PC']}
          position={[0, 121.0344, 13.2504]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.1043}/>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Folder_mFolder_0.geometry}
          material={materials['m.Folder']}
          position={[42.6998, 116.1881, 26.2462]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Folder001_mFolder_0.geometry}
          material={materials['m.Folder']}
          position={[60.4596, 106.181, 26.2462]}
          rotation={[-1.5281, 1.5503, 0]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Folder002_mFolder_0.geometry}
          material={materials['m.Folder']}
          position={[50.4919, 121.8074, 26.8437]}
          rotation={[-1.491, -0.1337, 0]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Folder003_mFolder_0.geometry}
          material={materials['m.Folder']}
          position={[57.4901, 122.4288, 24.7111]}
          rotation={[-1.491, -0.2497, -Math.PI]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Folder004_mFolder_0.geometry}
          material={materials['m.Folder']}
          position={[64.0525, 122.0594, 27.7361]}
          rotation={[-1.491, -0.2497, -3.0525]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keyboard_mPC_0.geometry}
          material={materials['m.PC']}
          position={[-0.1479, 103.399, -31.3183]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.1043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mouse_mPC_0.geometry}
          material={materials['m.PC']}
          position={[-53.0631, 103.395, -29.9712]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.1043}
        />
      </group>
    </group>
  )
}


useGLTF.preload('/models/90s_stylized_office.glb')


export default Room
