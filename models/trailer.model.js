const mongoose = require("mongoose")

const TrailerSchema = new mongoose.Schema({
    video_id: mongoose.Schema.Types.ObjectId,
    trailer_url: { type: String, required: true },
    duration: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
  });


module.exports = mongoose.model('Trailer', TrailerSchema);