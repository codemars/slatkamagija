import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Recipe from "./pages/Recipe/Recipe";
import Kiflice from "./pages/Recipe/Kiflice";
import LoadingAnimation from './components/Layouts/LoadingAnimation';
import ProductDetails from "./pages/Products/ProductDetails";
import Palacinke from "./pages/Recipe/Palacinke";

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (

    <Router>

      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Proizvodi" element={<Products />} />
          <Route path="/Kontakt" element={<Contact />} />
          <Route path="/Recepti" element={<Recipe />} />
          <Route path="/Recepti/Kiflice" element={<Kiflice />} />
          <Route path="/Recepti/Palacinke" element={<Palacinke />} />
          <Route path="/Proizvodi/:slug" element={<ProductDetails />} />

        </Routes>
      )}
    </Router>

  );
}

export default App;
