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

    // 1️⃣ Save to DB
    const data = new Contact({ name, email, message });
    await data.save();

    // 2️⃣ Try sending email (FAIL ho to bhi API chale)
    try {
      // Email to YOU
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

      // Email to CLIENT
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank You for Contacting Us",
        html: `
          <h3>Thank you ${name} 🙌</h3>
          <p>We received your message and will contact you soon.</p>
        `,
      });

      console.log("✅ Emails Sent");

    } catch (mailErr) {
      console.log("⚠️ Email Failed:", mailErr.message);
    }

    // 3️⃣ Always success response
    res.send("Form Submitted ✅");

  } catch (err) {
    console.log("❌ MAIN ERROR:", err.message);
    res.status(500).send("Server Error");
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});