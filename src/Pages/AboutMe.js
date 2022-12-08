import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EducationModal from "../Components/EducationModal";
import downloadIcon from "../images/download.png";

const data = [
  {
    name: "Software Developer at ColorTokens, inc.",
    location: "",
    comment: "",
  },
  {
    name: "Software Developer at ColorTokens, inc.",
    location: "",
    comment: "",
  },
  {
    name: "Software Developer at ColorTokens, inc.",
    location: "",
    comment: "",
  },
  {
    name: "Software Developer at ColorTokens, inc.",
    location: "",
    comment: "",
  },
];

const AboutMe = () => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <h2 className="heading">ABOUT</h2>
      <Container>
        <Row>
          <Col>
            <div className="about-content my-3">
              <div className="about-data">
                <span>ABOUT ME</span>
                <h2 className="my-4">Software Engineer & Web Developer</h2>

                <a href="/" className="align-items-center text-center">
                  <Button variant="light">
                    Download Resume{" "}
                    <img
                      className="btn-download-icon"
                      src={downloadIcon}
                      alt="download icon"
                    />
                  </Button>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="about-text my-3">
              <p>
                Hi! My name is Juan Pablo Zavala and I'm a recent Computer
                Science graduate from the University of California, Irvine.
                Currently I'm interested in getting a role as a full-stack web
                development and software developer. While attending university,
                I have led various software projects to develop useful
                applications including an e-commerce web application, a fitness
                recommendation mobile app, and a search engine. Additionally, I
                have been testing numerous academic web applications for my
                university as a Student QA Engineer.
              </p>
              <p>
                I'm originally from Lima, Peru where my love for technology
                began as I spent time using the first programs I ever touched in
                my first Windows desktop and researching how they ran. Outside
                of university, I consider myself someone eager to learn, try new
                technologies, and a fan of electronic dance music. Aside from
                these interests, I consider myself an honest and hard-working
                person who likes to communicate with others and work towards
                accomplishing greater goals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center my-5">
            <span className="about-subtitle">
              TECHNICAL EXPERIENCE & EDUCATION
            </span>
          </Col>
        </Row>
        <Row className="info-content justify-content-evenly">
          {data.map((val, i) => {
            return (
              <Col lg={5} className="info-box mb-4 mx-3" onClick={openModal}>
                <h3>Software Developer at ColorTokens, inc.</h3>
                <p>FILL</p>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Modal */}

      <EducationModal isShowing={show} closeModal={closeModal}></EducationModal>
    </>
  );
};

export default AboutMe;
