// src/components/user/UserSetProfile.js
import React, { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { registerUserupdate } from "../../../api/auth";

const UserSetProfile = ({ show, onHide, userData, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: userData.full_name || "",
    email: userData.email || "",
    phone: userData.phone || "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    if (formData.photo) submitData.append("photo", formData.photo);

    try {
      const updated = await registerUserupdate(userData.id, submitData);
      onUpdate(updated); // Update parent with new data
      alert("Profile updated successfully.");
      onHide(); // Close modal
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to update profile.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Basic Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" value={formData.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" value={formData.phone} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Photo</Form.Label>
            <Form.Control name="photo" type="file" onChange={handleChange} />
            {userData.photo && (
              <Image src={userData.photo} width={100} height={100} rounded className="mt-2" />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserSetProfile;
