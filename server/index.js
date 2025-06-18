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

  const msg = text.toLowerCase();
  let result = "";

  const greenFlagWords = [
    "love", "respect", "boundaries", "emotional intelligence", "therapy", "support", "kids", "values"
  ];

  const redFlagWords = [
    "cheat", "steal", "lie", "abuse", "porn", "gaslight", "control", "manipulate", "toxic", "rude", "mean", "fight", "ghost", "crazy", "weird", "onlyfans"
  ];

  const hasGreenKeyword = greenFlagWords.some(word => msg.includes(word));
  const hasRedKeyword = redFlagWords.some(word => msg.includes(word));

  const greenFlagResponses = [
    "💖 Green Flag:\nOkay, this one's actually sweet. Go ahead and smile at your phone like a clown — I won't judge (but I will keep receipts).",
    "💖 Green Flag:\nWho raised them? Because this is suspiciously healthy.",
    "💖 Green Flag:\nProceed, bestie. Just don’t plan the wedding yet.",
    "💖 Green Flag:\nThey listen, respect boundaries, AND text back? Someone check the sky for signs.",
    "💖 Green Flag:\nOkay fine, fall a little — but wear a helmet."
  ];

  const redFlagResponses = [
    "🚩 RED FLAG ALERT:\nThey’re not emotionally unavailable — they’re just not available, period.",
    "🚩 RED FLAG ALERT:\nIf ‘bare minimum’ was a person, it would be this one.",
    "🚩 RED FLAG ALERT:\nThey say they don’t believe in titles. Translation: they’re dating 4 people.",
    "🚩 RED FLAG ALERT:\nThey call their ex 'crazy' but still watch their story every day.",
    "🚩 RED FLAG ALERT:\nThis person quotes Andrew Tate unironically. Run."
  ];

  const toxicResponses = [
    "💀 TOXIC BEHAVIOR DETECTED:\nThat wasn’t a joke — that was a walking lawsuit waiting to happen.",
    "💀 TOXIC BEHAVIOR DETECTED:\nThey say 'I'm just being honest' and then proceed to be mean.",
    "💀 TOXIC BEHAVIOR DETECTED:\nThey’ve got podcast opinions and zero emotional regulation. Abort mission.",
    "💀 TOXIC BEHAVIOR DETECTED:\nThey gaslight better than your oven.",
    "💀 TOXIC BEHAVIOR DETECTED:\nThey said 'I don't believe in therapy' but absolutely need it."
  ];

  const mixedSignalResponses = [
    "⚠️ MIXED SIGNALS:\nThey said 'I miss you' and disappeared for 3 days. That's called data roaming.",
    "⚠️ MIXED SIGNALS:\nThey flirt at 2am, then ghost by 10am. Classic WiFi crush.",
    "⚠️ MIXED SIGNALS:\nThey sent you a 'good night' text... and their location is at their ex’s place.",
    "⚠️ MIXED SIGNALS:\nThey give just enough to keep you interested — not enough to feel secure.",
    "⚠️ MIXED SIGNALS:\nBreadcrumbing like you're on a trail and they're the forest witch."
  ];

  //  Step 1: Keyword overrides
  if (hasGreenKeyword && !hasRedKeyword) {
    result = greenFlagResponses[Math.floor(Math.random() * greenFlagResponses.length)];
  } else if (hasRedKeyword) {
    result = redFlagResponses[Math.floor(Math.random() * redFlagResponses.length)];
  } else {
    //  Step 2: Tone-based fallbacks
    if (tone === "savage") {
      result = redFlagResponses[Math.floor(Math.random() * redFlagResponses.length)];
    } else if (tone === "serious") {
      result = mixedSignalResponses[Math.floor(Math.random() * mixedSignalResponses.length)];
    } else if (tone === "sassy") {
      result = toxicResponses[Math.floor(Math.random() * toxicResponses.length)];
    } else {
      result = `🧐 Verdict:\n${text}`;
    }
  }

  console.log("Returning result:", result);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});