const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  created_at: { type: Date, default: Date.now },
  watch_history: { type: [mongoose.Schema.Types.Mixed], default: [] },
  watch_later: { type: [mongoose.Schema.Types.Mixed], default: [] },
  liked_videos: { type: [mongoose.Schema.Types.Mixed], default: [] }
});

module.exports = mongoose.model('User', UserSchema);
