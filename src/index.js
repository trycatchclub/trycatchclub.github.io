import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import CareerSociusProject from "./pages/projects/careersocius";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="projects/careersocius" element={<CareerSociusProject />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
