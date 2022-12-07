import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactMe = () => {
  return (
    <>
      <h2 className="heading">CONTACT ME</h2>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  placeholder="Write message here..."
                  style={{ height: "200px" }}
                />
              </Form.Group>

              <Button
                className="contact-button mb-4"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactMe;
