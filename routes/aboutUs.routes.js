const express = require('express');
const router = express.Router();
const { aboutUsController } = require('../controllers/other.controller');

router.post('/', aboutUsController.create);
router.get('/', aboutUsController.getAll);
router.get('/:id', aboutUsController.getById);
router.put('/:id', aboutUsController.update);
router.delete('/:id', aboutUsController.remove);

module.exports = router;
