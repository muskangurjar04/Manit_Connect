import {
  Users,
  UserCog,
  UserCheck,
  Shield,
} from "lucide-react";

export default function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Admins",
      value: stats.admins || 0,
      icon: <Shield size={28} />,
    },
    {
      title: "TPO Heads",
      value: stats.heads || 0,
      icon: <UserCog size={28} />,
    },
    {
      title: "Volunteers",
      value: stats.volunteers || 0,
      icon: <Users size={28} />,
    },
    {
      title: "Faculty",
      value: stats.faculty || 0,
      icon: <UserCheck size={28} />,
    },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon">
            {card.icon}
          </div>

          <h2>{card.value}</h2>

          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}