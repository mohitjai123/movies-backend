const express = require('express');
const router = express.Router();
const { adController } = require('../controllers/other.controller');

router.post('/', adController.create);
router.get('/', adController.getAll);
router.get('/:id', adController.getById);
router.patch('/:id', adController.update);
router.delete('/:id', adController.remove);

module.exports = router;
