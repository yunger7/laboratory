const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bladeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  driver: {
    type: String,
    required: true
  },
  element: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Blade = mongoose.model('Blade', bladeSchema);
module.exports = Blade;