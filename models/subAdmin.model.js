const mongoose = require("mongoose")

const SubAdminSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    permissions: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('SubAdmin', SubAdminSchema);
  