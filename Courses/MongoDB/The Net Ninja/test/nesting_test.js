const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

// Describe tests
describe("Nesting records", function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });

  // Create tests
  it("Creates an author with sub-documents", function(done){
    var pat = new Author({
      name: "Patrick Rotfhuss",
      age: 30,
      books: [
        { title: "Name of the wind", pages: 400 }
      ]
    });

    pat.save().then(function(){
      Author.findOne({ name: "Patrick Rotfhuss" }).then(function(record){
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it("Adds a book to an author", function(done){
    var pat = new Author({
      name: "Patrick Rotfhuss",
      age: 30,
      books: [
        { title: "Name of the wind", pages: 400 }
      ]
    });

    pat.save().then(function(){
      Author.findOne({ name: "Patrick Rotfhuss" }).then(function(record){
        // Add a book to books array
        record.books.push({ title: "Wise man's fear", pages: 500 });
        record.save().then(function(){
          Author.findOne({ name: "Patrick Rotfhuss" }).then(function(result){
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });

});