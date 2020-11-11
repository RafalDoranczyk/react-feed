import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MaterialUIProvider from "./MaterialUIProvider";
import "animate.css/animate.min.css";

render(
  <Router>
    <MaterialUIProvider />
  </Router>,
  document.getElementById("root")
);
