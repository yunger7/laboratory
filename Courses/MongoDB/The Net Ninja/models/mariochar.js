const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

// Create schema and model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

const MarioChar = Mongoose.model('mariochar', MarioCharSchema);
module.exports = MarioChar;