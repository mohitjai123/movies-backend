// controllers/video.controller.js
const Video = require('../models/episode.model');
const fs = require("fs")

exports.create = async (req, res) => {
  try {
    const data = req.body;
       // Handle file uploads
    if (req.files) {
      if (req.files.horizontal_thumbnail_url) data.horizontal_thumbnail_url = req.files.horizontal_thumbnail_url[0].path;
    }
    const video = await Video.create(data);
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const {season}  = req.query
    if(season){
      const videos = await Video.find({season_id:season});
      res.json(videos);
    }else{
      const videos = await Video.find();
    res.json(videos);
    }
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Movie not found' });
    video.horizontal_thumbnail_url
    res.json({...video.toObject(),horizontal_thumbnail_url:video.horizontal_thumbnail_url.replace("\\", "/")});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const existing = await Video.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Movie not found' });

    // Handle file replacement
    if (req.files) {
      if (req.files.horizontal_thumbnail_url) {
        if (existing.horizontal_thumbnail_url) fs.unlinkSync(existing.horizontal_thumbnail_url);
        req.body.horizontal_thumbnail_url = req.files.horizontal_thumbnail_url[0].path;
      }
    }

    const updated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Movie not found' });

    // Delete associated files
    if (video.horizontal_thumbnail_url) fs.unlinkSync(video.horizontal_thumbnail_url);

    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
