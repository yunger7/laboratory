const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Saving Records", (done) => {

  it('Saves a record to the database', () => {
    const char = new MarioChar({
      name: 'Mario',
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});