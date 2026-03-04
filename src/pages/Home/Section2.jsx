import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import pot from "../../assets/image/pot.png";
import orange_slice from "../../assets/image/orange-slice.png";
import food from "../../assets/image/healthy-food.png";
import rosehip1 from "../../assets/fruit/rosehip1.webp";
import rosehip2 from "../../assets/fruit/rosehip2.webp";
import orange1 from "../../assets/fruit/orange1.webp";
import orange2 from "../../assets/fruit/orange2.webp";
import raspberry from "../../assets/fruit/raspberry.webp";
import peach from "../../assets/fruit/peach.webp";
import apricot from "../../assets/fruit/apricot.webp";
import plum1 from "../../assets/fruit/plum1.webp";
import plum2 from "../../assets/fruit/plum2.webp";
import "aos/dist/aos.css";
import AOS from "aos";

// Mock Data Cards
const mockData = [
  {
    image: pot,
    title: "Domaće",
    paragraph: `Zaronite u naš svet ručno rađenih slatkih čarolija, gde se tradicija susreće s kreativnošću. Svaki zalogaj naših autentičnih poslastica oživljava paletu ukusa, donoseći vam neodoljivu kombinaciju slatkih recepata i savremenih inovacija. Otkrijte tajnu naših slatkih umetnosti.`,
  },
  {
    image: orange_slice,
    title: "Stara receptura",
    paragraph: `Svaki zalogaj naših poslastica je prozor u prošlost, sa recepturama koje čuvamo s ljubavlju. Ovde se tradicija susreće sa savremenim, stvarajući slatke trenutke. Doživite spoj starinskih tajni i savremenog uživanja kroz naše ručno rađene poslastice.`,
  },
  {
    image: food,
    title: "Potpuno prirodno",
    paragraph: `Svaki zalogaj naših poslastica otkriva jedinstven spoj tradicije i prirodnih sastojaka. Sa pažljivo biranim recepturama, stvaramo slatke trenutke koji se prirodno uklapaju u svakodnevni užitak. Naša ručno rađena kolekcija donosi harmoniju ukusa, potpuno prirodno.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
     
    });
  }, []);
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
           
              <h2 data-aos="zoom-in">Pun ukus tradicije za prave znalce  </h2>
              <p data-aos="zoom-in">
              U svaku teglicu unosimo pažljivo odabrane sastojke i prstohvat modernog pristupa. Čuvamo duh tradicije dok gledamo ka budućnosti, stvarajući potpuno prirodne proizvode za zdrav i dug život.
              </p>
              <Link to="/Proizvodi" className="btn order_now btn_red">
                Magični proizvodi
              </Link>
            <div>
              <img src={plum1} alt="Plum" className="img-fluid floating-image8" />
              <img src={plum2} alt="Plum" className="img-fluid floating-image9" />
              <img src={rosehip1} alt="Rosehip" className="img-fluid floating-image1" />
              <img src={rosehip2} alt="Rosehip" className="img-fluid floating-image2" />
              <img src={orange1} alt="Orange" className="img-fluid floating-image3" />
              <img src={orange2} alt="Orange" className="img-fluid floating-image4" />
              <img src={raspberry} alt="raspberry" className="img-fluid floating-image5" />
              <img src={apricot} alt="apricot" className="img-fluid floating-image6" />
              <img src={peach} alt="peach" className="img-fluid floating-image7" />
              </div>  
            </Col>
   
          </Row>
        </Container>
        
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center" data-aos="fade-up">
            
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
