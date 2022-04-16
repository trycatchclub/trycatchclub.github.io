import "./PastProjectCard.scss";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PastProjectCard({
  organization,
  image,
  project,
  description,
  link,
}) {
  return (
    <Card className="past-project-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{project}</Card.Title>
        {organization && (
          <Card.Subtitle>Organization: {organization}</Card.Subtitle>
        )}
        <Card.Text>{description}</Card.Text>

        {link && (
          <Link to={link}>
            <Button>Read More</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}
