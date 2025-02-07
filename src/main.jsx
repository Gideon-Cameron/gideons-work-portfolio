import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// ✅ Global error handling for runtime errors
window.addEventListener("error", (e) => {
  console.error("Global Error:", e.message);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled Promise Rejection:", e.reason);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

