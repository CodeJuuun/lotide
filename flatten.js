const flatten = function(arrWithNestedArr) {
  let flattenedArr = [];

  for (let i = 0; i < arrWithNestedArr.length; i++) {
    if (Array.isArray(arrWithNestedArr[i])) {
      for (let j = 0; j < arrWithNestedArr[i].length; j++) {
        flattenedArr.push(arrWithNestedArr[i][j]);
      }
    } else {
      flattenedArr.push(arrWithNestedArr[i]);
    }
  }
  return flattenedArr;
};


module.exports = flatten;