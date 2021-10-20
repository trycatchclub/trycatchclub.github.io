import "./Hero.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import HeroImage from "../assets/logo_700x700_transparent_white.svg";

export default function Hero() {
  return (
    <Container className="custom-hero" id="home">
      <Row>
        <Col lg={7} className="logo">
          <Image src={HeroImage} fluid />
        </Col>
        <Col lg={5} className="description">
          A safe space to fail, we'll catch your errors
        </Col>
      </Row>
    </Container>
  );
}
