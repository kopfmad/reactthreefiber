import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import CaixaAmarela from "./CaixaAmarela";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree } from "@react-three/fiber";

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      {/* <App2 /> */}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
