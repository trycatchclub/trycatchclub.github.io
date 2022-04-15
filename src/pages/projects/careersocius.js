import ProjectCard from "../../components/ProjectCard";
import CareerSociusImage from "../../assets/careersocius.jpg";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CareerSociusProject() {
  return (
    <div>
      {" "}
      <ProjectCard
        organization="CareerSocius"
        image={CareerSociusImage}
        project="Career Portal"
        orgDescription={
          <span>
            <a href="https://www.careersocius.com/">CareerSocius</a> is a social
            enterprise that helps job-seekers in Singapore build and enhance
            their personal brands to enable them to clinch their dream jobs.
          </span>
        }
        projDescription="CareerSocius' career portal will be integral to its users' personal branding journey. The career portal will boast a timeline feature that shows the user's resume revisions using their in-app resume builder. At the same time, clients can keep track of information by recording journal entries and consolidating custom quiz answers. Equipped with ample resources to empower them, the portal will truly be a one-stop platform for all job-seekers."
        mentor={
          <span>
            <a href="https://www.linkedin.com/in/millasml/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>{" "}
            Milla Samuel
          </span>
        }
        roles={["Software Engineer", "Product Manager", "Head of Product"]}
        link="https://forms.gle/i9UsS3dZrqaNab547"
      />
    </div>
  );
}