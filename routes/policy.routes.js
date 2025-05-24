const express = require('express');
const router = express.Router();
const { policyController } = require('../controllers/other.controller');

router.post('/', policyController.create);
router.get('/', policyController.getAll);
router.get('/:id', policyController.getById);
router.put('/:id', policyController.update);
router.delete('/:id', policyController.remove);

module.exports = router;
