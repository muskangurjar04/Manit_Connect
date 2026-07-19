import axios from "axios";

const API = "https://manit-connect-backend.onrender.com/placement";

export const getFacultyAnalytics = async () => {
  const res = await axios.get(`${API}/faculty`);
  return res.data;
};