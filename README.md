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

-`head()`: returns the first element of the array            
-`tail()`: returns all elements of the array except the first element
-`middle()`: returns the middle element or elements of the array
-`assertArraysEqual()`: compares two arrays to see if they are equal in length
-`assertEqual()`: checks if the actual value with what you expected it should be       
-`assertObjectsEqual()`: compares two objects to see if they are equal in nature 
-`countLetters()`: returns an object with the total amount of each letter is in the string      
-`countOnly()`: returns an object with the count of an item in the arrat
-`eqArrays()`: compares two arrays to check if they are exactly equal
-`eqObjects()`: compares two objects and returns true if they are equal
-`findKey()`: returns the first key that fulfils the condition set by the callback
-`findKeyByValue()`: returns the key in an object that matches the value that coorespond to it
-`flatten()`: combines array with another array to create a single array
-`letterPositions()`: returns the position of each letter in a provided string
-`map()`: returns a new array that match the same length as the original and apply whatever is done in the callback function        
-`takeUntil()`: returns a new array with elements from the original into the callback function returns true
-`without()`: returns a new array excluding the specified items