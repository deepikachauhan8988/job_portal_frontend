import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    identifier: "", // email or phone
    password: "",
    userType: "admin", // default selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      password: loginData.password,
    };

    const isPhone = /^\d+$/.test(loginData.identifier);
    if (isPhone) {
      payload.contact_number = loginData.identifier;
    } else {
      payload.email = loginData.identifier;
    }

    try {
      if (loginData.userType === "admin") {
        const res = await axios.post(
          "http://127.0.0.1:8000/api3/admin_login/",
          payload
        );

        const { admin_id, user_id, access, refresh, name, last_name } = res.data;

        localStorage.setItem("admin_id", admin_id);
        localStorage.setItem("admin_user_id", user_id);
        localStorage.setItem("admin_access", access);
        localStorage.setItem("admin_refresh", refresh);
        localStorage.setItem("admin_first_name", name);
        localStorage.setItem("admin_last_name", last_name);
        localStorage.setItem("admin_user_type", "admin");

        alert("Admin Login Successful!");
        return navigate("/AdmininnerDashBoard");
      }

      if (loginData.userType === "manager") {
        const res = await axios.post(
          "http://127.0.0.1:8000/api3/manager_login/",
          payload
        );

        const { manager_id, user_id, access, refresh, name } = res.data;

        localStorage.setItem("manager_id", manager_id);
        localStorage.setItem("admin_user_id", user_id);
        localStorage.setItem("admin_access", access);
        localStorage.setItem("admin_refresh", refresh);
        localStorage.setItem("admin_first_name", name);
        localStorage.setItem("admin_user_type", "manager");

        alert("Manager Login Successful!");
        return navigate("/ManagerDashboard");
      }

      if (loginData.userType === "employee") {
        const res = await axios.post(
          "http://127.0.0.1:8000/api3/EmployeeLogin/",
          payload
        );

        const { employee_id, user_id, access, refresh, name } = res.data;

        localStorage.setItem("employee_id", employee_id);
        localStorage.setItem("admin_user_id", user_id);
        localStorage.setItem("admin_access", access);
        localStorage.setItem("admin_refresh", refresh);
        localStorage.setItem("admin_first_name", name);
        localStorage.setItem("admin_user_type", "employee");

        alert("Employee Login Successful!");
        return navigate("/EmployeeDashboard");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(
        error.response?.data?.error || "Login failed. Please check credentials."
      );
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "100%", maxWidth: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4">Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Select User Type</Form.Label>
            <Form.Select
              name="userType"
              value={loginData.userType}
              onChange={handleChange}
              required
            >
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email or Phone</Form.Label>
            <Form.Control
              type="text"
              name="identifier"
              value={loginData.identifier}
              onChange={handleChange}
              placeholder="Enter email or phone"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </Form.Group>

          <Link to="/AdminForgotPassword">
            <div className="fgt-password text-end">
              <p className="mb-3">Forgot Password?</p>
            </div>
          </Link>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminLogin;
