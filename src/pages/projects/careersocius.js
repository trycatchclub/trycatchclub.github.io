import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";

import AppBar from "../../containers/AppBar";
import PortalImg from "../../assets/careersocius_portal.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./careersocius.scss";
import { Button } from "react-bootstrap";

const PEOPLE = [
  {
    name: "Jane Doe",
    role: "Software Engineer (Journal)",
    image: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    github: "https://github.com/jane",
    linkedin: "https://www.linkedin.com/in/jane/",
  },

  {
    name: "Jane Doe",
    role: "Software Engineer (Journal)",
    image: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    github: "https://github.com/jane",
    linkedin: "https://www.linkedin.com/in/jane/",
  },
  {
    name: "Jane Doe",
    role: "Software Engineer (Journal)",
    image: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    github: "https://github.com/jane",
    linkedin: "https://www.linkedin.com/in/jane/",
  },
  {
    name: "Jane Doe",
    role: "Software Engineer (Journal)",
    image: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    github: "https://github.com/jane",
    linkedin: "https://www.linkedin.com/in/jane/",
  },
  {
    name: "Jane Doe",
    role: "Software Engineer (Journal)",
    image: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    github: "https://github.com/jane",
    linkedin: "https://www.linkedin.com/in/jane/",
  },
  {
    name: "Jane Doe",
    role: "Software Engineer (Journal)",
    image: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    github: "https://github.com/jane",
    linkedin: "https://www.linkedin.com/in/jane/",
  },
];

export default function CareerSociusProject() {
  return (
    <div className="careersocius-project">
      <AppBar />
      <Container>
        <Row>
          <Col>
            <Header className="header">
              <strong>CareerSocius</strong> Portal
            </Header>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg={4}>
            <Image src={PortalImg} fluid />
          </Col>
          <Col>
            <div className="project-description">
              <a href="https://www.careersocius.com/">CareerSocius</a> is a
              social enterprise that helps job-seekers in Singapore build and
              enhance their personal brands to enable them to clinch their dream
              jobs. CareerSocius' career portal will be integral to its users'
              personal branding journey. The career portal will boast a timeline
              feature that shows the user's resume revisions using their in-app
              resume builder. At the same time, clients can keep track of
              information by recording journal entries and consolidating custom
              quiz answers. Equipped with ample resources to empower them, the
              portal is truly a one-stop platform for all job-seekers.
              <div className="project-button-container">
                <Button
                  href="https://careersocius-portal.web.app"
                  className="margin-right-button"
                >
                  Check It Out
                </Button>
                &nbsp;&nbsp;
                <Button href="https://github.com/CareerSocius/resumebuilder">
                  View Code
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="center-header-container">
            <Header className="built-header">
              Proudly <strong>Built</strong> By
            </Header>
          </Col>
        </Row>
        <Row>
          {PEOPLE.map((person) => (
            <Col lg={4}>
              <ProfileCard {...person} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
