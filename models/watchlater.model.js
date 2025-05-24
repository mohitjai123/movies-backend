const mongoose = require("mongoose")

const ContinueWatchingSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    video_id: mongoose.Schema.Types.ObjectId,
    episode_id: mongoose.Schema.Types.ObjectId,
    progress_seconds: Number,
    last_watched: Date
  });
  
  module.exports = mongoose.model('ContinueWatching', ContinueWatchingSchema);