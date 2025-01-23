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


// test cases
// both arrays contain different data types
// both arrays contain different numbers
// Each array has different lengths
// both arrays are empty? Or one is empty

//----------------------------------------------------------------

module.exports = eqArrays;