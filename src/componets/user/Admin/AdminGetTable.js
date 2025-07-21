import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Card, Spinner, Alert } from "react-bootstrap";

const AdminGetTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adminId, setAdminId] = useState(null);

  useEffect(() => {
    const storedAdminId = 14;

    if (!storedAdminId) {
      setError("Admin ID not found in localStorage.");
      setLoading(false);
      return;
    }

    setAdminId(storedAdminId);

    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api3/alldata/");
        // Filter by admin_id
        console.log("admin manager table", response.data)
        const filteredData = response.data.filter(
          (emp) => emp.admin?.id?.toString() === storedAdminId
        );
        setEmployeeData(filteredData);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch employee data:", err);
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div className="container mt-4">
      <Card className="p-3 shadow">
        <h4 className="mb-3">All Manager Employees (Admin ID: {adminId})</h4>

        {loading && <Spinner animation="border" />}

        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && employeeData.length === 0 && (
          <Alert variant="info">No employee data found for this admin.</Alert>
        )}

        {!loading && employeeData.length > 0 && (
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Manager</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((emp, index) => (
                <tr key={emp.id || index}>
                  <td>{index + 1}</td>
                  <td>{emp.Employee_name}</td>
                  <td>{emp.Employee_email}</td>
                  <td>{emp.Employee_password}</td>
                  <td>{emp.manager?.Manager_name || "N/A"}</td>
                  <td>{emp.admin?.Admin_name || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </div>
  );
};

export default AdminGetTable;
