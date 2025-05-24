const mongoose = require("mongoose")

const NotificationSchema = new mongoose.Schema({
    title: String,
    message: String,
    user_id: mongoose.Schema.Types.ObjectId,
    sent_at: Date,
    read: Boolean
  });
  
  module.exports = mongoose.model('Notification', NotificationSchema);