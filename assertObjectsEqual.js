const eqObjects = function(obj1, obj2) {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);

  //  first compare number of keys in both objects
  if (obj1keys.length !==  obj2keys.length) { // compare array lengths, immediately stop test if not equal
    return false;
  }

  for (let key of obj1keys) {
    if (Array.isArray(obj1[key]) && (Array.isArray(obj2[key]))) { // if both values are arrays
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


  // "use a loop to compare each element in the arrays"
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
  if (eqObjects(actual, expected)) {
    console.log(`✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {
  a: 1,
  b: 2
};
const obj2 = {
  b: 2,
  a: 1,
};

const person1 = {
  name: 'John',
  age: 28,
  job: 'Web Developer'
};

const person2 = {
  name: 'Clara',
  age: 29,
  job: 'Web Developer'
};

// test case
assertObjectsEqual(obj1, obj2);
assertObjectsEqual(person1, person2);