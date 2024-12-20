const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;


describe('#middle', () => {
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for '[1, 2]'", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns '[2]' for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns '[3]' for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns '[2, 3]' for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns '[3,4]' for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns '[two]' for ['one', 'two', 'three']", () => {
    assert.deepEqual(middle(['one', 'two', 'three']), ['two']);
  });

  it("return [56] for ['one', 'two', 'three', 56, true, [1, 2, 3, 4], ['four']]", () => {
    assert.deepEqual(middle(['one', 'two', 'three', 56, true, [1, 2, 3, 4], ['four']]), [56]);
  });
});
// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []

// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]


// assertArraysEqual(middle(['one', 'two', 'three']), ['two']);
// assertArraysEqual(middle(['one', 'two', 'three', 56, true, [1, 2, 3, 4], ['four']]), [56]);
// assertArraysEqual(middle([]), []);