const countOnly = (allItems, itemsToCount) => {
  const results = {};
  
  for (const item of allItems) {
    //checks if BOTH the object key AND the value exists and if it does, increase the count, meaning if the value is not a falsey value (greater than 0)
    if (itemsToCount[item]) {
      console.log(itemsToCount[item]);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


module.exports = countOnly;