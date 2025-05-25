// controllers/video.controller.js
const Video = require('../models/video.model');
const fs = require("fs")

exports.create = async (req, res) => {
  try {
    const data = req.body;
       // Handle file uploads
    if (req.files) {
      if (req.files.video_url) data.video_url = req.files.video_url[0].path;
      if (req.files.vertical_thumbnail_url) data.vertical_thumbnail_url = req.files.vertical_thumbnail_url[0].path;
      if (req.files.horizontal_thumbnail_url) data.horizontal_thumbnail_url = req.files.horizontal_thumbnail_url[0].path;
    }

    const video = await Video.create(data);
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (_req, res) => {
  try {
    const videos = await Video.find();
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
      if (req.files.video_url) {
        if (existing.video_url) fs.unlinkSync(existing.video_url);
        req.body.video_url = req.files.video_url[0].path;
      }
      if (req.files.vertical_thumbnail_url) {
        if (existing.vertical_thumbnail_url) fs.unlinkSync(existing.vertical_thumbnail_url);
        req.body.vertical_thumbnail_url = req.files.vertical_thumbnail_url[0].path;
      }
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
    if (!video) return res.status(404).json({ message: 'Video not found' });

    // Delete associated files
    if (video.video_url) fs.unlinkSync(video.video_url);
    if (video.vertical_thumbnail_url) fs.unlinkSync(video.vertical_thumbnail_url);
    if (video.horizontal_thumbnail_url) fs.unlinkSync(video.horizontal_thumbnail_url);

    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Video deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
