const eqObjects = function(obj1, obj2) {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);

  //  first compare number of keys in both objects
  if (obj1keys.length !==  obj2keys.length) { // compare array lengths, immediately stop test if not equal
    return false;
  }

  for (let key of obj1keys) {
    if (Array.isArray(obj1[key]) && (Array.isArray(obj2[key]))) { // if both conditions pass and returns true and both evaluate to arrays---
      if (!eqArrays(obj1[key], obj2[key])) { // use function to check the comparison of both object's key values if they are not matching
        return false;
      }
    } else if (obj1[key] !== obj2[key]) { //compares values directly if primitive
      return false;
    }
  }
  return true;
};
//------------------------------------------------------------
const eqArrays = (arr1, arr2) => {
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
//------------------------------------------------------------

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const obj1 = {
  a: 1,
  b: 2
}
const obj2 = {
  b: 2,
  a: 1,
}

assertObjectsEqual(obj1, obj2)