const express = require('express');
const router = express.Router();
const { categoriesController } = require('../controllers/categories.controller');

router.post('/', categoriesController.create);
router.get('/', categoriesController.getAll);
router.get('/:id', categoriesController.getById);
router.get('/:type/:name', categoriesController.getByName);
router.patch('/:id', categoriesController.update);
router.delete('/:id', categoriesController.remove);

module.exports = router;
