const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
    title: String,
    description: String,
    category_id: mongoose.Schema.Types.ObjectId,
    video_url: String,
    vertical_thumbnail_url: String,
    horizontal_thumbnail_url: String,
    duration: Number,
    is_premium: Boolean,
    status: String,
    created_at: { type: Date, default: Date.now },
    uploaded_by: mongoose.Schema.Types.ObjectId
  });

module.exports = mongoose.model('Video', VideoSchema);