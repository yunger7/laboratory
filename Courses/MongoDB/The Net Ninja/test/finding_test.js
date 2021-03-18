const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Finding records", function() {
  beforeEach(function(done){
    const char = new MarioChar({
      name: 'Mario',
    });
  
    char.save().then(() => {
      done();
    });
  })

  it('Finds one record from the database', function(done) {
    MarioChar.findOne({ name: "Mario" }).then(function(result){
      assert(result.name === "Mario");
      done();
    })
  });
});