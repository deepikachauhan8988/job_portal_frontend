import React, { useState, useEffect } from "react";
import AdminDashBoard from "./AdminDashBoard";
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
import { FaEye, FaDownload } from "react-icons/fa";
import axios from "axios";

const AdminProfile = () => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const admin_id = localStorage.getItem("admin_user_id");
  const API_URL = `http://127.0.0.1:8000/api3/Admingetview/${admin_id}/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data && Object.keys(response.data).length > 0) {
          setAdminData(response.data);
          setFormData({ ...response.data }); // Ensure complete data for PUT
        }
      } catch (err) {
        console.error("Error fetching admin profile", err);
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
    const token = localStorage.getItem("admin_access");
    const form = new FormData();

    // Append text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (
        key !== "certificate_of_incorporation_doc" &&
        key !== "proof_of_address_doc" &&
        key !== "tax_registration_doc"
      ) {
        form.append(key, value);
      }
    });

    // Append file fields separately if selected
    if (formData.certificate_of_incorporation_doc instanceof File) {
      form.append("certificate_of_incorporation_doc", formData.certificate_of_incorporation_doc);
    }

    if (formData.proof_of_address_doc instanceof File) {
      form.append("proof_of_address_doc", formData.proof_of_address_doc);
    }

    if (formData.tax_registration_doc instanceof File) {
      form.append("tax_registration_doc", formData.tax_registration_doc);
    }

    const response = await axios.put(API_URL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200 || response.status === 202) {
      setAdminData(response.data);
      setShowModal(false);
      setSuccessMsg("Profile updated successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error updating profile:", error.response?.data || error);
    alert("Failed to update profile. Check all fields and try again.");
  }
};


  const renderDoc = (label, url) => (
    <div className="mb-2">
      <strong>{label}:</strong>{" "}
      {url ? (
        <>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary me-2">
            <FaEye /> View
          </a>
          <a href={url} download className="btn btn-sm btn-outline-success">
            <FaDownload /> Download
          </a>
        </>
      ) : (
        <span className="text-muted">Not Uploaded</span>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading admin profile...</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      <AdminDashBoard />
      <div className="main">
        <div className="awc-dashboard-title">
          <div className="jpcard-main">
            <div className="home-list-item">
              <ul type="none">
                <RiHome2Line className="icon-sty" /> <li>Home</li>
                <IoIosArrowForward className="icon-sty" /> <li>Dashboard</li>
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

              {adminData ? (
                <Card className="shadow p-4 admin-profile-card">
                  <h3 className="admin-profile-heading d-flex justify-content-between align-items-center mb-4">
                    <span>
                      <i className="fas fa-user-shield me-2 text-primary"></i>
                      Admin Profile
                    </span>
                    <Button variant="outline-primary" size="sm" onClick={() => setShowModal(true)}>
                      Edit Profile
                    </Button>
                  </h3>
                  <hr className="mb-4" />
                  <Row>
                    <Col md={6}>
                      <p><strong>First Name:</strong> {adminData.first_name}</p>
                      <p><strong>Last Name:</strong> {adminData.last_name}</p>
                      <p><strong>Email:</strong> {adminData.admin_email}</p>
                      <p><strong>Contact:</strong> {adminData.contact_number}</p>
                      <p><strong>Title:</strong> {adminData.title}</p>
                      <p><strong>Passport/ID:</strong> {adminData.passport_or_id_number}</p>
                    </Col>
                    <Col md={6}>
                      <p><strong>Company Name:</strong> {adminData.company_legal_name}</p>
                      <p><strong>Business Type:</strong> {adminData.business_type}</p>
                      <p><strong>Industry Sector:</strong> {adminData.industry_sector}</p>
                      <p><strong>Company Size:</strong> {adminData.company_size}</p>
                      <p><strong>Business Description:</strong> {adminData.business_description}</p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md={6}>
                      <p><strong>Country:</strong> {adminData.country_of_incorporation}</p>
                      <p><strong>State/Province:</strong> {adminData.state_province_region}</p>
                      <p><strong>City:</strong> {adminData.city}</p>
                      <p><strong>Address Line 1:</strong> {adminData.business_address1}</p>
                      <p><strong>Address Line 2:</strong> {adminData.business_address2}</p>
                      <p><strong>Postal Code:</strong> {adminData.postal_zip_code}</p>
                    </Col>
                    <Col md={6}>
                      <p><strong>Company Reg. No.:</strong> {adminData.company_registration_number}</p>
                      <p><strong>TIN:</strong> {adminData.tax_identification_number}</p>
                      {renderDoc("Certificate of Incorporation", adminData.certificate_of_incorporation_doc)}
                      {renderDoc("Proof of Address", adminData.proof_of_address_doc)}
                      {renderDoc("Tax Registration Doc", adminData.tax_registration_doc)}
                    </Col>
                  </Row>
                </Card>
              ) : (
                <div className="text-center">
                  <h4 className="text-danger">Admin Profile Data Not Found</h4>
                  <p className="text-muted">Please make sure your admin profile is completed or try again later.</p>
                </div>
              )}
            </Container>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Admin Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={4} lg={6}>
                {["first_name", "last_name", "admin_email", "contact_number", "title", "passport_or_id_number"].map(field => (
                  <Form.Group className="mb-3" key={field}>
                    <Form.Label>{field.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</Form.Label>
                    <Form.Control name={field} value={formData[field] || ""} onChange={handleEditChange} />
                  </Form.Group>
                ))}
              </Col>
              <Col md={4}>
                {["company_legal_name", "business_type", "industry_sector", "company_size", "business_description"].map(field => (
                  <Form.Group className="mb-3" key={field}>
                    <Form.Label>{field.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</Form.Label>
                    <Form.Control name={field} value={formData[field] || ""} onChange={handleEditChange} />
                  </Form.Group>
                ))}
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                {["country_of_incorporation", "state_province_region", "city", "postal_zip_code"].map(field => (
                  <Form.Group className="mb-3" key={field}>
                    <Form.Label>{field.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</Form.Label>
                    <Form.Control name={field} value={formData[field] || ""} onChange={handleEditChange} />
                  </Form.Group>
                ))}
              </Col>
              <Col md={4}>
                {["business_address1", "business_address2", "company_registration_number", "tax_identification_number"].map(field => (
                  <Form.Group className="mb-3" key={field}>
                    <Form.Label>{field.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</Form.Label>
                    <Form.Control name={field} value={formData[field] || ""} onChange={handleEditChange} />
                  </Form.Group>
                ))}
              </Col>
              <Col md={4}>
                {["certificate_of_incorporation_doc", "proof_of_address_doc", "tax_registration_doc"].map(field => (
                  <Form.Group className="mb-3" key={field}>
                    <Form.Label>{field.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</Form.Label>
                    <Form.Control name={field} value={formData[field] || ""} onChange={handleEditChange} />
                  </Form.Group>
                ))}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update Profile
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProfile;
