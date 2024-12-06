const map = (arr, func) => {
  const results = [];
  for (let item of arr) {
    results.push(func(item));
  }
  
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]); //implicit return here
console.log(results1);
// ------------------------------------------------------------
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
// ------------------------------------------------------------
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌ failed: ${arr1} !== ${arr2}`);
  }
};


// test cases

// length of element in array
const results2 = map(words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);


// Change to all capital
const results3 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// joining the words in the array
const results4 = map(words, (word) => word.toUpperCase()).join(" "); // method chaining
// console.log(results4) // testing to what output comes out
assertArraysEqual([results4], ["GROUND CONTROL TO MAJOR TOM"]);