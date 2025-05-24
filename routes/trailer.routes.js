const express = require('express');
const router = express.Router();
const { trailerController } = require('../controllers/other.controller');

router.post('/', trailerController.create);
router.get('/', trailerController.getAll);
router.get('/:id', trailerController.getById);
router.put('/:id', trailerController.update);
router.delete('/:id', trailerController.remove);

module.exports = router;
