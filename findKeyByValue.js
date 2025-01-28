// returns first key that contains a given value, if no key is given, return undefined.
const findKeyByValue = function(obj, val) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (obj[key] === val) { // if the VALUE matches the given value, return the key...THE KEYY not the array of elements
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;