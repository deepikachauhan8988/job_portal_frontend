import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "", // email or phone
    password: "",
    con_password: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { identifier, password, con_password } = formData;

    if (!identifier) {
      setMessage({ type: "danger", text: "Please enter your email or phone." });
      return;
    }

    if (password !== con_password) {
      setMessage({ type: "danger", text: "Passwords do not match." });
      return;
    }

    const payload = { password };
    if (identifier.includes("@")) {
      payload.email = identifier;
    } else {
      payload.phone = identifier;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/Forgetpassword/", payload);
      setMessage({
        type: "success",
        text: response.data.message || "Password reset successful. Redirecting to login...",
      });

      setTimeout(() => {
        navigate("/AdminLogin"); // Redirect after success
      }, 2000);

      setFormData({ identifier: "", password: "", con_password: "" });
    } catch (error) {
      setMessage({
        type: "danger",
        text: error.response?.data?.error || "Failed to reset password.",
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "100%", maxWidth: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4">Reset Password</h3>

        {message.text && <Alert variant={message.type}>{message.text}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email or Phone</Form.Label>
            <Form.Control
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Enter your email or phone"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="con_password"
              value={formData.con_password}
              onChange={handleChange}
              placeholder="Confirm new password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Reset Password
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminForgotPassword;
