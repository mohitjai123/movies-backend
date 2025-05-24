const mongoose = require("mongoose")

const EpisodeSchema = new mongoose.Schema({
    video_id: mongoose.Schema.Types.ObjectId,
    title: String,
    episode_number: Number,
    season: Number,
    video_url: String,
    duration: Number,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Episode', EpisodeSchema);