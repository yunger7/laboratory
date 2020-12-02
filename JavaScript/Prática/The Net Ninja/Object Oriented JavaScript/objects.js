function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
	this.login = function() {
		console.log(this.email, 'logged in');
	}
}

var userOne = new User('wiseholo@gmail.com', 'Holo');
var userTwo = new User('cuteshiina@gmail.com', 'Shiina');

console.log(userOne);
userTwo.login();
