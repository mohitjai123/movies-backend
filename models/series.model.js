const mongoose = require("mongoose")

const SeriesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    tagline: { type: String, },
    description: { type: String, required: true },
    release_date:{type:String, default:""},
    vertical_thumbnail_url: { type: String, required: true },
    horizontal_thumbnail_url: { type: String, required: true },
    genres: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Genres'
    }],
    languages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Languages'
    }],
    is_premium: { type: Boolean, default: true },
    is_adult: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    rating:{type:Number, default:0.0, max:10},
    reviews:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
      }
    ],
    uploaded_by: mongoose.Schema.Types.ObjectId
  }, {timestamps:true});

module.exports = mongoose.model('Series', SeriesSchema);