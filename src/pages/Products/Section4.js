import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import juice_mix from '../../assets/products/juice_mix.png';
import { useSpring, animated } from 'react-spring';
import ScrollTrigger from 'react-scroll-trigger';

const Section4 = () => {


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
    transform: show ? 'translateX(0)' : 'translateX(-100%)',
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
              Kašasti voćni nektari
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
          <img src={juice_mix} alt="hleb" className="img-fluid image-juice" />
          </animated.div>
        </Col>
        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
          <h4>Osvježavajući razlog za jutarnji osmijeh</h4>
          <h2>Prirodna Magija Voćnih Nektara, magija ukusa</h2>
          <p>
          Zaronite u svet voćnih nektara s našim raznovrsnim kolekcijama, gde se spoj sočnosti i prirodne slasti stvara čaroban ukusni doživljaj. U našim nektarima, poput "Voćnog Dueta" s jabukom i višnjom, ili miks od pomorandže, limuna, jabuke i šargarepe, otkrijte harmoniju ukusa koja budi sva vaša čula. Bez dodatih veštačkih sastojaka, naši nektari su prirodna poslastica koja donosi voćnu radost u svaki gutljaj. 
          </p>
        </Col>
      
      </Row>
    </Container>
  </section>
  </ScrollTrigger>

  </>
  )
}

export default Section4;