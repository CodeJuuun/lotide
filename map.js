const map = (arr, func) => {
  const results = [];
  for (let item of arr) {
    results.push(func(item));
  }
  
  return results;
};

// ------------------------------------------------------------

module.exports = map;