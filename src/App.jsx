import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SeoUpdater from "./components/SeoUpdater";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <SeoUpdater />
      <AppRoutes />
    </Router>
  );
}

export default App;
