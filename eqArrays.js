const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }


  // add a loop to further check if each elements in the array match
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // if it passes all conditional checks
  return true;
};


// test cases
// both arrays contain different data types
// both arrays contain different numbers
// Each array has different lengths
// both arrays are empty? Or one is empty

//----------------------------------------------------------------

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