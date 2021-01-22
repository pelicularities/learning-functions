const assert = require("assert");
// 1. use arrow functions to create 4 methods:
// add, subtract, multiply, divide

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

assert(add(1, 2) === 3, "should return the added value");
assert(subtract(1, 2) === -1, "should return the subtracted value");
assert(multiply(1, 2) === 2, "should return the multiplied value");
assert(divide(1, 2) === 0.5, "should return the divided value");
