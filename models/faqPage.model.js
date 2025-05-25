const mongoose = require("mongoose")

const FAQPageSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('FAQPage', FAQPageSchema);