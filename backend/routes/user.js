const express = require("express");
const router = express.Router();
const User = require("../models/User");

// SAVE FORM DATA
router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL USERS (ADMIN)
router.get("/all", async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
});

module.exports = router;