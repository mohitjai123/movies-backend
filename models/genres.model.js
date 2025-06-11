const mongoose = require("mongoose")

const Genres = new mongoose.Schema({
    name: { type: String, required: true },
    icon_url:{type:String, required:true}, 
    status: { type: Boolean, default: true },
  }, {timestamps:true});
  
  module.exports = mongoose.model('Genres', Genres);