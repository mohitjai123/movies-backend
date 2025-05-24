const express = require('express');
const router = express.Router();
const { continueWatchingController } = require('../controllers/other.controller');

router.post('/', continueWatchingController.create);
router.get('/', continueWatchingController.getAll);
router.get('/:id', continueWatchingController.getById);
router.put('/:id', continueWatchingController.update);
router.delete('/:id', continueWatchingController.remove);

module.exports = router;
