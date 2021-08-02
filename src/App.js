import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";

import React, { useRef } from "react";

export function BoxRotativa() {
  let caixinha = useRef();
  useFrame(() => {
    caixinha.current.rotation.x += 0.01;
    caixinha.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={caixinha}>
      <boxBufferGeometry />
      <meshBasicMaterial color="green" />
    </mesh>
  );
}

function App() {
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <Canvas>
          <BoxRotativa />
        </Canvas>
      </div>
    </>
  );
}

export default App;
