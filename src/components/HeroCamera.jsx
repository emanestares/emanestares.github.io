import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {

    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 50], 0.25, delta);
    
        if (!isMobile && groupRef.current) {
            
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta);
            // Debug: log rotation
            // console.log(groupRef.current.rotation.x, groupRef.current.rotation.y);
        }
    });

    return (
        <group ref={groupRef} scale={1.1}>{children}</group>
    );
};

export default HeroCamera;