const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost/testaroo");
Mongoose.connection
	.once("open", () => {
		console.log("> Connected to MongoDB");
	})
	.on("error", error => {
		console.log("> Connection error:", error);
	});
