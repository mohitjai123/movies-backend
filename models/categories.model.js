const mongoose = require("mongoose");

const VideoRefSchema = new mongoose.Schema({
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'videos.modelType' // refPath is dynamic reference
  },
  modelType: {
    type: String,
    required: true,
    enum: ['Movies', 'Tvshow', 'Series'] // use model names
  }
}, { _id: false });

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['movies', 'tvshow', 'series'], required: true },
  videos: [VideoRefSchema],
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Categories', CategorySchema);
