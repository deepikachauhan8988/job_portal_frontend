import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Traning.css";

const TraningWebDesign = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">
                  📚 Web Development Training Program
                </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. Introduction to Web Development
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ What is Web Development? <br />
                            ✅ Frontend vs Backend vs Full Stack <br />
                            ✅ How the Web Works (HTTP, Browsers, Servers){" "}
                            <br />
                            ✅ Tools Setup: VSCode, Browsers, Node.js, Git{" "}
                            <br />
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      2. Frontend Development 
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅ HTML (Structure)
                          <ul>
                            <li>HTML Elements, Attributes, and Structure   </li>
                            <li>Forms, Tables, Multimedia (Audio/Video)  </li>
                            <li>Semantic HTML5 Tags </li>
                          </ul>
                          <br />✅ CSS (Styling)
                          <ul>
                            <li>CSS Syntax, Selectors (class, id, pseudo)  </li>
                            <li>
                              Box Model, Colors, Fonts, Backgrounds 
                            </li>
                            <li>Positioning & Layout (Flexbox, Grid) </li>
                            <li>Responsive Design (Media Queries) </li>
                            <li>CSS Animations & Transitions  </li>
                          </ul>
                          <br />✅ Bootstrap / Tailwind CSS (Optional Framework) 
                          <ul>
                            <li>Grid System  </li>
                            <li>Ready-made UI Components (Navbar, Cards, Modals) </li>
                            <li>Responsive Utilities </li>
                          </ul>
                          <br />✅ JavaScript (Interactivity) 
                          <ul>
                            <li>Introduction to JavaScript </li>
                            <li>
                              Variables, Data Types, Operators 
                            </li>
                            <li>Functions, Arrays, Objects </li>
                            <li>DOM Manipulation (getElementById, querySelector)  </li>
                            <li>
                              Events (onclick, onsubmit)  
                            </li>
                            <li>ES6 Features (let/const, Arrow Functions, Template Literals)  </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                       3. Backend Development (Introduction) 
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅ Introduction to Backend
                          <ul>
                            <li>What is a Server?  </li>
                            <li>Basics of REST APIs  </li>
                          </ul>
                          <br />✅ Node.js & Express.js (Optional)
                          <ul>
                            <li>Setting up Node.js Environment  </li>
                            <li>Creating a simple server with Express  </li>
                            <li>Routing in Express </li>
                            <li>Handling Forms and Data </li>
                          </ul>
                          <br />✅ Database (MySQL / MongoDB)
                          <ul>
                            <li> Introduction to Databases </li>
                            <li>Connecting Backend with Database  </li>
                            <li>Performing CRUD Operations </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                       4. Version Control (Git & GitHub)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ Git Basics (init, add, commit, push, pull) <br />
                            ✅ Creating a GitHub Account & Hosting Code <br />
                            ✅ Collaborating with Teams (Branches & Pull Requests)
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                       5. Deployment & Hosting
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ Hosting Static Sites (Netlify, Vercel, GitHub Pages) <br />
                            ✅ Hosting Dynamic Sites (Heroku or Render) <br />
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                       6. Hands-On Projects
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          ✅  Mini Projects (Frontend) 
                          <ul>
                            <li>Personal Portfolio Website </li>
                            <li>Responsive Landing Page </li>
                            <li>To-Do List App (with Local Storage) </li>
                          </ul>
                          <br/>
                          ✅ Full Stack Project (Optional) 
                          <ul>
                            <li>Simple Blog App or E-commerce Website </li>
                            <li>User Authentication (Login & Registration) </li>
                            <li>API Integration </li>
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

export default TraningWebDesign;
