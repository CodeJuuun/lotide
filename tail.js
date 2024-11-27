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


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


const result = tail(['Hello', 'World', 'Labs']);
assertEqual(result.length, 2);

//checks if array only has one element
const oneElement = tail(['Hello']);
assertEqual(oneElement.length, 0);


// checks if array is empty
const emptyArr = tail([]);
assertEqual(emptyArr.length, 0);

