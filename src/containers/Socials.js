import "./Socials.scss";

import {
  faLinkedin,
  faFacebook,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/company/trycatchclub/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.facebook.com/Trycatch-club-110024224797870">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://t.me/trycatchclub">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="https://www.instagram.com/trycatchclub/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}
