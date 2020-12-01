var userOne = {
	email: 'ryuunosuke@gmail.com',
	name: 'Ryuunosuke',
	login() {
		console.log(this.email, 'has logged in');
	},
	logout() {
		console.log(this.email, 'has logged out');
	}
};

console.log(userOne.name);
userOne.login();
userOne.logout();