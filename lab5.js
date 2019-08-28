const assert = require("assert");

function says(message1, message2) {
  this.name = this.name || "John";
  return `${this.name} says ${message1} and ${message2}`;
}

// using call get the assertion to pass
assert(says() === "Peter says hello and welcome", "true");

// using apply get the assertion to pass
assert(says() === "Peter says hello and welcome", "true");
