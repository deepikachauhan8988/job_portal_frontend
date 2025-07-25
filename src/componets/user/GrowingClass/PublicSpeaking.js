import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Training.css";
import { Link } from "react-router-dom";

const PublicSpeaking = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">
                  📚 Public Speaking Training Program Outline    
                </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. Introduction to Public Speaking 
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            ✅ What is Public Speaking? <br />
                            ✅ Why it’s an essential skill for career and personal growth <br />
                            ✅ Common fears & myths about public speaking <br/>
                            ✅ How to overcome stage fear & anxiety
                      
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                       2. Building Confidence as a Speaker
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                          ✅ Developing a positive mindset for speaking
                          <br />
                          ✅ Body language for confidence (posture, gestures, eye contact)
                          <br />✅ Voice modulation (pitch, tone, pace, pauses)
                          <br/>✅ Breathing techniques to stay calm and focused
                          
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      3. Crafting Your Speech
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                          ✅ Understanding your audience
                          <br />
                          ✅ Structuring a speech: Introduction, Body, Conclusion
                          <br />✅ Understanding Dress Codes (Formal, Business Casual, Smart Casual)
                          <br/>✅ Opening strong (hooks, stories, questions)
                          <br/>✅ Using storytelling to engage audiences
                          <br/>✅ Adding humor & emotions naturally
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      4. Communication Techniques
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                          ✅ Verbal communication (clear, impactful delivery)
                          <br />
                          ✅ Non-verbal communication (facial expressions, hand movements)
                          <br />✅ Using visual aids (slides, props, videos) effectively
                          <br/>✅ andling questions from the audience gracefully
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      5. Overcoming Common Challenges
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                          ✅ Dealing with nervousness & stage fright
                          <br />
                          ✅ Avoiding filler words (“um”, “uh”, “you know”)
                          <br />✅ Thinking on your feet (impromptu speaking techniques)
                          <br />✅ Managing time during presentations
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      6. Practical Activities & Role Plays
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                          ✅ Introducing yourself confidently (30-second pitch)
                          <br />
                          ✅ Impromptu speech practice (random topics)
                          <br />✅ Group speaking exercises
                          <br />✅ Recording & self-review of speeches
                          <br/> ✅ Receiving constructive feedback
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                       7. Advanced Public Speaking Skills
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                          ✅ Persuasion & Influence Techniques
                          <br />
                          ✅ Speaking to large audiences vs small groups
                          <br />✅ Handling difficult audiences and tough questions
                          <br/> ✅ Using humor & storytelling for maximum impact
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
                  Enroll now to start your Public Speaking journey!
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

export default PublicSpeaking;
