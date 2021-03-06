import "./AppBar.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Socials from "./Socials";

export default function AppBar() {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark app-bar">
      <Container className="links-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="links-container">
          <Nav>
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/#/projects/careersocius">
              CareerSocius Project
            </Nav.Link>
            <Nav.Item>
              <Socials />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
