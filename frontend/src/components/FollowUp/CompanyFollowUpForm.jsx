import { useState } from "react";
import { createFollowUp } from "../../services/followUpService";
import "./CompanyFollowUpForm.css";
import "./CompanyFollowUpForm.css";

function CompanyFollowUpForm() {

  const [formData, setFormData] = useState({
    companyName: "",
    hrName: "",
    interactionType: "Phone Call",
    status: "Initial Contact Made",
    notes: "",
    nextFollowUp: "",
  });
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting:");
console.log(JSON.stringify(formData, null, 2));

  try {
    console.log(formData);

    await createFollowUp(formData);

    alert("Interaction Saved Successfully");

    setFormData({
      companyName: "",
      hrName: "",
      interactionType: "Phone Call",
      status: "Initial Contact Made",
      notes: "",
      nextFollowUp: "",
    });

  } catch (error) {

    console.log(error);

    alert("Failed to Save Interaction");

  }
};
  return (
    <div className="followup-form">

      <div className="form-header">
        <h2>📝 Record New Interaction</h2>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="row">

          <div className="field">
            <label>Company Name</label>
            <input
  type="text"
  name="companyName"
  value={formData.companyName}
  onChange={handleChange}
  placeholder="Search or enter company name"
/>
          </div>

          <div className="field">
            <label>Point of Contact</label>
            <input
  type="text"
  name="hrName"
  value={formData.hrName}
  onChange={handleChange}
  placeholder="HR / Recruiter Name"
/>
          </div>

        </div>

        <div className="row">

          <div className="field">
            <label>Interaction Type</label>

            <select
              name="interactionType"
              value={formData.interactionType}
              onChange={handleChange}
            >

              <option>Phone Call</option>

              <option>Email</option>

              <option>LinkedIn</option>

              <option>WhatsApp</option>

              <option>Meeting</option>

            </select>

          </div>

          <div className="field">

            <label>Status</label>

            <select
  name="status"
  value={formData.status}
  onChange={handleChange}
>

              <option>Initial Contact Made</option>

              <option>Waiting for Reply</option>

              <option>Interested</option>

              <option>Not Interested</option>

              <option>Interview Scheduled</option>

              <option>Placement Confirmed</option>

            </select>

          </div>

        </div>

        <div className="field">

          <label>Conversation Notes</label>

          <textarea
  name="notes"
  rows="5"
  value={formData.notes}
  onChange={handleChange}
  placeholder="Write discussion summary..."
/>

        </div>

        <div className="row">

          <div className="field">

            <label>Next Follow-up Date</label>

            <input
  type="date"
  name="nextFollowUp"
  value={formData.nextFollowUp}
  onChange={handleChange}
/>

          </div>

          <div className="field button-field">

            <button type="submit">

              Save Interaction

            </button>

          </div>

        </div>

      </form>

    </div>
  );
}

export default CompanyFollowUpForm;