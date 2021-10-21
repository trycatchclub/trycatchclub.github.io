import "./Timeline.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";
export default function Timeline() {
  return (
    <Section
      className="timeline"
      id="timeline"
      header={
        <span>
          {" "}
          <strong>time</strong>line
        </span>
      }
    >
      <Row>
        <Col>
          <TimelineItem
            title={"timeline item"}
            startDate="19 Oct 2021"
            endDate="20 Oct 2021"
          >
            timeline description
          </TimelineItem>
          <TimelineItem title={"timeline item"} />
          <TimelineItem title={"timeline item"} isEnd />
        </Col>
      </Row>
    </Section>
  );
}
