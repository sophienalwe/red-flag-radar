const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// Health check
app.get("/keep-alive", (req, res) => {
  res.send("Still alive!");
});

// Analyze
app.post("/analyze", (req, res) => {
  console.log("Incoming request:", req.body); 
  const { text, tone } = req.body;

  

  if (!text || !tone) {
    return res.status(400).json({ error: "Missing 'text' or 'tone'" });
  }

  let flag = "green";
  let message = "All good!";

  if (tone === "savage") {
    flag = "red";
    message = `🚩 RUN! Based on what they said: "${text}" 🙃`;
  } else if (tone === "honest") {
    flag = "yellow";
    message = `Hmm... be cautious. "${text}" sounds iffy.`;
  } else if (tone === "scripture") {
    flag = "green";
    message = `Pray about it 🙏🏾. "${text}" might need some discernment.`;
  }

  res.json({ flag, message });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
