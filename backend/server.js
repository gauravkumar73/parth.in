const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ✅ Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// ✅ UPDATED API (with email)
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const data = new Contact({ name, email, message });
    await data.save();

    // 📩 Email to YOU
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

    // 📩 Email to CLIENT
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us",
      html: `
        <h3>Thank you ${name} 🙌</h3>
        <p>We received your message and will contact you soon.</p>
      `,
    });

    res.send("Data Saved & Email Sent ✅");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// Test route (important for Render)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Dynamic port (important for live)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});