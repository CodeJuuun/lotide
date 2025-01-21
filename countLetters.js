const assertEqual = require("./assertEqual")


const countLetters = (sentence) => {
  const results = {};

  for (let char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};

const result = countLetters("Coding is cool");
console.log(countLetters("lighthouse in the house"));

//since I am comparing objects, need to separate checks into each letter to be more concise
assertEqual(result["C"], 1);
assertEqual(result["o"], 3);
assertEqual(result["d"], 1);
assertEqual(result["i"], 2);
assertEqual(result["n"], 1);
assertEqual(result["g"], 1);
assertEqual(result["s"], 1);
assertEqual(result["c"], 1);
assertEqual(result["l"], 1);
