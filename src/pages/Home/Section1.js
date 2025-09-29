import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Magija from "../../assets/logo/logo_jabuka.webp";
import "aos/dist/aos.css";
import AOS from "aos"; 

const Section1 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500, // Trajanje animacije u milisekundama
      once: true, // Animacija se dešava samo jednom (ne ponavlja pri ponovnom skrolovanju)
      mirror: true,
    });
  }, []);

  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
          <div
              className="position-relative"
              data-aos="zoom-in" // AOS efekat na sliku
            >
              <img src={Magija} className="img-fluid" alt="Hero" />
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center text"
            data-aos="fade-up"
            >
              <h1 className="text-white">Slatka Magija</h1>
              <h2 className="text-white">Sa ukusom </h2>
              <p className="text-white pt-2 pb-4">
              Naši proizvodi su rezultat tradicionalnih recepata obogaćenih obiljem ljubavi, što čini jedinstvenu slatku magiju u svakom zalogaju.
              </p>
             {/*  <Link to="/NasaPrica" className="btn order_now">
                O Nama  
              </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
