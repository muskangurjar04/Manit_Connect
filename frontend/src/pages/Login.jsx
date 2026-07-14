import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  // ---------------- Login ----------------

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        loginData
      );
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      
      alert(res.data.message);
      navigate("/placement");

const role = res.data.user.role;

if (role === "Student") {
  navigate("/student");
} else if (role === "TPO Volunteer") {
  navigate("/volunteer");
} else if (role === "TPO Faculty") {
  navigate("/faculty");
}

      // Later:
      // navigate("/dashboard");
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

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />

            <button className="main-btn">
              Login
            </button>

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

            <select
              name="role"
              value={registerData.role}
              onChange={handleRegisterChange}
              required
            >
              <option value="">
                Select Role
              </option>

              <option value="Student">
                Student
              </option>

              <option value="TPO Volunteer">
                TPO Volunteer
              </option>

              <option value="TPO Faculty">
                TPO Faculty
              </option>

            </select>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
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