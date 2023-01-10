import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EducationModal from "../Components/EducationModal";
import downloadIcon from "../images/download.png";

const data = [
  {
    name: "Meta Back-End Developer Professional Certificate",
    location: "Online",
    comment:
      "I'm currently enrolled in the Meta Back-End Developer courses to get the professional certificate awarded by Meta. My motivation is to increase my knowledge and learn more practical techniques to work on the backend of a software application.",
  },
  {
    name: "Software Developer at ColorTokens, inc.",
    location: "San Jose, CA",
    comment:
      "I worked at ColorTokens as a Software Engineer in UI Development for their most recent Xcloud product. During my time working on the frontend, I learned to code in React, Next.js, and work on stories to develop an accessible interface for network specialists and network security managers",
  },
  {
    name: "B.S. in Computer Science",
    location: "Irvine, CA",
    comment:
      "I majored in Computer Science at the University of California, Irvine. Throughout my four years in college, I developed a deep understanding of coding techniques, languages, frameworks, algorithms, and concepts. This was possible thanks to the academic coursework I completed with excelent results and the projects I did both independently and collaboratively.",
  },
  {
    name: "Student QA Engineer Intern",
    location: "Irvine, CA",
    comment:
      "During my third year at UCI, I worked as a Student Web Application Quality Assurance Engineer for the Academic Web Technologies team that developed tools for professors, staff, and students to manage their classes. My duties included working in a scrum team, coordinating testing approaches, creating test plans and cases, and writing testing scripts for web applications using Selenium Webdriver in Java",
  },
];

const AboutMe = () => {
  const [show, setShow] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

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
                developer or software developer. While attending university, I
                have led various software projects to develop useful
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
                developing high quality software.
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
              <Col
                lg={7}
                className="info-box mb-4 mx-3"
                onClick={() => {
                  setDataIndex(i);
                  openModal();
                }}
              >
                <h3>{data[i].name}</h3>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Modal */}

      <EducationModal
        isShowing={show}
        closeModal={closeModal}
        data={data[dataIndex]}
      ></EducationModal>
    </>
  );
};

export default AboutMe;
