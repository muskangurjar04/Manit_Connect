import "./FacultyCards.css";

const FacultyCards = ({ stats }) => {

  return (

    <div className="faculty-cards">

      <div className="faculty-card">
        <p>Total Verified Students</p>
        <h2>{stats.verifiedCount || 0}</h2>
      </div>

      <div className="faculty-card">
        <p>Rejected Students</p>
        <h2>{stats.rejectedCount || 0}</h2>
      </div>

      <div className="faculty-card">
        <p>Highest Package</p>
        <h2>{stats.highestPackage || 0} LPA</h2>
      </div>

      <div className="faculty-card">
        <p>Average Package</p>
        <h2>{stats.averagePackage || 0} LPA</h2>
      </div>

    </div>

  );
};

export default FacultyCards;