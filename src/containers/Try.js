import "./Try.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Section from "../components/Section";

export default function Timeline() {
  return (
    <Section
      className="try"
      id="signup"
      header={
        <span>
          {" "}
          want to <strong>try</strong>?
        </span>
      }
    >
      <Row>
        <Col>hellos</Col>
      </Row>
    </Section>
  );
}
