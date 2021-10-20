import "./Timeline.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Section from "../components/Section";

export default function Timeline() {
  return (
    <Section
      className="timeline"
      id="timeline"
      header={
        <span>
          {" "}
          <strong>time</strong>line
        </span>
      }
    >
      <Row>
        <Col>hellos</Col>
      </Row>
    </Section>
  );
}
