import "./RecentReports.css";

function RecentReports() {

  const reports = [

    {
      company: "Microsoft",
      hr: "Priya Sharma",
      interaction: "08 Jul 2026",
      followup: "12 Jul 2026",
      status: "Interested",
      volunteer: "Rahul Pandey"
    },

    {
      company: "Google",
      hr: "Ankit Verma",
      interaction: "07 Jul 2026",
      followup: "10 Jul 2026",
      status: "Waiting",
      volunteer: "Muskan"
    },

    {
      company: "Amazon",
      hr: "Karthik Iyer",
      interaction: "06 Jul 2026",
      followup: "Pending",
      status: "Converted",
      volunteer: "Rahul"
    }

  ];

  return (

    <div className="recent-reports">

      <h2>Recent Follow-up Reports</h2>

      <input
        type="text"
        placeholder="Search company..."
        className="search-box"
      />

      <table>

        <thead>

          <tr>

            <th>Company</th>

            <th>HR Name</th>

            <th>Last Interaction</th>

            <th>Next Follow-up</th>

            <th>Status</th>

            <th>Volunteer</th>

          </tr>

        </thead>

        <tbody>

          {reports.map((report,index)=>(

            <tr key={index}>

              <td>{report.company}</td>

              <td>{report.hr}</td>

              <td>{report.interaction}</td>

              <td>{report.followup}</td>

              <td>

                <span className={`status ${report.status.toLowerCase()}`}>

                  {report.status}

                </span>

              </td>

              <td>{report.volunteer}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentReports;