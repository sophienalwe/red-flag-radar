const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://red-flag-radar.onrender.com"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check
app.get("/keep-alive", (req, res) => {
  res.send("Still alive!");
});

// Analyze
app.post("/analyze", (req, res) => {
  const { text, tone } = req.body;
  console.log("Incoming request:", req.body); // DEBUG log

  if (!text || !tone) {
    return res.status(400).json({ error: "Missing 'text' or 'tone'" });
  }

  let result;
// Match tone to response text — these keywords are used by ResultCard to format output
  if (tone === "savage") {
    result = `red flag: "${text}" gave situationship energy and a ghosting forecast.`;
  } else if (tone === "serious") {
    result = `mixed signals: "${text}" feels off — could go either way. You know what you felt.`;
  } else if (tone === "sassy") {
    result = `toxic: "${text}"??? girl be fr.`;
  } else {
    // fallback tone (if user somehow submits a weird value)
    result = `green flag: "${text}" might actually be healthy… weird.`;
  }

  // Log the result before sending it back
  console.log("Returning result:", result);

  // Send back the structured response so frontend can read it like verdict.result
  res.json({ result });
});


app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
