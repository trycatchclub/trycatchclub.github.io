import "./Try.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
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
          we are calling for <strong>female</strong> students for{" "}
          <strong>one</strong> project:
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Container>
              <Row>
                <Col>
                  <div className="title">CareerSocius Platform</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce viverra magna ac tellus aliquam, non vestibulum tortor
                    condimentum. Ut vehicula accumsan condimentum. Praesent eu
                    lacinia lectus, vitae scelerisque massa. Mauris porttitor
                    dictum nibh, ac suscipit metus congue vitae.
                  </div>
                </Col>
                <Col>
                  {" "}
                  <div className="sub-title">Mentor</div>
                  <div>Milla Samuel</div>
                  <div className="sub-title">Looking For</div>
                  <div>
                    <Badge>Software Engineer</Badge>{" "}
                    <Badge>Product Manager</Badge>{" "}
                    <Badge>Head of Product</Badge>
                  </div>
                  <Button>Apply Now</Button>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Section>
  );
}
