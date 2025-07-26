import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Image,
  Spinner,
  Container,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";
import {
  fetchResumeWithUserDetails,
  fetchUserProfileById,
} from "../../../api/auth";
import EditProfilePopup from "../../../componets/user/UserPages/UserSetProfile";

const BASE_URL = "http://127.0.0.1:8000";

const UserProfile = () => {
  const userId = localStorage.getItem("user_id");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (!userId) throw new Error("User ID not found in localStorage");

        const resumeData = await fetchResumeWithUserDetails(userId);
        const userBasic = await fetchUserProfileById(userId);

        // Fix for relative PDF URL
        let resumeUrl = resumeData.generated_pdf;
        console.log("api resume", resumeUrl);

        if (resumeUrl && !resumeUrl.startsWith("http")) {
          resumeUrl = `${resumeUrl.startsWith("http") ? "" : "/"}${resumeUrl}`;
        }

        // Fix for relative image URL
        let photoURL = userBasic.photo;
        if (photoURL && !photoURL.startsWith("http")) {
          photoURL = `${photoURL.startsWith("/") ? "" : "/"}${photoURL}`;
        }

        const mergedData = {
          ...resumeData,
          full_name: userBasic.name,
          email: userBasic.email,
          phone: userBasic.phone,
          photo: photoURL,
          generated_pdf: resumeUrl,
        };

        setUserData(mergedData);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
        alert("Failed to load user profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  const handleUpdate = (updatedUser) => {
    let updatedPhoto = updatedUser.photo;
    if (updatedPhoto && !updatedPhoto.startsWith("http")) {
      updatedPhoto = `${BASE_URL}${
        updatedPhoto.startsWith("/") ? "" : "/"
      }${updatedPhoto}`;
    }

    setUserData((prev) => ({
      ...prev,
      full_name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      photo: updatedPhoto || prev.photo,
    }));
  };

  const renderField = (label, value) => (
    <Row className="mb-2" key={label}>
      <Col sm={4}>
        <strong>{label}:</strong>
      </Col>
      <Col sm={8}>
        {value ? (
          <span>{value}</span>
        ) : (
          <span className="text-muted">Not provided</span>
        )}
      </Col>
    </Row>
  );

  const renderEducation = (label, detail) => {
    if (!detail) return renderField(label, null);
    return (
      <div className="mb-3" key={label}>
        <h6 className="text-secondary">{label}</h6>
        <Row className="mb-2">
          <Col sm={4}>
            <strong>{detail.school ? "School:" : "College:"}</strong>
          </Col>
          <Col sm={8}>{detail.school || detail.course || "N/A"}</Col>
        </Row>
        <Row>
          <Col sm={4}>
            <strong>Board/University:</strong>
          </Col>
          <Col sm={8}>{detail.board || "N/A"}</Col>
        </Row>
        <Row>
          <Col sm={4}>
            <strong>Year:</strong>
          </Col>
          <Col sm={8}>{detail.year || "N/A"}</Col>
        </Row>
        <Row>
          <Col sm={4}>
            <strong>Marks:</strong>
          </Col>
          <Col sm={8}>{detail.marks || "N/A"}%</Col>
        </Row>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading profile...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="text-center text-danger mt-4">No profile data found.</div>
    );
  }

  return (
    <Container>
      <Card className="p-4 shadow-lg rounded-4 mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="text-success fw-bold">My Profile</h3>
          <Button
            className="rounded-pill px-4"
            variant="primary"
            onClick={() => setShowEdit(true)}
          >
            Edit Profile
          </Button>
        </div>

        <Row>
          <Col md={4} className="text-center mb-4">
            <div className="position-relative d-inline-block">
              {userData.photo ? (
                <Image
                  src={userData.photo}
                  roundedCircle
                  width={160}
                  height={160}
                  alt="Profile"
                  style={{ objectFit: "cover", border: "3px solid #198754" }}
                />
              ) : (
                <FaUserCircle size={160} className="text-muted mb-3" />
              )}

              <Button
                variant="light"
                className="position-absolute bottom-0 end-0 p-2 border rounded-circle"
                style={{ backgroundColor: "#ffffffcc" }}
                onClick={() => setShowEdit(true)}
              >
                <i className="bi bi-camera-fill text-dark" />
              </Button>
            </div>

            <h5 className="fw-bold mt-3">{userData.full_name}</h5>
            <p className="text-muted">
              <FaEnvelope className="me-2" />
              {userData.email}
            </p>
            <p>
              <FaPhone className="me-2" />
              {userData.phone}
            </p>

            {userData.linkedin_url && (
              <a
                href={userData.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info btn-sm mt-2"
              >
                <FaLinkedinIn className="me-2" /> LinkedIn
              </a>
            )}
          </Col>

          <Col md={8}>
            <section className="mb-4">
              <h5 className="text-primary border-bottom pb-1 mb-3">
                Personal Information
              </h5>
              {renderField("Address Line 1", userData.adress1)}
              {renderField("Address Line 2", userData.adress2)}
              {renderField("City", userData.city)}
              {renderField("State", userData.state)}
              {renderField("Zip Code", userData.zip_code)}
              {renderField("Objective", userData.objetive)}
              {renderField("Skills", userData.skilss)}
              {renderField("Languages", userData.languages)}
              {renderField("Hobbies", userData.Hobbies)}
              {renderField("Full Time", userData.Full_time)}
              {renderField("Distance Learning", userData.Distance_learning)}
              {renderField(
                "Professional Experience",
                userData.Proffesional_experience
              )}
            </section>

            <section className="mb-4">
              <h5 className="text-primary border-bottom pb-1 mb-3">
                Education
              </h5>
              {renderEducation("10th Details", userData.Tenth_Details)}
              {renderEducation("12th Details", userData.Twelth_Details)}
              {renderEducation("Diploma", userData.Diploma_Details)}
              {renderEducation("Graduation", userData.Graduation_Details)}
              {renderEducation("Masters", userData.Masters_Details)}
            </section>

            <section>
              <h5 className="text-primary border-bottom pb-1 mb-3">Resume</h5>
              <Row className="mb-3">
                <Col sm={4}>
                  <strong>Resume (PDF):</strong>
                </Col>
                <Col sm={8}>
                  {userData.generated_pdf ? (
                    <a
                      href={userData.generated_pdf}
                      className="btn btn-outline-primary rounded-pill"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Download Resume
                    </a>
                  ) : (
                    <span className="text-muted">No resume uploaded</span>
                  )}
                </Col>
              </Row>
              <Button
                className="rounded-pill px-4 mt-2"
                variant="outline-secondary"
                onClick={() => navigate("/ViewProfile")}
              >
                Resume Edit
              </Button>
            </section>
          </Col>
        </Row>
      </Card>

      <EditProfilePopup
        show={showEdit}
        onHide={() => setShowEdit(false)}
        userData={userData}
        onUpdate={handleUpdate}
      />
    </Container>
  );
};

export default UserProfile;
