import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Section1 = () => {
  return (
    <section className="news">
    <Container>
      <Row className="align-items-center py-5">
        <Col lg={12} className="text-center text-lg-start mb-5 mb-lg-0">
          <h4>USKORO</h4>
        </Col>
      </Row>  
    </Container>
  </section>
  )
}

export default Section1