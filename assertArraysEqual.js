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

// implement the eqArrays function within this and change so it simply works and print out emoji's instead of writing assertions for it
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅ passed!");
  } else {
    console.log("❌❌ failed!");
  }
};





assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => true

// both arrays have different numbers
assertArraysEqual([1, 2, 3], [3, 2, 1]), false; // => false

// both arrays are exactly the same, including data types
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true; // => true

// One array contains strings and the other contains different data types
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false; // => false

// Empty arrays
assertArraysEqual([], []), true; // should output false

// Both arrays have different length
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3]), false;

assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => should PASS