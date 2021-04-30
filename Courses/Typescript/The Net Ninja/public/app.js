const holo = {
    name: "Holo",
    age: 600,
    speak: (text) => {
        console.log(text);
    },
    spend: (amount) => {
        console.log("Spent ", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("Hello ", person.name);
};
// greetPerson({ name: "Nino" });
greetPerson(holo);
import { Invoice } from "./classes/Invoice.js";
const invoiceOne = new Invoice("Mario", "work on the mario website", 250);
const invoiceTwo = new Invoice("Luigi", "work on the Luigi website", 400);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.push(new Invoice("Holo", "buying too much apples", 150));
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
