const express = require('express');
const router = express.Router();
const aboutUsController = require('../controllers/aboutus.controller');

router.post('/', aboutUsController.createUser);
router.get('/', aboutUsController.getAll);
router.get('/:id', aboutUsController.getById);
router.patch('/:id', aboutUsController.update);
router.delete('/:id', aboutUsController.delete);

module.exports = router;
