// src/api/auth.js
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URLL } from "../../src/api/AxiosBaseUrl";
axios.defaults.withCredentials = true;

// Register API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URLL}api/UserRegistration/`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Registration failed" };
  }
};

// api/auth.js

export const registerUserupdate = async (userId, formData) => {
  // const token = localStorage.getItem("access_token");
  // const userRegistrationData = JSON.parse(localStorage.getItem("user_id"));
  const user_id = localStorage.getItem("user_id");
  const response = await axios.put(
    `https://adminnanda.in/Job/api/Registerpost${user_id}/`, 
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", 
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
  const employee_id = localStorage.getItem("employee_id"); // Ensure this is set

  if (!employee_id) throw new Error("employee_id not found in localStorage");

  try {
    const response = await axios.get(
      `https://adminnanda.in/Job/api3/PostJonbyemloyee/`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch posted jobs:", error);
    throw error;
  }
};


const api = axios.create({
  baseURL: `${BASE_URLL}api/`,
});

export const loginUser = async ({ email, phone, password }) => {
  const payload = { password };
  if (email) payload.email = email;
  if (password) payload.password = password;

  const response = await api.post(`https://adminnanda.in/Job/api/login/`, payload);
  const { access, refresh, user } = response.data;
  console.log("dataa", response.data); 
   console.log("Access Token:", access);
    console.log("Refresh Token:", refresh);
  return response.data;

};

// export const googleLogin = async ({ token }) => {
//   const response = await api.post(`google-login/`, { token });
//   return response.data;
// }

export const logoutUser = async (refreshToken) => {
  const accessToken = localStorage.getItem("access_token");

  return await axios.post(
    "https://adminnanda.in/Job/api/logout/",
    { refresh: refreshToken },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true, // only if using cookies
    }
  );
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

// save post get
export const fetchSavedJobsByUserId = async (userId) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/Savedpost/${userId}/`
  );
  return response.data;
};

// save post
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
  const userId = userObj.id; 

  console.log("user_id_registration", userId);
  try {
    const res = await axios.get(
      `https://adminnanda.in/Job/api/Registerpost/${userId}/`,
      (axios.defaults.withCredentials = true)
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

    return res.data; 
  } catch (err) {
    console.error("Error fetching user data:", err);
    return null;
  }
};

// user profile basic details
export const fetchUserProfileById = async (userId) => {
  try {
    const accessToken11 = localStorage.getItem("access_token1");
    const storedUserId = localStorage.getItem("user_id");

    // if (!accessToken11 || !storedUserId) {
    //   throw new Error("Access token or user ID not found in localStorage.");
    // }

    console.log("user_id_registration", storedUserId);

    const res = await axios.get(
      `https://adminnanda.in/Job/api/Registerpost/${storedUserId}/`,

      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken11}`, // ✅ include access token here
      //   },
      // }
     
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
// resume profile
export const fetchResumeWithUserDetails = async () => {
  try {
    const rawUserId = localStorage.getItem("user_id");
    const accessToken11 = localStorage.getItem("access_token1");
    const token = Cookies.get("access_token1");
    console.log("access", token);

    // if (!rawUserId || !accessToken11) {
    //   throw new Error("User ID or Access Token not found in localStorage");
    // }

    console.log("User ID:", rawUserId);
    console.log("Access Token:", accessToken11);

    const res = await axios.get(
      `https://adminnanda.in/Job/api2/resume-detail/?user=${rawUserId}`,
      

      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken11}`, // ✅ include access token here
      //   },
      // }
    );

    const data = res.data;

    // Adjust resume path if it's a relative URL
    if (data.resume && !data.resume.startsWith("http")) {
      data.resume = `https://adminnanda.in${data.resume}`;
    }

    return data;
  } catch (error) {
    console.error(
      "Error fetching resume details:",
      error?.response?.data || error.message || error
    );
    throw error;
  }
};

// Fetch user basic profile (name, email, phone)



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

  return await axios.post(
    `http://127.0.0.1:8000/api3/admin_registration/`,
    data,
    config
  );
};
