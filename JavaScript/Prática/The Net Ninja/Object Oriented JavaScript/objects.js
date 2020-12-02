class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
	}
}

var userOne = new User('wiseholo@gmail.com', 'Holo');
var userTwo = new User('cuteshiina@gmail.com', 'Shiina');

console.log(userOne);
console.log(userTwo);