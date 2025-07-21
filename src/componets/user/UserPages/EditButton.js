import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditButton = () => {
  const userId = localStorage.getItem("autoId");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    adress1: "",
    address2: "",
    Hobbies: "",
    languages: "",
    skilss: "",
    Diploma_Details: "",
    Graduation_Details: "",
    Masters_Details: "",
    linkedin_url: "",
  });
  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api2/resume-detail/?user=${userId}`);
        const data = res.data;
        setFormData({
          full_name: data.full_name || "",
          email: data.email || "",
          phone: data.phone || "",
          adress1: data.adress1 || "",
          address2: data.address2 || "",
          Hobbies: data.Hobbies || "",
          languages: data.languages || "",
          skilss: data.skilss || "",
          Diploma_Details: data.Diploma_Details || "",
          Graduation_Details: data.Graduation_Details || "",
          Masters_Details: data.Masters_Details || "",
          linkedin_url: data.linkedin_url || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) fetchData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("user", userId);
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });
    if (photo) payload.append("photo", photo);
    if (resume) payload.append("generated_pdf", resume);

    try {
      await axios.post("http://127.0.0.1:8000/api2/custom-resume/", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile updated successfully!");
      navigate("/UserProfile");
    } catch (err) {
      console.error("Error updating profile:", err);
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
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="full_name" value={formData.full_name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>LinkedIn URL</Form.Label>
                <Form.Control type="text" name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload Profile Photo</Form.Label>
                <Form.Control type="file" onChange={(e) => setPhoto(e.target.files[0])} accept="image/*" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" name="adress1" value={formData.adress1} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" name="address2" value={formData.address2} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Languages</Form.Label>
                <Form.Control type="text" name="languages" value={formData.languages} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Hobbies</Form.Label>
                <Form.Control type="text" name="Hobbies" value={formData.Hobbies} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload Resume (PDF)</Form.Label>
                <Form.Control type="file" onChange={(e) => setResume(e.target.files[0])} accept="application/pdf" />
              </Form.Group>
            </Col>
          </Row>

          <hr />
          <h5 className="text-secondary mt-4">Education</h5>
          <Form.Group className="mb-3">
            <Form.Label>Diploma Details</Form.Label>
            <Form.Control as="textarea" name="Diploma_Details" value={formData.Diploma_Details} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Graduation Details</Form.Label>
            <Form.Control as="textarea" name="Graduation_Details" value={formData.Graduation_Details} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Masters Details</Form.Label>
            <Form.Control as="textarea" name="Masters_Details" value={formData.Masters_Details} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Skills</Form.Label>
            <Form.Control type="text" name="skilss" value={formData.skilss} onChange={handleChange} />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="success" className="px-5 rounded-pill">Save Profile</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default EditButton;
