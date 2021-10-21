import "./AppBar.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import {
  faLinkedin,
  faFacebook,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppBar() {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark app-bar">
      <Container className="links-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="links-container">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#timeline">Timeline</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/company/trycatchclub/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/groups/1053470348839870">
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link href="https://t.me/trycatchclub">
              <FontAwesomeIcon icon={faTelegram} />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/trycatchclub/">
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
