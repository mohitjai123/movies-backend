const mongoose = require("mongoose")

const LoginAttemptSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    success: Boolean,
    attempted_at: { type: Date, default: Date.now },
    ip_address: String
  });
  
  module.exports = mongoose.model('LoginAttempt', LoginAttemptSchema);