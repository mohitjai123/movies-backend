const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category_id: mongoose.Schema.Types.ObjectId,
    video_url: { type: String, required: true },
    vertical_thumbnail_url: { type: String, required: true },
    horizontal_thumbnail_url: { type: String, required: true },
    duration: { type: Number, required: true },
    is_premium: { type: Boolean, default: true },
    status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now },
    uploaded_by: mongoose.Schema.Types.ObjectId
  });

module.exports = mongoose.model('Video', VideoSchema);