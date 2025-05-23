import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [verdict, setVerdict] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = async (text, tone) => {
    setLoading(true);
    setVerdict(null);

    try {
      const response = await fetch("https://red-flag-api-hvgb.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, tone }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      setVerdict(data);
    } catch (err) {
      console.error("Error analyzing:", err);
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-red-100 to-red-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-8 transition-all duration-500">
        <div className="w-full max-w-2xl text-center">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full shadow"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
  
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight flex items-center justify-center gap-2">
            🚩 Red Flag Radar
          </h1>
          <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-8">
            Is it love... or a <span className="text-red-500">🚩</span> in disguise?
          </p>
  
          <InputForm onSubmit={handleSubmit} />
          {loading && <p className="mt-4 animate-pulse">Analyzing... 🧠</p>}
          {verdict && <ResultCard verdict={verdict} />}
  
          <div className="fixed bottom-6 right-6 text-5xl opacity-10 select-none pointer-events-none hidden sm:block">
            ❤️‍🔥
          </div>
        </div>
      </div>
    </div>
  );  
}
