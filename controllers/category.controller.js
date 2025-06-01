// controllers/video.controller.js
const Video = require('../models/category.model');
const fs = require("fs")

exports.create = async (req, res) => {
  try {
    const data = req.body;
       // Handle file uploads
    if (req.files) {
      if (req.files.icon_url) data.icon_url = req.files.icon_url[0].path;
    }

    const video = await Video.create(data);
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
    const {status} = req.query
  try {
    let videos
    if(status){
        videos = await Video.find({status});
    }else{
        videos = await Video.find();
    }
    res.json(videos);   
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const existing = await Video.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Video not found' });

    // Handle file replacement
    if (req.files) {
      if (req.files.icon_url) {
        if (existing.icon_url) fs.unlinkSync(existing.icon_url);
        req.body.icon_url = req.files.icon_url[0].path;
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
    if (!video) return res.status(404).json({ message: 'Video not found' });
    if (video.icon_url) fs.unlinkSync(video.icon_url);
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Video deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
