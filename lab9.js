const assert = require("assert");
/**
 * from Wiki:
 * Fibonacci numbers,
 * commonly denoted Fn form a sequence,
 * called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones,
 * starting from 0 and 1.
 *
 * fib 0 => 0
 * fib 1 => 1
 * fib 2 => fib 0 + fib 1 => 0 + 1 => 1
 * fib 3 => fib 2 + fib 1 => 1 + 1 => 2
 * fib 4 => fib 3 + fib 4 => 2 + 1 => 3
 * fib 5 => fib 3 + fib 4 => 2 + 3 => 5
 * fib 6 => fib 4 + fib 5 => 3 + 5 => 8
 */

// function fib(term) {
//   if (term === 0) return 0;
//   if (term === 1 || term === 2) return 1;
//   return fib(term - 1) + fib(term - 2);
// }

function fib(term, val = 1, prev = 0) {
  // console.log();
  // console.log(`term: ${term}, val: ${val}, prev: ${prev}`)
  if (term === 0) return prev;
  // console.log(`calling fib(${term - 1}, ${val + prev}, ${val}) next`);
  return fib(term - 1, val + prev, val);
}
  
// adapted from
// https://stackoverflow.com/questions/13826810/fast-fibonacci-recursion
// int fib(int term, int val = 1, int prev = 0)
// {
//  if(term == 0) return prev;
//  return fib(term - 1, val+prev, val);
// }


assert(fib(0) === 0, "fib0");
assert(fib(1) === 1, "fib1");
assert(fib(2) === 1, "fib2");
assert(fib(3) === 2, "fib3");
assert(fib(4) === 3, "fib4");
assert(fib(5) === 5, "fib5");
assert(fib(6) === 8, "fib6");
// assert(fib(39) === 63245986, "fib39");
