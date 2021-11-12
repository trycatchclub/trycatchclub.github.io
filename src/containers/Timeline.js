import "./Timeline.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";
export default function Timeline() {
  return (
    <Section
      className="timeline"
      id="timeline"
      header={
        <span>
          <strong>time</strong>line
        </span>
      }
    >
      <Row>
        <Col>
          <TimelineItem
            title="Applications Period"
            startDate="25 Oct 2021"
            endDate="6 Dec 2021"
          >
            Have your resume ready and apply for one or more of the projects
            below. During this time, expect to hear back from us for an
            interview within 2 weeks.
          </TimelineItem>
          <TimelineItem
            title="Pre-recorded Info Session"
            startDate="Released 13 Nov 2021"
          >
            Hear more about trycatch and the organization we are working with
            this cycle. Understand what we are looking out for in applicants,
            and more!
            <div className="info-container">
              <iframe
                className="info-video"
                src="https://www.youtube.com/embed/kV0Fn4cry7s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </TimelineItem>
          <TimelineItem title="Team Onboarding" startDate="10 Dec 2021">
            Welcome to the first class of trycatch! In this quick team
            onboarding session, we lay out expectations, conventions and learn a
            little more about each other :)
          </TimelineItem>
          <TimelineItem
            title="Project Period"
            startDate="13 Dec 2021"
            endDate="15 Apr 2022"
          >
            Work in an agile team for these 4.5 months to achieve your project's
            objectives. You will be working very closely with your mentor, team
            mates and the partner on the project.
            <Card className="commitment">
              <div className="title small-title">You have to commit...</div>
              <ListGroup>
                <ListGroup.Item>2 hours of meetings a week</ListGroup.Item>
                <ListGroup.Item>
                  complete 2 - 3 tasks a week, on your own time
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </TimelineItem>
          <TimelineItem title="Graduation!" startDate="15 Apr 2022" isEnd />
        </Col>
      </Row>
    </Section>
  );
}
