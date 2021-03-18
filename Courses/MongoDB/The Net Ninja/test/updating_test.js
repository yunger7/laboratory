const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Updating records", function() {
  var char;

  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
    });
  
    char.save().then(() => {
      done();
    });
  })

  it('Updates one record from the database', function(done) {
    
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" }).then(function(){
      MarioChar.findOne({ _id: char._id }).then(function(result){
        assert(result.name === "Luigi");
        done();
      })
    });

  });

});