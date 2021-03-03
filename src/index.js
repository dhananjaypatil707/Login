import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import App from "./App";

ReactDOM.render(
  <div>
    <App />
    <Welcome name="Dhananjay" city="pune" />
    <Welcome name="Rajiv" city="Mumbai" />
  </div>,
  document.getElementById("root")
);
