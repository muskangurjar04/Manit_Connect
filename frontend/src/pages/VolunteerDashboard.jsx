import { useEffect, useState } from "react";

import DashboardCards from "../components/Volunteer/DashboardCards";
import PendingTable from "../components/Volunteer/PendingTable";
import TopNavbar from "../components/Volunteer/TopNavbar";
import CompanyFollowUpForm from "../components/FollowUp/CompanyFollowUpForm";
import RecentReports from "../components/Volunteer/RecentReports";

import {
  getAllPlacements,
} from "../services/placementService";
import "../styles/VolunteerDashboard.css";

const VolunteerDashboard = () => {

  const [placements, setPlacements] = useState([]);
  const [search, setSearch] = useState("");

  const loadPlacements = async () => {

    try {

     const data =
  await getAllPlacements();

      setPlacements(data.placements);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    loadPlacements();

  }, []);
  const filteredPlacements = placements.filter((item) => {
  
  const keyword = search.toLowerCase();

  return (
    item.student?.name?.toLowerCase().includes(keyword) ||
    item.company?.toLowerCase().includes(keyword) ||
    item.branch?.toLowerCase().includes(keyword) ||
     item.status?.toLowerCase().includes(keyword)
  );

});
const pendingPlacements = filteredPlacements.filter(
  (item) => item.status === "Pending"
);

const verifiedPlacements = filteredPlacements.filter(
  (item) => item.status === "Verified"
);

const rejectedPlacements = filteredPlacements.filter(
  (item) => item.status === "Rejected"
);

const queues = [
  {
    title: "Pending Verification Queue",
    status: "pending",
    data: pendingPlacements,
  },
  {
    title: "Verified Queue",
    status: "verified",
    data: verifiedPlacements,
  },
  {
    title: "Rejected Queue",
    status: "rejected",
    data: rejectedPlacements,
  },
];

const sortedQueues = [...queues].sort((a, b) => {

  const keyword = search.toLowerCase();

  const aMatch = a.status.includes(keyword);
  const bMatch = b.status.includes(keyword);

  if (aMatch && !bMatch) return -1;
  if (!aMatch && bMatch) return 1;

  return 0;

});

  return (

    <div className="dashboard">

      <TopNavbar
  search={search}
  setSearch={setSearch}
/>

      <DashboardCards
        placements={placements}
      />
      <CompanyFollowUpForm />
      <RecentReports />

  {sortedQueues.map((queue) => (

<PendingTable
  key={queue.status}
  title={queue.title}
  placements={queue.data}
  loadPlacements={loadPlacements}
/>

))}

    </div>

  );
};

export default VolunteerDashboard;