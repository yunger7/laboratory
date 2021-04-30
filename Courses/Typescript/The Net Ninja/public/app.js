import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Holo", "buying apples", 200);
// docTwo = new Payment("Pyra", "making food", 25);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invoiceOne = new Invoice("Mario", "work on the mario website", 250);
// const invoiceTwo = new Invoice("Luigi", "work on the Luigi website", 400);
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// invoices.push(new Invoice("Holo", "buying too much apples", 150));
// // GENERICS
// const addUID = <T extends object>(obj: T) => {
// 	let uid = Math.floor(Math.random() * 100);
// 	return {...obj, uid};
// }
// let docOne = addUID({ name: "Holo", age: 600 });
// console.log(docOne);
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const resourceOne: Resource<object> = {
//   uid: 1,
//   resourceName: "person",
//   data: { name: "Nino", age: 18 },
// }
// const resourceTwo: Resource<string[]> = {
//   uid: 2,
//   resourceName: "shopping list",
//   data: ["milk", "bread", "yogurt"],
// }
// // ENUMS
// enum ResourceType { BOOK, FILM, GAME, PERSON }
// interface Resource<T> {
// 	uid: number;
// 	resourceType: ResourceType;
// 	data: T;
// }
// type Book = {
// 	title: string,
// 	author: string,
// }
// const resourceOne: Resource<Book> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: "Name of the wind", author: "Patrick Rothfuss" }
// }
// const resourceTwo: Resource<string> = {
//   uid: 2,
//   resourceType: ResourceType.PERSON,
//   data: "Nino"
// }
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", e => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
