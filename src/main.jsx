import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import { RateContextProvider } from "./Context/RateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RateContextProvider>
      <App />
    </RateContextProvider>
  </React.StrictMode>
);
