import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Training.css";
import { Link } from "react-router-dom";
import { RiCheckboxCircleFill } from "react-icons/ri";

const SelfConfidence = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">
                  📚 Self-Confidence & Power Dressing Training Program
                </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. Introduction to Self-Confidence & Image Building
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            What is Self-Confidence? <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Importance of Confidence in Personal & Professional
                            Life <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            First Impressions: Why They Matter <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Role of Grooming & Dressing in Confidence
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      2. Self-Confidence Development
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Overcoming Self-Doubt & Negative Thinking
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Building a Positive Mindset
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Body Language for Confidence (Posture, Eye Contact,
                            Gestures)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Voice Modulation & Speaking Confidently
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Power Posing Techniques
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      3. Power Dressing Basics
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            What is Power Dressing?
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Dressing for Success: Aligning with Your Role &
                            Industry
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Understanding Dress Codes (Formal, Business Casual,
                            Smart Casual)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Colors & Their Impact (Psychology of Colors)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Dressing as per Body Type
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      4. Personal Grooming & Styling Tips
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Hygiene & Grooming Essentials
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Haircare & Skincare Basics
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Accessories: Minimal vs Statement Pieces
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Footwear & Bags: Completing the Look
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      5. Power Dressing for Professionals
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Corporate Dressing for Men (Suits, Shirts, Ties,
                            Shoes)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Corporate Dressing for Women (Formal Wear, Sarees,
                            Business Dresses)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Dressing for Interviews & Presentations
                            <br />✅ Mistakes to Avoid in Workplace Dressing
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      6. Practical Sessions & Activities
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Self-Confidence Role Plays (Interviews,
                            Presentations)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Wardrobe Planning: Do’s & Don’ts
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Dressing Challenges (Pick the Right Look for a
                            Scenario)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Personalized Feedback on Dressing Style
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      7. Integration & Takeaways
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Building Your Signature Style
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Dressing for Different Occasions (Office Parties,
                            Client Meetings, Public Speaking)
                            <br />
                            <RiCheckboxCircleFill className="bullet-points" />{" "}
                            Creating a 30-Second Power Introduction (Confidence
                            Booster)
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
                  Enroll now to start your Self Confidence journey!
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

export default SelfConfidence;
