import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SavedJobCard from "./SavedJobCard";
import { savedJobPostView, deleteSavedJobById } from "../../../api/auth";

const SavedJobsList = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const getSavedJobs = async () => {
      const token = localStorage.getItem("token");
      const jobs = await savedJobPostView(token);
      setSavedJobs(jobs);
    };

    getSavedJobs();
  }, []);

const handleDelete = async () => {
  const token = localStorage.getItem("token");
  const selected_job_id = localStorage.getItem("selected_job_id"); // 👈 get from localStorage
  console.log("Deleting job with ID:", selected_job_id);

  try {
    const response = await deleteSavedJobById(selected_job_id, token); // 👈 Capture response
    console.log("Delete API response:", response); 

    setSavedJobs((prevJobs) =>
      prevJobs.filter((job) => job.job_id !== selected_job_id)
    );
  } catch (error) {
    alert("Failed to delete job");
    console.error("Delete error:", error?.response?.data || error.message);
  }
};



  return (
    <Container className="mt-4">
      {/* <div className="mb-4 text-center">
        <h5 className="text-muted">Jobs saved by you</h5>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.2rem" }}>
          {savedJobs.length.toString().padStart(2, "0")}
        </h1>
        <p className="text-muted">Saved Job(s)</p>
      </div> */}

      {savedJobs.map((job) => (
        <SavedJobCard key={job.job_id} job={job} onDelete={handleDelete} />
      ))}
    </Container>
  );
};

export default SavedJobsList;
