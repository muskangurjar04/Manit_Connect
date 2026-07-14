import { useEffect, useState } from "react";

import FacultyNavbar from "../components/Faculty/FacultyNavbar";
import FacultyCards from "../components/Faculty/FacultyCards";
import VerifiedStudentsTable from "../components/Faculty/VerifiedStudentsTable";

import { getFacultyAnalytics } from "../services/facultyService";

import "../styles/FacultyDashboard.css";

const FacultyDashboard = () => {

  const [stats, setStats] = useState({});

  const [students, setStudents] = useState([]);

  const loadData = async () => {

    try {

      const data = await getFacultyAnalytics();

      setStats(data.stats);

      setStudents(data.students);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    loadData();

  }, []);

  return (

    <div className="dashboard">

      <FacultyNavbar />
      
      <div className="faculty-header">

  <h1 className="faculty-title">
    Faculty Analytics Overview
  </h1>

  <p className="faculty-subtitle">
    Real-time placement statistics and verification metrics for the current academic year.
  </p>

</div>

      <FacultyCards stats={stats} />

      <VerifiedStudentsTable students={students} />

    </div>

  );

};

export default FacultyDashboard;