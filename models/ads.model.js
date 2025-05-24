const mongoose = require("mongoose")

const AdSchema = new mongoose.Schema({
    ad_type: String,
    image_url: String,
    video_url: String,
    redirect_url: String,
    position: String,
    active: Boolean,
    start_time: Date,
    end_time: Date,
    targeting: mongoose.Schema.Types.Mixed
  });
  
  module.exports = mongoose.model('Ad', AdSchema);