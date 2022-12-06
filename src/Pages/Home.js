import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
