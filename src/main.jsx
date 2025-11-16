import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// keep existing styles:
import "./index.css";

// ADD THIS NEW LINE (your aesthetic global styles)
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
