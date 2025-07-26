import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../../api/auth"; 
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("user_id");

 const handleLogout = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
console.log("refresh",refreshToken)
  try {
    if (refreshToken) {
      await logoutUser(refreshToken);
    }
  } catch (err) {
    console.error("Logout API error:", err?.response?.data || err.message);
    // Still continue to log out client-side
  }

  // Clear everything client-side
  localStorage.removeItem("savedResumeData");
  localStorage.removeItem("userRegistrationData");
  localStorage.removeItem("user_id");
  localStorage.removeItem("selected_job_id");
  localStorage.removeItem("access_token1");
  localStorage.removeItem("access_token1");
  localStorage.removeItem("refresh-token-profile");
  localStorage.removeItem("refresh_token1");
  localStorage.removeItem("googleUser");
  localStorage.removeItem("autoId");
  localStorage.removeItem("job_title");
  localStorage.removeItem("job_location");
  localStorage.removeItem("job_experience");

  alert("Logout successfully");
  navigate("/");
};

  return (
    <>
      <Navbar expand="lg" className="nav-top-bg main-nav" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            BR Carrier
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-list gap-4 justify-content-end flex-grow-1 d-flex">
              <NavDropdown title="Training" id="training-dropdown">
                <NavDropdown.Item as={Link} to="/TrainingReact">
                  React JS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingPython">
                  Python
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingPHP">
                  PHP
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingMySql">
                  MySQL
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TrainingBootstrap">
                  HTML/CSS/Bootstrap
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/TrainingWebDesign">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/UIUXTraining">
                  UI/UX Designer
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Growing Class" id="growing-class-dropdown">
                <NavDropdown.Item as={Link} to="/Communication">Communication Skills</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/SelfConfidence">Self-Confidence & Power Dressing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/InterviewSkill">Interview Skills</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/PublicSpeaking">Public Speaking</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Study Material" id="study-material-dropdown">
                <NavDropdown.Item as={Link} to="/PdfTutorial">PDF Tutorial</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/VideoTutorial">Video Tutorial</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/LiveClass">Live Class</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Event" id="event-dropdown">
                <NavDropdown.Item as={Link} to="/Event">Upcoming Events</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="For Employers" id="employer-dropdown">
                <NavDropdown.Item as={Link} to="/AdminLogin">
                  Employee Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/AdminRegistration">
                  Employee Registration
                </NavDropdown.Item>
              </NavDropdown>

              {!isLoggedIn && (
                <>
                  <Nav.Link
                    as={Link}
                    to="/UserLogin"
                    className="btn btn-primary custom-nav-btn-login rounded-pill px-4"
                  >
                    User Login
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/UserRegistration"
                    className="btn btn-outline-primary rounded-pill custom-nav-btn px-4"
                  >
                    User Register
                  </Nav.Link>
                </>
              )}

              {isLoggedIn && (
                <NavDropdown title="UserProfile" id="user-profile-dropdown">
                  <NavDropdown.Item as={Link} to="/SavedJobsList">
                    Saved Job
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/UserProfile">
                    View Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/LeftNav">
                    JobPortal
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
