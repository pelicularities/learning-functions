const assert = require("assert");

// 1. use function to create 2 new objects;

function createPerson(name, age) {}

const person1 = new createPerson('Ash Ketchum', 10);
const person2 = new createPerson('Gary Oak', 10);

assert(person1 !== person2, "should not be the same person");
