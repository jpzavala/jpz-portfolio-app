import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="py-5">
          <Col>PHOTO</Col>
          <Col>ABOUT ME</Col>
        </Row>
        <Row>
          <Col className="text-center">FEATURED</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
