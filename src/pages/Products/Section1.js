import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import jam from '../../assets/products/jam.webp';
import { useSpring, animated } from 'react-spring';



const Section1 = () => {

  
    const [show, setShow] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    useEffect(() => {
      // Ovo će postaviti show na true nakon montiranja komponente,
      // što će pokrenuti animaciju.
      setShowTitle(true);
      setShow(true);
    }, []);
  
    const animation = useSpring({
      opacity: show ? 1 : 0,
      transform: show ? 'translateX(0)' : 'translateX(-100%)',
      config: { tension: 70, friction: 60 },
    });

    const titleAnimation = useSpring({
      opacity: showTitle ? 1 : 0,
      transform: showTitle ? 'translateY(0)' : 'translateY(-100%)',
      config: { tension: 60, friction: 26 },
    });
  

  return (
    <>
     <section className="title">
        <Container>
          <Row className="align-items-center py-4">
            <Col lg={12} className="text-center text-lg-start mb-3 mb-lg-0">
            <animated.h4 style={titleAnimation} className="dos1">
              Marmelade
              </animated.h4>
            </Col>
          </Row>  
        </Container>
      </section>

      <section className="product_section">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={6} className="order-lg-2 text-center text-lg-start mb-5 mb-lg-0">
              <h4>Čarobni Užitak Svaki Put uz Našu magičnu Marmelada</h4>
              <h2>Magija Šipurka i Mešanog Voća u Svakom Zalogaju.</h2>
              <p>
              Uz naše čarobne marmelade, doživite pravu magiju ukusa koja dolazi iz spoja divljeg šipurka i mešanog voća. "Divlja Slatkoća" od šipurka očarava divljom prirodom, dok "Šareni Delikates" donosi čaroliju raznovrsnih voćnih aroma. Ova magična voćna putovanja predstavljaju harmoniju tradicionalnih recepata, stvarajući čarobni raj za vaša nepca.  
              </p>
            </Col>

            <Col lg={6}>
             <animated.div style={animation}>
                  <img src={jam} alt="hleb" className="img-fluid image-dzem" />
               </animated.div>
            </Col>
          </Row>
        </Container>
      </section>

  </>
  )
}

export default Section1;