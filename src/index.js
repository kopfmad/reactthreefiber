import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <App2 />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
