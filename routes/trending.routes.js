const express = require('express');
const router = express.Router();
const { trendingController } = require('../controllers/other.controller');

router.post('/', trendingController.create);
router.get('/', trendingController.getAll);
router.get('/:id', trendingController.getById);
router.put('/:id', trendingController.update);
router.delete('/:id', trendingController.remove);

module.exports = router;
