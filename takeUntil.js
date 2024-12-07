// inputs: 2 parameters, an array, and a callback function
// return a slice of the array starting from beginning of array (so maybe use slice method) and keep taking elements until
// callback returns a truthy value (callback should only be provided one value which is the item in the array)

const takeUntil = (array, callback) => {
  const newArr = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
};


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


const data1 = [1, 2, 5, 7, -1, 2, 4, 5];
const result1 = takeUntil(data1, (num) => num < 0);
console.log(result1);

const data2 = ['husky', 'corgi', 'boxer', 'jack russel terrier', 'golden retriever', 'Shiba inu', 'Australian sheperd'];
const result2 = takeUntil(data2, (element) => element.length > 6);
console.log(result2);


assertArraysEqual(takeUntil(data1, (num) => num < 0), [1, 2, 5, 7]);
assertArraysEqual(takeUntil(data2, (element) => element.length > 6), ['husky', 'corgi', 'boxer']);