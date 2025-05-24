const mongoose = require("mongoose")

const SliderSchema = new mongoose.Schema({
    title: String,
    image_url: String,
    video_id: mongoose.Schema.Types.ObjectId,
    active: Boolean,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Slider', SliderSchema);