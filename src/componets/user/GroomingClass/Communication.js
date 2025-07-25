import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Training.css";
import { Link } from "react-router-dom";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Communication = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">
                  📚 Communication Skills Training Program
                </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. Introduction to Communication Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />
                            What is Communication? <br />
                            <RiCheckboxCircleFill className="bullet-points" />
                            Types of Communication: Verbal, Non-Verbal, Written,
                            Visual <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Importance of Effective Communication in Personal &
                            Professional Life
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Barriers to Communication and How to Overcome Them
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      2. Verbal Communication Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Tone, Clarity & Choice of Words
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Speaking Confidently in Meetings/Discussions
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Active Listening (Listening vs Hearing)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Asking Questions Effectively
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      3. Written Communication Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Writing Clear & Concise Emails
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Report Writing and Professional Documents
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Chat Etiquette in the Workplace (Teams, Slack, etc.)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Grammar & Punctuation Essentials
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      4. Non-Verbal Communication Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Body Language (Posture, Gestures, Eye Contact)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Facial Expressions & Hand Movements
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Understanding Cultural Differences in Non-Verbal
                            Cues
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      5. Interpersonal Communication Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Building Rapport and Trust
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Empathy in Conversations
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Giving and Receiving Feedback Positively
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Conflict Resolution Techniques
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      6. Presentation & Public Speaking Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Structuring a Presentation (Opening, Body, Closing)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Storytelling Techniques for Engaging Audiences
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Overcoming Stage Fear & Nervousness
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Using Visual Aids (PowerPoint, Canva, etc.)
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      7. Workplace Communication Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Communicating in Teams & Collaboration
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Professional Etiquette on Calls & Video Meetings
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Handling Difficult Conversations with
                            Clients/Colleagues
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      8. Practical Exercises & Role Plays
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Group Discussions (GD Practice)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Mock Presentations
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Email Drafting Scenarios
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Active Listening Games
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="8">
                    <Accordion.Header>
                      9. Soft Skills Integration (Optional)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Time Management in Conversations
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Leadership Communication
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Negotiation Skills
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
                  Enroll now to start your Communication Skill journey!
                </p>
                <div className="text-center mt-3">
                  <Link to="/UserRegistration">
                    <button className="btn btn-primary rounded-pill px-4">
                      Register Now
                    </button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Communication;
