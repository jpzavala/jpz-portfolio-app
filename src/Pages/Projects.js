import { Container, Row, Col } from "react-bootstrap";
import FabflixImg from "../images/fabflix.jpg";
import FitTrackImg from "../images/fittrack.webp";
import jpNotepadImg from "../images/jpnotepad.jpg";
import searchEngineImg from "../images/searchengine.jpeg";

const Projects = () => {
  return (
    <>
      <h2 className="heading">PROJECTS</h2>
      <Container>
        <Row className="projects-content justify-content-evenly">
          <Col lg={5} className="projects-box">
            <a href="https://github.com/jpzavala/fabflix-webapp">
              <img src={FabflixImg} alt="" className="projects-image"></img>
              <div className="projects-overlay">
                <h2>Fabflix</h2>
              </div>
            </a>
          </Col>
          <Col lg={5} className="projects-box">
            <a href="https://github.com/vikmir23/FitTrack">
              <img src={FitTrackImg} alt="" className="projects-image"></img>
              <div className="projects-overlay">
                <h2>FitTrack</h2>
              </div>
            </a>
          </Col>
          <Col lg={5} className="projects-box">
            <a href="https://github.com/jpzavala/search-engine">
              <img
                src={searchEngineImg}
                alt=""
                className="projects-image"
              ></img>
              <div className="projects-overlay">
                <h2>Search Engine</h2>
              </div>
            </a>
          </Col>
          <Col lg={5} className="projects-box">
            <a href="https://github.com/jpzavala/jpNotepad">
              <img src={jpNotepadImg} alt="" className="projects-image"></img>
              <div className="projects-overlay">
                <h2>jpNotepad</h2>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
