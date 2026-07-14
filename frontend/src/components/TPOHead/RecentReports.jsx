import "./RecentReports.css";

function RecentReports() {
  const reports = [
    {
      company: "Google",
      hr: "Ankit Sharma",
      date: "10 Jul 2026",
      nextFollowUp: "15 Jul 2026",
      status: "Waiting for Reply",
    },
    {
      company: "Microsoft",
      hr: "Priya Verma",
      date: "08 Jul 2026",
      nextFollowUp: "12 Jul 2026",
      status: "Interested",
    },
    {
      company: "Amazon",
      hr: "Rohit Singh",
      date: "05 Jul 2026",
      nextFollowUp: "11 Jul 2026",
      status: "Interview Scheduled",
    },
  ];

  return (
    <div className="recent-report-container">

      <h2>Recent Follow-Up Reports</h2>

      <table>

        <thead>

          <tr>
            <th>Company</th>
            <th>HR Contact</th>
            <th>Last Interaction</th>
            <th>Next Follow-Up</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {reports.map((item, index) => (

            <tr key={index}>

              <td>{item.company}</td>

              <td>{item.hr}</td>

              <td>{item.date}</td>

              <td>{item.nextFollowUp}</td>

              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentReports;