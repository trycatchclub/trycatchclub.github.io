import Image from "react-bootstrap/Image";

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProfileCard.scss";

export default function ProfileCard({ image, name, role, github, linkedin }) {
  return (
    <div className="profile-card">
      <div className="image-container">
        <Image src={image} fluid roundedCircle />
      </div>
      <div className="name">{name}</div>
      <div className="mb-4">{role}</div>
      <div className="link-container">
        <div>
          {github && (
            <a href={github}>
              Github <FontAwesomeIcon icon={faAngleDoubleRight} />
            </a>
          )}
        </div>
        <div>
          {linkedin && (
            <a href={linkedin}>
              LinkedIn <FontAwesomeIcon icon={faAngleDoubleRight} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
