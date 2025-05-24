const express = require('express');
const router = express.Router();
const { videoProgressController } = require('../controllers/other.controller');

router.post('/', videoProgressController.create);
router.get('/', videoProgressController.getAll);
router.get('/:id', videoProgressController.getById);
router.put('/:id', videoProgressController.update);
router.delete('/:id', videoProgressController.remove);

module.exports = router;
