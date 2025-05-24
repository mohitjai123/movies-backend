const mongoose = require("mongoose")

const TrailerSchema = new mongoose.Schema({
    video_id: mongoose.Schema.Types.ObjectId,
    trailer_url: String,
    duration: Number,
    created_at: { type: Date, default: Date.now }
  });


module.exports = mongoose.model('Trailer', TrailerSchema);