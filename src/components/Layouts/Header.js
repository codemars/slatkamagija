import React, { useContext, useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";  // Importuj ikonu korpe
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
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }

    setPrevScrollPos(currentScrollPos); 
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
        style={{ backgroundColor: isAtTop ? "#F4E3C1" : "#fff3d9" }} 
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
