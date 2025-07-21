import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/Profile.css";
import { GetUserRegistration } from "../../../api/auth";
import { useNavigate } from "react-router-dom";

export const UserRegistration = async (formDataToSend) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api2/custom-resume/",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

const Profile = () => {
  const navigate = useNavigate();
  const [selectedQualification, setSelectedQualification] = useState("");
  const [educations, setEducations] = useState([
    {
      qualification: "",
      courseDetail: "",
      school: "",
      board: "",
      year: "",
      percentage: "",
    },
  ]);
  const [courseType, setCourseType] = useState("");
  const [distanceCourse, setDistanceCourse] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [otherText, setOtherText] = useState("");
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adress1: "",
    adress2: "",
    state: "",
    city: "",
    zip_code: "",
    linkedin_url: "",
    keyskilss: "",
    Proffesional_experience: "",
    objective: "",
    hobbies: "",
    photo: "",
  });

  const languageOptions = [
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  };

  const addEducation = () => {
    setEducations((prev) => [...prev, {
      qualification: "",
      courseDetail: "",
      school: "",
      board: "",
      year: "",
      percentage: "",
    }]);
  };

  const removeEducation = (index) => {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (selected) => {
    setSelectedLanguages(selected || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUserData = localStorage.getItem("userRegistrationData");
    const user = storedUserData ? JSON.parse(storedUserData) : null;
    const userId = user?.id;

    if (!userId) {
      alert("User ID not found.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("user", userId);
    formDataToSend.append("full_name", formData.name || "");
    formDataToSend.append("email", formData.email || "");
    formDataToSend.append("phone", formData.phone || "");
    formDataToSend.append("adress1", formData.adress1 || "");
    formDataToSend.append("adress2", formData.adress2 || "");
    formDataToSend.append("state", formData.state || "");
    formDataToSend.append("city", formData.city || "");
    formDataToSend.append("zip_code", formData.zip_code || "");
    formDataToSend.append("linkedin_url", formData.linkedin_url || "");
    formDataToSend.append("skilss", formData.keyskilss || "");
    formDataToSend.append("objetive", formData.objective || "");
    formDataToSend.append("Proffesional_experience", formData.Proffesional_experience || "");
    formDataToSend.append("Hobbies", formData.hobbies || "");
    if (file) {
      formDataToSend.append("photo", file);
    } 
    formDataToSend.append("Full_time", courseType === "full" ? "True" : "False");
    formDataToSend.append(
      "Distance_learning",
      JSON.stringify(courseType === "distance" ? distanceCourse.map(dc => dc.value) : [])
    );
    formDataToSend.append(
      "languages",
      JSON.stringify(selectedLanguages.map(lang => lang.value))
    );
    if (selectedLanguages.some((l) => l.value === "Other")) {
      formDataToSend.append("other_language", otherText || "");
    }
    const eduMap = {
      "10th": "Tenth_Details",
      "12th": "Twelth_Details",
      "Diploma": "Diploma_Details",
      "Graduation": "Graduation_Details",
      "Post Graduation": "Masters_Details",
    };
    educations.forEach((edu) => {
      const key = eduMap[edu.qualification];
      if (key) {
        formDataToSend.append(
          key,
          JSON.stringify({
            course: edu.courseDetail || "",
            school: edu.school || "",
            marks: edu.percentage || "",
            board: edu.board || "",
            year: edu.year || "",
          })
        );
      }
    });

    try {
      const response = await UserRegistration(formDataToSend);
      alert("Profile submitted successfully!");
      navigate("/UserLogin");
    } catch (error) {
      console.error("Submit error:", error.response?.data || error.message);
      alert("Submission failed.");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("autoId");
        if (!userId) return;
        const userData = await GetUserRegistration(userId);
        if (userData) {
          setFormData({
            name: userData.name || "",
            email: userData.email || "",
            phone: userData.phone || "",
            adress1: userData.adress1 || "",
            adress2: userData.adress2 || "",
            state: userData.state || "",
            city: userData.city || "",
            zip_code: userData.zip_code || "",
            linkedin_url: userData.linkedin_url || "",
            keyskilss: userData.skilss || "",
            objective: userData.objetive || "",
            Proffesional_experience: userData.Proffesional_experience || "",
            hobbies: userData.Hobbies || "",
            photo: userData.photo || "",
          });
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchUser();
  }, []);


  return (
    <Container className="mt-4 mb-5">
      <Card className="p-4 shadow-lg">
        <h3 className="text-center mb-4 text-primary fw-bold">
          Professional and Creative Resume
        </h3>

        <Form onSubmit={handleSubmit}>
          {/* Basic Info */}
          <Row className="jp-feilds-design">
            {[
              "name",
              "email",
              "phone",
              "adress1",
              "adress2",
              "state",
              "city",
              "zip_code",
              "linkedin_url",
            ].map((field, i) => (
              <Col md={6} key={i}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")}
                  </Form.Label>
                  <Form.Control
                    type={field === "email" ? "email" : field === "zip_code_code" ? "number" : "text"}
                    placeholder={`Enter ${field.replace("_", " ")}`}
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>

          {/* Objective */}
          <Form.Group className="mb-4">
            <Form.Label>
              <strong>Objective</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Write your objective"
              value={formData.objective}
              onChange={(e) => handleInputChange("objective", e.target.value)}
            />
          </Form.Group>

          {/* Education */}
          <div className="educat-desin">
            <h5 className="mt-4 mb-3">Educational Details</h5>
            <Button
              variant="outline-primary"
              className="mb-3"
              onClick={addEducation}
            >
              <FaPlusCircle className="me-2" />
              Add Education
            </Button>

            <Row className="fw-bold text-secondary mb-2">
              <Col md={2}>Qualification</Col>
              <Col md={3}>School/College</Col>
              <Col md={2}>Board/University</Col>
              <Col md={2}>Year</Col>
              <Col md={2}>%</Col>
              <Col md={1}>Action</Col>
            </Row>

            {educations.map((edu, index) => (
              <Row key={index} className="mb-2">
                <Col md={2}>
                  <Form.Select
                    value={edu.qualification}
                    onChange={(e) =>
                      handleEducationChange(index, "qualification", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post Graduation">Post Graduation/Master</option>
                  </Form.Select>
                </Col>

                <Col md={3}>
                  {edu.qualification === "Graduation" || edu.qualification === "Post Graduation" ? (
                    <Form.Select
                      className="mb-3"
                      value={edu.courseDetail || ""}
                      onChange={(e) =>
                        handleEducationChange(index, "courseDetail", e.target.value)
                      }
                    >
                      <option value="">Select Course</option>
                      {edu.qualification === "Graduation" && (
                        <>
                          <option value="BA">BA</option>
                          <option value="BTech">BTech</option>
                          <option value="BSc">BSc</option>
                          <option value="BCom">BCom</option>
                        </>
                      )}
                      {edu.qualification === "Post Graduation" && (
                        <>
                          <option value="MA">MA</option>
                          <option value="MTech">MTech</option>
                          <option value="MSc">MSc</option>
                          <option value="MCom">MCom</option>
                          <option value="MBA">MBA</option>
                          <option value="MCA">MCA</option>
                          <option value="PhD">PhD</option>
                        </>
                      )}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      className="mb-3"
                      placeholder="School/College"
                      value={edu.school || ""}
                      onChange={(e) =>
                        handleEducationChange(index, "school", e.target.value)
                      }
                    />
                  )}
                </Col>

                <Col md={2}>
                  <Form.Select
                    value={edu.board}
                    onChange={(e) =>
                      handleEducationChange(index, "board", e.target.value)
                    }
                  >
                    <option value="">Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Col>

                <Col md={2}>
                  <Form.Select
                    value={edu.year}
                    onChange={(e) =>
                      handleEducationChange(index, "year", e.target.value)
                    }
                  >
                    <option value="">Select Year</option>
                    {Array.from({ length: new Date().getFullYear() - 1989 }, (_, i) => {
                      const year = 1990 + i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>

                <Col md={2}>
                  <Form.Control
                    value={edu.percentage}
                    placeholder="%"
                    onChange={(e) =>
                      handleEducationChange(index, "percentage", e.target.value)
                    }
                  />
                </Col>

                <Col md={1}>
                  <Button
                    variant="danger"
                    onClick={() => removeEducation(index)}
                    className="education-delete-btn"
                  >
                    ✕
                  </Button>
                </Col>
              </Row>
            ))}
          </div>

          {/* Course Type */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label>
                  <strong>Course Type</strong>
                </Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Full Time"
                    type="radio"
                    name="courseType"
                    value="full"
                    checked={courseType === "full"}
                    onChange={(e) => {
                      setCourseType(e.target.value);
                      setDistanceCourse([]); // Reset distanceCourse when switching to full time
                    }}
                  />
                  <Form.Check
                    inline
                    label="Distance Learning"
                    type="radio"
                    name="courseType"
                    value="distance"
                    checked={courseType === "distance"}
                    onChange={(e) => setCourseType(e.target.value)}
                  />
                </div>

                {courseType === "distance" && (
                  <Select
                    className="mt-2"
                    isMulti
                    options={[
                      { value: "10th", label: "10th" },
                      { value: "12th", label: "12th" },
                      { value: "Diploma", label: "Diploma" },
                    ]}
                    value={distanceCourse}
                    onChange={(selected) => setDistanceCourse(selected || [])}
                  />
                )}
              </Form.Group>
            </Col>

            {/* Language Section */}
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label>
                  <strong>Languages Known</strong>
                </Form.Label>
                <Select
                  isMulti
                  options={languageOptions}
                  value={selectedLanguages}
                  onChange={handleLanguageChange}
                  placeholder="Select languages"
                />
                {selectedLanguages.some((l) => l.value === "Other") && (
                  <Form.Control
                    type="text"
                    className="mt-2"
                    placeholder="Specify other languages"
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                  />
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Hobbies */}
          <Form.Group className="mb-3">
            <Form.Label>Hobbies</Form.Label>
            <Form.Control
              type="text"
              placeholder="Reading, Cricket, etc."
              value={formData.hobbies}
              onChange={(e) => handleInputChange("hobbies", e.target.value)}
            />
          </Form.Group>

          {/* File Upload */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Profile photo</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {formData.photo && (
              <img
                src={`http://127.0.0.1:8000${formData.photo}`}
                alt="User Preview"
                width="120"
                height="120"
                className="mt-2"
              />
            )}
          </Form.Group>

          {/* Skills and Proffesional_experience */}
          <Form.Group className="mb-3">
            <Form.Label>Key Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={formData.keyskilss}
              onChange={(e) => handleInputChange("keyskilss", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Professional Proffesional_experience</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.Proffesional_experience}
              onChange={(e) => handleInputChange("Proffesional_experience", e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Profile;