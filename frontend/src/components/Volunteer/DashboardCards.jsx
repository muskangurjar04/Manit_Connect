const DashboardCards = ({ placements }) => {
  const total = placements.length;

  const pending = placements.filter(
    (item) => item.status === "Pending"
  ).length;

  const verified = placements.filter(
    (item) => item.status === "Verified"
  ).length;

  const today = placements.filter((item) => {
    const created = new Date(item.createdAt).toDateString();
    const now = new Date().toDateString();
    return created === now;
  }).length;

  const cards = [
    {
      title: "Total Submissions",
      value: total,
    },
    {
      title: "Pending Verification",
      value: pending,
    },
    {
      title: "Verified Records",
      value: verified,
    },
    {
      title: "Today's Reviews",
      value: today,
    },
  ];

  return (
    <>
      <div className="dashboard-header">
        <h1>Verification Management</h1>

        <p>
          Review and process student placement records.
        </p>
      </div>

      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="dashboard-card" key={index}>
            <h4>{card.title}</h4>

            <h2>{card.value}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCards;