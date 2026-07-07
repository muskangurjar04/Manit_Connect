import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const submitPlacement = async (formData) => {
  const response = await API.post(
    "/placement/submit",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};