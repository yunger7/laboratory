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

function Admin(...args) {
	User.apply(this, args); // This creates a user	
	// Add admin proprieties
	this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
	users = users.filter(user => {
		return user.email != u.email;
	})
};

var userOne = new User('wiseholo@gmail.com', 'Holo');
var userTwo = new User('cuteshiina@gmail.com', 'Shiina');
var admin = new Admin('superadmin@gmail.com', 'admin')

users = [userOne, userTwo, admin];

console.log(users);
