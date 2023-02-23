import { Col, Container, Row, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import downloadIcon from "../images/download.png";
import resume from "../images/resume-jpz.pdf";
import FabflixImg from "../images/fabflix.jpg";
import FitTrackImg from "../images/fittrack.webp";
import jpNotepadImg from "../images/jpnotepad.jpg";
import searchEngineImg from "../images/searchengine.jpeg";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Row className="align-content-center">
          <Col lg={12} className="text-center logo">
            {`<Juan Pablo Zavala />`}
          </Col>
          <Col className="text-center">
            <a
              download
              href={resume}
              className="align-items-center text-center"
            >
              <Button variant="light">
                Download Resume{" "}
                <img
                  className="btn-download-icon"
                  src={downloadIcon}
                  alt="download icon"
                />
              </Button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="heading">Projects</div>
          </Col>
        </Row>
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
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
