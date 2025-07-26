import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("user_id");

  const handleLogout = () => {
    localStorage.removeItem("savedResumeData");
    localStorage.removeItem("userRegistrationData");
    localStorage.removeItem("user_id");
    localStorage.removeItem("selected_job_id");
    localStorage.removeItem("access_token1");
    localStorage.removeItem("refresh_token1");
    localStorage.removeItem("googleUser");
    localStorage.removeItem("autoId");
    localStorage.removeItem("job_title");
    localStorage.removeItem("job_location");
    localStorage.removeItem("job_experience");

    alert("Logout successfully");
    navigate("/");
    setExpanded(false); 
  };

  const handleNavClick = () => {
    setExpanded(false); 
  };

  return (
    <>
    <div className="nav-mg">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className="nav-top-bg main-nav"
        sticky="top"
      >
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
            BrainRock Job Portal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-list gap-4 justify-content-end flex-grow-1 d-flex nav-down">
              <NavDropdown title="Training" id="training-dropdown">
                <NavDropdown.Item as={Link} to="/TrainingReact" onClick={handleNavClick}>React JS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingPython" onClick={handleNavClick}>Python</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingPHP" onClick={handleNavClick}>PHP</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingMySql" onClick={handleNavClick}>MySQL</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingBootstrap" onClick={handleNavClick}>HTML/CSS/Bootstrap</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingWebDesign" onClick={handleNavClick}>Web Development</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/UIUXTraining" onClick={handleNavClick}>UI/UX Designer</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Grooming Class" id="Grooming-class-dropdown">
                <NavDropdown.Item as={Link} to="/Communication" onClick={handleNavClick}>Communication Skills</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/SelfConfidence" onClick={handleNavClick}>Self-Confidence & Power Dressing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/InterviewSkill" onClick={handleNavClick}>Interview Skills</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/PublicSpeaking" onClick={handleNavClick}>Public Speaking</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Study Material" id="study-material-dropdown">
                <NavDropdown.Item as={Link} to="/PdfTutorial" onClick={handleNavClick}>PDF Tutorial</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/VideoTutorial" onClick={handleNavClick}>Video Tutorial</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/LiveClass" onClick={handleNavClick}>Live Class</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Event" id="event-dropdown">
                <NavDropdown.Item as={Link} to="/Event" onClick={handleNavClick}>Upcoming Events</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="For Employers" id="employer-dropdown">
                <NavDropdown.Item as={Link} to="/AdminLogin" onClick={handleNavClick}>Employee Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/AdminRegistration" onClick={handleNavClick}>Employee Registration</NavDropdown.Item>
              </NavDropdown>

              {!isLoggedIn && (
                <>
                  <Nav.Link as={Link} to="/UserLogin" onClick={handleNavClick} className="btn btn-primary custom-nav-btn-login rounded-pill px-4">
                    User Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/UserRegistration" onClick={handleNavClick} className="btn btn-outline-primary rounded-pill custom-nav-btn px-4">
                    User Register
                  </Nav.Link>
                </>
              )}

              {isLoggedIn && (
                <NavDropdown title="UserProfile" id="user-profile-dropdown">
                  <NavDropdown.Item as={Link} to="/SavedJobsList" onClick={handleNavClick}>Saved Job</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/UserProfile" onClick={handleNavClick}>View Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/LeftNav" onClick={handleNavClick}>JobPortal</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      </div>
    </>
  );
}

export default NavBar;
