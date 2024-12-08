const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (obj, callback) => {
  const objKeys = Object.keys(obj);

  for (const key of objKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};




const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

const pokemon = {
  pikachu: {
    type: "electric",
    weakness: "ground"
  },
  bulbasaur: {
    type: "grass",
    weakness: "fire"
  }
};

const result2 = findKey(pokemon, (key) =>
  key.type === "grass"
);


assertEqual(result, "noma");
assertEqual(result2, "bulbasaur");

// if no match, return undefined
assertEqual(findKey(pokemon, (key) => key.type === 'ice'), undefined);


assertEqual(findKey(pokemon, (key) => key.weakness === "ground"), "pikachu");
// find specific weakness or type
