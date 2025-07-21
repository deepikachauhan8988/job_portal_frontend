import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Button } from "react-bootstrap";
import { getPostedJobById } from "../../../api/auth";
import "../../../assets/css/JobDetails.css";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplayNow from "./ApplayNow";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      const storedJobId = localStorage.getItem("selected_job_id");
      try {
        const allJobs = await getPostedJobById(); // API call
        const selectedJob = allJobs.find(
          (j) => String(j.job_id) === String(storedJobId)
        );
        setJob(selectedJob);
      } catch (error) {
        toast.error("Failed to fetch job details.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  const handleApply = () => {
    if (!job) {
      toast.error("No job selected to apply.");
      return;
    }

    localStorage.setItem("applied_job", JSON.stringify(job));
    toast.success("Applied Successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

    // Optional: redirect after apply
    // navigate("/applied-jobs");
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!job) {
    return <div className="text-danger text-center mt-5">Job not found.</div>;
  }

  const technologies = job.sub_title
    ? job.sub_title.split(",").map((tech) => tech.trim())
    : [];

  return (
    <div className="job-page-container">
      <ToastContainer />
      <div className="job-header">
        <h2>{job.job_title}</h2>
        <h5>{job.company_name}</h5>
        <div className="job-tags">
          <span><FaMapMarkerAlt /> {job.location}</span>
          <span><FaMoneyBillWave /> {job.salary}</span>
          <span><FaBriefcase /> {job.experience}</span>
        </div>
      </div>

      <div className="highlight-box">
        <h4>Job Highlights</h4>
        <ul>
          <li>Front end {technologies.slice(0, 3).join(", ")}</li>
          <li>Back end</li>
          <li>Full Stack</li>
        </ul>
      </div>

      <div className="job-desc">
        <h4>Job Description</h4>
        <p><strong>Role:</strong> {job.job_title}</p>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Technologies:</strong></p>
        <ul>
          {technologies.length > 0 ? (
            technologies.map((tech, index) => <li key={index}>{tech}</li>)
          ) : (
            <li>No technologies listed.</li>
          )}
        </ul>
        <p><strong>Other Skills:</strong> Problem-solving, Communication, Teamwork</p>
      </div>

      <div className="job-skills">
        <h5>Key Skills</h5>
        <div className="skills-chips">
          {technologies.slice(0, 6).map((skill, index) => (
            <span key={index} className="chip">{skill}</span>
          ))}
        </div>
      </div>

      {/* <Button className="apply-btn mt-3" onClick={handleApply}>
        Apply Now
      </Button> */}
      <ApplayNow />
    
    </div>
  );
};

export default JobDetails;
