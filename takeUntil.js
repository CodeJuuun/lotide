const takeUntil = (array, callback) => {
  const newArr = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
};

module.exports = takeUntil;