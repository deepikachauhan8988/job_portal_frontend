// src/components/UserPages/JobSearchBar.js
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const DashBoardUser = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const handleSearch = () => {
    onSearch({ keyword, location, experience });
  };

  return (
    <Form className="p-3 border rounded shadow-sm bg-white">
      <Row className="g-2">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Job title, keywords (e.g., React, Developer)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Location (e.g., Dehradun)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Experience</option>
            <option value="0">Fresher</option>
            <option value="1">1+ Year</option>
            <option value="2">2+ Years</option>
            <option value="3">3+ Years</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Button variant="primary" onClick={handleSearch} className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DashBoardUser;
