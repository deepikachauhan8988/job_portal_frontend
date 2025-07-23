import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Card,
  Spinner,
  Alert,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManagerGetTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [managerId, setManagerId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editFormData, setEditFormData] = useState({
    Employee_email: "",
    Employee_name: "",
     
    Employee_password: "",
    manager: ""
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const storedManagerId = localStorage.getItem("manager_id"); // Replace with dynamic ID if needed
        setManagerId(storedManagerId);

        const response = await axios.get(
          "http://127.0.0.1:8000/api3/Manageremployee",
          { params: { manager: storedManagerId } }
        );

        setEmployeeData(response.data || []);
        setLoading(false);
      } 
     catch (err) {
  if (err.response) {
    console.error("Backend Error:", err.response.data);
    setError(`Error: ${err.response.status} - ${err.response.data?.detail || 'Something went wrong'}`);
  } else if (err.request) {
    console.error("No response received:", err.request);
    setError("No response from server. Check if backend is running.");
  } else {
    console.error("Frontend Error:", err.message);
    setError("Request setup error.");
  }
  setLoading(false);
}
    };

    fetchEmployeeData();
  }, []);

 
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };



  return (
    <div className="container mt-4">
      <Card className="p-4 shadow">
        {/* <h4 className="mb-4">All Employees (manager ID: {managerId})</h4> */}

        {loading && (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}


        {!loading && employeeData.length > 0 && (
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Manager</th>
                <th>Admin</th>
              
              </tr>
            </thead>
            <tbody>
              {employeeData.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td>{emp.Employee_email}</td>
                  <td>{emp.Employee_name}</td>
                  <td>{emp.manager}</td>
                  <td>{emp.admin}</td>
                
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {/* Edit Modal */}
     
    </div>
  );
};

export default ManagerGetTable;
