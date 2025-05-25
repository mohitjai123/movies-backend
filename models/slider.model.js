const mongoose = require("mongoose")

const SliderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    video_id: mongoose.Schema.Types.ObjectId,
    active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Slider', SliderSchema);