const express = require('express');
const router = express.Router();
const { faqPageController } = require('../controllers/other.controller');

router.post('/', faqPageController.create);
router.get('/', faqPageController.getAll);
router.get('/:id', faqPageController.getById);
router.patch('/:id', faqPageController.update);
router.delete('/:id', faqPageController.remove);

module.exports = router;
