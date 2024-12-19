// modified to check if the length of the array is less than or 1
const tail  = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};



module.exports = tail;
