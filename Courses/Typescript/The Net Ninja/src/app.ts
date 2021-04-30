// Interfaces
interface IsPerson {
	name: string;
	age: number;
	speak(a: string): void;
	spend(a: number): number;
}

const holo: IsPerson = {
  name: "Holo",
  age: 600,
  speak: (text: string): void => {
    console.log(text);
  },
  spend: (amount: number): number => {
    console.log("Spent ", amount);
    return amount;
  }
}

const greetPerson = (person: IsPerson) => {
  console.log("Hello ", person.name);
}

// greetPerson({ name: "Nino" });
greetPerson(holo);


import { Invoice } from "./classes/Invoice.js";

const invoiceOne = new Invoice("Mario", "work on the mario website", 250);
const invoiceTwo = new Invoice("Luigi", "work on the Luigi website", 400);

let invoices: Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.push(new Invoice("Holo", "buying too much apples", 150));


const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", e => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  )
})
