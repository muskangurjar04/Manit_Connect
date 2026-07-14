import "../styles/VolunteerFollowUp.css";

import TopBar from "../components/FollowUp/TopBar";
import DashboardCards from "../components/FollowUp/DashboardCards";
// import InteractionForm from "../components/FollowUp/InteractionForm";
import CompanyFollowUpForm from "../components/FollowUp/CompanyFollowUpForm";
// import RecentReports from "../components/FollowUp/RecentReports";

function VolunteerFollowUp() {
  return (
    <div className="followup-page">

      <TopBar />

      <DashboardCards />

      {/* <InteractionForm /> */}
      <CompanyFollowUpForm />

      {/* <RecentReports /> */}

    </div>
  );
}

export default VolunteerFollowUp;