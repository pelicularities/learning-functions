const assert = require("assert");

// questions from: https://www.codewars.com/kata/functional-addition
// Create a function add(n)
// Add(n) which returns a function that always adds n to any number

/**
 * const addOne = add(1);
 * addOne(3); // 4
 *
 * const addThree = add(3);
 * addThree(3); // 6
 */

function add(numberToAdd) {
  // TODO: your code here
}

const addOneTo = add(1);
const addThreeTo = add(3);

assert(addOneTo(3) === 4, "1 + 3 = 4");
assert(addThreeTo(3) === 6, "3 + 3 = 6");
