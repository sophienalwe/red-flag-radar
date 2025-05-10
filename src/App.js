import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [verdict, setVerdict] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (text, tone) => {
    setLoading(true);
    setVerdict(null);

    try {
      const response = await fetch("https://red-flag-api-ogeb.onrender.com/analyze", {
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
    <div className="min-h-screen bg-pink-50 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🚩 Red Flag Radar</h1>
      <p className="mb-6 text-lg">Is it love... or a 🚩 in disguise?</p>
      <InputForm onSubmit={handleSubmit} />
      {loading && <p className="mt-4">Analyzing... 🧠</p>}
      {verdict && <ResultCard verdict={verdict} />}
    </div>
  );
}
