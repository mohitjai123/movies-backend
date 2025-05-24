const mongoose = require("mongoose")

const TrendingSchema = new mongoose.Schema({
    video_id: mongoose.Schema.Types.ObjectId,
    trending_score: Number,
    week_start: Date
  });

  module.exports = mongoose.model('Trending', TrendingSchema);