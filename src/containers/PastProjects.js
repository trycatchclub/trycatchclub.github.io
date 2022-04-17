import "./PastProjects.scss";

import PastProjectCard from "../components/PastProjectCard";
import CareerSociusImage from "../assets/careersocius.jpg";

import Section from "../components/Section";

export default function PastProjects() {
  return (
    <Section
      className="past-projects"
      id="past-projects"
      header={
        <span>
          past <strong>projects</strong>
        </span>
      }
    >
      <div className="scroll-container">
        <PastProjectCard
          organization={
            <a href="https://www.careersocius.com/">CareerSocius</a>
          }
          image={CareerSociusImage}
          project="Career Portal"
          description="One stop career platform, with a fully equipt resume builder, many journalling activities and more"
          link="/projects/careersocius"
        />
      </div>
    </Section>
  );
}
