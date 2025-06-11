// Clone this pattern for each model below
const generateCrud = (Model) => ({
    create: (req, res) => Model.create(req.body).then(d => res.status(201).json(d)).catch(e => res.status(400).json({ message: e.message })),
    getAll: (req, res)=>getAll(req, res, Model),
    getById: (req, res) => getById(req, res, Model),
    getByName: (req, res) => getByName(req, res, Model),
    update: (req, res) => Model.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(d => d ? res.json(d) : res.status(404).json({ message: 'Not found' })).catch(e => res.status(400).json({ message: e.message })),
    remove: (req, res) => Model.findByIdAndDelete(req.params.id).then(d => d ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' })).catch(e => res.status(400).json({ message: e.message }))
  });

  const getAll =(req, res, Model)=>{
    const {type, active} = req.query
    if(type && active){
        return Model.find({type, active}).populate({
            path: 'videos.videoId',
            select: 'title rating vertical_thumbnail_url'
          }).then(d => {
            if(d){
                const updatedData = d.map((item)=>{
                    const title = item.title
                    const type= item.type
                    const movies = item.videos.map((mov)=>({...mov.videoId.toObject(), vertical_thumbnail_url:mov.videoId.vertical_thumbnail_url.replace("\\", "/")}))
                    return {title,type, movies}
                })
                // const updatedData =
                return res.json(updatedData)
            }else{
                return res.status(404).json({ message: 'Not found' })
            }
          })
    } 
    if(type){
        return Model.find({type}).populate({
            path: 'videos.videoId',
            select: 'title rating vertical_thumbnail_url'
          }).then(d => {
            if(d){
                const updatedData = d.map((item)=>{
                    const title = item.title
                    const type= item.type
                    const movies = item.videos.map((mov)=>({...mov.videoId.toObject(), vertical_thumbnail_url:mov.videoId.vertical_thumbnail_url.replace("\\", "/")}))
                    return {title,type, movies}
                })
                // const updatedData =
                return res.json(updatedData)
            }else{
                return res.status(404).json({ message: 'Not found' })
            }
          })
    }
    if(active){
        return Model.find({active}).populate({
            path: 'videos.videoId',
            select: 'title rating vertical_thumbnail_url'
          }).then(d => {
            if(d){
                const updatedData = d.map((item)=>{
                    const title = item.title
                    const type= item.type
                    const movies = item.videos.map((mov)=>({...mov.videoId.toObject(), vertical_thumbnail_url:mov.videoId.vertical_thumbnail_url.replace("\\", "/")}))
                    return {title,type, movies}
                })
                // const updatedData =
                return res.json(updatedData)
            }else{
                return res.status(404).json({ message: 'Not found' })
            }
          })

    }
    return Model.find().populate({
        path: 'videos.videoId',
        select: 'title rating vertical_thumbnail_url'
      }).then(d => {
        if(d){  
                const updatedData = d.map((item)=>{
                    const title = item.title
                    const type= item.type
                    const movies = item.videos.map((mov)=>({...mov.videoId.toObject(), vertical_thumbnail_url:mov.videoId.vertical_thumbnail_url.replace("\\", "/")}))
                    return {title,type, movies}
                })
                // const updatedData =
                return res.json(updatedData)
            }else{
                return res.status(404).json({ message: 'Not found' })
            }
      })
  }
  const getById =(req, res, Model)=>{
    Model.findById(req.params.id).populate({
        path: 'videos.videoId',
        select: 'title rating vertical_thumbnail_url'
      }).then(d => d ? res.json(d) : res.status(404).json({ message: 'Not found' })).catch(e => res.status(400).json({ message: e.message }))
  }

  const getByName =(req, res, Model)=>{
       Model.findOne({title:req.params.name, type:req.params.type, active:true}).populate({
            path: 'videos.videoId',
            select: 'title description rating horizontal_thumbnail_url'
          }).then(d => {
            if(d){
                const updatedData = d.videos.map((item)=>({...item.videoId.toObject(), horizontal_thumbnail_url:item.videoId.horizontal_thumbnail_url.replace("\\", "/")}))
                return res.json(updatedData)
            }else{
                return res.status(404).json({ message: 'Not found' })
            }
          }).catch(e => res.status(400).json({ message: e.message }))
  }
  
  module.exports = {
     categoriesController: generateCrud(require('../models/categories.model'))
  };