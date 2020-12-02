function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
}

User.prototype.login = function() {
	this.online = true;
	console.log(this.email, 'logged in');
}

User.prototype.logout = function() {
	this.online = false;
	console.log(this.email, 'logged out');
}

var userOne = new User('wiseholo@gmail.com', 'Holo');
var userTwo = new User('cuteshiina@gmail.com', 'Shiina');

console.log(userOne);
userTwo.login();
