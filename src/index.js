// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";

// Import Bootstrap 5 CSS globally
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css"; // optional local styles (can be mostly empty)
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);