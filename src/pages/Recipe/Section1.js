import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import kiflice from "../../assets/recipe/kiflice.webp";
import "aos/dist/aos.css";
import AOS from "aos";
const Section1 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="titlee">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={12} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4 data-aos="fade-down" >Recepti koji donose pravu slatku magiju u svakom zalogaju</h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="recipe-without-sidebar-wrap padding-top-80 padding-bottom-22">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5" >
              <div className="product-box-layout1">
                <figure className="item-figure">
                  <a href="#">
                    <Link to="/Recepti/Kiflice">
                      <img src={kiflice} alt="Product" />
                    </Link>
                  </a>
                </figure>
                <div className="item-content">

                  <h3 className="item-title" data-aos="fade-right">
                    <Link to="/Recepti/Kiflice">
                      Magicne kiflice sa dzemom od sipurka
                    </Link>
                  </h3>


                  <ul className="entry-meta">
                    <li>
                      <a href="#">
                        <i className="fas fa-clock"></i> Vreme pripreme: 40 Mins
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
