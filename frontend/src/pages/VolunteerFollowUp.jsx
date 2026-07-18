import { useState } from "react";
import "../styles/VolunteerFollowUp.css";

import TopBar from "../components/FollowUp/TopBar";
import DashboardCards from "../components/FollowUp/DashboardCards";
import CompanyFollowUpForm from "../components/FollowUp/CompanyFollowUpForm";
import MyFollowUpsTable from "../components/FollowUp/MyFollowUpsTable";

function VolunteerFollowUp() {

  const [refresh, setRefresh] = useState(false);

  const refreshDashboard = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="followup-page">

      <TopBar />

      <DashboardCards refresh={refresh} />

      <CompanyFollowUpForm
        onSuccess={refreshDashboard}
      />

      <MyFollowUpsTable refresh={refresh} />

    </div>
  );
}

export default VolunteerFollowUp;