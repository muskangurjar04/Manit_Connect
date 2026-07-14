import axios from "axios";

const API = "http://localhost:5000/admin";

const getToken = () => localStorage.getItem("token");

export const createUser = async (userData) => {
  const res = await axios.post(
    `${API}/create-user`,
    userData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return res.data;
};

export const getUsers = async () => {
  const res = await axios.get(
    `${API}/users`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return res.data;
};

export const getDashboard = async () => {
  const res = await axios.get(
    `${API}/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return res.data;
};