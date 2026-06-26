import { useState } from "react";
import axios from "axios";

const VerifyEmail = () => {
  const [formData, setFormData] = useState({
  email: "",
  code: "",
});

const sendOTP = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/auth/sendotp",
      {
        email: formData.email,
      }
    );

    alert(res.data.message);
  } catch (error) {
    alert(error.response?.data?.message || "Failed to send OTP");
  }
};

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/verifyemail",
        {
    email: formData.email,
    code: formData.code,
  }
      );

      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Verification Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Verify Email</h2>

      <form onSubmit={handleVerify}>
  <div style={{ display: "flex", gap: "10px" }}>
  <input
    type="email"
    placeholder="Enter Email"
    value={formData.email}
    onChange={(e) =>
      setFormData({ ...formData, email: e.target.value })
    }
  />

  <button
    type="button"
    onClick={sendOTP}
  >
    Send OTP
  </button>
</div>

<input
  type="text"
  placeholder="Enter OTP"
  value={formData.code}
  onChange={(e) =>
    setFormData({ ...formData, code: e.target.value })
  }
/>

        <br />
        <br />

        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyEmail;