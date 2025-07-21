import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { searchJobs } from "../../../api/auth";
import PostJobCard from "./PostJobCard";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result = await searchJobs(searchQuery);
        setJobs(result);
      } catch (err) {
        console.error("Search error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [searchQuery]);

  if (loading) return <div className="text-center mt-5"><Spinner /></div>;

  if (jobs.length === 0) return <div className="text-center mt-5 text-danger">No jobs found.</div>;

  return (
    <Container className="mt-4">
      <Row>
        {jobs.map((job) => (
          <Col key={job.id} md={6}>
            <PostJobCard jobData={job} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
