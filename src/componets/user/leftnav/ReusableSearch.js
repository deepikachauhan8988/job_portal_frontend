import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { getJobSuggestions } from "../../../api/auth";
import "../../../assets/css/JobSearchBar.css";

// Accept onSearch as a prop
const ReusableSearch = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (jobTitle.trim()) fetchSuggestions(jobTitle);
      else setSuggestions([]);
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [jobTitle]);

  const fetchSuggestions = async (query) => {
    try {
      const result = await getJobSuggestions(query);
      setSuggestions(result || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Suggestion fetch error:", error);
    }
  };

  const handleSearchClick = () => {
    const newErrors = {};
    if (!jobTitle.trim()) newErrors.jobTitle = true;
    if (!experience.trim()) newErrors.experience = true;
    if (!location.trim()) newErrors.location = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Save to localStorage
    localStorage.setItem("job_title", jobTitle);
    localStorage.setItem("job_location", location);
    localStorage.setItem("job_experience", experience);

    // Trigger parent filter
    if (onSearch) {
      onSearch({
        job_title: jobTitle,
        job_location: location,
        job_experience: experience,
      });
    }
  };

  return (
    <div className="job-search-container text-center p-2">
      <Row className="gx-2 gy-2 justify-content-center align-items-center">
        <Col xs={12} md={4} className="position-relative">
          <InputGroup size="sm">
            <InputGroup.Text className="icon-bg">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Skills / Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              isInvalid={errors.jobTitle}
            />
          </InputGroup>
          {showSuggestions && suggestions.length > 0 && (
            <div
              className="suggestions-box text-start bg-white border rounded shadow-sm position-absolute w-100"
              style={{ zIndex: 10 }}
            >
              {suggestions.map((s, idx) => (
                <div
                  key={idx}
                  onMouseDown={() => {
                    setJobTitle(s.title || s);
                    setShowSuggestions(false);
                  }}
                  className="px-3 py-2 suggestion-item"
                  style={{ cursor: "pointer" }}
                >
                  {s.title || s}
                </div>
              ))}
            </div>
          )}
        </Col>

        <Col xs={6} md={3}>
          <Form.Select
            size="sm"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            isInvalid={errors.experience}
          >
            <option value="">Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="4-6 Years">4-6 Years</option>
            <option value="7+ Years">7+ Years</option>
          </Form.Select>
        </Col>

        <Col xs={6} md={3}>
          <Form.Control
            size="sm"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            isInvalid={errors.location}
          />
        </Col>

        <Col xs={12} md="auto">
          <Button size="sm" variant="primary" onClick={handleSearchClick}>
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ReusableSearch;
