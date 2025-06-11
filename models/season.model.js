const mongoose = require("mongoose")

const SeasonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    release_date:{type:String, default:""},
    vertical_thumbnail_url: { type: String, required: true },
    active: { type: Boolean, default: true },
    series_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Series'
    },
    rating:{type:Number, default:0.0, max:10},
    reviews:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
      }
    ],
    uploaded_by: mongoose.Schema.Types.ObjectId
  }, {timestamps:true});

module.exports = mongoose.model('Season', SeasonSchema);