import React from "react";

import { Link } from "react-router-dom";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <main style={{ textAlign: "center", marginTop: "100px", minHeight: "60vh" }}>
        <h1>404</h1>
        <h2>Stranica nije pronađena</h2>
        <p>Izgleda da stranica koju tražiš ne postoji.</p>
        <Link to="/">Vrati se na početnu</Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
