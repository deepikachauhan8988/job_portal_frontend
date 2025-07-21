import React from "react";
import { Card, Row, Col, Badge, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaBookmark, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SavedJobCard = ({ job, onDelete }) => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    onDelete(job.job_id); // Call the delete function
  };

  const handleReadMore = () => {
    navigate(`/JobDetails`);
  };

  return (
    <Card className="my-3 p-3 shadow-sm border-0 saved-job-card">
      <Row className="align-items-center">
        <Col xs={1}>
          <Form.Check />
        </Col>
        <Col>
          <h5 className="mb-1">{job.job_title}</h5>
          <p className="text-muted mb-1">{job.company_name}</p>

          <div
            className="d-flex flex-wrap gap-2 mb-2 text-muted"
            style={{ fontSize: "0.9rem" }}
          >
            <span>{job.experience}</span>
            <span>• {job.salary}</span>
            <span>
              • <FaMapMarkerAlt className="mb-1" /> {job.location}
            </span>
          </div>

          <p
            className="text-truncate text-muted mb-2"
            style={{ fontSize: "0.9rem" }}
          >
            {job.comment}
          </p>

          <div className="d-flex flex-wrap gap-2 mb-2">
            {job.sub_title?.split(",").map((skill, idx) => (
              <Badge key={idx} bg="light" text="dark">
                {skill.trim()}
              </Badge>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Posted {new Date(job.date).toLocaleDateString()}
            </small>
            <div className="d-flex align-items-center gap-3">
              <span className="text-primary d-flex align-items-center gap-1">
                <FaBookmark />
                Saved
              </span>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={handleDeleteClick}
              >
                <FaTrash /> Delete
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={handleReadMore}
              >
                Read More
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default SavedJobCard;
