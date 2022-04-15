import "./Try.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Section from "../components/Section";

export default function Try() {
  return (
    <Section
      className="try"
      id="signup"
      header={
        <span>
          want to <strong>try</strong>?
        </span>
      }
    >
      <Row>
        <Col>
          <div className="try-desc">
            applications are not open at the moment. Please indicate{" "}
            <a href="https://forms.gle/Z13zCpaDXjaT78rd6">here</a> if you would
            like to be contacted for future projects, or check back next time!
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Section>
  );
}
