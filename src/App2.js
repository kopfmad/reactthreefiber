import React, { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import CaixaAmarela from "./CaixaAmarela";

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
      <Canvas style={{ background: "blue" }} camera={{ position: [3, 3, 3] }}>
        <CaixaVermelha />
        <axesHelper args={[2]} />
        <CaixaAmarela />
      </Canvas>
    </div>
  );
}
