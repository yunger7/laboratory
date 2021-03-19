const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Saving Records", function(){

  it('Saves a record to the database', function(done) {
    const char = new MarioChar({
      name: 'Mario',
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});