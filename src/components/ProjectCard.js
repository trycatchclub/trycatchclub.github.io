import "./ProjectCard.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function ProjectCard({
  organization,
  image,
  project,
  orgDescription,
  projDescription,
  mentor,
  roles,
  link,
}) {
  return (
    <Card className="project-card">
      <Container>
        <Row className="mb-5">
          <Col lg={2}>
            <Image src={image} fluid />
          </Col>
          <Col className="organization-container">
            <div className="title white">
              Organization: <strong>{organization}</strong>
            </div>
            <div>{orgDescription}</div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div className="title white">
              Project: <strong>{project}</strong>
            </div>
            <div>{projDescription}</div>
          </Col>
          <Col className="details" lg={5}>
            <div className="details-section">
              <div className="title sub-title">Mentor</div>
              <div>{mentor}</div>
            </div>
            <div className="details-section">
              <div className="title sub-title">Looking For</div>
              <div>
                {roles.map((role) => {
                  return <span className="job-badge">{role}</span>;
                })}
              </div>
            </div>
            <div className="details-section">
              <Button href={link}>Apply Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
