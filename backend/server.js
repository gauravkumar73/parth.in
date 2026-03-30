require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

// ✅ Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify Email (optional debug)
transporter.verify((err, success) => {
  if (err) {
    console.log("❌ Mail Error:", err.message);
  } else {
    console.log("✅ Mail Server Ready");
  }
});

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// ✅ API (SAFE VERSION)
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send("All fields required");
    }

    // ✅ Save DB
    const data = new Contact({ name, email, message });
    await data.save();

    // ✅ Email try-catch (IMPORTANT FIX)
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        html: `
          <h3>New Message</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank You",
        html: `<h3>Thanks ${name}</h3><p>We received your message</p>`,
      });

    } catch (mailErr) {
      console.log("❌ Mail Error:", mailErr.message);
      // 👉 mail fail ho bhi jaye toh API crash nahi hogi
    }

    res.send("Success ✅");

  } catch (err) {
    console.log("🔥 MAIN ERROR:", err);
    res.status(500).send("Server Error");
  }
});