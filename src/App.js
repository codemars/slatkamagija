import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Story from "./pages/Story/Story";
import Contact from "./pages/Contact/Contact";
import Recipe from "./pages/Recipe/Recipe";
import Kiflice from "./pages/Recipe/Kiflice";




function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Proizvodi" element={<Products />} />
        <Route path="/NasaPrica" element={<Story />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Recepti" element={<Recipe />} />
        <Route path="/Recepti/Kiflice" element={<Kiflice />} /> 

     
       
      </Routes>
    </Router>
  );
}

export default App;
