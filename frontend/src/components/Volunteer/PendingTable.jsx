import "./PendingTable.css";
import { verifyPlacement, rejectPlacement,} from "../../services/placementService.js";

const PendingTable = ({ placements }) => {
  return (
    <div className="table-container">

      <h2 className="table-title">
        Pending Verification Queue
      </h2>

      <table>

        <thead>

          <tr>
            <th>Student</th>
            <th>Enrollment</th>
            <th>Branch</th>
            <th>Company</th>
            <th>Package</th>
            <th>Status</th>
            <th>Offer Letter</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {placements.length === 0 ? (

            <tr>
              <td colSpan="7">
                No Pending Records
              </td>
            </tr>

          ) : (

            placements.map((item) => (

              <tr key={item._id}>

                <td>{item.student?.name}</td>

                <td>{item.enrollmentNo}</td>

                <td>{item.branch}</td>

                <td>{item.company}</td>

                <td>{item.package} LPA</td>

                <td>
                  <span className="pending-badge">
                    {item.status}
                  </span>
                </td>

                

  {/* Offer Letter View */}
  <td>
  <button
    className="view-btn"
   onClick={() =>{
    console.log(item.offerLetter);
  window.open(
    `http://localhost:5000${item.offerLetter}`,
    "_blank"
  )
}}
  >
    View
  </button>
</td>

  {/* Verify Button */}
  <td className="action-buttons">
  <button
    className="verify-btn"
    onClick={() => verifyPlacement(item._id)}
  >
    ✔
  </button>

  {/* Reject Button */}
  <button
    className="reject-btn"
    onClick={() => rejectPlacement(item._id)}
  >
    ✖
  </button>

</td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default PendingTable;