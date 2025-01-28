const eqArrays = require("./eqArrays");

// implement the eqArrays function within this and change so it simply works and print out emoji's instead of writing assertions for it
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌ failed: ${arr1} !== ${arr2}`);
  }
};


module.exports = assertArraysEqual;
