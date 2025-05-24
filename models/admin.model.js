const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    super_admin: Boolean,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Admin', AdminSchema);
  