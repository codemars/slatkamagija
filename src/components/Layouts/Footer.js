import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';


function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container className="footer">
          <Row className="py-5">
          <Col sm={4} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <img src={logo} alt="logo" />
              </div>
            </Col>
            <Col sm={5} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Lokacija</h5>
                <p>Srbija, Kragujevac</p>
              </div>
            </Col>
            
            <Col sm={5} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Poručite odmah</h5>
                <p>Putem instagram stranice ili na broj</p>
                <p>
                  <Link to="tel:0693656387" className="calling">
                   034-365-6387
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={5} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Zapratite nas</h5>
               
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="https://www.facebook.com/profile.php?id=61554537968449" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="https://www.instagram.com/slatkamagijaa/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      © 2024 <span>SLATKAMAGIJA</span>. All Rights Reserved
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
