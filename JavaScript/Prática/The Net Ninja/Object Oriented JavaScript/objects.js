class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
	}
	login() {
		console.log(this.email, 'logged in');
	}
	logout() {
		console.log(this.email, 'logged out');
	}
}

var userOne = new User('wiseholo@gmail.com', 'Holo');
var userTwo = new User('cuteshiina@gmail.com', 'Shiina');

userOne.login();
userTwo.logout();

console.log(userOne);
console.log(userTwo);