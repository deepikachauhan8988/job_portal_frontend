import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Training.css";
import { Link } from "react-router-dom";

const InterviewSkill = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">
                  📚 Interview Skills Training Program Outline   
                </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. Introduction to Interview Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ Importance of Interview Skills in Career Success <br />
                            ✅ Types of Interviews (HR, Technical, Panel, Group Discussions, Video Interviews) <br />
                            ✅ Common Challenges & How to Overcome Nervousness
                      
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                       2. Resume & Cover Letter Preparation
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ Crafting a Professional Resume (Do’s & Don’ts)
                          <br />
                          ✅ Writing an Impactful Cover Letter
                          <br />✅ Customizing Your Resume for Different Roles
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      3. Communication Skills for Interviews
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ Verbal Communication (Clarity, Tone, Confidence)
                          <br />
                          ✅ Non-Verbal Communication (Posture, Eye Contact, Handshakes)
                          <br />✅ Active Listening Skills
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      4. Pre-Interview Preparation
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ Researching the Company & Job Role
                          <br />
                          ✅ Understanding Job Descriptions & Keywords
                          <br />✅ Preparing Your 30-Second Elevator Pitch
                          <br/>✅ Dressing for Success (Grooming & Power Dressing Tips)</ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      5. Common Interview Questions & Answers
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ Tell Me About Yourself (Crafting the Perfect Answer)
                          <br />
                          ✅ Strengths & Weaknesses
                          <br />✅ Why Should We Hire You?
                          <br />✅ Behavioral Questions (STAR Method: Situation, Task, Action, Result)
                          <br/> ✅ Handling Salary Negotiation Questions</ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      6. Mock Interviews & Feedback
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ One-on-One Practice Sessions (HR & Technical)
                          <br />
                          ✅ Group Discussions (GD Practice for Campus Placements)
                          <br />✅ Feedback on Body Language, Tone, and Content
                          <br />✅ Improving Confidence Through Role-Plays</ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      7. Advanced Interview Techniques
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ How to Answer Situational/Problem-Solving Questions
                          <br />
                          ✅ Handling Stress Interviews & Unexpected Questions
                          <br />✅ Asking Smart Questions to Interviewers
                          <br/> ✅ Following Up After an Interview (Thank-You Email Etiquette)</ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      8. Closing the Program 
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ Building a Positive First & Last Impression
                          <br />
                          ✅ Maintaining Professionalism Post-Interview
                          <br />✅ Creating a Personal Action Plan for Job Success</ul>
                          
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
                  Enroll now to start your Interview Skill journey!
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

export default InterviewSkill;

