import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col className="align-self-center footer-text">
          Personal Portfolio, By Juan Pablo Zavala
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
