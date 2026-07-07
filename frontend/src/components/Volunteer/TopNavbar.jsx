const TopNavbar = ({ search, setSearch }) => {
  return (
    <div className="top-navbar">

      <input
  type="text"
  placeholder="Search Student, Company, Branch..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      <div className="profile-section">

        <span>
          TPO Volunteer
        </span>

      </div>

    </div>
  );
};

export default TopNavbar;