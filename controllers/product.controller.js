// controllers/video.controller.js
const Video = require('../models/product.model');
const fs = require("fs")

exports.create = async (req, res) => {
  try {
    const data = req.body;
       // Handle file uploads
    if (req.files) {
      if (req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].path;
      if(req.files["other_images[]"]){
        const paths = req.files["other_images[]"].map(item=>item.path)
        data.other_images = paths
      }
    }
    const video = await Video.create(data);
    res.status(201).json(video);
  } catch (err) {
    console.log(err);
    
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
    if (!video) return res.status(404).json({ message: 'Product not found' });
    res.json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const existing = await Video.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Product not found' });
    // Handle file replacement
    let prevFile = []
    if(req.body.prev_file){
      prevFile = JSON.parse(req.body.prev_file)
    }
    const fileTaken = prevFile.filter(item=>existing.other_images.includes(item))
    let unchanged = true
    if (req.files) {
      if (req.files.thumbnail) {
        if (existing.thumbnail) fs.unlinkSync(existing.thumbnail);
        req.body.thumbnail = req.files.thumbnail[0].path;
      }
      if(req.files["other_images[]"]){
        const paths = req.files["other_images[]"].map(item=>item.path)
        const prevFileRemove = prevFile.filter(item=>!existing.other_images.includes(item))
        prevFileRemove.map(item=>
          fs.unlinkSync(item)
        )
        unchanged = false
        req.body.other_images = [...paths, ...fileTaken]
      }
    }
    if(unchanged)
      req.body.other_images = fileTaken
    const updated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.log(err);
    
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Product not found' });
    if (video.thumbnail) fs.unlinkSync(video.thumbnail);
    if(video.other_images){
      video.other_images.map(item=>fs.unlinkSync(item))
    }
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
