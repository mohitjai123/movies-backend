const express = require('express');
const router = express.Router();
const { create, getAll, getById, update, remove } = require('../controllers/genres.controller');
const upload = require('../middleware/multer');

router.post('/',upload.fields([
    { name: 'icon_url', maxCount: 1 },]), create);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id',upload.fields([
    { name: 'icon_url', maxCount: 1 },]), update);
router.delete('/:id', remove);

module.exports = router;
