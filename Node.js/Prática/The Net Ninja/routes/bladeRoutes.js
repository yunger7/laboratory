const express = require('express');
const router = express.Router();
const bladeController = require('../controllers/bladeController');

router.get('/', bladeController.blade_index)
router.post('/', bladeController.blade_add_post);
router.get('/add', bladeController.blade_add_get);
router.get('/:id', bladeController.blade_details);
router.delete('/:id', bladeController.blade_delete);

module.exports = router;