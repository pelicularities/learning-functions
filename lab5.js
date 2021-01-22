const assert = require("assert");

function says(message1, message2) {
  this.name = this.name || "John";
  return `${this.name} says ${message1} and ${message2}`;
}

// using call get the assertion to pass
// object
assert(
  says.call({ name: "Peter" }, "hello", "welcome") ===
    "Peter says hello and welcome",
  "true"
);

// using apply get the assertion to pass
// object, array
assert(
  says.apply({ name: "Peter" }, ["hello", "welcome"]) ===
    "Peter says hello and welcome",
  "true"
);

const iceCreamMachine = {
  make: function (topping) {
    let flavour = this.flavour;
    if (topping) {
      flavour += " " + topping;
    }
    return flavour;
  },
};

function IceCream(flavour) {
  this.flavour = flavour;
}

// 1.1 Create a chocolate flavoured IceCream
const chocolateIceCream = new IceCream('chocolate');

// 1.2 Call `make` method on iceCreamMachine with chocolateIceCream context, using `bind`
const makeChocolateIceCream = iceCreamMachine.make.bind(chocolateIceCream);

assert(makeChocolateIceCream() === "chocolate", "should return chocolate");

// 2.1 Create a vanilla flavoured IceCream
// const vanillaIceCream = ...
const vanillaIceCream = new IceCream("vanilla");

// 2.2 Call `make` method on iceCreamMachine with vanillaIceCream context AND "nuts" topping, using `call` or `apply`
const makeVanillaIceCream = iceCreamMachine.make.call(vanillaIceCream, 'nuts');

assert(
  makeVanillaIceCream === "vanilla nuts",
  "should return vanilla with nuts"
);
