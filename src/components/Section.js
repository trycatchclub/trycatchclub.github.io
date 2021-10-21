import "./Section.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./Header";

export default function AboutUs({ id, header, children, className }) {
  return (
    <Container className={`${className} section`} id={id}>
      <Row>
        <Col>
          <Header>{header}</Header>
        </Col>
      </Row>
      <div className="content-margin main">{children}</div>
    </Container>
  );
}
