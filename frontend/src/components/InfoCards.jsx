export default function InfoCards() {
  const cards = [
    {
      title: "Verification Timeline",
      text: "Your submission is usually reviewed within 2–5 working days.",
      color: "border-blue-200 bg-blue-50",
      icon: "⏳",
    },
    {
      title: "Secure Submission",
      text: "Your uploaded documents are encrypted and only accessible by the T&P Cell.",
      color: "border-green-200 bg-green-50",
      icon: "🔒",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-2xl border ${card.color} p-6`}
        >
          <div className="text-3xl">{card.icon}</div>

          <h3 className="font-bold text-lg mt-4">
            {card.title}
          </h3>

          <p className="text-gray-600 mt-2 leading-7">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}