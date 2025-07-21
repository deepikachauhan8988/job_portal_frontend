// src/components/UserPages/LeftNav.js
import React, { useState, useCallback } from "react";
import "../../../assets/css/LeftNav.css";
import { Col, Container, Row } from "react-bootstrap";
import LeftComp from "./LeftComp";
import PostJobCard from "./PostJobCard";
import Adds from "../UserPages/Adds";
import ReusableSearch from "./ReusableSearch";

const LeftNav = () => {
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleFilter = useCallback((data) => {
    setFilteredJobs(data);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col lg={2} md={2} sm={2}>
          <LeftComp onFilter={handleFilter} />
        </Col>
        <Col lg={8} md={8} sm={8}>
        
          <PostJobCard jobs={filteredJobs} />
        </Col>
        <Col lg={2} md={2} sm={2}>
          <Adds />
        </Col>
      </Row>
    </Container>
  );
};

export default LeftNav;
