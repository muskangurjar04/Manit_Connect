import "./VerifiedStudentsTable.css";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const VerifiedStudentsTable = ({ students }) => {
const [search, setSearch] = useState("");
const [branch, setBranch] = useState("");

const filteredStudents = students.filter((student) => {
  const matchSearch =
    student.student?.name
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||
    student.enrollmentNo
      ?.toLowerCase()
      .includes(search.toLowerCase());

  const matchBranch =
    branch === "" || student.branch === branch;

  return matchSearch && matchBranch;
});

const exportPDF = () => {

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Verified Students Report", 14, 18);

  doc.setFontSize(11);
  doc.text(
    `Generated on: ${new Date().toLocaleDateString()}`,
    14,
    28
  );

  autoTable(doc, {

    startY: 35,

    head: [[
      "Enrollment",
      "Student",
      "Branch",
      "Company",
       "Mode",
       "Type",
      "Package (LPA)",
      "Verification Date"
    ]],

    body: filteredStudents.map((student) => [

      student.enrollmentNo,

      student.student?.name,

      student.branch,

      student.company,

      student.placementMode,

      student.placementType,

      student.package,

      new Date(student.updatedAt).toLocaleDateString(),

    ]),

  });

  doc.save("Verified_Students_Report.pdf");

};

  return (
    <div className="table-container">

      <div className="table-header">

  <h2 className="table-title">
    Verified Student Database
  </h2>

  <div className="table-actions">

    <input
      type="text"
      placeholder="Search Name, Enrollment..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      value={branch}
      onChange={(e) => setBranch(e.target.value)}
    >
      <option value="">All Branches</option>
      <option value="CSE">Computer Science & Engineering</option>
<option value="IT">Information Technology</option>
<option value="ECE">Electronics & Communication Engineering</option>
<option value="EE">Electrical Engineering</option>
<option value="ME">Mechanical Engineering</option>
<option value="CE">Civil Engineering</option>
    </select>
<button
  className="export-btn"
  onClick={exportPDF}
>
  Export PDF
</button>
  </div>

</div>

      <table>

        <thead>
          <tr>
            <th>Enrollment</th>
            <th>Student Name</th>
            <th>Branch</th>
            <th>Company</th>
            <th>Mode</th>
            <th>Type</th>
            <th>Package (LPA)</th>
            <th>Verification Date</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.length === 0 ? (

            <tr>
              <td colSpan="6">
                No Verified Students
              </td>
            </tr>

          ) : (

           filteredStudents.map((student) => (

              <tr key={student._id}>

                <td>{student.enrollmentNo}</td>

                <td>{student.student?.name}</td>

                <td>{student.branch}</td>

                <td>{student.company}</td>

                <td>{student.placementMode}</td>

                <td>{student.placementType}</td>

                <td>{student.package}</td>

                <td>
                  {new Date(student.updatedAt).toLocaleDateString()}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default VerifiedStudentsTable;