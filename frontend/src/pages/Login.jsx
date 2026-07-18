import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    role: "",
    email: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
  });

  // ---------------- Login ----------------

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const sendLoginOTP = async () => {
  try {
    if (!loginData.role || !loginData.email) {
      return alert("Please select role and enter email.");

    }

    const res = await axios.post(
      "http://localhost:5000/auth/send-login-otp",
      {
        email: loginData.email,
        role: loginData.role,
      }
    );

    alert(res.data.message);
    setOtpSent(true);

  } catch (error) {
    alert(error.response?.data?.message || "Failed to send OTP");
  }
};

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/auth/verify-login",
      {
        email: loginData.email,
        otp: loginData.otp,
      }
    );

    localStorage.setItem("token", res.data.token);

    alert(res.data.message);

    const role = res.data.user.role;

    if (role === "Student") {
      navigate("/student");
    } else if (role === "TPO Volunteer") {
      navigate("/volunteer");
    } else if (role === "TPO Head") {
      navigate("/tpo-head");     
    } else if (role === "TPO Faculty") {
      navigate("/faculty");
    } else if (role === "Admin") {
      navigate("/admin");
    }

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};

  // ---------------- Register ----------------


  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/register",
        registerData
      );

      alert(res.data.message);
navigate("/verify", {
  state: {
    email: registerData.email,
  },
});
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="auth-container">

      <div className="overlay"></div>

      <div className="auth-card">

        <h1>MANIT Placements Hub</h1>

        <p className="subtitle">
          Placement Management Portal
        </p>

        {/* Toggle */}

        <div className="auth-tabs">

          <button
            className={isLogin ? "active-tab" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active-tab" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>

        </div>

        {/* LOGIN */}

        {isLogin ? (

          <form onSubmit={handleLogin}>

  <select
    name="role"
    value={loginData.role}
    onChange={handleLoginChange}
    required
  >
    <option value="">Select Role</option>
    <option value="Student">Student</option>
    <option value="TPO Volunteer">TPO Volunteer</option>
    <option value="TPO Head">TPO Head</option>
    <option value="TPO Faculty">TPO Faculty</option>
    <option value="Admin">Admin</option>
  </select>

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={loginData.email}
    onChange={handleLoginChange}
    required
  />

  {!otpSent ? (
    <button
      type="button"
      className="main-btn"
      onClick={sendLoginOTP}
    >
      Send OTP
    </button>
  ) : (
    <>
      <input
        type="text"
        name="otp"
        placeholder="Enter OTP"
        value={loginData.otp}
        onChange={handleLoginChange}
        required
      />

      <button className="main-btn">
        Login
      </button>
    </>
  )}

</form>

        ) : (

          // SIGNUP

          <form onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={registerData.name}
              onChange={handleRegisterChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />


            <button className="main-btn">
              Create Account
            </button>

          </form>

        )}

      </div>

    </div>
  );
};

export default Login;