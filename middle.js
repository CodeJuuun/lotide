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
