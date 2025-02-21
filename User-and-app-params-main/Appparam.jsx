import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Func from './useparams.jsx'; // Make sure this path and file name are correct

function Appparam() {
  return (
    <Router>
      <nav>
        <Link to="/details/1">Go to Details 1</Link>
      </nav>
      <Routes>
        <Route path="/details/:id" element={<Func />} />
      </Routes>
    </Router>
  );
}

export default Appparam;
