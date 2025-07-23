import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const qualificationOptions = [
  "10th", "12th", "Diploma", "Graduation", "Post Graduation", "PhD"
];

const boardOptions = ["CBSE", "ICSE", "State Board", "Other"];
const yearOptions = Array.from({ length: 30 }, (_, i) => 2025 - i);
const percentageOptions = Array.from({ length: 101 }, (_, i) => i); // 0 to 100%

const ViewProfile = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    adress1: "",
    adress2: "",
    zip_code: "",
    city: "",
    state: "",
    Hobbies: "",
    languages: "",
    skilss: "",
    linkedin_url: "",
    objetive: "",
    professional_experience: "",
  });

  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [educationList, setEducationList] = useState([
    { qualification: "", school: "", board: "", year: "", percentage: "" },
  ]);

  const navigate = useNavigate();
  const userRegistrationData = JSON.parse(localStorage.getItem("userRegistrationData"));
  const user_id = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://adminnanda.in/Job/api2/resume-detail/?user=${user_id}`);
        const data = res.data;

        setFormData({
          full_name: data.full_name || "",
          email: data.email || "",
          phone: data.phone || "",
          adress1: data.adress1 || "",
          adress2: data.adress2 || "",
          zip_code: data.zip_code || "",
          city: data.city || "",
          state: data.state || "",
          Hobbies: data.Hobbies || "",
          languages: data.languages || "",
          skilss: data.skilss || "",
          linkedin_url: data.linkedin_url || "",
          objetive: data.objetive || "",
          professional_experience: data.professional_experience || "",
        });

        if (data.photo) {
          setPhotoPreview(`http://127.0.0.1:8000${data.photo}`);
        }

        if (data.education_details && Array.isArray(data.education_details)) {
          setEducationList(data.education_details);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [user_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (index, e) => {
    const updated = [...educationList];
    updated[index][e.target.name] = e.target.value;
    setEducationList(updated);
  };

  const handleAddEducation = () => {
    setEducationList([
      ...educationList,
      { qualification: "", school: "", board: "", year: "", percentage: "" },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updated = [...educationList];
    updated.splice(index, 1);
    setEducationList(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("user", user_id);

    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    payload.append("education_details", JSON.stringify(educationList));
    if (photo) payload.append("photo", photo);
    if (resume) payload.append("resume", resume);

    try {
      await axios.post("https://adminnanda.in/Job/api2/custom-resume/", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Resume updated successfully!");
      navigate("/UserProfile");
    } catch (err) {
      console.error("Error updating profile:", err.response?.data || err.message);
      alert("Something went wrong while updating profile.");
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Card className="p-4 shadow rounded-4">
        <h3 className="text-center mb-4 text-primary">Edit Profile</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              {/* Basic info */}
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="full_name" value={formData.full_name} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" value={formData.phone} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" onChange={(e) => {
                  const file = e.target.files[0];
                  setPhoto(file);
                  setPhotoPreview(URL.createObjectURL(file));
                }} />
                {photoPreview && <Image src={photoPreview} width={100} className="mt-2 rounded border" />}
              </Form.Group>
            </Col>

            <Col md={6}>
              {/* Address and extras */}
              <Form.Group className="mb-3"><Form.Label>Address Line 1</Form.Label>
                <Form.Control name="adress1" value={formData.adress1} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3"><Form.Label>Address Line 2</Form.Label>
                <Form.Control name="adress2" value={formData.adress2} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3"><Form.Label>City</Form.Label>
                <Form.Control name="city" value={formData.city} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3"><Form.Label>State</Form.Label>
                <Form.Control name="state" value={formData.state} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3"><Form.Label>Zip Code</Form.Label>
                <Form.Control name="zip_code" value={formData.zip_code} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <hr />
          <h5 className="text-secondary">Educational Details</h5>
          <div className="bg-light p-3 rounded mb-3">
            {educationList.map((edu, index) => (
              <Row key={index} className="align-items-center mb-2">
                <Col md={2}>
                  <Form.Select name="qualification" value={edu.qualification} onChange={(e) => handleEducationChange(index, e)}>
                    <option value="">Qualification</option>
                    {qualificationOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Form.Control placeholder="School/College" name="school" value={edu.school} onChange={(e) => handleEducationChange(index, e)} />
                </Col>
                <Col md={2}>
                  <Form.Select name="board" value={edu.board} onChange={(e) => handleEducationChange(index, e)}>
                    <option value="">Board/Univ.</option>
                    {boardOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Form.Select name="year" value={edu.year} onChange={(e) => handleEducationChange(index, e)}>
                    <option value="">Year</option>
                    {yearOptions.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Form.Control
                    placeholder="%"
                    name="percentage"
                    type="number"
                    value={edu.percentage}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </Col>
                <Col md={2}>
                  <Button variant="danger" onClick={() => handleRemoveEducation(index)}>✖</Button>
                </Col>
              </Row>
            ))}
            <Button variant="primary" onClick={handleAddEducation}>+ Add Education</Button>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Hobbies</Form.Label>
            <Form.Control name="Hobbies" value={formData.Hobbies} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Languages</Form.Label>
            <Form.Control name="languages" value={formData.languages} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills</Form.Label>
            <Form.Control name="skilss" value={formData.skilss} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Objective</Form.Label>
            <Form.Control as="textarea" name="objetive" value={formData.objetive} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Professional Experience</Form.Label>
            <Form.Control as="textarea" name="professional_experience" value={formData.professional_experience} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Resume</Form.Label>
            <Form.Control type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="success" className="px-5 rounded-pill">Save Profile</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default ViewProfile;
