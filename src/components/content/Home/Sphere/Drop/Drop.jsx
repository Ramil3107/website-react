import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React from "react";

function Drop(props) {
    return (

        <Sphere visible args={[1,100,200]} scale={2.5}>
            <MeshDistortMaterial color="purple" attach="material" distort={0.3} speed={3} roughness={0} />
        </Sphere>

    )
}

export default Drop 