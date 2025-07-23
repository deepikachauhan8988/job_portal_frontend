import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Card, Spinner, Alert, Button, Modal, Form } from "react-bootstrap";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";

const AdminGetTable = () => {
  const [managerData, setManagerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adminId, setAdminId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);
  const [editFormData, setEditFormData] = useState({
    Manager_name: "",
    Manager_email: "",
    contact_number: "",
    Number_of_employee: ""
  });

  useEffect(() => {
    const fetchManagerData = async () => {
      try {
        const storedAdminId = localStorage.getItem("admin_id");
        console.log("📦 Fetched admin_id from localStorage:", storedAdminId);

        setAdminId(storedAdminId);

        if (!storedAdminId) {
          console.error("❌ Admin ID not found in localStorage.");
          setError("Admin ID missing. Please login again.");
          setLoading(false);
          return;
        }

        console.log(" Sending request to backend with admin ID:", storedAdminId);

        const response = await axios.get("http://127.0.0.1:8000/api3/alldata/", {
          params: { admin: storedAdminId },
        });

        console.log("✅ Data received from backend:", response.data);
        setManagerData(response.data.managers || []);
        setLoading(false);
      } catch (error) {
        console.error(" Failed to fetch data:", error);
        if (error.response) {
          console.error("🔙 Backend says:", error.response.data);
        }
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchManagerData();
  }, []);

  const handleEditClick = (manager) => {
    setSelectedManager(manager);
    setEditFormData({
      Manager_name: manager.Manager_name,
      Manager_email: manager.Manager_email,
      contact_number: manager.contact_number,
      Number_of_employee: manager.Number_of_employee
    });
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api3/manager/${selectedManager.id}/`, editFormData);
      console.log("✅ Updated:", response.data);
      setShowEditModal(false);
      window.location.reload(); // or re-fetch data
    } catch (err) {
      console.error("❌ Update failed:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this manager?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api3/manager/${id}/`);
        setManagerData(managerData.filter((item) => item.id !== id));
      } catch (err) {
        console.error("❌ Delete failed:", err);
      }
    }
  };

  const handleAssign = (id) => {
    alert("Assign logic for Manager ID " + id);
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow">
        {/* <h4 className="mb-4">All Managers (Admin ID: {adminId})</h4> */}

        {loading && (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && managerData.length === 0 && (
          <Alert variant="info">No Data Found .</Alert>
        )}

        {!loading && managerData.length > 0 && (
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Manager Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>No. of Employees</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {managerData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.Manager_name}</td>
                  <td>{item.Manager_email}</td>
                  <td>{item.contact_number}</td>
                  <td>{item.Number_of_employee}</td>
                  <td>{item.admin || "N/A"}</td>
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => handleEditClick(item)}
                      className="me-2"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                      className="me-2"
                    >
                      <FaTrash />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleAssign(item.id)}
                    >
                      <FaUserPlus />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="Manager_name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Manager_name"
                value={editFormData.Manager_name}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Form.Group controlId="Manager_email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="Manager_email"
                value={editFormData.Manager_email}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Form.Group controlId="contact_number">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact_number"
                value={editFormData.contact_number}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Form.Group controlId="Number_of_employee">
              <Form.Label>Number of Employees</Form.Label>
              <Form.Control
                type="number"
                name="Number_of_employee"
                value={editFormData.Number_of_employee}
                onChange={handleEditChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminGetTable;
