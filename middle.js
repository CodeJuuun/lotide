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
    console.log(`✅✅ passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌ failed: ${arr1} !== ${arr2}`);
  }
};


// length of array will be differet, indexes are not, so use index to determine if element is in middle?
// if array has only one or two elements, return empty array
// check if length of array is even or odd then use Math.round (- 1 if length is even)
const middle = function(arr) {
  let middleElements = [];
  if (arr.length < 3) {
    return middleElements;
  }
  const evenNumLength = Math.floor(arr.length / 2);
  const oddNumLength  = Math.floor((arr.length - 1) / 2);

  if (arr.length % 2 !== 0) {
    middleElements = [arr[oddNumLength]];
  } else {
    middleElements = [arr[evenNumLength - 1], arr[evenNumLength]];
  }

  return middleElements;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]


assertArraysEqual(middle(['one', 'two', 'three']), ['two']);
assertArraysEqual(middle(['one', 'two', 'three', 56, true, [1, 2, 3, 4], ['four']]), [56]);
assertArraysEqual(middle([]), []);
