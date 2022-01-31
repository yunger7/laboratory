const express = require('express');
const router = express.Router();

const Ninja = require('../models/ninja');

// Get list of ninjas from database
router.get('/ninjas', (req, res, next) => {
  // Ninja.find({}).then(result => res.send(result));
  Ninja.aggregate().near({
    near: {
     'type': 'Point',
     'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    maxDistance: 100000,
    spherical: true,
    distanceField: "dis"
   }).then(result => res.send(result));
});

// Add ninja to database
router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body)
  .then(result => res.send(result))
  .catch(next);
});

// Update ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then(() => {
    Ninja.findOne({ _id: req.params.id })
    .then(result => res.send(result));
  });
});

// Delete ninja from database
router.delete('/ninjas/:id', (req, res, next) => {
  Ninja.findByIdAndRemove({_id: req.params.id})
  .then(result => res.send(result));
});

module.exports = router;