import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";
import hleb from "../../assets/hleb.png";
import rosehip1 from "../../assets/fruit/rosehip1.webp";
import rosehip2 from "../../assets/fruit/rosehip2.webp";
import plum2 from "../../assets/fruit/plum2.webp";
import peach from "../../assets/fruit/peach.webp";
import apricot from "../../assets/fruit/apricot.webp";
import orange from "../../assets/fruit/orange1.webp";

function Section5() {
   useEffect(() => {
      AOS.init({
    duration: 1000, 
    once: false, 
    mirror: true,
      });
    }, []);
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0" data-aos="fade-right">
              <h4>Osvježavajući razlog za jutarnji osmijeh</h4>
              <h2>Začarajte dan sa svakim zalogajem hleba...</h2>
              <p>
                Za vas pažljivo biramo i pakujemo voće koje čini da vam jutro
                zamiriše na dobar dan. Uz vaše omiljeno pecivo ili hleb, vafle,
                mirisne vanilice ili pak sir, isprobajte našu Slatku Magiju
                džemova i uživajte u jedinstvenoj kombinaciji ukusa koja vas
                očarava i ispunjava.
              </p>
            </Col>
            <Col lg={6}>
              <img src={hleb} alt="hleb" className="img-fluid" data-aos="fade-left"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand_section">
        <Container>
          <Row>
            <div className="d-flex align-items-center justify-content-between">
              <div className="brand_img">
                <img src={rosehip1} className="img-fluid" alt="brand-1" />
              </div>
              <div className="brand_img">
                <img src={plum2} className="img-fluid" alt="brand-2" />
              </div>
              <div className="brand_img">
                <img src={peach} className="img-fluid" alt="brand-3" />
              </div>
              <div className="brand_img">
                <img src={apricot} className="img-fluid" alt="brand-4" />
              </div>
              <div className="brand_img">
                <img src={rosehip2} className="img-fluid" alt="brand-5" />
              </div>
              <div className="brand_img">
                <img src={orange} className="img-fluid" alt="brand-6" />
              </div>
            </div>

         
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section5;
