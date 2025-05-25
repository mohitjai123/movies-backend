const mongoose = require("mongoose")

const DeleteRequestSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    reason: { type: String, required: true },
    requested_at: { type: Date, default: Date.now },
    status: String
  });
  
  module.exports = mongoose.model('DeleteRequest', DeleteRequestSchema);