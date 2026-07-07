import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-12 max-w-xl w-full text-center">

        <CheckCircle
          className="mx-auto text-green-500 mb-6"
          size={80}
        />

        <h1 className="text-4xl font-bold text-slate-800">
          Thank You!
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Your placement record has been submitted successfully.
        </p>

        <p className="mt-2 text-gray-500">
          The Training & Placement Cell will verify your submission.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 px-8 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Go to Home
        </button>

      </div>
    </div>
  );
}