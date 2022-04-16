import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";

import AppBar from "../../containers/AppBar";
import PortalImg from "../../assets/careersocius_portal.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import raei from "../../assets/careersocius_team/raei.jpg";
import keerthi from "../../assets/careersocius_team/keerthi.jpg";
import harshita from "../../assets/careersocius_team/harshita.jpg";
import meryl from "../../assets/careersocius_team/meryl.png";
import baihe from "../../assets/careersocius_team/baihe.jpeg";

import yimei from "../../assets/careersocius_team/yimei.jpg";
import megan from "../../assets/careersocius_team/megan.jpeg";
import xinyi from "../../assets/careersocius_team/xinyi.png";
import angela from "../../assets/careersocius_team/angela.jpg";

import grace from "../../assets/careersocius_team/grace.jpg";
import neha from "../../assets/careersocius_team/neha.jpeg";
import sheehui from "../../assets/careersocius_team/sheehui.png";
import trushti from "../../assets/careersocius_team/trushti.jpeg";

import milla from "../../assets/careersocius_team/milla.jpg";

import "./careersocius.scss";
import { Button } from "react-bootstrap";

const PEOPLE = [
  {
    name: "Raei Ho",
    role: "Product Manager (Resume)",
    image: raei,
    linkedin: "https://www.linkedin.com/in/raeiho",
  },
  {
    name: "Keerthi Vihashini",
    role: "Software Engineer (Resume)",
    image: keerthi,
    github: "https://github.com/kvihashini",
    linkedin: "https://www.linkedin.com/in/keerthi01/",
  },
  {
    name: "Harshita Tiyari",
    role: "Software Engineer (Resume)",
    image: harshita,
    github: "https://github.com/tharshita",
    linkedin: "https://www.linkedin.com/in/tharshita/",
  },
  {
    name: "Meryl Seow",
    role: "Software Engineer (Resume)",
    image: meryl,
    github: "https://github.com/merylseow",
    linkedin: "https://www.linkedin.com/in/meryl-seow-322934177",
  },
  {
    name: "Soh Bai He",
    role: "Software Engineer (Resume)",
    image: baihe,
    github: "https://github.com/by-bai",
    linkedin: "https://www.linkedin.com/in/baihe/",
  },
  {
    name: "Zhang Yimei",
    role: "Product Manager (Journal)",
    image: yimei,
    linkedin: "https://www.linkedin.com/in/yimei-zhang",
  },
  {
    name: "Megan Yee",
    role: "Software Engineer (Journal)",
    image: megan,
    github: "https://github.com/ydymegan",
    linkedin: "https://www.linkedin.com/in/megan-yee",
  },
  {
    name: "Tay Xin Yi",
    role: "Software Engineer (Journal)",
    image: xinyi,
    github: "https://github.com/xinyitay",
    linkedin: "https://www.linkedin.com/in/xinyitay",
  },
  {
    name: "Angela Tjandra",
    role: "Software Engineer (Journal)",
    image: angela,
    linkedin: "https://www.linkedin.com/in/angela-tjandra",
  },
  {
    name: "Grace Chew",
    role: "Product Manager (Timeline)",
    image: grace,
    linkedin: "https://www.linkedin.com/in/gracechewhuining/",
  },
  {
    name: "Neharika Srinivasan",
    role: "Software Engineer (Timeline)",
    image: neha,
    github: "https://github.com/Neha-5678",
    linkedin: "https://www.linkedin.com/in/srinivasan-neharikha",
  },
  {
    name: "Tan Shee Hui",
    role: "Software Engineer (Timeline)",
    image: sheehui,
    github: "https://github.com/jane",
    linkedin: "https://www.linkedin.com/in/jane/",
  },
  {
    name: "Trushti Modi",
    role: "Software Engineer (Journal)",
    image: trushti,
    github: "https://github.com/tsm1820",
    linkedin: "https://www.linkedin.com/in/trushtimodi",
  },
  {
    name: "Eunice Lee",
    role: "Product Lead",
    image: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    linkedin: "https://www.linkedin.com/in/eunice-leerl/",
  },
  {
    name: "Milla Samuel",
    role: "Tech Lead",
    image: milla,
    github: "https://github.com/millasml",
    linkedin: "https://www.linkedin.com/in/millasml/",
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
