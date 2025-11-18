// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";   // tailwind entry (must exist)
import "./styles.css";  // aesthetic global styles (must exist or remove import)

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Root element not found. Make sure index.html contains <div id="root"></div>');
}

createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
