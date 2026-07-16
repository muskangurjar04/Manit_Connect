import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: location.state?.email || "",
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

      // ✅ JWT Token Save
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // ✅ User Save
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      const role = res.data.user.role;

      if (role === "Student") {
        navigate("/student");
      } else if (role === "TPO Volunteer") {
        navigate("/volunteer");
      } else if (role === "TPO Faculty") {
        navigate("/faculty");
      } else if (role === "Admin") {
        navigate("/admin");
      }

    } catch (error) {
      alert(error.response?.data?.message || "Verification Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="overlay"></div>

      <div className="auth-card">
        <h1>Verify Email</h1>

        <p className="subtitle">
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleVerify}>
          <input
            type="email"
            value={formData.email}
            readOnly
            style={{
              background: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />

          <button
            type="button"
            className="secondary-btn"
            onClick={sendOTP}
          >
            Send OTP
          </button>

          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={formData.code}
            onChange={(e) =>
              setFormData({
                ...formData,
                code: e.target.value,
              })
            }
            required
          />

          <button
            type="submit"
            className="main-btn"
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;