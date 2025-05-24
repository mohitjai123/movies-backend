const express = require('express');
const router = express.Router();
const { videoController } = require('../controllers/other.controller');

router.post('/', videoController.create);
router.get('/', videoController.getAll);
router.get('/:id', videoController.getById);
router.put('/:id', videoController.update);
router.delete('/:id', videoController.remove);

module.exports = router;
