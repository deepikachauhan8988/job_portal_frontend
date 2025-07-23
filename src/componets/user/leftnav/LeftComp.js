import React, { useState, useEffect } from "react";
import { Form, Accordion, Button } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import { getPostedJobById } from "../../../api/auth";

const LeftComp = ({ onFilter }) => {
  const [experience, setExperience] = useState(2);
  const [selectedModes, setSelectedModes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedEducations, setSelectedEducations] = useState([]);

  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [modeCounts, setModeCounts] = useState({});
  const [locationCounts, setLocationCounts] = useState({});
  const [educationCounts, setEducationCounts] = useState({});

  const handleSliderChange = (event, newValue) => setExperience(newValue);

  const handleCheckboxChange = (event, setState, currentState) => {
    const { value, checked } = event.target;
    const updated = checked
      ? [...currentState, value]
      : currentState.filter((v) => v !== value);
    setState(updated);
  };

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await getPostedJobById();
        const validJobs = jobs || [];
        setAllJobs(validJobs);

        const modeMap = {};
        const locationMap = {};
        const educationMap = {};

        validJobs.forEach((job) => {
          const mode = capitalize(job.work_mode || "");
          const location = capitalize(job.location || "");
          const education = capitalize(job.education || "");

          if (mode) modeMap[mode] = (modeMap[mode] || 0) + 1;
          if (location) locationMap[location] = (locationMap[location] || 0) + 1;
          if (education) educationMap[education] = (educationMap[education] || 0) + 1;
        });

        setModeCounts(modeMap);
        setLocationCounts(locationMap);
        setEducationCounts(educationMap);
      } catch (err) {
        console.error("Error fetching jobs", err);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = allJobs.filter((job) => {
      const mode = capitalize(job.work_mode || "");
      const location = capitalize(job.location || "");
      const education = capitalize(job.education || "");
      const jobExperience = parseInt(job.experience) || 0;

      const matchMode = selectedModes.length === 0 || selectedModes.includes(mode);
      const matchLocation =
        selectedLocations.length === 0 || selectedLocations.includes(location);
      const matchEducation =
        selectedEducations.length === 0 || selectedEducations.includes(education);
      const matchExperience = jobExperience <= experience;

      return matchMode && matchLocation && matchEducation && matchExperience;
    });

    setFilteredJobs(filtered);
    if (onFilter) onFilter(filtered);
  }, [experience, selectedModes, selectedLocations, selectedEducations, allJobs]);

  return (
    <div className="filter-sidebar p-3">
      <h5 className="mb-3">Filters</h5>
      <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen flush>
        {/* Work Mode */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Work Mode</Accordion.Header>
          <Accordion.Body>
            {Object.entries(modeCounts).map(([mode, count], idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                value={mode}
                label={`${mode} (${count})`}
                checked={selectedModes.includes(mode)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedModes, selectedModes)
                }
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>

        {/* Experience */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Experience</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-between mb-1">
              <span>{experience} Yrs</span>
            </div>
            <Slider
              value={experience}
              onChange={handleSliderChange}
              min={0}
              max={30}
              valueLabelDisplay="auto"
              sx={{ color: "#1976d2" }}
            />
            <div className="d-flex justify-content-between">
              <small>0 Yrs</small>
              <small>30 Yrs</small>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Location */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Location</Accordion.Header>
          <Accordion.Body>
            {Object.entries(locationCounts).map(([loc, count], idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                value={loc}
                label={`${loc} (${count})`}
                checked={selectedLocations.includes(loc)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedLocations, selectedLocations)
                }
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>

        {/* Education */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            {Object.entries(educationCounts).map(([edu, count], idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                value={edu}
                label={`${edu} (${count})`}
                checked={selectedEducations.includes(edu)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedEducations, selectedEducations)
                }
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="mt-4 text-muted">
        <small>{filteredJobs.length} jobs match your filters</small>
      </div>
    </div>
  );
};

export default LeftComp;
