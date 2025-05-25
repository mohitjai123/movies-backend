const mongoose = require("mongoose")

const PolicySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, required: true },
    updated_at: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Policy', PolicySchema);