import { Container, Row, Col } from "react-bootstrap";
import FabflixImg from "../images/fabflix.jpg";

const Projects = () => {
  return (
    <>
      <h2 className="heading">PROJECTS</h2>
      <Container>
        <Row className="projects-content">
          <Col className="projects-box">
            <img src={FabflixImg} alt="" className="projects-image"></img>
            <div className="projects-overlay">
              <h2>Fabflix</h2>
            </div>
          </Col>
          <Col className="projects-box">
            <img src="/" alt="" className="projects-image"></img>
            <div className="projects-overlay">
              <h2>Fabflix</h2>
            </div>
          </Col>
          <Col className="projects-box">
            <img src="/" alt="" className="projects-image"></img>
            <div className="projects-overlay">
              <h2>Fabflix</h2>
            </div>
          </Col>
          <Col className="projects-box">
            <img src="/" alt="" className="projects-image"></img>
            <div className="projects-overlay">
              <h2>Fabflix</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
