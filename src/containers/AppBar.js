import "./AppBar.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function AppBar() {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark app-bar">
      <Container className="links-container">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#timeline">Timeline</Nav.Link>
          <Nav.Link href="#signup">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
