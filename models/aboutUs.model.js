// models/aboutUs.model.js
const mongoose = require("mongoose")

const AboutUsSchema = new mongoose.Schema({
    why_choose:{type:String, required:true},
    our_vision:{type:String, required:true},
    our_mission:{type:String, required:true},
    how_works:{type:String, required:true},
    active:{type:Boolean, default:true}
  }, {timestamps:true});
  
  module.exports = mongoose.model('AboutUs', AboutUsSchema);