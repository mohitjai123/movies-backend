const mongoose = require("mongoose")

const VideoProgressSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    video_id: mongoose.Schema.Types.ObjectId,
    episode_id: mongoose.Schema.Types.ObjectId,
    progress_seconds:{ type: Number, required: true },
    updated_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('VideoProgress', VideoProgressSchema);
