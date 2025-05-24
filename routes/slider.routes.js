const express = require('express');
const router = express.Router();
const { sliderController } = require('../controllers/other.controller');

router.post('/', sliderController.create);
router.get('/', sliderController.getAll);
router.get('/:id', sliderController.getById);
router.put('/:id', sliderController.update);
router.delete('/:id', sliderController.remove);

module.exports = router;
