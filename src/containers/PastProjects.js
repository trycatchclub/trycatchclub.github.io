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
          description="CareerSocius' career portal will be integral to its users' personal branding journey. The career portal will boast a timeline feature that shows the user's resume revisions using their in-app resume builder. At the same time, clients can keep track of information by recording journal entries and consolidating custom quiz answers. Equipped with ample resources to empower them, the portal is truly a one-stop platform for all job-seekers."
          link="/projects/careersocius"
        />
      </div>
    </Section>
  );
}
