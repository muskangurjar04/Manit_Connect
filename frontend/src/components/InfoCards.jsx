export default function InfoCards() {
  const cards = [
    {
      title: "Secure Verification",
      desc: "Your offer letter is securely stored and reviewed only by the Training & Placement Cell.",
      icon: "🔒",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Verification Timeline",
      desc: "Verification generally takes 2–5 working days after submission.",
      icon: "⏳",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Need Help?",
      desc: "Contact the T&P Cell if you face any issues while submitting your placement record.",
      icon: "📞",
      color: "bg-yellow-50 border-yellow-200",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-2xl border p-6 shadow-sm ${card.color}`}
        >
          <div className="text-4xl">{card.icon}</div>

          <h3 className="font-bold text-lg mt-4">
            {card.title}
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}