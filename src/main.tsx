import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
