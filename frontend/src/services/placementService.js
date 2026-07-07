import axios from "axios";

const API = "http://localhost:5000/placement";

export const getPendingPlacements = async () => {
  const res = await axios.get(`${API}/pending`);
  return res.data;
};

export const verifyPlacement = async (id) => {
  return axios.put(`http://localhost:5000/placement/verify/${id}`);
};

export const rejectPlacement = async (
  id,
  rejectionReason
) => {

  return axios.put(
    `http://localhost:5000/placement/reject/${id}`,
    {
      rejectionReason,
    }
  );

};
export const getAllPlacements = async () => {
  const res = await axios.get("http://localhost:5000/placement/all");
  return res.data;
};