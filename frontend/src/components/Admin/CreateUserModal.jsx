import { useState } from "react";
import { createUser } from "../../services/adminService";

export default function CreateUserModal({ onClose, onUserCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await createUser(formData);

      alert("User Created Successfully");

      onUserCreated();
// Reset Form
setFormData({
  name: "",
  email: "",
  password: "",
  role: "",
});
      onClose();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create user");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create User</h2>

        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="TPO Head">TPO Head</option>
          <option value="TPO Volunteer">TPO Volunteer</option>
          <option value="TPO Faculty">TPO Faculty</option>
        </select>

        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button>

          <button onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}