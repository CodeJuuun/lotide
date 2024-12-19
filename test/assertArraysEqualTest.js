const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);

// both arrays have different numbers
assertArraysEqual([1, 2, 3], [3, 2, 1]);

// both arrays are exactly the same, including data types
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

// One array contains strings and the other contains different data types
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

// Empty arrays
assertArraysEqual([], []);

// Both arrays have different length
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3]);
