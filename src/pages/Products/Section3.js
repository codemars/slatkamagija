import React, { useState }  from 'react'
import { Container, Row, Col } from "react-bootstrap";
import chocholate from '../../assets/products/chocholate.png';
import { useSpring, animated } from 'react-spring';
import ScrollTrigger from 'react-scroll-trigger';

const Section3 = () => {

  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  
    // Ovo će postaviti show na true nakon montiranja komponente,
    // što će pokrenuti animaciju.
    const handleScroll = () => {
    setShow(true);
    setShowTitle(true);
    }
 

  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateX(0)' : 'translateX(-200%)',
    config: { tension: 70, friction: 26 },
  });

  const titleAnimation = useSpring({
    opacity: showTitle ? 1 : 0,
    transform: showTitle ? 'translateY(0)' : 'translateY(-100%)',
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
              Čokolade
              </animated.h4>
            </Col>
           
          </Row>
        </Container>
      </section>
    
    <section className="product_section">
    <Container>
      <Row className="align-items-center py-5">
        
        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
          <h4>Zaronite u svet čokoladne Magije</h4>
          <h2>Magija Čokoladni Užitaka</h2>
          <p>
          Uživajte u jednostavnoj, a neodoljivoj radosti čokolade. Svaki zalogaj otkriva slatku harmoniju kvalitetnih sastojaka, pružajući trenutke uživanja bez premca. Bilo da se opuštate s belgijskom čokoladom, uživate u karamelnoj ekstazi ili istražujete tamnu čokoladnu magiju, naša kolekcija će zadovoljiti vaše nepce i doneti slatki dodir magije u svakom trenutku.
          </p>
        </Col>
        <Col lg={6}>
        <animated.div style={animation}>
          <img src={chocholate} alt="hleb" className="img-fluid image-cokolada" />
          </animated.div>
        </Col>
      </Row>
    </Container>
  </section>
  </ScrollTrigger>

  </>
  )
}

export default Section3