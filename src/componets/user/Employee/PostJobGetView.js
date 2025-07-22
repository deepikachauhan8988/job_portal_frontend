import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Alert, Container } from "react-bootstrap";

const PostJobGetView = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const employeeId =localStorage.getItem("employee_id"); // You can change this or pass it as a prop

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api3/Emplopostedjob/${employeeId}/`
        );
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posted jobs.");
        setLoading(false);
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, [employeeId]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-center">Posted Job List</h3>
      <Table striped bordered hover responsive>
        <thead className="table-dark text-center">
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Location</th>
            <th>Work Mode</th>
            <th>Education</th>
            <th>Description</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {jobs.map((job, index) => (
            <tr key={job.job_id}>
              <td>{index + 1}</td>
              <td>{job.company_name}</td>
              <td>{job.job_title}</td>
              <td>{job.key_skills}</td>
              <td>
                {job.Min_work_experience} - {job.Max_work_experience} yrs
              </td>
              <td>
                ₹{job.Min_salary} - ₹{job.Max_salary}
              </td>
              <td>{job.location}</td>
              <td>{job.work_mode}</td>
              <td>{job.education}</td>
              <td>{job.job_description}</td>
              <td>{job.comment || "-"}</td>
              <td>{new Date(job.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostJobGetView;
