import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Traning.css";

const TraningBootstrap = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">
                  📚 HTML, CSS & Bootstrap Training Program
                </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. HTML (HyperText Markup Language)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅ Introduction to HTML
                          <ul>
                            <li>What is HTML? </li>
                            <li>HTML structure (DOCTYPE, html, head, body) </li>
                            <li>
                              Setting up a development environment (VSCode, Live
                              Server){" "}
                            </li>
                            <li>Writing your first HTML page</li>
                          </ul>
                          <br />✅ HTML Basics
                          <ul>
                            <li>What is HTML? </li>
                            <li>HTML structure (DOCTYPE, html, head, body) </li>
                            <li>
                              Setting up a development environment (VSCode, Live
                              Server){" "}
                            </li>
                            <li>Writing your first HTML page</li>
                          </ul>
                          <br />✅ HTML5 Features
                          <ul>
                            <li>Audio and Video tags </li>
                            <li>
                              Semantic Elements (&lt;header&gt;, &lt;footer&gt;,
                              &lt;article&gt;, &lt;section&gt;)
                            </li>
                            <li>
                              Input types and attributes in HTML5 
                            </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>2. CSS (Cascading Style Sheets) </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅ Introduction to CSS
                          <ul>
                            <li>What is CSS?  </li>
                            <li>Inline, Internal, and External CSS  </li>
                            <li>
                              CSS Syntax (Selectors, Properties, Values) 
                            </li>
                          </ul>
                          <br />

                          ✅ Selectors & Properties
                          <ul>
                            <li>Element, ID, Class Selectors   </li>
                            <li>Pseudo-classes and Pseudo-elements (:hover, :nth-child)   </li>
                            <li>
                              Colors, Backgrounds, Borders  
                            </li>
                            <li>Fonts, Text Styling </li>
                          </ul>
                          <br />

                          ✅ Box Model 
                          <ul>
                            <li>Margin, Border, Padding, Content    </li>
                            <li>Understanding width, height, and overflow    </li>
                          </ul>
                          <br />

                          ✅  Positioning & Layout
                          <ul>
                            <li>Static, Relative, Absolute, Fixed, Sticky  </li>
                            <li>Display Property (block, inline, inline-block, none)    </li>
                            <li>
                              Flexbox (Basics)  
                            </li>
                            <li>CSS Grid (Basics)  </li>
                          </ul>
                          <br />

                          ✅ Transitions & Animations
                          <ul>
                            <li>CSS Transitions    </li>
                            <li>Keyframe Animations    </li>
                          </ul>
                          <br />

                          ✅ Responsive Design Basics
                          <ul>
                            <li>Media Queries   </li>
                            <li>Units: px, %, em, rem, vh, vw    </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {" "}
                      Bootstrap (Responsive Framework)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅ Introduction to Bootstrap
                          <ul>
                            <li>What is Bootstrap and Why use it?   </li>
                            <li>Setting up Bootstrap (CDN & Local)   </li>
                            
                          </ul>
                          <br />
                          ✅ Bootstrap Grid System
                          <ul>
                            <li>Rows and Columns  </li>
                            <li>Container Classes  </li>
                            <li>
                              Responsive Design with Grid  
                            </li>
                          </ul>
                          <br />
                          ✅ Bootstrap Components
                          <ul>
                            <li> Buttons, Alerts, Badges  </li>
                            <li>Navbar, Breadcrumbs, Pagination    </li>
                            <li>
                              Cards, Modals, Accordion, Carousel 
                            </li>
                          </ul>
                          <br />
                          ✅ Bootstrap Forms
                          <ul>
                            <li>Form Layouts & Controls  </li>
                            <li>Validation Classes  </li>
                            
                          </ul>
                          <br />
                          ✅ Utilities and Helpers
                          <ul>
                            <li>Spacing (margins & paddings)  </li>
                            <li>Text Alignment and Colors  </li>
                            <li>
                              Display Utilities  
                            </li>
                          </ul>
                          <br />
                          ✅ Bootstrap 5 New Features
                          <ul>
                            <li>Updated Grid System   </li>
                            <li>Customizable utilities   </li>
                        
                          </ul>
                          <br />
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      4. Mini Projects (Hands-On Practice)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>
                              Build a Personal Portfolio Website (HTML & CSS) 
                            </li>
                            <li>Create a Responsive Landing Page using Bootstrap </li>
                            <li>
                              Design a Simple Blog Layout 
                            </li>
                            <li>
                              Build a Login & Registration Form 
                            </li>
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

export default TraningBootstrap;
