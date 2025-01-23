const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌ failed: ${arr1} !== ${arr2}`);
  }
};

// create new variable to store result
// return new array with the items you want to keep from source.
//

let without = function(source, itemsToRemove) {
  // create empty array to store elements you want to keep
  let itemsToKeep = [];
  

  // loop through every element in the source array while adding a boolean check to see if the item is in the itemsToRemove array, if it is, we skip the item, if not, then we add it to the itemsToKeep. A method of checking if something is there or not
  for (let i = 0; i < source.length; i++) {
    let addtoList = true;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
//          set the boolean variable here within nested loop so we can compare each item from the source to the items in itemsToRemove and set addToList to false if the item is in the itemsToRemove list.
        addtoList = false;
        console.log("Found a match excluding item");
        break;
      }
    }

    // This is the conditional check that decides to add the item or not to the itemsToKeep array based on if the source item matches with any of the items in itemsToRemove
    if (addtoList) {
      itemsToKeep.push(source[i]);
    }
  }
  return itemsToKeep;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should return [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should return ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); //should return [2, 3]

// if source array is empty
assertArraysEqual(without([], [1, 2, 3]), []); // should return []

// if itemsToRemove is empty
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3] ); // should return untouched source array

// if all items match
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // should return []

module.exports = without;
