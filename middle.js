// length of array will be differet, indexes are not, so use index to determine if element is in middle?
// if array has only one or two elements, return empty array
// check if length of array is even or odd then use Math.round (- 1 if length is even)
const middle = function(arr) {
  let middleElements = [];
  if (arr.length < 3) {
    return middleElements;
  }
  const evenNumLength = Math.floor(arr.length / 2);
  const oddNumLength  = Math.floor((arr.length - 1) / 2);

  if (arr.length % 2 !== 0) {
    middleElements = [arr[oddNumLength]];
  } else {
    middleElements = [arr[evenNumLength - 1], arr[evenNumLength]];
  }

  return middleElements;
};

module.exports = middle;
