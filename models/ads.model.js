const mongoose = require("mongoose")

const AdSchema = new mongoose.Schema({
    ad_type: { type: String, required: true },
    image_url: { type: String, required: true },
    video_url: { type: String, required: true },
    redirect_url: { type: String, required: true },
    position: { type: String, required: false },
    active: { type: Boolean, required: true, default:true },
    start_time: Date,
    end_time: Date,
    targeting: mongoose.Schema.Types.Mixed
  });
  
  module.exports = mongoose.model('Ad', AdSchema);