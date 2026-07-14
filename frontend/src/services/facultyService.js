import axios from "axios";

const API = "http://localhost:5000/placement";

export const getFacultyAnalytics = async () => {
  const res = await axios.get(`${API}/faculty`);
  return res.data;
};