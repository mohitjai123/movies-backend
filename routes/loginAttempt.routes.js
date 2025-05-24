
const express = require('express');
const router = express.Router();
const { loginAttemptController } = require('../controllers/other.controller');

router.post('/', loginAttemptController.create);
router.get('/', loginAttemptController.getAll);
router.get('/:id', loginAttemptController.getById);
router.put('/:id', loginAttemptController.update);
router.delete('/:id', loginAttemptController.remove);

module.exports = router;