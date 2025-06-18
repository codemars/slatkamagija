import React, { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const prevScrollPos = useRef(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setIsAtTop(currentScrollPos === 0);

    setNavVisible(prevScrollPos.current > currentScrollPos);

    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // prazna zavisnost, handleScroll ne menja referencu

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`sticky ${navVisible ? "visible" : "hidden"}`}
        style={{ backgroundColor: isAtTop ? "#F4E3C1" : "#fff3d9" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="animated-link" as={Link} to="/Proizvodi">
                Proizvodi
              </Nav.Link>
              <Nav.Link className="animated-link" as={Link} to="/Recepti">
                Recepti
              </Nav.Link>
              <Nav.Link className="animated-link" as={Link} to="/Kontakt">
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
