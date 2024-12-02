const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// A list of all attendees (names)
// The requirement:
// Need to count the number of times certain names appear on list
// function should take in a collection of items (an array)
// return counts for a specific subset of those items (number of times certain names appear (subset meaning only the group of items you care about.))

// how to decide what exactly to count?
// limited to strings



const countOnly = (allItems, itemsToCount) => {
  const results = {};
  
  for (const item of allItems) {
    //checks if BOTH the object key AND the value exists and if it does, increase the count, meaning if the value is not a falsey value (greater than 0)
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};









const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);