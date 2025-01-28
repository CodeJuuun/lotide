const without = function(source, itemsToRemove) {
  // create empty array to store elements you want to keep
  let itemsToKeep = [];

  for (let i = 0; i < source.length; i++) {
    let addtoList = true;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        addtoList = false;
        console.log("Found a match excluding item");
        break;
      }
    }
    if (addtoList) {
      itemsToKeep.push(source[i]);
    }
  }
  return itemsToKeep;
};

module.exports = without;
