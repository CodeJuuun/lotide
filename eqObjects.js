const eqArrays = require("./index");
//-------------------------------------------------------
const eqObjects = function(obj1, obj2) {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);

  //  first compare number of keys in both objects
  if (obj1keys.length !==  obj2keys.length) {
    return false;
  }

  for (let key of obj1keys) {
    if (Array.isArray(obj1[key]) && (Array.isArray(obj2[key]))) { // if both conditions pass and returns true and both evaluate to arrays---
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) { //compares values directly if primitive
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
