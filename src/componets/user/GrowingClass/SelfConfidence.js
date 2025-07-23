import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Training.css";
import { Link } from "react-router-dom";

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
                            ✅ What is Self-Confidence? <br />
                            ✅ Importance of Confidence in Personal & Professional Life <br />
                            ✅ First Impressions: Why They Matter <br/>
                            ✅ Role of Grooming & Dressing in Confidence
                      
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
                        <Card.Body><ul>
                          ✅ Overcoming Self-Doubt & Negative Thinking
                          <br />
                          ✅ Building a Positive Mindset
                          <br />✅ Body Language for Confidence (Posture, Eye Contact, Gestures)
                          <br/>✅ Voice Modulation & Speaking Confidently
                          <br/>✅ Power Posing Techniques
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
                        <Card.Body><ul>
                          ✅ What is Power Dressing?
                          <br />
                          ✅ Dressing for Success: Aligning with Your Role & Industry
                          <br />✅ Understanding Dress Codes (Formal, Business Casual, Smart Casual)
                          <br/>✅ Colors & Their Impact (Psychology of Colors)
                          <br/>✅ Dressing as per Body Type
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
                        <Card.Body><ul>
                          ✅ Hygiene & Grooming Essentials
                          <br />
                          ✅ Haircare & Skincare Basics
                          <br />✅ Accessories: Minimal vs Statement Pieces
                          <br/>✅ Footwear & Bags: Completing the Look</ul>
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
                        <Card.Body><ul>
                          ✅ Corporate Dressing for Men (Suits, Shirts, Ties, Shoes)
                          <br />
                          ✅ Corporate Dressing for Women (Formal Wear, Sarees, Business Dresses)
                          <br />✅ Dressing for Interviews & Presentations
                          <br />✅ Mistakes to Avoid in Workplace Dressing</ul>
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
                        <Card.Body><ul>
                          ✅ Self-Confidence Role Plays (Interviews, Presentations)
                          <br />
                          ✅ Wardrobe Planning: Do’s & Don’ts
                          <br />✅ Dressing Challenges (Pick the Right Look for a Scenario)
                          <br />✅ Personalized Feedback on Dressing Style
                        </ul></Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                       7. Integration & Takeaways 
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body><ul>
                          ✅ Building Your Signature Style
                          <br />
                          ✅ Dressing for Different Occasions (Office Parties, Client Meetings, Public Speaking)
                          <br />✅ Creating a 30-Second Power Introduction (Confidence Booster)
                        </ul></Card.Body>
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

export default SelfConfidence;
