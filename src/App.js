import "./App.css";
import React, { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree(); //orbit controls precisa disso
  return <orbitControls args={[camera, gl.domElement]} />;
};

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
      <axesHelper />
    </mesh>
  );
}

function App() {
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <Canvas style={{ background: "red" }}>
          <BoxRotativa />
          <Orbit />
          <axesHelper />
        </Canvas>
      </div>
    </>
  );
}

export default App;
