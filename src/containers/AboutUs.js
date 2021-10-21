import "./AboutUs.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../components/Section";

export default function AboutUs() {
  return (
    <Section
      className="about-us"
      id="about"
      header={
        <span>
          about <strong>us</strong>
        </span>
      }
    >
      <Row>
        <Col>
          try<strong>{`{catch}`}</strong> is an women in tech organization that
          builds software projects for social good in Singapore. Under the
          guidance of experienced software engineers and product managers, we
          replicate a professional tech environment for female students to
          learn, make mistakes and grow in.
        </Col>
      </Row>
      <Row>
        <Col className="sub-section">
          <div className="title">work on a project</div>
          <div className="section-description">
            that is technically challenging. Up your practical skills, and have
            a cool side project to show it off on your resume.
          </div>
        </Col>
        <Col className="sub-section">
          <div className="title">with meaning</div>
          <div className="section-description">
            as your project directly helps a non-profit. Not only is your work
            impactful, you have proof that your project is functional and used
            on the ground.
          </div>
        </Col>
        <Col className="sub-section">
          <div className="title">under mentorship</div>
          <div className="section-description">
            When you hit a roadblock, schedule a meeting with our mentors for a
            pair programming session. Get regular code reviews to ensure your
            work is of quality.
          </div>
        </Col>
      </Row>
    </Section>
  );
}
