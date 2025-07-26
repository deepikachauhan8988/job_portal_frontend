import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../assets/css/Forgetpassword.css";

// Helper functions to detect email or phone
const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
const isPhone = (value) => /^\d{10}$/.test(value);

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "", // user will type either phone or email
    password: "",
    confirm_password: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { identifier, password, confirm_password } = formData;

    if (!identifier || !password || !confirm_password) {
      setErrors("All fields are required.");
      return;
    }

    if (!isEmail(identifier) && !isPhone(identifier)) {
      setErrors("Please enter a valid email or 10-digit phone number.");
      return;
    }

    if (password !== confirm_password) {
      setErrors("Passwords do not match.");
      return;
    }

    const payload = {
      email: isEmail(identifier) ? identifier : "",
      phone: isPhone(identifier) ? identifier : "",
      password: password,
    };

    try {
      setLoading(true);

      const response = await axios.post("https://adminnanda.in/Job/api/Forgetpassword/", payload);

      setMessage(response.data.message || "Password reset successful.");
      setFormData({ identifier: "", password: "", confirm_password: "" });

      setTimeout(() => {
        navigate("/UserLogin");
      }, 2000);
    } catch (error) {
      setErrors(error.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className="forgot-form">
        <input
          type="text"
          name="identifier"
          placeholder="Enter registered Email or Phone"
          value={formData.identifier}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          value={formData.confirm_password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
        {message && <p className="success">{message}</p>}
        {errors && <p className="error">{errors}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
