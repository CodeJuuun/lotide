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
//-------------------------------------------------------
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//-------------------------------------------------------
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

//-------------------------------------------------------

const shirtObject = {
  color: "red",
  size: "medium"
};

const anotherShirtObject = {
  size: "medium",
  color: "red"
};

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "Long"
};


// testing part 1
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
eqObjects(shirtObject, longSleeveShirtObject); // => false
//------------------------------------------------------------------------------


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};


eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);


assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
