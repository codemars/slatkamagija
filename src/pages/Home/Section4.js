import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import litle_girl from "../../assets/background/little-girl-having-her-breakfast-min.webp";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={litle_girl} className="img-fluid promotion" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>NIŠTA NE SPAJA LJUDE KAO DOMAĆI UŽICI</h2>
            
              <ul>
                <li>
                  <p>
                  Zamislite jutro uz miris svežeg hleba i naše voćne sokove, dan pun slatkih džemova koji upotpunjuju svaki trenutak. Ova priča traje kroz svaki trenutak dana.
                  </p>
                </li>
                <li>
                  <p>
                  Naši džemovi su više od proizvoda - to su ukusi koji se dodaju svakom obroku, inspirisani maštom i stvoreni kao malo remek-delo.
                  </p>
                </li>
                <li>
                  <p>
                  Naši sokovi prenose priču o ljubavi, radosti i prirodnim ukusima. Bez reči, oni govore o autentičnosti i nude osveženje koje podstiče sva čula.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
