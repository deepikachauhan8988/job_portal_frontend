import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company_legal_name: "",
    first_name: "",
    last_name: "",
    admin_password: "",
    con_pass: "",
    contact_number: "",
    passport_or_id_number: "",
    admin_email: "",
    title: "",
    company_size: "",
    business_type: "",
    industry: "",
    otherIndustry: "",
    business_description: "",
    company_registration_number: "",
    tax_identification_number: "",
    country_of_incorporation: "",
    state_province_region: "",
    city: "",
    business_address1: "",
    business_address2: "",
    postal_zip_code: "",
    certificate_of_incorporation_doc: null,
    proof_of_address_doc: null,
    tax_registration_doc: null,
  });

  // ✅ Handle file and text input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.admin_password !== formData.con_pass) {
      alert("Passwords do not match!");
      return;
    }

    const payload = new FormData();

    // Required fields
    payload.append("company_legal_name", formData.company_legal_name);
    payload.append("first_name", formData.first_name);
    payload.append("last_name", formData.last_name);
    payload.append("admin_password", formData.admin_password);
    payload.append("admin_email", formData.admin_email);
    payload.append("contact_number", formData.contact_number);
    payload.append("passport_or_id_number", formData.passport_or_id_number);
    payload.append("title", formData.title);
    payload.append("company_size", formData.company_size);
    payload.append("business_type", formData.business_type);
    payload.append(
      "industry_sector",
      formData.industry === "other_services"
        ? formData.otherIndustry
        : formData.industry
    );
    payload.append("business_description", formData.business_description);
    payload.append(
      "company_registration_number",
      formData.company_registration_number || ""
    );
    payload.append(
      "tax_identification_number",
      formData.tax_identification_number || ""
    );
    payload.append(
      "country_of_incorporation",
      formData.country_of_incorporation
    );
    payload.append("state_province_region", formData.state_province_region);
    payload.append("city", formData.city);
    payload.append("business_address1", formData.business_address1);
    payload.append("business_address2", formData.business_address2);
    payload.append("postal_zip_code", formData.postal_zip_code);

    // File attachments
    if (formData.certificate_of_incorporation_doc)
      payload.append(
        "certificate_of_incorporation_doc",
        formData.certificate_of_incorporation_doc
      );

    if (formData.proof_of_address_doc)
      payload.append("proof_of_address_doc", formData.proof_of_address_doc);

    if (formData.tax_registration_doc)
      payload.append("tax_registration_doc", formData.tax_registration_doc);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api3/admin_registration/",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("AdminRegistration", response.data)
//  const { first_name, last_name } = response.data.admin;

  
  // localStorage.setItem("admin_first_name", first_name);
  // localStorage.setItem("admin_last_name", last_name);

      alert("Registration successfully!");
