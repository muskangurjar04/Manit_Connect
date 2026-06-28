import { useEffect, useState } from "react";

import DashboardCards from "../components/Volunteer/DashboardCards";
import PendingTable from "../components/Volunteer/PendingTable";
import TopNavbar from "../components/Volunteer/TopNavbar";

import {
  getAllPlacements,
} from "../services/placementService";
import "../styles/VolunteerDashboard.css";

const VolunteerDashboard = () => {

  const [placements, setPlacements] = useState([]);

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

  return (

    <div className="dashboard">

      <TopNavbar />

      <DashboardCards
        placements={placements}
      />

      <PendingTable
        placements={placements}
      />

    </div>

  );
};

export default VolunteerDashboard;