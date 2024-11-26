const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// -----------------------
// created new function to compare arrays
// const checkArrElements = function(arr1, arr2){
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//        console.log(`😀😀😀 Assertion Passed: ${arr1} === ${arr2}`)
//       }
//     }
//   } else {
//     console.log(`🤢🤢🤢 Assertion Failed: ${arr1} !== ${arr2}`)
//   }
// }

const tail = function(tailEndArr) {
  return tailEndArr.slice(1);
};

// const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
// checkArrElements(result, ["Lighthouse", "Labs"]); // => will always fail!


const words = ["Yo Yo", "Lighthouse", "Labs"];
const onlyOneElement = ["one"];
const emptyArr = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(onlyOneElement), []);
assertEqual(tail(emptyArr), []);