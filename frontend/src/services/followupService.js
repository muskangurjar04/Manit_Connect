import axios from "axios";

const API = "http://localhost:5000/followup";

export const createFollowUp = async (followUpData) => {
  const token = localStorage.getItem("token");

  console.log("Token:", token);

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  console.log("Headers being sent:", headers);

  const response = await axios.post(API, followUpData, {
    headers,
  });

  return response.data;
};

export const getAllFollowUps = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API}/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ======================
// Dashboard Statistics
// ======================
export const getDashboardStats = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getMyFollowUps = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(`${API}/my`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
