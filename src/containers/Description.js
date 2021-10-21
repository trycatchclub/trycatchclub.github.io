import "./Description.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CodeSnippet from "../components/CodeSnippet";

const CODE_SNIPPET_TRY_CATCH = [
  {
    key: "js",
    highlightLanguage: "language-javascript",
    title: "Javascript",
    content: `try {
  you.wake();
  you.code();
} catch {
  console.log("its okay to fail, " + you.name);
}`,
  },
  {
    key: "java",
    title: "Java",
    highlightLanguage: "language-java",
    content: `try {
  Person you = new Person();
  you.code();
}
catch (Exception e) {
  System.out.println("it's fine!");
}`,
  },
  {
    key: "cpp",
    highlightLanguage: "language-cpp",
    title: "C++",
    content: `try {
  if (you.deadlineDue == true) {
    you.work();
  } else {
    you.rest();
  }
} catch ( ExceptionName e ) {
  cout << "all's good, don't worry" << endl;
}`,
  },
];

export default function Description() {
  return (
    <Container className="container-margin description">
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
        <Col lg={6}>
          <CodeSnippet
            tabContent={CODE_SNIPPET_TRY_CATCH}
            className="try-catch-code"
          />
        </Col>
      </Row>
    </Container>
  );
}
