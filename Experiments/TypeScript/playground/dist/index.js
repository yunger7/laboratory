"use strict";
const user = {
    name: "Holo",
    id: 1,
    status: "active",
    likes: ["Traveling", "Apples"],
};
function addBar(a) {
    return [...a, "bar"];
}
console.log(addBar([Object.assign({}, user)]));
const deletedUsers = [];
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const point = { x: 20, y: 10 };
logPoint(point); // passes the duck test
const sayHi = (name) => console.log(`Hello ${name || "user"}!`);
sayHi("Rin");
sayHi();
