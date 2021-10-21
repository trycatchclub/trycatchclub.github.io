import "./Try.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import CareerSociusImage from "../assets/careersocius.jpg";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <ProjectCard
            organization="CareerSocius"
            image={CareerSociusImage}
            project="Career Portal"
            orgDescription="CareerSocius is a social enterprise that helps job-seekers in Singapore build and enhance their personal brands to enable them to clinch their dream jobs."
            projDescription="CareerSocius' career portal will be integral to their client's personal branding journey. The career portal boasts a timeline feature that shows the client's resume revisions using the in-app resume builder, while keeping track of the client's notes and journal entries. These journal entries will also allow users to embed custom quiz results and answers as blocks, making the portal truly a one-stop shop for all of CareerSocius' client needs."
            mentor={
              <span>
                <a href="https://www.linkedin.com/in/millasml/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
                Milla Samuel
              </span>
            }
            roles={["Software Engineer", "Product Manager", "Head of Product"]}
          />
        </Col>
      </Row>
    </Section>
  );
}
