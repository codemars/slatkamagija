import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import palacinke from "../../assets/recipe/americke.webp";
import kiflice from "../../assets/recipe/kiflice.webp";

import "aos/dist/aos.css";
import AOS from "aos";
const Section1 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      
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
                  
                    <Link to="/Recepti/Kiflice">
                      <img src={kiflice} alt="Product" />
                    </Link>
                 
                </figure>
                <div className="item-content">

                  <h3 className="item-title" data-aos="fade-right">
                    <Link to="/Recepti/Kiflice">
                      Magične kiflice sa džemom od šipurka
                    </Link>
                  </h3>


                  <ul className="entry-meta">
                    <li>
                    
                        <i className="fas fa-clock"></i> Vreme pripreme: 40 Min
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>


       
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5" >
              <div className="product-box-layout1">
                <figure className="item-figure">
                 
                    <Link to="/Recepti/Palacinke">
                      <img src={palacinke} alt="Product" />
                    </Link>
                 
                </figure>
                <div className="item-content">

                  <h3 className="item-title" data-aos="fade-right">
                    <Link to="/Recepti/Palacinke">
                       Američke palačinke za domaćim kakao kremom
                    </Link>
                  </h3>


                  <ul className="entry-meta">
                    <li>
                        <i className="fas fa-clock"></i> Vreme pripreme: 45 Min
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
