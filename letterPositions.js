const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) { //loop
    const char = sentence[i];

    if (char !== ' ') {  // skips space if current char is not one
      if (results[char]) { // if value of object exist and has truthy value and passes check
        results[char].push(i); // push index into value of object key
      } else {
        results[char] = [i]; // otherwise if it doesn't, create and set the value as the current index
      }
    }
  }
  return results;
};

module.exports = letterPositions;