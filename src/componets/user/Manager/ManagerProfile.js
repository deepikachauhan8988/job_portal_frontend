import React, { useState, useEffect } from "react";
import "../../../custom/Mainstyle.css";
import "../../../assets/css/AdminDashBoard.css";
import "../../../assets/css/AdminInnerDashBoard.css";
import "../../../assets/css/AdminProfile.css";
import {
  Card,
  Row,
  Col,
  Container,
  Spinner,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import { RiHome2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import ManagerLeftNav from "./ManagerLeftNav";
import axios from "axios";

const ManagerProfile = () => {
  const [managerData, setManagerData] = useState({
   Manager_name: "",
  contact_number: "",
  Manager_email: "",
  password: "",
  });
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const admin_user_id = localStorage.getItem("admin_user_id");
  const API_URL = `http://127.0.0.1:8000/api/UserGetview/${admin_user_id}/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        if (res.data) {
          setManagerData(res.data);
          setFormData(res.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_URL]);

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(API_URL, formData);
      if (res.status === 200 || res.status === 202) {
        setManagerData(res.data);
        setShowModal(false);
        setSuccessMsg("Profile updated successfully!");
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile.");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      <ManagerLeftNav />
      <div className="main">
        <div className="awc-dashboard-title">
          <div className="jpcard-main">
            <div className="home-list-item">
              <ul type="none">
                <RiHome2Line className="icon-sty" />
                <li>Home</li>
                <IoIosArrowForward className="icon-sty" />
                <li>Dashboard</li>
              </ul>
            </div>
          </div>
          <div className="dash-heading">
            <Container className="my-4">
              {successMsg && (
                <Alert variant="success" dismissible onClose={() => setSuccessMsg("")}>
                  {successMsg}
                </Alert>
              )}
              <Card className="shadow p-4 admin-profile-card">
                <h3 className="admin-profile-heading d-flex justify-content-between align-items-center mb-4">
                  <span>
                    <i className="fas fa-user-tie me-2 text-primary"></i>
                    Manager Profile
                  </span>
                  <Button variant="outline-primary" size="sm" onClick={() => setShowModal(true)}>
                    Edit Profile
                  </Button>
                </h3>
                <hr className="mb-4" />
                <Row>
                  <Col md={6}>
                    <p><strong>Name:</strong> {managerData.name}</p>
                    <p><strong>Email:</strong> {managerData.email}</p>
                    {/* <p><strong>Contact Number:</strong> {managerData.contact_number}</p> */}
                  </Col>
                  <Col md={6}>
                    {/* <p><strong>Number of Employees:</strong> {managerData.Number_of_employee}</p> */}
                   
                  </Col>
                </Row>
              </Card>
            </Container>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Manager Name</Form.Label>
              <Form.Control
                name="Manager_name"
                value={formData.Manager_name || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Manager Email</Form.Label>
              <Form.Control
                type="email"
                name="Manager_email"
                value={formData.Manager_email || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                name="contact_number"
                value={formData.contact_number || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Employees</Form.Label>
              <Form.Control
                type="number"
                name="Number_of_employee"
                value={formData.Number_of_employee || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManagerProfile;
