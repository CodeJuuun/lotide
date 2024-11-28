const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌ failed: ${arr1} !== ${arr2}`);
  }
};

// returns a new array it without modifying original?
// use for loop to loop through elements of array while adding a conditional check
// if current element is an array (isArray method) then loop through that and if not an array,
// add it to new array
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

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// if there are empty arrays
console.log(flatten([[]])); // should return []

// if there are different data types
console.log(flatten(['hello', 'world', [1, 2, true], 'javascript'])); // should return [ 'hello', 'world', 1, 2, 3, 'javascript' ]