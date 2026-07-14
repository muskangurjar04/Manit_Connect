import axios from "axios";

const API = "http://localhost:5000/followup";

export const createFollowUp = async (followUpData) => {

  console.log("Sending Data:", followUpData);

  const response = await axios.post(API, followUpData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};