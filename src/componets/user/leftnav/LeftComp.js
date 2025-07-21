import React, { useState, useEffect } from "react";
import { Form, Accordion, Button } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import "../../../assets/css/LeftNav.css";
import { getPostedJobById } from "../../../api/auth";

const LeftComp = ({ onFilter }) => {
  const [experience, setExperience] = useState(2);
  const [selectedModes, setSelectedModes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  const [selectedEducations, setSelectedEducations] = useState([]);

  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [modeCounts, setModeCounts] = useState({});
  const [locationCounts, setLocationCounts] = useState({});
  const [salaryCounts, setSalaryCounts] = useState({});
  const [educationCounts, setEducationCounts] = useState({});
  const [experienceCount, setExperienceCount] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setExperience(newValue);
  };

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
        const salaryMap = {};
        const educationMap = {};

        validJobs.forEach((job) => {
          const mode = capitalize(job.work_mode?.trim().toLowerCase() || "");
          const location = capitalize(job.location?.trim().toLowerCase() || "");
          const salary = job.salary?.trim() || "";
          const education = capitalize(job.education?.trim().toLowerCase() || "");

          if (mode) modeMap[mode] = (modeMap[mode] || 0) + 1;
          if (location) locationMap[location] = (locationMap[location] || 0) + 1;
          if (salary) salaryMap[salary] = (salaryMap[salary] || 0) + 1;
          if (education) educationMap[education] = (educationMap[education] || 0) + 1;
        });

        setModeCounts(modeMap);
        setLocationCounts(locationMap);
        setSalaryCounts(salaryMap);
        setEducationCounts(educationMap);

        const expCount = validJobs.filter(
          (job) => parseInt(job.experience) <= experience
        ).length;
        setExperienceCount(expCount);
      } catch (err) {
        console.error("Error fetching jobs", err);
      }
    };

    fetchJobs();
  }, [experience]);

  useEffect(() => {
    const jobTitleFilter = localStorage.getItem("job_title")?.toLowerCase() || "";

    const filtered = allJobs.filter((job) => {
      const title = job.job_title?.toLowerCase() || "";
      const mode = capitalize(job.work_mode?.trim().toLowerCase() || "");
      const location = capitalize(job.location?.trim().toLowerCase() || "");
      const salary = job.salary?.trim() || "";
      const education = capitalize(job.education?.trim().toLowerCase() || "");

      const matchesTitle = title.includes(jobTitleFilter);
      const matchesExperience = parseInt(job.experience) <= experience;
      const matchesMode =
        selectedModes.length === 0 || selectedModes.includes(mode);
      const matchesLocation =
        selectedLocations.length === 0 || selectedLocations.includes(location);
      const matchesSalary =
        selectedSalaries.length === 0 || selectedSalaries.includes(salary);
      const matchesEducation =
        selectedEducations.length === 0 || selectedEducations.includes(education);

      return (
        matchesTitle &&
        matchesExperience &&
        matchesMode &&
        matchesLocation &&
        matchesSalary &&
        matchesEducation
      );
    });

    const expCount = allJobs.filter(
      (job) => parseInt(job.experience) <= experience
    ).length;

    setFilteredJobs(filtered);
    setExperienceCount(expCount);

    if (onFilter) onFilter(filtered);
  }, [
    experience,
    selectedModes,
    selectedLocations,
    selectedSalaries,
    selectedEducations,
    allJobs,
  ]);

  const appliedFilterCount =
    selectedModes.length +
    selectedLocations.length +
    selectedSalaries.length +
    selectedEducations.length +
    1;

  return (
    <div className="filter-sidebar p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <strong>All Filters</strong>
        <Button variant="link" className="p-0 text-primary fw-semibold">
          Applied ({appliedFilterCount})
        </Button>
      </div>

      <Accordion defaultActiveKey={["0", "1", "2", "3", "4"]} alwaysOpen flush>
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

        <Accordion.Item eventKey="1">
          <Accordion.Header>Experience</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-between mb-1">
              <span className="exp-label">
                {experience} Yrs | {experienceCount} Jobs
              </span>
            </div>
            <Slider
              value={experience}
              onChange={handleSliderChange}
              min={0}
              max={30}
              valueLabelDisplay="off"
              sx={{ color: "#000" }}
            />
            <div className="d-flex justify-content-between">
              <small>0 Yrs</small>
              <small>30 Yrs</small>
            </div>
          </Accordion.Body>
        </Accordion.Item>

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
            <Button variant="link" className="p-0 text-primary">
              View More
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Salary</Accordion.Header>
          <Accordion.Body>
            {Object.entries(salaryCounts).map(([sal, count], idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                value={sal}
                label={`${sal} (${count})`}
                checked={selectedSalaries.includes(sal)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedSalaries, selectedSalaries)
                }
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
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
