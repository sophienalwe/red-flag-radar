// src/components/ResultCard.jsx
import React from "react";

export default function ResultCard({ verdict }) {
  const safeText = verdict?.result;

  if (!safeText || typeof safeText !== "string") {
    return (
      <div className="mt-8 flex justify-center">
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-xl rounded-2xl p-6 max-w-xl w-full border border-red-200 dark:border-gray-700 animate-fade-in transition-all">
          <h2 className="text-2xl font-bold mb-2 text-center">🛑 Error</h2>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Could not generate a verdict. Please try a different input.
          </p>
        </div>
      </div>
    );
  }

  // Pull emoji from the result text for extra spice
  const getEmoji = () => {
    const message = safeText.toLowerCase();
    if (message.includes("red flag")) return "🚩";
    if (message.includes("toxic")) return "💀";
    if (message.includes("love") || message.includes("green flag")) return "💖";
    if (message.includes("mixed signals") || message.includes("mixed")) return "⚠️";
    return "🧐";
  };

  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-xl rounded-2xl p-6 max-w-xl w-full border border-red-200 dark:border-gray-700 animate-fade-in transition-all">
        <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2 justify-center tracking-tight">
          Verdict <span className="animate-bounce">{getEmoji()}</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center whitespace-pre-line leading-relaxed">
          {safeText}
        </p>
      </div>
    </div>
  );
}