import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cocoa_cream from "../../assets/products/cocoa_cream.webp";
import { useSpring, animated } from "react-spring";
import ScrollTrigger from "react-scroll-trigger";
const Section2 = () => {
  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  // Ovo će postaviti show na true nakon montiranja komponente,
  // što će pokrenuti animaciju.
  const handleScroll = () => {
    setShow(true);
    setShowTitle(true);
  };

  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(-100%)",
    config: { tension: 70, friction: 26 },
  });

  const titleAnimation = useSpring({
    opacity: showTitle ? 1 : 0,
    transform: showTitle ? "translateY(0)" : "translateY(-100%)",
    config: { tension: 60, friction: 26 },
  });

  return (
    <>
      <ScrollTrigger onEnter={handleScroll}>
        <section className="title">
          <Container>
            <Row className="align-items-center py-5">
              <Col lg={12} className="text-center text-lg-start mb-3 mb-lg-0">
                <animated.h4 style={titleAnimation} className="dos">
                  Kremovi
                </animated.h4>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="product_section">
          <Container>
            <Row className="align-items-center py-5">
              <Col lg={6}>
                <animated.div style={animation}>
                  <img src={cocoa_cream} alt="krem" className="img-fluid image-krem" />
                </animated.div>
              </Col>
              <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                <h4>Čokoladna Uživanja uz Magične Kakao Kremove</h4>
                <h2>Magični Kakao Krem s Lešnikom</h2>
                <p>
                  Zaronite u poseban svet slatkog užitka s našim kakaom kremom.
                  Ovaj jedinstveni spoj intenzivnog kakaa i sočnog lesnika čini
                  ovu kremu neodoljivom poslasticom. Svaki zalogaj je čaroban,
                  pružajući vam izuzetno iskustvo koje se pamti.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default Section2;
