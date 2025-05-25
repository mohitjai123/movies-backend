const mongoose = require("mongoose")

const NotificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    user_id: mongoose.Schema.Types.ObjectId,
    sent_at: { type: Date, default: Date.now() },
    read: Boolean
  });
  
  module.exports = mongoose.model('Notification', NotificationSchema);