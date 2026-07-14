import { ShieldCheck } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="admin-navbar">

      <div>
        <h1>Admin Dashboard</h1>
        <p>Manage TPO Heads, Volunteers, Faculty and Admin Accounts</p>
      </div>

      <div className="admin-profile">
        <ShieldCheck size={20} />
        <span>Administrator</span>
      </div>

    </div>
  );
}