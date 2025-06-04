const express = require('express');
const router = express.Router();
const { create, getAll, getById, update, remove } = require('../controllers/product.controller');
const upload = require('../middleware/multer');

router.post('/',upload.fields([
    { name: 'thumbnail', maxCount: 1 },{name:"other_images[]", maxCount:5}]), create);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id',upload.fields([
    { name: 'thumbnail', maxCount: 1 },{name:"other_images[]", maxCount:5}]), update);
router.delete('/:id', remove);

module.exports = router;
