import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import products from '../../data/products';
import Layout from "../../components/Layouts/Layout";

const ProductDetails = () => {


  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);



  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
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


  if (!product) {
    return <p>Proizvod nije pronađen.</p>;
  }

  return (
    <Layout>
      <div className='details'>
        <section className="title">
          <Container>
            <Row className="align-items-center py-4">
              <Col lg={12} className="text-center text-lg-start mb-3 mb-lg-0">
                <animated.h4 style={titleAnimation} className="dos1">
                  {product.name}
                </animated.h4>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="product_section">
          <Container>
            <Row className="py-5">
              <Col lg={6} className="order-lg-2 text-center text-lg-start mb-5 mb-lg-0">

                <p>{product.description}</p>

              </Col>

              <Col lg={6}>
                <animated.div style={animation}>
                  <img src={product.image} alt={product.name} className="image-details" />
                </animated.div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetails;
