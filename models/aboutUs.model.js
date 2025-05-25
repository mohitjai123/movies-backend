// models/aboutUs.model.js
const mongoose = require("mongoose")

const AboutUsSchema = new mongoose.Schema({
    content: { type: String, required: true },
    updated_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('AboutUs', AboutUsSchema);