// src/components/JobComponents/ApplyNowButton.js
import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ApplyNow = ({ job }) => {
  const handleApply = () => {
      const storedJobId = localStorage.getItem("selected_job_id");
    if (!storedJobId) {
      toast.error("No job selected to apply.");
      return;
    }

    localStorage.setItem("applied_job", JSON.stringify(storedJobId));
    toast.success("Applied Successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

    // Optional: redirect logic here
    // navigate("/applied-jobs");
  };

  return (
    <Button className="apply-btn mt-3" onClick={handleApply}>
      Apply Now
    </Button>
  );
};

export default ApplyNow;
