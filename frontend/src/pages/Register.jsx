// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/auth/register",
//         formData
//       );

//       alert(res.data.message);

//       navigate("/verify");

//     } catch (error) {
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Register</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           onChange={handleChange}
//         />

//         <br />
      

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           onChange={handleChange}
//         />

//         <br />
       

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           onChange={handleChange}
//         />

//         <br />
       
        
//         <select
//   name="role"
//   value={formData.role}
//   onChange={handleChange}
// >
//   <option value="">Select Role</option>
//   <option value="Student">Student</option>
//   <option value="TPO Volunteer">TPO Volunteer</option>
//   <option value="TPO Faculty">TPO Faculty</option>
// </select> 

// <br/>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
//  <p>
//   Already Registered?
//   <span
//     onClick={() => navigate("/login")}
//     style={{
//       color: "#7c3aed",
//       cursor: "pointer",
//       marginLeft: "5px",
//     }}
//   >
//     Login
//   </span>
// </p>

// export default Register;