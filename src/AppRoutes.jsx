import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Recipe from "./pages/Recipe/Recipe";
import Kiflice from "./pages/Recipe/Kiflice";
import ProductDetails from "./pages/Products/ProductDetails";
import Palacinke from "./pages/Recipe/Palacinke";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proizvodi" element={<Products />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/recepti" element={<Recipe />} />
      <Route path="/recepti/kiflice" element={<Kiflice />} />
      <Route path="/recepti/palacinke" element={<Palacinke />} />
      <Route path="/proizvodi/:slug" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
