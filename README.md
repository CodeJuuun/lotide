# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @codefloww/lotide`

**Require it:**

`const _ = require('@codefloww/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1, array2)`: This function compares two arrays to check if they are equal in length and element and returns true or false
- `assertEqual(actual, expected)`: checks if the actual value matches expected value.
- `assertObjectsEqual(obj1, obj2)`: compares two objects to see if they are equal in nature and returns true or false
- `countLetters(string)`: returns an object where the key is a letter and the value is the count
- `countOnly(array, itemsToCount)`: returns an specific items in an array and returns the count of an item in an object
- `eqArrays(arr1, arr2)`: compares two arrays to check if they are exactly equal. Returns true or false
- `eqObjects(obj1, obj2)`: compares two objects and returns true if they are equal
- `findKey(obj1, callback)`: returns the first key that fulfils the condition set by the callback
- `findKeyByValue(obj, value)`: returns the key in an object that matches the value that coorespond to it
- `flatten(array)`: combines array with another array to create a single array. Returns a single flattened array
- `head(array)`: returns the first element of the array            
- `letterPositions(string)`: returns the position of each letter in a provided string. Each key being a letter and value being an array of indices
- `map(arr, callback)`: returns a new array that match the same length as the original and apply whatever is done in the callback function        
- `middle(array)`: returns the middle element or elements of the array as a new array
- `tail(array)`: returns all elements of the array except the first element
- `takeUntil(arr, callback)`: returns a new array with elements from the original into the callback function returns true
- `without(arr, itemsToRemove)`: returns a new array excluding the specified items
