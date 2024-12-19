const head    = require('../head');

const assert  = require('chai').assert;

describe('#head', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns '100' for [100]", () => {
    assert.strictEqual(head([100]), 100);
  });

  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 'string' for ['string', 10, true, ['nestedArr, nestedArr2']]", () => {
    assert.strictEqual(head(['string', 10, true, ['nestedArr, nestedArr2']]), 'string');
  });
});




// // TEST CODE
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([100]), 100);  // An array with only one element should still yield that one element as its head
// assertEqual(head([]), undefined);  // An empty array should yield undefined as its head
// assertEqual(head(["string", 10, true, ["nestedArr, nestedArr2"]]), "string"); // An array with different data types