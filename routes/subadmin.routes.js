const express = require('express');
const router = express.Router();
const { subAdminController } = require('../controllers/other.controller');

router.post('/', subAdminController.create);
router.get('/', subAdminController.getAll);
router.get('/:id', subAdminController.getById);
router.patch('/:id', subAdminController.update);
router.delete('/:id', subAdminController.remove);

module.exports = router;
