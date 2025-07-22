import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Traning.css";

const TraningRaact = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">📚 Training Modules</h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Module 1: React Basics</Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <p>
                            Learn the foundation of React including JSX,
                            components, props, and state. Understand how to
                            build basic UI elements using reusable components.
                          </p>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Module 2: State & Hooks</Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <p>
                            Dive deeper into functional components with{" "}
                            <code>useState</code>, <code>useEffect</code>, and
                            building your own custom hooks for cleaner logic.
                          </p>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Module 3: Routing</Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <p>
                            Set up navigation using React Router. Learn about
                            route parameters, nested routes, and protected
                            pages.
                          </p>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Module 4: APIs with Axios
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <p>
                            Make API calls using Axios. Practice with GET, POST,
                            and form submissions while handling loading and
                            error states.
                          </p>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </Col>

            {/* Right Column (Registration) */}
            <Col md={4} sm={12}>
              <Card className="registration-card">
                <h4 className="text-center">📋 Registration</h4>
                <p className="text-muted text-center">
                  Enroll now to start your React journey!
                </p>
                <div className="text-center mt-3">
                  <button className="btn btn-primary rounded-pill px-4">
                    Register Now
                  </button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TraningRaact;
