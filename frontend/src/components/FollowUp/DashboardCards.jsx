import "./DashboardCards.css";
import {
  Building2,
  PhoneCall,
  CalendarClock,
  BadgeCheck,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/followupService.js";

function DashboardCards({ refresh }) {
  const [stats, setStats] = useState({
    totalContacted: 0,
    todayCalls: 0,
    pending: 0,
    conversions: 0,
  });

  useEffect(() => {
  loadDashboard();
}, [refresh]);

  const loadDashboard = async () => {
    try {
      const data = await getDashboardStats();

      setStats({
        totalContacted: data.totalContacted,
        todayCalls: data.todayCalls,
        pending: data.pending,
        conversions: data.conversions,
      });
    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };

  const cards = [
    {
      title: "TOTAL CONTACTED",
      value: stats.totalContacted,
      icon: <Building2 size={28} />,
      color: "#EAF2FF",
      iconColor: "#2563EB",
    },
    {
      title: "TODAY'S CALLS",
      value: stats.todayCalls,
      icon: <PhoneCall size={28} />,
      color: "#F3E8FF",
      iconColor: "#7E22CE",
    },
    {
      title: "PENDING FOLLOW-UPS",
      value: stats.pending,
      icon: <CalendarClock size={28} />,
      color: "#FFF7E6",
      iconColor: "#D97706",
    },
    {
      title: "CONVERSIONS",
      value: stats.conversions,
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
            style={{
              background: card.color,
              color: card.iconColor,
            }}
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