import { Col, Container, Row } from "react-bootstrap";
import linkedin from "../images/linkedin.png";

const Footer = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col className="align-self-center">
          Personal Portfolio, By Juan Pablo Zavala
        </Col>
        <Col className="align-self-center">
          <img src={linkedin} alt="Linkedin link" className="footer-logo"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
