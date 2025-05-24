const mongoose = require("mongoose")

const PolicySchema = new mongoose.Schema({
    title: String,
    content: String,
    type: String,
    updated_at: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Policy', PolicySchema);