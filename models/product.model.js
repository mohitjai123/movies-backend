const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    thumbnail:{type:String, required:true}, 
    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category', 
      required: true 
    },
    tag_line:{type:String, required:true},
    free_size: { type: Boolean, default: true },
    description:{type:String, required:true},
    other_images:{ type: [String], default: [] },
    available_size:{ type:String },
    available_color:{ type:String },
    quantity:{ type: Number, default: 0 },
    reviews: { type: [mongoose.Schema.Types.Mixed], default: [] },
    status: { type: Boolean, default: true },
  }, {timestamps:true});
  
  module.exports = mongoose.model('Products', ProductSchema);