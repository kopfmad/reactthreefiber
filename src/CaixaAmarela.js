import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function CaixaAmarela() {
  let refamarela = useRef();
  useFrame(() => {
    refamarela.current.rotation.x += 0.01;
    refamarela.current.rotation.y -= 0.05;
    refamarela.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={refamarela}>
      <boxBufferGeometry />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
}
