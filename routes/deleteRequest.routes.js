const express = require('express');
const router = express.Router();
const { deleteRequestController } = require('../controllers/other.controller');

router.post('/', deleteRequestController.create);
router.get('/', deleteRequestController.getAll);
router.get('/:id', deleteRequestController.getById);
router.patch('/:id', deleteRequestController.update);
router.delete('/:id', deleteRequestController.remove);

module.exports = router;
