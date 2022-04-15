import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import CareerSociusProject from "./pages/projects/careersocius";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/projects/careersocius"
          element={<CareerSociusProject />}
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
