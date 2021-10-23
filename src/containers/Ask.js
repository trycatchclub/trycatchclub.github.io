import "./Ask.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../components/Section";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useForm } from "@formspree/react";

export default function Ask() {
  const [state, handleSubmit] = useForm("xrgrvyaj");

  console.log(state);

  return (
    <Section
      className="ask"
      id="ask"
      header={
        <span>
          contact <strong>us</strong>
        </span>
      }
    >
      <Row>
        <Col>
          {state.succeeded && <p>Thank you for your submission!</p>}
          {!state.succeeded && (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Jane Doe"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Reach out, ask us anything!"
                  required
                />
              </Form.Group>
              <Button type="submit" disabled={state.submitting}>
                Submit
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Section>
  );
}
