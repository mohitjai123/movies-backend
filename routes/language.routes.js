const express = require('express');
const router = express.Router();
const { languageController } = require('../controllers/other.controller');

router.post('/', languageController.create);
router.get('/', languageController.getAll);
router.get('/:id', languageController.getById);
router.patch('/:id', languageController.update);
router.delete('/:id', languageController.remove);

module.exports = router;
