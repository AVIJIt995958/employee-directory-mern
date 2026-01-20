import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Entry Point of the React Application
 *
 * This file is responsible for:
 *   Creating the React root
 *   Rendering the main <App /> component
 *   Attaching the React application to the DOM
 */

/**
 * Create a root using React 18's createRoot API
 * This enables modern React features like concurrent rendering
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Render the application inside React.StrictMode
 * React.StrictMode helps in identifying potential problems
 * in the application during development.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
