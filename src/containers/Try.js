import "./Try.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
        <Col>
          <div className="try-desc">
            we are calling for <strong>female</strong> students for{" "}
            <strong>one</strong> project:
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="project-card">
            <Container>
              <Row>
                <Col lg={7}>
                  <div className="title">CareerSocius Platform</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce viverra magna ac tellus aliquam, non vestibulum tortor
                    condimentum. Ut vehicula accumsan condimentum. Praesent eu
                    lacinia lectus, vitae scelerisque massa. Mauris porttitor
                    dictum nibh, ac suscipit metus congue vitae.
                  </div>
                </Col>
                <Col className="details" lg={5}>
                  <div className="details-section">
                    <div className="title sub-title">Mentor</div>
                    <div>Milla Samuel</div>
                  </div>
                  <div className="details-section">
                    <div className="title sub-title">Looking For</div>
                    <div>
                      <span className="job-badge">Software Engineer</span>
                      <span className="job-badge">Product Manager</span>
                      <span className="job-badge">Head of Product</span>
                    </div>
                  </div>
                  <div className="details-section">
                    <Button>Apply Now</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Section>
  );
}
