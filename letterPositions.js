// Req: create a function that will return an object with letters as the key and the number of times it appears in a string as index positions in an array.
// use for loop since it can more precisely control the index
// return an array that stores the index positions of letter occurance

const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) { //loop
    const char = sentence[i];

    if (char !== ' ') {  // skips space if current char is not one
      if (results[char]) { // if value of object exist and has truthy value and passes check
        results[char].push(i); // push index into value of object key
      } else {
        results[char] = [i]; // otherwise if it doesn't, create and set the value as the current index
      }
    }
  }
  return results;
};

let eqArrays = (arr1, arr2) => {
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


const result = letterPositions("hello");
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);

console.log(letterPositions('Hello'));