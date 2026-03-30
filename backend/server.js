require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

// Mail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.log("❌ Mail Error:", err.message);
  else console.log("✅ Mail Server Ready");
});

// Schema
const Contact = mongoose.model("Contact", {
  name: String,
  email: String,
  message: String,
});

// API
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send("All fields required");
    }

    await new Contact({ name, email, message }).save();

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form",
        html: `<p>${name} (${email}): ${message}</p>`,
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank You",
        html: `<h3>Thanks ${name}</h3>`,
      });

    } catch (e) {
      console.log("⚠️ Mail Failed:", e.message);
    }

    res.send("Success ✅");

  } catch (err) {
    console.log("❌ ERROR:", err.message);
    res.status(500).send("Server Error");
  }
});

// Root
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🚀 Server running"));