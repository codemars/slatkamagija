import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Story from "./pages/Story/Story";
import Contact from "./pages/Contact/Contact";
import Recipe from "./pages/Recipe/Recipe";
import Kiflice from "./pages/Recipe/Kiflice";
import Palacinke from "./pages/Recipe/Palacinke";
import Torta from "./pages/Recipe/Torta";



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/OurStory" element={<Story />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Recipe/Kiflice" element={<Kiflice />} /> 
        <Route path="/Recipe/Palacinke" element={<Palacinke />} /> 
        <Route path="/Recipe/Torta" element={<Torta />} /> 
     
       
      </Routes>
    </Router>
  );
}

export default App;
