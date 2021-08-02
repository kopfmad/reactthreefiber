import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export function CaixaVermelha() {
  let caixared = useRef();
  useFrame(() => {
    caixared.current.rotation.z += 0.01;
    caixared.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={caixared}>
      <boxBufferGeometry />
      <meshBasicMaterial color="#8844ff" />
    </mesh>
  );
}

export default function App2() {
  return (
    <div className="segunda">
      <Canvas>
        <CaixaVermelha />
      </Canvas>
    </div>
  );
}
