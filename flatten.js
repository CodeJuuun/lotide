const flatten = function(arrWithNestedArr) {
  let flattenedArr = [];

  for (let i = 0; i < arrWithNestedArr.length; i++) {
    if (Array.isArray(arrWithNestedArr[i])) {
      for (let j = 0; j < arrWithNestedArr[i].length; j++) {
        flattenedArr.push(arrWithNestedArr[i][j]);
      }
    } else {
      flattenedArr.push(arrWithNestedArr[i]);
    }
  }
  return flattenedArr;
};

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

// // if there are empty arrays
// assertArraysEqual(flatten([[]]), []); // should return []

// // if there are different data types
// assertArraysEqual(flatten(['hello', 'world', [1, 2, true], 'javascript']), ['hello', 'world', [1, 2, true], 'javascript']); // ['hello', 'world', [1, 2, true], 'javascript']

module.export = flatten;