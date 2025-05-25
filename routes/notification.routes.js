const express = require('express');
const router = express.Router();
const { notificationController } = require('../controllers/other.controller');

router.post('/', notificationController.create);
router.get('/', notificationController.getAll);
router.get('/:id', notificationController.getById);
router.patch('/:id', notificationController.update);
router.delete('/:id', notificationController.remove);

module.exports = router;
