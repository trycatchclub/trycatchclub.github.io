import "./Footer.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  faLinkedin,
  faFacebook,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import HeroImage from "../assets/logo_700x700_transparent_white.svg";

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
          <Col className="footer-content socials">
            {" "}
            <a href="https://www.linkedin.com/company/trycatchclub/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/groups/1053470348839870">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://t.me/trycatchclub">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.instagram.com/trycatchclub/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
