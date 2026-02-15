import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(".")); // damit index.html geladen wird

// 💡 Dein kostenloser HF-Token (ersetzte hier)
const HF_TOKEN = "hf_xxxxxxxxxxxxxxxxxxxxxxxx";

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: userMessage }),
    });

    const data = await response.json();

    // Einige Modelle liefern ein Array, andere ein Objekt:
    const reply =
      data.generated_text ||
      (Array.isArray(data) && data[0]?.generated_text) ||
      "Ich habe dich leider nicht verstanden.";

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Ups, da ist etwas schiefgelaufen 😅" });
  }
});

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"));