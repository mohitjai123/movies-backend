// models/otpVerification.model.js
const mongoose = require("mongoose")
const OTPVerificationSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    otp_code: String,
    is_verified: Boolean,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('OTPVerification', OTPVerificationSchema);