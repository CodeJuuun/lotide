const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]


assertArraysEqual(middle(['one', 'two', 'three']), ['two']);
assertArraysEqual(middle(['one', 'two', 'three', 56, true, [1, 2, 3, 4], ['four']]), [56]);
assertArraysEqual(middle([]), []);