const assert = require("assert");

// 1. write a function that returns the area of a triangle
function getAreaOfTriangle(base, height) {
  // fill in the function code
}

assert(
  getAreaOfTriangle(3, 8) === 12,
  "area of triangle with base of 3 and height of 8 should be 12"
);

// 2. write a function that returns the area of a square
// with the `length` parameter with a default value 5

// function getAreaOfSquare...

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
