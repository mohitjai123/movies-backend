const express = require('express');
const router = express.Router();
const { adminController } = require('../controllers/other.controller');

router.post('/', adminController.create);
router.get('/', adminController.getAll);
router.get('/:id', adminController.getById);
router.patch('/:id', adminController.update);
router.delete('/:id', adminController.remove);

module.exports = router;
