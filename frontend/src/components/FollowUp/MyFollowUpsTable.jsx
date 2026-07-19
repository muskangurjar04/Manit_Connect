import { useEffect, useState } from "react";
import { getMyFollowUps } from "../../services/followupService.js";
import "./MyFollowUpsTable.css";

function MyFollowUpsTable({ refresh }) {
  const [followUps, setFollowUps] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFollowUps = async () => {
    try {
      const res = await getMyFollowUps();

      console.log("FollowUps:", res);

      setFollowUps(res.followUps);
    } catch (error) {
      console.log("Error fetching followups:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFollowUps();
  }, [refresh]);

  if (loading) {
    return (
      <div className="followup-history">
        <h2>📋 My Follow-Up History</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="followup-history">
      <h2>📋 My Follow-Up History</h2>

      {followUps.length === 0 ? (
        <p>No follow-up records found.</p>
      ) : (
        <div className="followup-table-wrapper">
        <table className="followup-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>HR Name</th>
              <th>Interaction</th>
              <th>Status</th>
              <th>Next Follow-up</th>
              
            </tr>
          </thead>

          <tbody>
            {followUps.map((item) => (
              <tr key={item._id}>
                <td>{item.companyName}</td>
                <td>{item.hrName}</td>
                <td>{item.interactionType}</td>
                <td>
  <span
    className={`status-badge ${item.status
      .replace(/\s+/g, "-")
      .toLowerCase()}`}
  >
    {item.status}
  </span>
</td>
                <td>
                  {new Date(item.nextFollowUp).toLocaleDateString("en-IN")}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}

export default MyFollowUpsTable;