// src/components/InputForm.jsx
import React, { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("savage");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text, tone);
    setText(""); // Clear input after submitting
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white p-6 rounded-2xl shadow-xl w-full max-w-xl mx-auto flex flex-col gap-4 border border-red-100 animate-fade-in"
       >
      <textarea
        className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-4 text-base resize-none focus:outline-none focus:ring-2 focus:ring-red-400 transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
        placeholder="What did they say or do?"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >

      <option value="savage">Savage Roast 🔥</option>
      <option value="serious">Serious Red Flag Check 🚨</option>
      <option value="sassy">Sassy Bestie Analysis 💅</option>
      </select>

       <button
        type="submit"
        className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 transform hover:scale-105">
        Analyze 🚩
       </button>

    </form>
  );
}
