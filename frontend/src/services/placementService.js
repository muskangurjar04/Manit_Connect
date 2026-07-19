import axios from "axios";

const API = axios.create({
 baseURL: "https://manit-connect-backend.onrender.com",
});
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

    console.log("Token from localStorage:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("Headers:", config.headers);
  return config;
});

// Student submits placement
export const submitPlacement = async (formData) => {
  const token = localStorage.getItem("token");

  console.log("Student Token:", token);

  const response = await API.post(
    "/placement/submit",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
// Volunteer Dashboard
export const getPendingPlacements = async () => {
  const res = await API.get("/placement/pending");
  return res.data;
};

export const verifyPlacement = async (id) => {
  return API.put(`/placement/verify/${id}`);
};

export const rejectPlacement = async (id, rejectionReason) => {
  return API.put(`/placement/reject/${id}`, {
    rejectionReason,
  });
};

// Faculty Dashboard
export const getAllPlacements = async () => {
  const res = await API.get("/placement/all");
  return res.data;
};