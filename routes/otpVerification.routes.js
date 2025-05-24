const express = require('express');
const router = express.Router();
const { otpVerificationController } = require('../controllers/other.controller');

router.post('/', otpVerificationController.create);
router.get('/', otpVerificationController.getAll);
router.get('/:id', otpVerificationController.getById);
router.put('/:id', otpVerificationController.update);
router.delete('/:id', otpVerificationController.remove);

module.exports = router;
