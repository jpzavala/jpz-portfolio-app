import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
