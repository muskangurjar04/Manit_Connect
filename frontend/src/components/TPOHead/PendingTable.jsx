import "./PendingTable.css";
import { verifyPlacement, rejectPlacement,} from "../../services/placementService.js";
import { useState } from "react";
const PendingTable = ({ title, placements, loadPlacements }) => {
  const [showModal, setShowModal] = useState(false);

const [selectedId, setSelectedId] = useState(null);

const [reason, setReason] = useState("");
const [showReasonModal, setShowReasonModal] = useState(false);

const [selectedReason, setSelectedReason] = useState("");

  return (
    <div className="table-container">

     <h2 className="table-title">
  {title}
</h2>

      <table>

        <thead>

          <tr>
            <th>Student</th>
            <th>Enrollment</th>
            <th>Branch</th>
            <th>Company</th>
            <th>Mode</th>
            <th>Type</th>
            <th>Package</th>
            <th>Status</th>
           {title === "Rejected Queue" && (
  <th>Reason</th>
)}
            <th>Offer Letter</th>
           {title === "Pending Verification Queue" && (
  <th>Action</th>
)}
          </tr>

        </thead>

        <tbody>

          {placements.length === 0 ? (

            <tr>
              <td
  colSpan={
    title === "Pending Verification Queue"
      ? 8
      : title === "Rejected Queue"
      ? 8
      : 7
  }
>
  No Records Found
</td>
            </tr>

          ) : (

            placements.map((item) => (

              <tr key={item._id}>

                <td>{item.student?.name}</td>

                <td>{item.enrollmentNo}</td>

                <td>{item.branch}</td>

                <td>{item.company}</td>

                <td>{item.placementMode}</td>

                <td>{item.placementType}</td>

                <td>{item.package} LPA</td>

                <td>
                  <span className="pending-badge">
                    {item.status}
                  </span>
                </td>
              
  {title === "Rejected Queue" && (
<td>

<button
className="view-btn"
onClick={() => {

setSelectedReason(item.rejectionReason || "No reason available.");

setShowReasonModal(true);

}}
>

View Reason

</button>

</td>

)}
                

  {/* Offer Letter View */}
  <td>
  <button
    className="view-btn"
   onClick={() =>{
  window.open(item.offerLetter,"_blank");
}}
  >
    View
  </button>
</td>

  {/* Verify Button */}
  {title === "Pending Verification Queue" && (
  <td className="action-buttons">
  <button
   disabled={item.status !== "Pending"}
  className="verify-btn"
  onClick={async () => {
    await verifyPlacement(item._id);
    await loadPlacements();
  }}
>
  ✔
</button>

  {/* Reject Button */}
  <button
   disabled={item.status !== "Pending"}
  className="reject-btn"
  onClick={() => {

  setSelectedId(item._id);

  setShowModal(true);

}}
>
  ✖
</button>

</td>
  )}

              </tr>

            ))

          )}

        </tbody>

      </table>
     {showModal && (

<div className="modal-overlay">

<div className="modal">

<h3>Reject Placement</h3>

<textarea

placeholder="Enter rejection reason..."

value={reason}

onChange={(e)=>setReason(e.target.value)}

/>

<div className="modal-buttons">

<button

onClick={()=>{

setShowModal(false);

setReason("");

}}

>

Cancel

</button>

<button

onClick={async()=>{

if(reason.trim()===""){

alert("Please enter rejection reason");

return;

}

await rejectPlacement(

selectedId,

reason

);

await loadPlacements();

setReason("");

setShowModal(false);

}}

>

Reject

</button>

</div>

</div>

</div>

)}

{showReasonModal && (

<div className="modal-overlay">

  <div className="modal">

    <h3>Rejection Reason</h3>

    <p className="reason-text">
      {selectedReason}
    </p>

    <div className="modal-buttons">

      <button
        onClick={() => setShowReasonModal(false)}
      >
        Close
      </button>

    </div>

  </div>

</div>

)}
    </div>
  );
};

export default PendingTable;