const assertEqual = require("../assertEqual");
const eqArrays    = require("../eqArrays");

// both arrays are exactly the same
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true

// both arrays have different numbers
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// both arrays are exactly the same, including data types
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true

// One array contains strings and the other contains different data types
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// Empty arrays
assertEqual(eqArrays([], []), true); // should output false

// Both arrays have different length
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS