type Uid = string | number;
type User = { name: string, uid: Uid }

const greet = (user: User) => {
	console.log(`${user.name} says hello`);
}

const logItem = (uid: Uid, item: string) => {
	console.log(`${item} has an uid of ${uid}`);
}