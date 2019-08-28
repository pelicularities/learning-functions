const assert = require("assert");

// ========= Scope from parent =============

var fruit = "apple";
let banana = "banana";
const citrus = "citrus";

assert(fruit === "apple", "is apple");
assert(banana === "banana", "is true");
assert(citrus === "citrus", "is true");

function getFruit() {
  var fruit = "pinapple";
  assert(fruit === "apple", "is apple");
  assert(banana === "banana", "true");
  assert(citrus === "citrus", "is true");
}

{
  assert(fruit === "apple", "is apple");
  assert(banana === "banana", "true");
  assert(citrus === "citrus", "is true");
}

// ========= Block Scope =============
// let and const are block scope
{
  var bmw = "bmw";
  let toyota = "toyota";
  const mazda = "mazda";

  assert(bmw === "bmw", "true");
  assert(toyota === "toyota", "true");
  assert(mazda === "mazda", "true");
}

assert(bmw === "bmw", "true");
assert.throws(() => toyota === "toyota", { name: "ReferenceError" });
assert.throws(() => mazda === "mazda", { name: "ReferenceError" });

// =========== function scope ============
// var is scope within the function,

(function() {
  var pizza = "pizza";
  let rice = "rice";
  const noodles = "noodles";

  assert(pizza === "pizza", "true");
  assert(rice === "rice", "true");
  assert(noodles === "noodles", "true");
})();

assert.throws(() => pizza === "pizza", { name: "ReferenceError" });
assert.throws(() => rice === "rice", { name: "ReferenceError" });
assert.throws(() => noodles === "noodles", { name: "ReferenceError" });
