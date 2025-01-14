import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import juice from "../../assets/products/juice1.webp";

function Section7() {
  return (
    <section className="juice_section">
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={7} className="text-center text-lg-start mb-5 mb-lg-0">
            <h4>Dobar razlog za osveženje</h4>
            <h2>Uz čašu svežeg soka...</h2>
            <p>
              S pažnjom biramosamo najbolje voće, pažljivo ga pakujemo i stvaramo savršen spoj za vaše osvežavajuće trenutke. Bilo da uživate u kiselkastom ukusu narandže, slatkoći jagoda ili osvežavajućem limunu, naši sokovi su idealan dodatak vašem danu. Uživajte u harmoniji voćnih aroma koje čine svaki gutljaj još ukusnijim. Svaka kap nosi sa sobom notu tradicije i ljubavi prema prirodnim ukusima.
            </p>
          </Col>
          <Col lg={5}>
            <img src={juice} alt="e-shop" className="img-fluid" />
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}

export default Section7;
