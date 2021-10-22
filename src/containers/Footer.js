import "./Footer.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import HeroImage from "../assets/logo_700x700_transparent_white.svg";

import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="footer-content">
            <div>
              <span>
                <Image src={HeroImage} className="image" />
              </span>
              © 2021
            </div>
          </Col>
          <Col className="footer-content">
            <Socials />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
