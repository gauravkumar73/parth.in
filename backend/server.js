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

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// API
app.post("/contact", async (req, res) => {
  try {
    const data = new Contact(req.body);
    await data.save();
    res.send("Data Saved");
  } catch (err) {
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