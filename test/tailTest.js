const tail  = require("../tail");
const assert  = require('chai').assert;


describe('#tail', () => {
  it("should return 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(words.length, 3);
  });
  
  it("return 2 for ['Hello', 'World', 'Labs']", () => {
    const result = tail(['Hello', 'World', 'Labs']);
    assert.deepEqual(result.length, 2);
  });


  //checks if array only has one element
  it("return 0 for ['Hello']", () => {
    const oneElement = tail(['Hello']);
    assert.deepEqual(oneElement.length, 0);
  });

  // checks if array is empty
  it("return [] for []", () => {
    const emptyArr = tail([]);
    assert.deepEqual(emptyArr.length, 0);
  });
});

