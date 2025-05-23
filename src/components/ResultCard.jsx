// src/components/ResultCard.jsx
import React from "react";

export default function ResultCard({ verdict }) {
  if (!verdict) return null;

  // Emoji based on content
  const getEmoji = () => {
    if (!verdict.result) return "❓";
    const message = verdict.result.toLowerCase();
    if (message.includes("red flag")) return "🚩";
    if (message.includes("toxic")) return "💀";
    if (message.includes("love") || message.includes("green flag")) return "💖";
    if (message.includes("mixed signals")) return "⚠️";
    return "🧐";
  };

  // Styled AI verdict message
  const formatResult = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("red flag")) {
      return "🚩 RED FLAG ALERT:\nThis situation smells like heartbreak waiting to happen.";
    }
    if (msg.includes("toxic")) {
      return "💀 TOXIC BEHAVIOR DETECTED:\nProtect your peace. Exit the chat.";
    }
    if (msg.includes("love") || msg.includes("green flag")) {
      return "💖 Green Flag:\nOkayy, Proceed with caution... or butterflies.";
    }
    if (msg.includes("mixed signals")) {
      return "⚠️ CONFUSION:\nThis one’s dancing between red and green like it's a traffic light.";
    }

    return `🧐 Verdict:\n${text}`;
  };

  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-xl rounded-2xl p-6 max-w-xl w-full border border-red-200 dark:border-gray-700 animate-fade-in transition-all">
        <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2 justify-center tracking-tight">
          Verdict <span className="animate-bounce">{getEmoji()}</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center whitespace-pre-line leading-relaxed">
          {formatResult(verdict.result)}
        </p>
      </div>
    </div>
  );
}
