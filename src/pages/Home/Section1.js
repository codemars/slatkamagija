import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Magija from "../../assets/logo/logo_jabuka.webp";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Magija} className="img-fluid" alt="Hero" />
           </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center text">
              <h1 className="text-white">Slatka Magija</h1>
              <h2 className="text-white">Sa ukusom </h2>
              <p className="text-white pt-2 pb-4">
              Naši proizvodi su rezultat tradicionalnih recepata obogaćenih obiljem ljubavi, što čini jedinstvenu slatku magiju u svakom zalogaju.
              </p>
              <Link to="/OurStory" className="btn order_now">
                O Nama  
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
