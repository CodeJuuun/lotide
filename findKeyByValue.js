// returns first key that contains a given value, if no key is given, return undefined.
const findKeyByValue = function (obj, val) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (obj[key] === val) { // if the VALUE matches the given value, return the key...THE KEYY not the array of elements
      return key;
    }
  }
  return undefined;
};
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
//   fantasy: "The Witcher",
//   animated: "Arcane",
//   basedOnBook: "The Queen's Gambit"
// };


// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// // case sensitivity
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The witcher"), undefined);

// // value doesn't exist
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Wednesday"), undefined);

// // partially missing matches
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Queen's"), undefined);

module.exports = findKeyByValue;