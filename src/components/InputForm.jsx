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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <textarea
        className="w-full border rounded-md p-3 mb-4"
        placeholder="What did they say or do?"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <select
        className="w-full border rounded-md p-3 mb-4"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option value="savage">🔥 Savage Roast</option>
        <option value="honest">💖 Encouraging Honesty</option>
        <option value="scripture">🙏 Scripture Wisdom</option>
      </select>

      <button
        type="submit"
        className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg"
      >
        Analyze 🚩
      </button>
    </form>
  );
}


