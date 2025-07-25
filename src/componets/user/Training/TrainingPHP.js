import React from "react";
import {Row, Col, Accordion, Card } from "react-bootstrap";
import "../../../assets/css/Training.css";
import { Link } from "react-router-dom";

const TrainingPHP = () => {
  return (
    <div className="main-contanier">
      <div className="my-3 main-mt-0">
        <div className="text-center m-3 mobile-register">
                          <Link to="/UserRegistration">
                          <button className="btn btn-primary rounded-pill px-4">
                            Register Now
                          </button>
                          </Link>
                        </div>
        <div className="training-wrapper p-4">
          <Row>
            {/* Left Column (Accordion) */}
            <Col md={8} sm={12} className="mb-4">
              <Card>
                <h3 className="section-heading">📚  PHP Training Program Outline </h3>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Introduction to PHP</Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                        <ul>
                          <li>What is PHP?  </li>
                          <li>Features of PHP   </li>
                          <li>PHP vs Other Languages (Java, Python)   </li>
                          <li>Setting up PHP environment (XAMPP/WAMP/LAMP, VSCode/Sublime)  </li>
                          <li>Your first PHP program (Hello World!) </li>
                        </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header> 2. PHP Basics  </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>PHP Syntax & Tags   </li>
                            <li>Variables and Constants   </li>
                            <li>Data Types in PHP (string, int, float, bool, arrays, objects)   </li>
                            <li>Operators (Arithmetic, Assignment, Comparison, Logical)   </li>
                            <li>Comments in PHP </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>   3. Control Structures</Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>If, If-Else, Nested If  </li>
                            <li>Switch-Case  </li>
                            <li>Loops (for, while, do-while, foreach)   </li>
                            <li>Break & Continue Statements </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                    4. Functions in PHP
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Defining and Calling Functions  </li>
                            <li>Arguments (Default, Optional, Return Values)   </li>
                            <li>Variable Scope (Global & Local)   </li>
                            <li>Include & Require Statements    </li>
                            <li>PHP Built-in Functions (String, Array, Math) </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      5. Working with Forms
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>GET vs POST Methods </li>
                            <li>Retrieving Form Data  </li>
                            <li>Validating User Input   </li>
                            <li>Sanitizing Data (Security Basics) </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                       6. Arrays in PHP 
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Indexed, Associative, and Multidimensional Arrays  </li>
                            <li>Array Functions (sort, explode, implode, etc.)   </li>
                            <li>Iterating Arrays (foreach, for loops)  </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                       7. Strings and Regular Expressions
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>String Functions (strlen, str_replace, substr, etc.)  </li>
                            <li>Pattern Matching with Regex (preg_match, preg_replace)   </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                       8. Working with Files 
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Reading & Writing Files (fopen, fread, fwrite, fclose)   </li>
                            <li>File Uploads   </li>
                            <li>File Handling Best Practices </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="9">
                    <Accordion.Header>
                      9. Session Management
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Cookies vs Sessions   </li>
                            <li>Creating and Managing Sessions   </li>
                            <li>Secure Session Handling </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10">
                    <Accordion.Header>
                      10. PHP & MySQL Database
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Introduction to MySQL   </li>
                            <li>Connecting PHP with MySQL (mysqli and PDO)  </li>
                            <li>CRUD Operations (Create, Read, Update, Delete)   </li>
                            <li>Prepared Statements to prevent SQL Injection </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="11">
                    <Accordion.Header>
                       11. Error Handling & Debugging
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Types of Errors (Syntax, Runtime, Logic)  </li>
                            <li>Try-Catch Exception Handling </li>
                            <li>Debugging Techniques  </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="12">
                    <Accordion.Header>
                      12. Object-Oriented Programming (OOP) in PHP
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Classes & Objects</li>
                            <li>Constructors and Destructors </li>
                            <li>Inheritance </li>
                            <li>Encapsulation & Polymorphism </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                  
                  <Accordion.Item eventKey="13">
                    <Accordion.Header>
                     13. PHP Advanced Topics
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>PHP Email Handling (mail function)   </li>
                            <li>Introduction to REST APIs (Create and Consume APIs)  </li>
                            <li>Working with JSON Data   </li>
                            <li>Introduction to PHP Frameworks (Laravel basics overview) </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>

                   <Accordion.Item eventKey="14">
                    <Accordion.Header>
                     14. Project Work (Hands-on)
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="module-card">
                        <Card.Body>
                          <ul>
                            <li>Contact Form with Database  </li><ul>
                            <li>Simple Blog Application (CRUD operations)  </li>
                            <li>User Login & Registration System    </li>
                            </ul>
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
                  Enroll now to start your PHP journey!
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

export default TrainingPHP;
