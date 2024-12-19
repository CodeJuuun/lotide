const assertEqual = require("../assertEqual");
const tail  = require("../tail");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


const result = tail(['Hello', 'World', 'Labs']);
assertEqual(result.length, 2);

//checks if array only has one element
const oneElement = tail(['Hello']);
assertEqual(oneElement.length, 0);


// checks if array is empty
const emptyArr = tail([]);
assertEqual(emptyArr.length, 0);