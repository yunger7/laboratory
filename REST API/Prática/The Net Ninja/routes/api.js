const express = require('express');
const router = express.Router();

const Ninja = require('../models/ninja');

// Get list of ninjas from database
router.get('/ninjas', (req, res, next) => {
  res.send({ type: 'GET' });
});

// Add ninja to database
router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body)
  .then(result => res.send(result))
  .catch(next);
});

// Update ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
  res.send({ type: 'PUT' });
});

// Delete ninja from database
router.delete('/ninjas/:id', (req, res, next) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;