import "./TimelineItem.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TimelineItem({
  className,
  title,
  startDate,
  endDate,
  children,
  isEnd,
}) {
  return (
    <div
      className={`timeline-item ${isEnd ? "" : "left-border"} ${
        className ?? ""
      }`}
    >
      <div className="timeline-circle" />
      <Container>
        <Row>
          <Col className="timeline-headings">
            <div className="title">{title}</div>
            <div className="timeline-date">
              {`${startDate} ${endDate ? `- ${endDate}` : ""}`}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="timeline-description">{children}</Col>
        </Row>
      </Container>
    </div>
  );
}
