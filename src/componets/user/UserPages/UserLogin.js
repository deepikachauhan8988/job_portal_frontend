import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { googleLogin, loginUser } from "../../../api/auth";
import { jwtDecode } from "jwt-decode";
import "../../../assets/css/LoginForm.css";
import Cookies from "js-cookie";


const UserLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhone = (value) => /^\d{10}$/.test(value);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors("");

  const { identifier, password } = formData;

  if (!identifier || !password) {
    setErrors("All fields are required.");
    return;
  }

  let payload = { password };

  if (isEmail(identifier)) {
    payload.email = identifier;
  } else if (isPhone(identifier)) {
    payload.phone = identifier;
  } else {
    setErrors("Please enter a valid email or 10-digit phone number.");
    return;
  }

  try {
    const data = await loginUser(payload);
    console.log("data ",data)
    

console.log("data", data.access)

    localStorage.setItem("user_id", data.user_id);
  
 localStorage.setItem("access_token1", data.access_token);
  localStorage.setItem("refresh_token1", data.refresh_token);
    const hasSearched = localStorage.getItem("job_title") === "true";

    navigate(hasSearched ? "/" : "/");
    const accessToken = data.access;
  const refreshToken = data.refresh;

 

  // Optional: store in localStorage or cookies
 
  } 
  catch (err) {
  if (err.response) {
    // Server responded with a status outside 2xx
    console.error(" Server Response Error:");
    console.error("Status:", err.response.status);
    console.error("Headers:", err.response.headers);
    console.error("Data:", err.response.data);
    setErrors(err.response.data.detail || "Invalid login credentials.");
  } 
  else {
    // Something went wrong setting up the request
    console.error(" Error Setting Up Request:");
    console.error("Message:", err.message);
    setErrors("Something went wrong. Please try again.");
  }

  console.error(" Config:", err.config);
}

};


  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const credential = credentialResponse.credential;
      const decoded = jwtDecode(credential);
      console.log("user credential", credential)
      const data = await googleLogin({ token: credential });

      localStorage.setItem(
        "googleUser",
        JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
        })
      );
      localStorage.setItem("job_user_id", data.user_id);

      navigate("/UserRegistration");
    } catch (err) {
      console.error("Google login error:", err);
      alert(err?.response?.data?.detail || "Google login failed");
    }
  };

  return (
    <div className="login-box mx-auto">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-0">Login</h3>
        <Link to="/UserRegistration">Register</Link>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email or Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleInputChange}
            placeholder="Enter email or 10-digit phone"
            className="rounded-pill input-custom"
            required
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <div className="position-relative">
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="rounded-pill input-custom pe-5"
              required
            />
            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="text-end mt-1">
            <Link to="/ForgotPassword">
              <button type="button" className="link-button">
                Forgot Password?
              </button>
            </Link>
          </div>
        </Form.Group>

        {errors && <div className="text-danger mb-2">{errors}</div>}

        <Button className="btn-login w-100" type="submit">
          Login
        </Button>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="d-flex justify-content-center mt-2">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => alert("Google login failed")}
          />
        </div>
      </Form>
    </div>
  
  );
};

export default UserLogin;