//       const first_name = response.data.first_name;
//       const last_name = response.data.last_name;
// console.log("first name", first_name)
//       if (first_name || last_name) {
//         localStorage.setItem("first_name", first_name);
//         localStorage.setItem("last_name", last_name);
//       } else {
//         console.warn("Missing name data in API response", response.data);
//       }
      navigate("/ActivePlan");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Registration failed. Please check all fields and try again.");
    }
  };

  return (
    <Container className="py-4">
      <Card className="p-4 shadow-sm rounded-4">
        <h4 className="mb-4 text-primary"> Registration Form</h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  name="company_legal_name"
                  value={formData.company_legal_name}
                  onChange={handleChange}
                  placeholder="enter company name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label> First Name</Form.Label>
                <Form.Control
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label> Last Name</Form.Label>
                <Form.Control
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label> Admin password</Form.Label>
                <Form.Control
                  type="password"
                  name="admin_password"
                  value={formData.admin_password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Confirm admin password</Form.Label>
                <Form.Control
                  type="password"
                  name="con_pass"
                  value={formData.con_pass}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={12}>
              <Form.Group className="mb-3">
                <Form.Label>Passport/ID Number</Form.Label>
                <Form.Control
                  type="number"
                  name="passport_or_id_number"
                  value={formData.passport_or_id_number}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="admin_email"
                  value={formData.admin_email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4} lg={4} sm={4}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option>CEO</option>
                  <option>COO</option>
                  <option>CFO</option>
                  <option>CTO</option>
                  <option>CMO</option>
                  <option>VP</option>
                  <option>Sr.Director</option>
                  <option>Sr.Manager</option>
                  <option>Manager</option>
                  <option>Team Lead</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Company Size</Form.Label>
                <Form.Select
                  name="company_size"
                  value={formData.company_size}
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Company Size</option>
                  <option value="1-10">1 - 10 employees</option>
                  <option value="11-50">11 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201-500">201 - 500 employees</option>
                  <option value="501-1000">501 - 1,000 employees</option>
                  <option value="1001-5000">1,001 - 5,000 employees</option>
                  <option value="5001-10000">5,001 - 10,000 employees</option>
                  <option value="10001+">10,001+ employees</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Business Type / Entity Type</Form.Label>
                <Form.Select
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option>Private Limited</option>
                  <option>LLC</option>
                  <option>Corporation</option>
                  <option>Partnership</option>
                  <option>Sole Proprietorship</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Industry / Sector</Form.Label>
                <Form.Select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="agriculture">
                    Agriculture, Forestry & Fishing
                  </option>
                  <option value="mining">Mining & Quarrying</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other_services">
                    Other Services (Personal, Repair, etc.)
                  </option>
                </Form.Select>
              </Form.Group>
              {formData.industry === "other_services" && (
                <Form.Group className="mb-3">
                  <Form.Label>Please specify other service</Form.Label>
                  <Form.Control
                    type="text"
                    name="otherIndustry"
                    value={formData.otherIndustry || ""}
                    onChange={handleChange}
                    placeholder="Enter specific service"
                    required
                  />
                </Form.Group>
              )}
            </Col>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Company Registration Number</Form.Label>
                <Form.Control
                  name="company_registration_number"
                  value={formData.company_registration_number}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Tax ID / GST ID</Form.Label>
                <Form.Control
                  name="tax_identification_number"
                  value={formData.tax_identification_number}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Business Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="business_description"
                  value={formData.business_description}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </Form.Group>
            </Col>
            <h5 className="mt-4 mb-3 text-primary">Company Location</h5>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>
                  country_of_incorporation of Incorporation
                </Form.Label>
                <Form.Control
                  name="country_of_incorporation"
                  value={formData.country_of_incorporation}
                  onChange={handleChange}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>State province region / Province</Form.Label>
                <Form.Control
                  name="state_province_region"
                  value={formData.state_province_region}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>city</Form.Label>
                <Form.Control
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label> Address Line 1</Form.Label>
                <Form.Control
                  name="business_address1"
                  value={formData.business_address1}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label> Address Line 2</Form.Label>
                <Form.Control
                  name="business_address2"
                  value={formData.business_address2}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-4">
                <Form.Label>Postal / ZIP Code</Form.Label>
                <Form.Control
                  name="postal_zip_code"
                  value={formData.postal_zip_code}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <h5 className="mt-4 mb-3 text-primary">Compliance Documents</h5>

            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Certificate of Incorporation (PDF/DOC)</Form.Label>
                <Form.Control
                  type="file"
                  name="certificate_of_incorporation_doc"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Proof of Address (Utility Bill, Lease Agreement)
                </Form.Label>
                <Form.Control
                  type="file"
                  name="proof_of_address_doc"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4} sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Tax Registration Document</Form.Label>
                <Form.Control
                  type="file"
                  name="tax_registration_doc"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <div className="text-center">
              {/* <Link to ="/ActivePlan" > */}
              <Button
                type="submit"
                variant="primary"
                className="px-4 mt-3 rounded-pill emp-btn"
              >
                Submit
              </Button>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminRegistration;
