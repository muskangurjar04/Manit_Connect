import { Plus } from "lucide-react";

function TopBar() {
  return (
    <div className="followup-topbar">

      <div>

        <h1 className="followup-title">
          Company Follow-Up Report
        </h1>

        <p className="followup-subtitle">
          Record company interactions and maintain follow-up history.
        </p>

      </div>

      <button className="new-report-btn">

        <Plus size={20} />

        New Report

      </button>

    </div>
  );
}

export default TopBar;