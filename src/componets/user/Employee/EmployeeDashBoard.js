import React, { useState, useEffect } from "react";

import "../../../custom/Mainstyle.css";
import "../../../assets/css/AdminDashBoard.css";
import "../../../assets/css/AdminInnerDashBoard.css";
import Card from "react-bootstrap/Card";
import { Row, Col, Table, Button, Modal, Form, Dropdown } from "react-bootstrap";
import { MdBarChart } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import axios from "axios";
import EmployeeLeftNav from "./EmployeeLeftNav";
import JobCard from "../leftnav/JobCard";
import PostJobGetView from "./PostJobGetView";

// import ManagerLeftNav from "./ManagerLeftNav";

const EmployeeDashBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [newManager, setNewManager] = useState({
    Manager_name: "",
    contact_number: "",
    Manager_email: "",
    password: "",
    Number_of_employee: 0,
  });

  const handleEmployee = async () => {
    const admin_id = localStorage.getItem("plan_admin_id");
    const user_id = localStorage.getItem("admin_user_id")
    const manager_id= localStorage.getItem("manager_id");
    console.log("manager id", manager_id);
    const accessToken = localStorage.getItem("admin_access");

    if (!admin_id || !accessToken) {
      alert("Admin ID or token missing. Please login again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api3/EmployeeRegestration/",
        {
          
          name: newManager.Manager_name,
          contact_number: newManager.contact_number,
          email: newManager.Manager_email,
          password: newManager.password,
          admin: admin_id,
          user_id:user_id,
          manager:manager_id,
       
         
        },
        
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("manager id ", manager_id)

      alert("Employee Added Successfully!");
      setShowModal(false);
      setNewManager({
        name: "",
        contact_number: "",
        email: "",
        password: "",
        // Number_of_employee: "",
      
      });
    } catch (error) {
      console.error("Error addingemployee:", error.response?.data || error);
      alert("Failed to add emaployee.");
    }
  };

  return (
    <>
      <div className="main-container">
        <EmployeeLeftNav />
        <div className="main">
          <div className="awc-dashboard-title">
            <div className="jpcard-main">
              <div className="home-list-item">
                <ul type="none">
                  <RiHome2Line className="icon-sty" /> <li>Home</li>
                  <IoIosArrowForward className="icon-sty" /> <li>Employee DashBoard</li>
                </ul>
              </div>

              <Row className="my-4">
                {["Interviews", "Apply", "Profile", "Messages"].map((title, i) => (
                  <Col lg={3} md={3} sm={12} className="mb-4" key={i}>
                    <Card style={{ width: "18rem" }} className="card-style">
                      <Card.Body>
                        <Card.Text>
                          <div className="text-white">
                            <div className="mb-2">
                              <MdBarChart className="icon-sty-card" />
                            </div>
                            <div className="d-flex align-items-center justify-content-between brjb-amout">
                              <h5 className="m-0 fw-normal">{title}</h5>
                              <h3 className="m-0">3500</h3>
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            <div className="dash-heading">
              <h1> Employee DashBoard</h1>
              <PostJobGetView />
              {/* <Row>
                <Col lg={9} md={9} sm={12}>
                  <Card className="dashboard-contanier p-4">
                    <div className="manager-container">
                      <div className="manager-header">
                        <h5>Employee Table Details</h5>
                        <div className="header-actions">
                          <Dropdown>
                            <Dropdown.Toggle variant="light" size="sm">
                              Manager Filter
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>All</Dropdown.Item>
                              <Dropdown.Item>Developer</Dropdown.Item>
                              <Dropdown.Item>Sales</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown>
                            <Dropdown.Toggle variant="light" size="sm">
                              List
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>HCL</Dropdown.Item>
                              <Dropdown.Item>TCS</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Button variant="primary" onClick={() => setShowModal(true)}>
                            Add Employee
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col lg={3} md={3} sm={12}>
                  <Card className="dashboard-contanier p-4">
                    <div className="manager-container">
                      <div className="manager-header">
                        <h5>Pai Cha</h5>
                      </div>
                      <Table bordered hover responsive className="manager-table"></Table>
                    </div>
                  </Card>
                </Col>
              </Row> */}
              <JobCard />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Manager Name</Form.Label>
              <Form.Control
                type="text"
                value={newManager.Manager_name}
                onChange={(e) =>
                  setNewManager({ ...newManager, Manager_name: e.target.value })
                }
                placeholder="Enter full name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                value={newManager.contact_number}
                onChange={(e) =>
                  setNewManager({ ...newManager, contact_number: e.target.value })
                }
                placeholder="Enter contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newManager.Manager_email}
                onChange={(e) =>
                  setNewManager({ ...newManager, Manager_email: e.target.value })
                }
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={newManager.password}
                onChange={(e) =>
                  setNewManager({ ...newManager, password: e.target.value })
                }
                placeholder="Enter password"
              />
            </Form.Group>
             {/* <Form.Group className="mb-3">
              <Form.Label>Number_of_employee</Form.Label>
              <Form.Control
                type="input"
                value={newManager.Number_of_employee}
                onChange={(e) =>
                  setNewManager({ ...newManager, Number_of_employee: e.target.value })
                }
                placeholder="Number_of_employee"
              />
            </Form.Group> */}

            
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEmployee}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeDashBoard;
