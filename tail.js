const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// modified to check if the length of the array is less than or 1
const tail  = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};
const result = tail(['Hello', 'World', 'Labs']);
assertEqual(result.length, 2);

//checks if array only has one element
const oneElement = ['Hello'];
assertEqual(oneElement.length, 1);


// checks if array is empty
const emptyArr = [];
assertEqual(emptyArr.length, 0);
