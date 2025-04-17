// server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const { email, password, name, registrationDate } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "Eksik bilgi var" });
  }

  const user = { email, name, registrationDate };
  return res.status(201).json({ message: "Kayıt başarılı", user });
});

app.listen(5000, () => {
  console.log("Sunucu 5000 portunda çalışıyor");
});
