import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

// Create schema and model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

const MarioChar = Mongoose.model('mariochar', MarioCharSchema);
export default MarioChar;