const assert = require("assert");

// Closure
/**
 * Official definition on MDN:
 * A closure is the combination of a function and the lexical environment
 * within which that function was declared (e.g. another function, or a .js file).
 */
const apple = "apple";
const isApple = () => assert(apple === "apple", "true");

setTimeout(() => {
  isApple();
}, 1000);

// common use case of closure is to create private variables
function createSayHi(name) {
  return function() {
    console.log(name + " say hi");
  };
}

const johnSayHi = createSayHi("John");
johnSayHi(); // the variable name is now private within the function and close for modifications.

const sallySayHi = createSayHi("Sally");
sallySayHi();
johnSayHi();
