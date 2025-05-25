// models/otpVerification.model.js
const mongoose = require("mongoose")
const OTPVerificationSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    otp_code: { type: String, required: true },
    is_verified: { type: Boolean, default:false },
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('OTPVerification', OTPVerificationSchema);