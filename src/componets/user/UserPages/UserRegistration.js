import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/auth";
import RegisterImg from "../../../assets/images/register-img.jpeg"

const UserRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    workStatus: "",
    experience: "",
    photo: "",
    resume: null,
    promotions: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("googleUser");
    if (stored) {
      const user = JSON.parse(stored);
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        photo: user.picture || "",
      }));
    }
  }, []);

  const validateForm = (data) => {
    const isValid =
      data.name &&
      data.email &&
      data.password &&
      data.phone &&
      data.photo &&
      data.workStatus &&
      (data.workStatus === "fresher" || data.experience);
    setIsFormValid(isValid);
  };

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    const updatedData = {
      ...formData,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    };
    setFormData(updatedData);
    validateForm(updatedData);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedData = { ...formData, photo: file };
      setFormData(updatedData);
      validateForm(updatedData);
    }
  };

  const handleWorkStatus = (status) => {
    const updatedData = {
      ...formData,
      workStatus: status,
      experience: "",
    };
    setFormData(updatedData);
    validateForm(updatedData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.workStatus ||
      (formData.workStatus === "experienced" && !formData.experience) ||
      !formData.photo
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const submission = new FormData();
    for (let key in formData) {
      if (formData[key] !== null && formData[key] !== "") {
        submission.append(key, formData[key]);
      }
    }

    try {
      const response = await registerUser(submission);
      const userId = response?.id || response?.user?.id;

      if (!userId) throw new Error("User ID not returned");

      const registrationData = {
        id: userId,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        workStatus: formData.workStatus,
        experience: formData.workStatus === "experienced" ? formData.experience : "",
        photo: formData.photo instanceof File ? formData.photo.name : formData.photo,
        resume: null,
        promotions: formData.promotions,
      };

      localStorage.setItem("userRegistrationData", JSON.stringify(registrationData));
      localStorage.setItem("autoId", userId); // store user id separately
      alert("Registered successfully!");
      navigate("/Profile");
    } catch (error) {
      alert(error?.detail || "Registration failed.");
      console.error("Registration Error:", error);
    }
  };

  return (
    <div className="register-box container training-wrapper mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className="">
          <Col md={7} lg={7} sm={12} className="mt-4 p-4">
            <h4 className="fw-bold">Registration</h4>
            <p className="text-muted mb-4">Register now to explore personalized services.</p>

            <Form.Group className="mb-3">
              <Form.Label>Full name<span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="What is your name?" className="input-custom" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email ID<span className="text-danger">*</span></Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Tell us your Email ID" className="input-custom" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password<span className="text-danger">*</span></Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Minimum 6 characters" className="input-custom" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone number<span className="text-danger">*</span></Form.Label>
              <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your mobile number" className="input-custom" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Work status<span className="text-danger">*</span></Form.Label>
              <div className="d-flex gap-3 mt-2">
                <div className={`work-card ${formData.workStatus === "experienced" ? "active" : ""}`} onClick={() => handleWorkStatus("experienced")} style={{ cursor: "pointer" }}>
                  <FaBriefcase size={22} className="me-2" />
                  <div>
                    <div className="fw-bold">I'm experienced</div>
                    <div className="small text-muted">I have work experience</div>
                  </div>
                </div>

                <div className={`work-card ${formData.workStatus === "fresher" ? "active" : ""}`} onClick={() => handleWorkStatus("fresher")} style={{ cursor: "pointer" }}>
                  <FaUserGraduate size={22} className="me-2" />
                  <div>
                    <div className="fw-bold">I'm a fresher</div>
                    <div className="small text-muted">I am a student</div>
                  </div>
                </div>
              </div>
            </Form.Group>

            {formData.workStatus === "experienced" && (
              <Form.Group className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Select name="experience" value={formData.experience} onChange={handleInputChange}>
                  <option value="">Select experience</option>
                  {[...Array(21).keys()].map((year) => (
                    <option key={year} value={`${year} year${year !== 1 ? "s" : ""}`}>
                      {year} year{year !== 1 ? "s" : ""}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}

            <Form.Group controlId="formPhoto" className="mb-3">
              <Form.Label>Upload Photo<span className="text-danger">*</span></Form.Label>

              {formData.photo && typeof formData.photo === "string" && (
                <div className="mb-2">
                  <img src={formData.photo} alt="Google Profile" style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover" }} />
                </div>
              )}

              {formData.photo instanceof File && (
                <div className="mb-2">
                  <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover" }} />
                </div>
              )}

              <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 mt-3" disabled={!isFormValid}>
              Register Now
            </Button>
          </Col>

          <Col md={3} lg={3} sm={12}>
            <img src={RegisterImg} alt="Register Img" className="img-fluid" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UserRegistration;
