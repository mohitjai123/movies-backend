const express = require('express');
const router = express.Router();
const { episodeController } = require('../controllers/other.controller');

router.post('/', episodeController.create);
router.get('/', episodeController.getAll);
router.get('/:id', episodeController.getById);
router.patch('/:id', episodeController.update);
router.delete('/:id', episodeController.remove);

module.exports = router;
