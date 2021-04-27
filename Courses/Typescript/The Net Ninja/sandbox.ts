// Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// Arrays
let ninjas: string[];

// Union types
let mixedArray: (string | number)[] = [];

mixedArray.push("Hello");
mixedArray.push(20);
// mixedArray.push(false);

let uid: string | number;
uid = "123";
uid = 123;
// uid = false

// Objects
let ninjaOne: object;

ninjaOne = { name: "Yoshi", age: 30 };
// ninjaOne = 10;
ninjaOne = [];

let ninjaTwo: {
	name: string;
	age: number;
	beltColour: string;
};

ninjaTwo = { name: "Mario", age: 20, beltColour: "black" };
// ninjaTwo = { name: 1, age: 20, beltColour: "black" };
// ninjaTwo = { name: "Mario", age: 20, beltColour: "black", skills: [] };
