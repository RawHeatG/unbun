import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
