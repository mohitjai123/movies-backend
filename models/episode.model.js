const mongoose = require("mongoose")

const EpisodeSchema = new mongoose.Schema({
    video_id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    episode_number: { type: Number, required: true },
    season: { type: Number, required: true },
    video_url: { type: String, required: true },
    duration: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Episode', EpisodeSchema);