const assert = require("assert");

// 1. write a function that returns the area of a triangle
function getAreaOfTriangle(base, height) {
  // fill in the function code
  return 0.5 * base * height;
}

assert(
  getAreaOfTriangle(3, 8) === 12,
  "area of triangle with base of 3 and height of 8 should be 12"
);

// 2. write a function that returns the area of a square
// with the `length` parameter with a default value 5

// function getAreaOfSquare...
function getAreaOfSquare(length = 5) {
  return length ** 2;
}

assert(
  getAreaOfSquare(10) === 100,
  "area of square with length of 10 should be 100"
);

assert(
  getAreaOfSquare() === 25,
  "area of square with length of 5 (default value) should be 25"
);

// 3. using rest parameters, return the smallest number
function getSmallest(...rest) {
  // TODO: your code here
  let min = rest[0];
  for (let i = 1; i < rest.length; i++) {
    if (rest[i] < min) {
      min = rest[i];
    }
  }
  return min;
}

assert(
  getSmallest(1, 2, 3, 4, 6, 7, 8) === 1,
  "should return the smallest number"
);

assert(
  getSmallest(100, 100, 8, 8) === 8,
  "should return the smallest number even with duplicates"
);

// 4. Create a IIFE and that console.log a hello text immediately
(function() {
  console.log('hello');
})();
