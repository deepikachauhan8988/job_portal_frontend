import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Training.css";
import { Link } from "react-router-dom";

const UIUXTraining = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">
                  📚 UI/UX Designer Training Program Outline 
                </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. Introduction to UI/UX Design
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ What is UI (User Interface) and UX (User Experience)? <br />
                            ✅ Difference between UI & UX <br />
                            ✅ Role of a UI/UX Designer in Web & App Development
                            <br />
                            ✅ Design Thinking Process Overview
                            
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      2. UX Design (User Experience)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅ Understanding Users
                          <ul>
                            <li>User Research (Surveys, Interviews, Personas)    </li>
                            <li>Identifying Pain Points & Needs  </li>
                            <li>Creating User Personas  </li>
                            <li>User Journey Mapping </li>
                          </ul>
                          <br />✅ UX Processes
                          <ul>
                            <li>Information Architecture (Sitemaps & Flows)  </li>
                            <li>
                              Wireframing (Low-Fidelity Designs) 
                            </li>
                            <li>Prototyping (Mid & High-Fidelity)  </li>
                            <li>Usability Testing (Collecting Feedback & Improving Designs)  </li>
                          </ul>
                          <br />✅ Tools for UX Design
                          <ul>
                            <li>Figma (UX workflows)  </li>
                            <li>Adobe XD or Sketch (optional)  </li>
                            <li>Miro (User Flows & Mind Maps)  </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                       3. UI Design (User Interface)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅ Visual Design Principles
                          <ul>
                            <li>Layout, Grids & Spacing   </li>
                            <li>Color Theory and Accessibility   </li>
                            <li>Typography: Fonts, Hierarchy & Readability   </li>
                            <li>Designing for Multiple Devices (Mobile First Design)   </li>
                          </ul>
                          <br />✅ UI Components 
                          <ul>
                            <li>Buttons, Forms, Cards, Icons, Modals  </li>
                            <li>Design Systems & Style Guides (Consistency in Design)   </li>
                            <li>Micro-Interactions and Animations  </li>
                          </ul>
                          <br />✅ UI Tools
                          <ul>
                            <li> Figma (Designing Components & Frames)  </li>
                            <li>Adobe XD or Sketch (optional for Interface Design)   </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                       4. Responsive & Adaptive Design
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ Designing for Web, Mobile, and Tablet <br />
                            ✅ Breakpoints and Grids <br />
                            ✅ Creating Mobile App UI (iOS & Android Guidelines)
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                       5. Collaboration & Handoff
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ Working with Developers (Exporting Assets & Code) <br />
                            ✅ Handoff Tools: Zeplin / Figma Inspect <br />
                            ✅ Version Control in Design Files
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                       6. Hands-On Practice & Projects
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅  Mini Projects: 
                          <ul>
                            <li>Create a Landing Page Wireframe  </li>
                            <li>Design a Mobile App (Food Delivery / E-commerce App UI) </li>
                            <li>Redesign an Existing Website (Focus on UX Improvements)  </li>
                          </ul>
                          <br/>
                          ✅ Capstone Project:
                          <ul>
                            <li>Complete UI/UX Design for a Real-World App or Website  </li>
                            <li>Prepare Portfolio Ready Case Studies  </li>
                          </ul>

                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                       7. Portfolio Building & Career Guidance
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ Creating Your Design Portfolio <br />
                            ✅ Preparing for UI/UX Interviews <br />
                            ✅ Understanding Freelance & Agency Workflows
                          </ul>
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
                  Enroll now to start your UI/UX journey!
                </p>
                <div className="text-center mt-3">
                  <Link to="/UserRegistration">
                  <button className="btn btn-primary rounded-pill px-4">
                    Register Now
                  </button></Link>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UIUXTraining;
