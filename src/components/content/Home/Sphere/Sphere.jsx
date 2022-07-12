import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Drop from "./Drop/Drop";



function Sphere(props) {
    return (

        <div className="wrapper" style={{width:"50%",marginTop:"20px"}}>

            <Canvas >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2,5,2]} intensity={1} />
                <Suspense fallback={null}>
                    <Drop />
                </Suspense>
            </Canvas>

        </div>

    )
}

export default Sphere 