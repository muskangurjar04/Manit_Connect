import { useState , useEffect} from "react";
import {
  getUsers,
  getDashboard,
} from "../services/adminService";
import TopNavbar from "../components/Admin/TopNavbar";
import DashboardCards from "../components/Admin/DashboardCards";
import UserTable from "../components/Admin/UserTable";
import CreateUserModal from "../components/Admin/CreateUserModal";

import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});

  const loadDashboard = async () => {
  try {
    const dashboard = await getDashboard();
    const usersData = await getUsers();

    setStats(dashboard);
    setUsers(usersData.users);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  loadDashboard();
}, []);

  return (

    <div className="admin-dashboard">

      <TopNavbar />

     <DashboardCards stats={stats} />

      <div className="admin-actions">

        <button
          className="create-btn"
          onClick={() => setShowModal(true)}
        >
          + Create User
        </button>

      </div>

     <UserTable users={users} />

      {showModal && (

        <CreateUserModal
    onClose={() => setShowModal(false)}
    onUserCreated={loadDashboard}
/>

      )}

    </div>

  );
}