import { Col, Card } from "react-bootstrap";


function Cards({ image, title, paragraph }) {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text> 
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;