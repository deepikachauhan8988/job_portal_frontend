// src/api/auth.js
import axios from "axios";

// Register API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/Registerpost/",
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Registration failed" };
  }
};

// api/auth.js

export const registerUserupdate = async (userId, formData) => {
  const token = localStorage.getItem("access_token");
  const userRegistrationData = JSON.parse(
    localStorage.getItem("user_id")
  );
  const user_id = localStorage.getItem("user_id");
  const response = await axios.put(
    `http://127.0.0.1:8000/api/UserGetview/${user_id}/`, // note the slash
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // required for file uploads
      },
    }
  );

  return response.data;
};

export const googleLogin = (data) => {
  return axios.post("http://127.0.0.1:8000/api/google-login/", data);
};

// api/auth.js
export const getPostedJobById = async () => {
  const job_id = localStorage.getItem("employee_id");
  const job_title = localStorage.getItem("job_title"); // example: "5"
  console.log("job_id", job_id);

  const response = await axios.get(`http://127.0.0.1:8000/api3/Emplopostedjob/`);
  return response.data;
};

// 1. Standard login (email or phone + password)
export const loginUser = async ({ email, password }) => {
  const response = await axios.post(`http://127.0.0.1:8000/api/login/`, {
    email,
    password,
  });
  return response.data; // { access: "...", refresh: "...", ... }
};

export const getJobSuggestions = async (query) => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/jobs/suggestions/",
      {
        params: { q: query },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Suggestion fetch failed" };
  }
};
export const fetchSavedJobsByUserId = async (userId) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/Savedpost/${userId}/`
  );
  return response.data;
};

export const saveJobPost = async (jobData, token) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/Saved-post/",
    jobData
  );
  return response.data;
};

const BASE_URL = "http://127.0.0.1:8000/api";

export const savedJobPostView = async () => {
  const userId = localStorage.getItem("user_id");

  if (!userId) {
    console.error("No user ID found in localStorage.");
    return [];
  }

  try {
    const response = await axios.get(`${BASE_URL}/Savedpost/${userId}/`);

    const jobs = response.data;

    // Remove duplicate jobs by job.id
    const uniqueJobsMap = new Map();
    jobs.forEach((job) => {
      uniqueJobsMap.set(job.id, job); // job.id must be unique
    });

    return Array.from(uniqueJobsMap.values());
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    return [];
  }
};

// DELETE saved job by job_id
// DELETE saved job by job_id
export const deleteSavedJobById = async (selected_job_id, token) => {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/deletepost/${selected_job_id}/`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting saved job:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const API_BASE_URL = "http://127.0.0.1:8000";

export const getUserResume = async (userId) => {
  const token = localStorage.getItem("accessToken"); // or wherever you're storing it

  const response = await axios.get(
    `${API_BASE_URL}/api2/resume-detail/?user=${userId}`,
    {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }
  );

  return response.data;
};

// src/api/auth.js

export const getUserResumeData = async (userId) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/api2/resume-detail/?user=${userId}`
    );
    const data = res.data;
    if (data.photo && !data.photo.startsWith("http")) {
      data.photo = `http://127.0.0.1:8000${data.photo}`;
    }
    if (data.generated_pdf && !data.generated_pdf.startsWith("http")) {
      data.generated_pdf = `http://127.0.0.1:8000${data.generated_pdf}`;
    }
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
};

export const updateUserResumeData = async (userId, data) => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    formData.append("user", userId);

    const res = await axios.post(
      `http://127.0.0.1:8000/api2/custom-resume/`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return res.status === 200;
  } catch (err) {
    console.error("Update error:", err);
    return false;
  }
};

export const submitResumeDetails = async (data, token) => {
  try {
    const userRegistrationData = JSON.parse(
      localStorage.getItem("userRegistrationData")
    );
    const user_id = userRegistrationData?.id;

    const response = await axios.get(
      `http://127.0.0.1:8000/api2/custom-resume/?user${user_id}`,
      data,
      {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Resume submission failed:", error);
    throw error;
  }
};

export const GetUserRegistration = async () => {
  const storedUser = localStorage.getItem("userRegistrationData");

  const userObj = JSON.parse(storedUser);
  const userId = userObj.id; // ✅ safely access id

  console.log("user_id_registration", userId);
  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/UserGetview/${userId}/`
    );
    console.log("User Data:", res.data);

    return res.data; // return the actual data
  } catch (err) {
    console.error("Error fetching user data:", err);
    return null;
  }
};

export const UserRegistration = async () => {
  const userId = localStorage.getItem("autoId");
  console.log("user_id_registration", userId);
  try {
    const res = await axios.post(`http://127.0.0.1:8000/api2/custom-resume/`);
    console.log("User Data resume:", res.data);

    return res.data; // return the actual data
  } catch (err) {
    console.error("Error fetching user data:", err);
    return null;
  }
};

export const fetchResumeWithUserDetails = async (user_id) => {
  try {
    const user_id = localStorage.getItem("user_id");

   
    // ✅ safely access id

    console.log("user_id_registration", user_id);
    // Resume data
    const res = await axios.get(
      `http://127.0.0.1:8000/api2/resume-detail/?user=${user_id}`
    );
    let data = res.data;
console.log("userdata", res.data)
    // Fix image and PDF paths
    if (data.photo && !data.photo.startsWith("http")) {
      data.photo = `http://127.0.0.1:8000${data.photo}`;
    }
    if (data.generated_pdf && !data.generated_pdf.startsWith("http")) {
      data.generated_pdf = `http://127.0.0.1:8000${data.generated_pdf}`;
    }

    return data;
  } catch (error) {
    console.error("Error in fetchResumeWithUserDetails:", error);
    throw error;
  }
};
// Fetch user basic profile (name, email, phone)
export const fetchUserProfileById = async (userId) => {
  try {
    const storedUser = localStorage.getItem("user_id");
    const userObj = JSON.parse(storedUser);
    // ✅ safely access id
    console.log("user_id_registration", userId);
    const res = await axios.get(
      `http://127.0.0.1:8000/api/UserGetview/${userId}/`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
// src/api/auth.js

export const registerAdmin = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (value) data.append(key, value);
  });

  return await axios.post(`http://127.0.0.1:8000/api3/admin_registration/`, data, config);
};
