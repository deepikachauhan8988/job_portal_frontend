import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import "../../../assets/css/JobCard.css";

const JobCard = () => {
  const employee_id=localStorage.getItem("employee_id")
  console.log("employeeid", employee_id)
  const [formData, setFormData] = useState({
    company_name: "",
    job_title: "",
    sub_title: [],
    key_skills:"null",
    comment: "",
    location: "",
    experience: "",
    salary: "",
    work_mode: "",
    education: "",
    job_description: "",
    Min_Salary: "",
    Max_Salary: "",
    Min_work_experience: "",
    Max_work_experience: "",
  });

  const subtitleOptions = {
    "React JS": [
      { label: "HTML", value: "HTML" },
      { label: "CSS", value: "CSS" },
      { label: "JavaScript", value: "JavaScript" },
      { label: "Redux", value: "Redux" },
      { label: "Bootstrap", value: "Bootstrap" },
      { label: "Tailwind", value: "Tailwind" },
    ],
    "Node JS": [
      { label: "Express", value: "Express" },
      { label: "MongoDB", value: "MongoDB" },
      { label: "JWT", value: "JWT" },
      { label: "REST API", value: "REST API" },
    ],
    "UI/UX Designer": [
      { label: "Figma", value: "Figma" },
      { label: "Adobe XD", value: "Adobe XD" },
      { label: "Sketch", value: "Sketch" },
    ],
    "Python Developer": [
      { label: "Django", value: "Django" },
      { label: "Flask", value: "Flask" },
      { label: "FastAPI", value: "FastAPI" },
      { label: "NumPy", value: "NumPy" },
      { label: "Pandas", value: "Pandas" },
    ],
    "Full Stack Developer": [
      { label: "React JS", value: "React JS" },
      { label: "Node JS", value: "Node JS" },
      { label: "MongoDB", value: "MongoDB" },
      { label: "Express", value: "Express" },
      { label: "REST API", value: "REST API" },
    ],
    "Data Analyst": [
      { label: "Excel", value: "Excel" },
      { label: "SQL", value: "SQL" },
      { label: "Power BI", value: "Power BI" },
      { label: "Tableau", value: "Tableau" },
      { label: "Python", value: "Python" },
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "job_title") {
      setFormData((prev) => ({ ...prev, sub_title: [] }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    Employee_id:employee_id,
    company_name: formData.company_name,
    key_skills:"thsi is for none",
    job_title: formData.job_title,
    sub_title: Array.isArray(formData.sub_title)
      ? formData.sub_title.join(", ")
      : formData.sub_title,
    comment: formData.comment,
    location: formData.location,
    experience: formData.experience,
    salary: formData.salary,
    work_mode: formData.work_mode,
    education: formData.education,
    job_description: formData.job_description,
    Min_salary: formData.Min_Salary,
    Max_salary: formData.Max_Salary,
    Min_work_experience: formData.Min_work_experience,
    Max_work_experience: formData.Max_work_experience,
  };

  console.log("Payload being sent:", payload); // for debugging

  try {
    const response = await axios.post("http://127.0.0.1:8000/api3/postjobemploye/", payload);
    const jobId = response.data.Job_id;
    localStorage.setItem("selected_job_id", jobId);
    alert("Job posted successfully!");
  } catch (error) {
    if (error.response) {
      console.error("Server Response:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("No Response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    alert("Failed to post job. Check console for details.");
  }
};



  return (
    <Container className="mt-5">
    
      <Form onSubmit={handleSubmit}>
        <Card className="p-4">
            <h2 className="text-center mb-4">Post a Job</h2>
        <Row>
          
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Select
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                required
              >
                <option value="">Select job title</option>
                {Object.keys(subtitleOptions).map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Keyword</Form.Label>
              {subtitleOptions[formData.job_title] ? (
                <Select
                  isMulti
                  options={subtitleOptions[formData.job_title]}
                  value={formData.sub_title.map((val) => ({
                    label: val,
                    value: val,
                  }))}
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      sub_title: selected.map((opt) => opt.value),
                    })
                  }
                />
              ) : (
                <Form.Control
                  name="sub_title"
                  value={formData.sub_title}
                  onChange={handleChange}
                />
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Select Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1 years">0-1 years</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5-10 years">5-10 years</option>
                <option value="10+ years">10+ years</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Select
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
              >
                <option value="">Select Expected Salary</option>
                <option value="Below ₹1 LPA">Below ₹1 LPA</option>
                <option value="₹1 - ₹3 LPA">₹1 - ₹3 LPA</option>
                <option value="₹3 - ₹5 LPA">₹3 - ₹5 LPA</option>
                <option value="₹5 - ₹7 LPA">₹5 - ₹7 LPA</option>
                <option value="₹7 - ₹10 LPA">₹7 - ₹10 LPA</option>
                <option value="Above ₹10 LPA">Above ₹10 LPA</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Work Mode</Form.Label>
              <Form.Select
                name="work_mode"
                value={formData.work_mode}
                onChange={handleChange}
                required
              >
                <option value="">Select Work Mode</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              >
                <option value="">Select Education</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelors">Bachelor's Degree</option>
                <option value="Masters">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Min Salary</Form.Label>
              <Form.Control
                type="number"
                name="Min_Salary"
                value={formData.Min_Salary}
                onChange={handleChange}
                placeholder="Minimum Salary"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Max Salary</Form.Label>
              <Form.Control
                type="number"
                name="Max_Salary"
                value={formData.Max_Salary}
                onChange={handleChange}
                placeholder="Maximum Salary"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Min Work Experience</Form.Label>
              <Form.Control
                type="number"
                name="Min_work_experience"
                value={formData.Min_work_experience}
                onChange={handleChange}
                placeholder="Minimum Work Experience (Years)"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Max Work Experience</Form.Label>
              <Form.Control
                type="number"
                name="Max_work_experience"
                value={formData.Max_work_experience}
                onChange={handleChange}
                placeholder="Maximum Work Experience (Years)"
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="job_description"
                value={formData.job_description}
                onChange={handleChange}
                placeholder="Write the full job description..."
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Additional notes or comments"
              />
            </Form.Group>
          </Col>

        </Row>
</Card>
        <div className="text-center">
          <Button type="submit" variant="success">
            Post Job
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default JobCard;
