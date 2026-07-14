import "./DashboardCards.css";
import {
  Building2,
  PhoneCall,
  CalendarClock,
  BadgeCheck,
} from "lucide-react";

function DashboardCards() {
  const cards = [
    {
      title: "TOTAL CONTACTED",
      value: 156,
      icon: <Building2 size={28} />,
      color: "#EAF2FF",
      iconColor: "#2563EB",
    },
    {
      title: "TODAY'S CALLS",
      value: 12,
      icon: <PhoneCall size={28} />,
      color: "#F3E8FF",
      iconColor: "#7E22CE",
    },
    {
      title: "PENDING FOLLOW-UPS",
      value: 45,
      icon: <CalendarClock size={28} />,
      color: "#F3E8FF",
      iconColor: "#7E22CE",
    },
    {
      title: "CONVERSIONS",
      value: 28,
      icon: <BadgeCheck size={28} />,
      color: "#E8FFF3",
      iconColor: "#059669",
    },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div
            className="card-icon"
            style={{ background: card.color, color: card.iconColor }}
          >
            {card.icon}
          </div>

          <div className="card-content">
            <p>{card.title}</p>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;