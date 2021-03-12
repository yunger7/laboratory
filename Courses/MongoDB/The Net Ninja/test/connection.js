const Mongoose = require("mongoose");

// ES6 Promises
Mongoose.Promise = global.Promise;

// Connect to DB before tests
before((done) => {
	// Connect to MongoDB
	Mongoose.connect("mongodb://localhost/testaroo");
	Mongoose.connection
		.once("open", () => {
			console.log("> Connected to MongoDB");
			done();
		})
		.on("error", error => {
			console.log("> Connection error:", error);
		});
});

// Drop the characters collection before each test
beforeEach((done) => {
	// Drop the collection
	Mongoose.connection.collections.mariochars.drop(() => {
		done();
	})
});
