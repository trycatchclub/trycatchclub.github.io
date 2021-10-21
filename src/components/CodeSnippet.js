import "./CodeSnippet.scss";
import Highlight from "react-highlight";

import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function CodeSnippet({ className, tabContent }) {
  return (
    <Card className={`code-snippet ${className}`}>
      <Tabs defaultActiveKey="js" className="code-tabs">
        {tabContent.map(({ key, title, highlightLanguage, content }) => {
          return (
            <Tab eventKey={key} title={title}>
              <div className="tab-content">
                <Highlight className={highlightLanguage}>{content}</Highlight>
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </Card>
  );
}
