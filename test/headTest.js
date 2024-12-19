const assertEqual = require("../assertEqual");
const head = require("../head")


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([100]), 100);  // An array with only one element should still yield that one element as its head
assertEqual(head([]), undefined);  // An empty array should yield undefined as its head
assertEqual(head(["string", 10, true, ["nestedArr, nestedArr2"]]), "string"); // An array with different data types