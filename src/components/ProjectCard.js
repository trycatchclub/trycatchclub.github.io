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
        <Row>
          <Col lg={2}>
            <div className="section">
              <Image src={image} fluid />
            </div>
          </Col>
          <Col>
            <div className="section">
              <div className="title white">
                Organization: <strong>{organization}</strong>
              </div>
              <div>{orgDescription}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div className="section">
              <div className="title white">
                Project: <strong>{project}</strong>
              </div>
              <div>{projDescription}</div>
            </div>
          </Col>
          <Col className="details" lg={5}>
            <div className="section">
              <div className="title small-title">Mentor</div>
              <div>{mentor}</div>
            </div>
            <div className="section">
              <div className="title small-title">Looking For</div>
              <div>
                {roles.map((role) => {
                  return <span className="job-badge">{role}</span>;
                })}
              </div>
            </div>
            <div className="section">
              <Button href={link}>Apply Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
