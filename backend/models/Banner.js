const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  desktopImage: {
    type: String,
    required: true,
  },
  mobileImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Banner", bannerSchema);