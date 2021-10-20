import "./Description.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Description() {
  return (
    <Container className="description">
      <Row>
        <Col className="explanation">
          <i>
            If any statement within the try-block throws an exception, control
            is immediately shifted to the catch-block.{" "}
          </i>
          <p>
            We provide a safe space for you to try things out, and guarantee to
            be there to catch you if you fail.
          </p>
        </Col>
        <Col>
          <Card>
            <Tabs efaultActiveKey="js">
              <Tab eventKey="js" title="Javascript">
                <div className="code">
                  {`try {
                    you.sleep();
                    you.wake();
                    you.motivate();
                    you.code();
                  }
                  catch (e) {
                    console.log(“its okay to fail ” + you.name);
                  }`}
                </div>
              </Tab>
              <Tab eventKey="java" title="Java">
                <div className="code">helloooo helloooo helloooo</div>
              </Tab>
              <Tab eventKey="cpp" title="C++">
                <div className="code">helloooo helloooo helloooo</div>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
