import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import axios from "axios";

const ManagerProfileDropdoen = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [adminName, setAdminName] = useState("Admin");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const admin_id = localStorage.getItem("admin_user_id");
  const API_URL = `http://127.0.0.1:8000/api3/Admingetview/${admin_id}/`;

  // Function to fetch admin name
  const fetchAdminProfile = async () => {
    try {
      const response = await axios.get(API_URL);
      const { first_name } = response.data;
      setAdminName(first_name || "Admin");
    } catch (error) {
      console.error("Error fetching admin profile:", error);
      const localFirst = localStorage.getItem("admin_first_name");
      setAdminName(localFirst || "Admin");
    }
  };

  useEffect(() => {
    // Fetch initially
    fetchAdminProfile();

    // Interval to auto-refresh name every 10 seconds
    const intervalId = setInterval(fetchAdminProfile, 10000); // 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [API_URL]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successful!");
    navigate("/AdminLogin");
  };

  return (
    <div
      className="admin-profile-wrapper"
      ref={dropdownRef}
      onMouseEnter={() => setIsDropdownOpen(true)}
    >
      <div
        className="admin-profile-info"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <div className="admin-text">
          <span className="admin-role">Manager Profile: {adminName}</span>
        </div>
        <button className="admin-logout-btn" onClick={handleLogout}>
          <LuLogOut className="admin-icon" />
          Logout
        </button>
      </div>

      {isDropdownOpen && (
        <div className="admin-dropdown">
          <Link to="/ManagerProfile" className="admin-dropdown-item">
            <FaUser className="admin-icon" />
            Profile
          </Link>
          <Link to="/SettingPassword" className="admin-dropdown-item">
            <FiSettings className="admin-icon" />
            Settings
          </Link>
        </div>
      )}
    </div>
  );
};

export default ManagerProfileDropdoen;
