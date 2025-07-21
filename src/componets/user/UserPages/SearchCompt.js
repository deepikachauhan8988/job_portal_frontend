import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getJobSuggestions } from "../../../api/auth";
import "../../../assets/css/JobSearchBar.css";

const SearchCompt = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (jobTitle.trim() !== "") {
        fetchSuggestions(jobTitle);
      } else {
        setSuggestions([]);
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [jobTitle]);

  const fetchSuggestions = async (query) => {
    try {
      const result = await getJobSuggestions(query);
      setSuggestions(result || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching suggestions", error);
    }
  };

  const handleSuggestionClick = (text) => {
    setJobTitle(text);
    setShowSuggestions(false);
  };

  const handleSearchClick = () => {
    const newErrors = {};
    if (!jobTitle.trim()) newErrors.jobTitle = true;
    if (!experience.trim()) newErrors.experience = true;
    if (!location.trim()) newErrors.location = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Store search values
    localStorage.setItem("job_title", jobTitle);
    localStorage.setItem("job_location", location);
    localStorage.setItem("job_experience", experience);

    // Navigate to results page (LeftNav)
    navigate("/LeftNav");
    
  };

  return (
    <div className="job-search-container text-center">
      <h1><strong>Find your dream job now</strong></h1>
      <p className="subtitle">5 lakh+ jobs for you to explore</p>

      <div className="search-bar mx-auto mt-4 position-relative" style={{ maxWidth: "900px" }}>
        <Row className="g-3 align-items-center justify-content-center">
          <Col md={4}>
            <InputGroup className="input-group-custom">
              <InputGroup.Text className="icon-bg">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Enter skills / designations / companies"
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
                    onMouseDown={() => handleSuggestionClick(s.title || s)}
                    className="px-3 py-2 suggestion-item"
                    style={{ cursor: "pointer" }}
                  >
                    {s.title || s}
                  </div>
                ))}
              </div>
            )}
          </Col>

          <Col md={3}>
            <Form.Select
              className="input-group-custom"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              isInvalid={errors.experience}
            >
              <option value="">Select experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="4-6 Years">4-6 Years</option>
              <option value="7+ Years">7+ Years</option>
            </Form.Select>
          </Col>

          <Col md={3}>
            <Form.Control
              className="input-group-custom"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              isInvalid={errors.location}
            />
          </Col>

          <Col md={2}>
            <Button
              className="search-btn"
              variant="primary rounded-pill"
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchCompt;
