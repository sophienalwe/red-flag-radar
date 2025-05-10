// src/components/ResultCard.jsx
import React from "react";

export default function ResultCard({ verdict }) {
  const { flag, message } = verdict;

  // Choose a color based on the flag
  const flagColor = flag === "red" ? "text-red-500" : flag === "yellow" ? "text-yellow-500" : "text-green-500";

  return (
    <div className="mt-8 max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className={`text-3xl font-bold mb-4 ${flagColor}`}>
        {flag === "red" && "🚩 Red Flag!"}
        {flag === "yellow" && "🟨 Yellow Flag!"}
        {flag === "green" && "✅ Green Flag!"}
      </h2>
      <p className="text-lg">{message}</p>
    </div>
  );
}
