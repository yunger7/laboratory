"use strict";
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice("Mario", "work on the mario website", 250);
var invoiceTwo = new Invoice("Luigi", "work on the Luigi website", 400);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(new Invoice("Holo", "buying too much apples", 150));
var form = document.querySelector(".new-item-form");
// Inputs
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
