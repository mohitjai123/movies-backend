const express = require('express');
const router = express.Router();
const videoController = require('../controllers/series.controller');
const upload = require('../middleware/multer');


router.post('/', upload.fields([
    { name: 'vertical_thumbnail_url', maxCount: 1 },
    { name: 'horizontal_thumbnail_url', maxCount: 1 }
  ]), videoController.create);

router.get('/', videoController.getAll);
router.get('/:id', videoController.getById);
router.patch('/:id',upload.fields([
    { name: 'vertical_thumbnail_url', maxCount: 1 },
    { name: 'horizontal_thumbnail_url', maxCount: 1 }
  ]), videoController.update);
router.delete('/:id', videoController.remove);

module.exports = router;
