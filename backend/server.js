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
    console.log("📥 Incoming Data:", req.body);

    const { name, email, message } = req.body;

    const data = new Contact({ name, email, message });
    await data.save();
    console.log("✅ Data saved to MongoDB");

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form",
        html: `<p>${name} - ${email} - ${message}</p>`,
      });

      console.log("✅ Email sent");

    } catch (mailErr) {
      console.log("❌ Email Error:", mailErr.message);
    }

    res.send("Success ✅");

  } catch (err) {
    console.log("❌ MAIN ERROR:", err.message);
    res.status(500).send(err.message);
  }
});