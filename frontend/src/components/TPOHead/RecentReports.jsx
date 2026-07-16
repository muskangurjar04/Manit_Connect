import { useEffect, useState } from "react";
import { getAllFollowUps } from "../../services/followUpService";
import "./RecentReports.css";

function RecentReports() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const res = await getAllFollowUps();
      setReports(res.followUps);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="recent-report-container">

      <h2>Recent Follow-Up Reports</h2>

      <table>

        <thead>
          <tr>
            <th>Volunteer</th>
            <th>Company</th>
            <th>HR Contact</th>
            <th>Last Interaction</th>
            <th>Next Follow-Up</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {reports.map((item) => (

            <tr key={item._id}>

              <td>{item.volunteer?.name}</td>

              <td>{item.companyName}</td>

              <td>{item.hrName}</td>

              <td>
                {new Date(item.createdAt).toLocaleDateString()}
              </td>

              <td>
                {new Date(item.nextFollowUp).toLocaleDateString()}
              </td>

              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentReports;