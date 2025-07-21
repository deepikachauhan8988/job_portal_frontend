// src/components/LogoutButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove stored user-related data
    localStorage.removeItem("job_user_id");
    localStorage.removeItem("selected_job_id");
    localStorage.removeItem("access_token1");
    localStorage.removeItem("job_title");
    localStorage.removeItem("job_location");
    localStorage.removeItem("job_experience");

    // Show logout alert
    alert("Logout successfully");

    // Redirect to home page
    navigate("/");
  };

  return (
    <Button variant="danger" className="ms-3" onClick={handleLogout}>
      Logout
    </Button>
  );
};
 
export default Logout;
