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
