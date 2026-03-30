require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));
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
    console.log("📥 Incoming Data:", req.body);

    const { name, email, message } = req.body;

    // ❗ Validation (important)
    if (!name || !email || !message) {
      return res.status(400).send("All fields required");
    }

    // ✅ Save to DB
    const data = new Contact({ name, email, message });
    await data.save();
    console.log("✅ Data saved to MongoDB");

    // ✅ Send response FIRST (fast response)
    res.send("Form Submitted ✅");

    // ⚠️ Email async (background me chalega)
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form",
        html: `
          <h3>New Contact</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      console.log("✅ Email sent");

    } catch (mailErr) {
      console.log("❌ Email Error:", mailErr.message);
    }

  } catch (err) {
    console.log("❌ MAIN ERROR:", err.message);
    res.status(500).send("Server Error");
  }
});