# 🚩 Red Flag Radar

**Is it love... or a red flag in disguise?**  
Red Flag Radar is a fun, AI-lite relationship analyzer that lets users submit questionable messages and get a spicy, honest verdict — ranging from savage roasts to sassy bestie energy.

---

## 💡 Features

- 🔍 Analyze messages for red flags, mixed signals, or green flag energy
- 🎯 Select tone: **Savage Roast**, **Serious Red Flag Check**, or **Sassy Bestie Analysis**
- 🌗 Dark mode toggle for full-day drama
- 🧠 Backend built in Node.js + Express, hosted on Render
- 💅 Frontend built in React + Tailwind CSS, fully responsive and fabulous

----

## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express  
- **Deployment**: Render (frontend + backend separately deployed)  
- **Language**: JavaScript (ES6+)

---

## 🔧 How It Works

1. User inputs a message that gave ✨ questionable ✨ energy.
2. Selects a tone (e.g. "Sassy Bestie Analysis 💅").
3. Hits **Analyze**.
4. The frontend sends the text + tone to the backend via POST request.
5. Backend returns a judgmental response (e.g. "red flag: 'wyd?' at 2am is not romantic.").
6. The frontend formats and sasses it up using keyword detection.

---

## 📦 Installation (for local dev)

```bash
git clone https://github.com/sophienalwe/red-flag-radar
cd red-flag-radar
npm install

# Run frontend
cd client
npm start

# Run backend
cd server
node index.js
