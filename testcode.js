function countEvenToTwelve(number) {
  if (number <= 12) { // recursive case as long as true, function will continue to call self
    console.log(number);
    countEvenToTwelve(number+2);
  }
  // base case is "here" if you want to think about it, invisible
  // num > 12 is the base case and input must gradually work towards base case
}
countEvenToTwelve(0);