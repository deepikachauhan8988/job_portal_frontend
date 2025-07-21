// src/components/UserPages/PostJobCard.js

import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { FaStar, FaMapMarkerAlt, FaBookmark } from "react-icons/fa";
import {
  getPostedJobById,
  saveJobPost,
  fetchSavedJobsByUserId,
} from "../../../api/auth";
import "../../../assets/css/PostJobCard.css";
import { useNavigate } from "react-router-dom";
import ReusableSearch from "./ReusableSearch";

const PostJobCard = ({ jobs }) => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchParams, setSearchParams] = useState({
    job_title: "",
    job_location: "",
    job_experience: "",
  });

  const userId = localStorage.getItem("job_user_id");
  const token = localStorage.getItem("access_token1");
  const selectedLocation = localStorage.getItem("job_location");
  const job_experience = localStorage.getItem("job_location");
  const navigate = useNavigate();

  const getDaysAgoText = (dateStr) => {
    const postDate = new Date(dateStr);
    const currentDate = new Date();
    const timeDiff = currentDate - postDate;
    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (daysAgo === 0) return "Posted today";
    if (daysAgo === 1) return "1 day ago";
    return `${daysAgo} days ago`;
  };

  const handleSaveJob = async (job) => {
    if (!userId || !token) {
      alert("Please login to save jobs");
      return;
    }

    const isAlreadySaved = savedJobs.some((saved) => saved.job_id === job.job_id);
    if (isAlreadySaved) {
      alert("You have already saved this job.");
      return;
    }

    const payload = {
      user: userId,
      job_id: job.job_id,
      job_title: job.job_title,
      sub_title: job.sub_title || "",
      company_name: job.company_name,
      location: job.location,
      salary: job.salary,
      work_mode: job.work_mode,
      education: job.education,
      experience: job.experience || "0-1 Yrs",
      comment: job.comment || "",
    };

    try {
      await saveJobPost(payload, token);
      alert("Job saved successfully!");
      setSavedJobs((prev) => [...prev, { job_id: job.job_id }]);
    } catch (error) {
      console.error("Failed to save job:", error);
      alert("Error saving job.");
    }
  };

  const handleReadMore = (job) => {
    if (!token || !userId) {
      navigate("/UserLogin");
    } else {
      localStorage.setItem("selected_job_id", job.job_id);
      navigate("/JobDetails");
    }
  };

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        if (userId) {
          const saved = await fetchSavedJobsByUserId(userId);
          setSavedJobs(saved || []);
        }
      } catch (error) {
        console.error("Failed to fetch saved jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, [userId]);

  useEffect(() => {
    if (jobs && Array.isArray(jobs)) {
      let filtered = [...jobs];

      // Filter by localStorage location
      if (selectedLocation && selectedLocation !== "All") {
        filtered = filtered.filter((job) =>
          job.location?.toLowerCase().includes(selectedLocation.toLowerCase())
        );
      }

      // Filter by ReusableSearch inputs
      if (searchParams.job_location) {
        filtered = filtered.filter((job) =>
          job.location?.toLowerCase().includes(searchParams.job_location.toLowerCase())
        );
      }

      if (searchParams.job_title) {
        filtered = filtered.filter((job) =>
          job.job_title?.toLowerCase().includes(searchParams.job_title.toLowerCase())
        );
      }

      if (searchParams.job_experience) {
        filtered = filtered.filter((job) =>
          job.experience?.toLowerCase().includes(searchParams.job_experience.toLowerCase())
        );
      }

      setFilteredJobs(filtered);
    }
  }, [jobs, searchParams, selectedLocation]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!filteredJobs || filteredJobs.length === 0) {
    return (
      <div className="text-danger text-center mt-5">
        No jobs found matching your filters.
      </div>
    );
  }

  return (
    <div className="job-card-container">
      <ReusableSearch onSearch={setSearchParams} />

      {filteredJobs.map((job, index) => {
        const isSaved = savedJobs.some((saved) => saved.job_id === job.job_id);

        return (
          <Card key={index} className="job-card mb-3">
            <Card.Body>
              <div className="job-header">
                <h5 className="job-title">{job.job_title}</h5>
                <div className="company-name">{job.company_name}</div>
                <div className="rating">
                  <FaStar color="#f4b400" /> 3.5 | 7 Reviews
                </div>
              </div>

              <div className="job-meta">
                <span>{job.experience || "0-1 Yrs"}</span>
                <span className="dot">•</span>
                <span>{job.salary || "Not Disclosed"}</span>
                <span className="dot">•</span>
                <span>
                  <FaMapMarkerAlt /> {job.location}
                </span>
                <span className="dot">•</span>
                <span>{job.work_mode}</span>
              </div>

              <div className="job-desc mt-2">
                {job.comment || "No description available"}
              </div>

              <div className="skills mt-2">
                {Array.isArray(job.sub_title) ? (
                  job.sub_title.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="skill-tag">{job.sub_title}</span>
                )}
              </div>

              <div className="footer-row mt-3 d-flex justify-content-between">
                <div className="posted">
                  {job.date ? getDaysAgoText(job.date) : "Recently Posted"}
                </div>

                <div className="d-flex align-items-center gap-3">
                  <button
                    className="btn btn-sm btn-primary rounded-pill"
                    onClick={() => handleReadMore(job)}
                  >
                    Read More
                  </button>
                  <FaBookmark
                    className="save-icon"
                    onClick={() => handleSaveJob(job)}
                    style={{
                      cursor: isSaved ? "not-allowed" : "pointer",
                      color: isSaved ? "#0d6efd" : "#000",
                    }}
                    title={isSaved ? "Already saved" : "Save job"}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PostJobCard;
