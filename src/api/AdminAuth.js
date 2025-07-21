// src/api/admin/getAdminById.js
import axios from 'axios';
const admin_id = localStorage.getItem("admin_id");
const API_URL = `http://127.0.0.1:8000/api3/admin/${admin_id}`;
 // Adjust your backend URL

export const getAdminById = async (adminId, token) => {
  try {
    const response = await axios.get(`${API_URL}${admin_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("admin details", response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
};
