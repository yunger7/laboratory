interface User {
	name: string;
	id: number;
	status: "active" | "inactive";
	likes?: string[];
}

const user: User = {
	name: "Holo",
	id: 1,
	status: "active",
	likes: ["Traveling", "Apples"],
};

function addBar(a: Array<User>) {
	return [...a, "bar"];
}

console.log(addBar([{ ...user }]));

const deletedUsers: User[] = [];

interface IBackpack<T> {
	add: (obj: T) => void;
	get: () => T;
}

// backpack.add("stuff");
// const backpackItems = backpack.get();

interface Point {
	x: number;
	y: number;
}

function logPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}

const point = { x: 20, y: 10 };
logPoint(point); // passes the duck test

const sayHi = (name?: string) => console.log(`Hello ${name || "user"}!`);
sayHi("Rin");
sayHi();

type List = [string, number];
const list: List = ["foo", 4];
