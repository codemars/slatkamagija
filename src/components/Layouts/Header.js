import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true); 
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset; 
  
    if (currentScrollPos === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }

    if (prevScrollPos > currentScrollPos) {
      // Ako skroluješ nadole, prikaži navbar
      setNavVisible(true);
    } else {
      // Ako skroluješ nadole, sakrij navbar
      setNavVisible(false);
    }

    setPrevScrollPos(currentScrollPos); // Ažuriraj prethodnu poziciju skrolovanja
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`sticky ${navVisible ? "visible" : "hidden"}`}
        style={{ backgroundColor: isAtTop ? "#fff3d9" : "#fff3d9" }} // Ukloni pozadinu kada je na vrhu
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="animated-link" as={Link} to="/Products">
                Proizvodi
              </Nav.Link>
              <Nav.Link className="animated-link" as={Link} to="/Recipe">
                Recepti
              </Nav.Link>
              <Nav.Link className="animated-link" as={Link} to="/OurStory">
                Naša priča
              </Nav.Link>
              <Nav.Link className="animated-link" as={Link} to="/Contact">
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
