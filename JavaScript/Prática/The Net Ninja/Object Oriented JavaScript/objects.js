class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
		this.score = 0;
	}
	login() {
		console.log(this.email, 'logged in');
		return this;
	}
	logout() {
		console.log(this.email, 'logged out');
		return this;
	}
	updateScore() {
		this.score++;
		console.log(this.email, 'score is now', this.score);
		return this;
	}
}

class Admin extends User {
	deleteUser(user) {
		users = users.filter(u => {
			return u.email != user.email;
		});
	}
}

var userOne = new User('wiseholo@gmail.com', 'Holo');
var userTwo = new User('cuteshiina@gmail.com', 'Shiina');
var admin = new Admin('admin@gmail.com', 'Admin');

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
// userOne.deleteUser(userTwo); doesn't work

console.log(users);
